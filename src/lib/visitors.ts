import { neon } from '@neondatabase/serverless'

type NeonClient = ReturnType<typeof neon>
let sqlClient: NeonClient | null = null

function getSql(): NeonClient | null {
  if (!process.env.DATABASE_URL) {
    return null
  }

  if (!sqlClient) {
    sqlClient = neon(process.env.DATABASE_URL)
  }

  return sqlClient
}

export interface VisitorData {
  uniqueVisitors: number
}

type CountRow = {
  count?: string | number
}

function readCount(result: unknown): number {
  const rows = result as CountRow[]
  return parseInt(String(rows[0]?.count || '0'), 10)
}

export function generateVisitorId(ip: string | null, userAgent: string | null, fingerprint?: string): string {
  if (fingerprint) {
    return `fp:${fingerprint}`
  }

  const ipPart = ip || 'unknown'
  const uaPart = userAgent || 'unknown'
  return Buffer.from(`${ipPart}-${uaPart}`).toString('base64').slice(0, 32)
}

export async function initVisitorTable(): Promise<void> {
  const sql = getSql()
  if (!sql) return

  await sql`
    CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      visitor_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  try {
    const sql = getSql()
    if (!sql) {
      return { uniqueVisitors: 0 }
    }

    // Insert visitor if not exists
    await sql`
      INSERT INTO visitors (visitor_id)
      VALUES (${visitorId})
      ON CONFLICT (visitor_id) DO NOTHING
    `

    // Get count
    const result = await sql`SELECT COUNT(*) as count FROM visitors`
    const uniqueCount = readCount(result)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return { uniqueVisitors: 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const sql = getSql()
    if (!sql) {
      return { uniqueVisitors: 0 }
    }

    const result = await sql`SELECT COUNT(*) as count FROM visitors`
    const uniqueCount = readCount(result)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    return { uniqueVisitors: 0 }
  }
}
