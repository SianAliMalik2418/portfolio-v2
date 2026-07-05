import { NextRequest, NextResponse } from 'next/server'
import { fetchUserPullRequests } from '@/lib/github'
import { githubConfig } from '@/config/github'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username') || githubConfig.username
    const limit = parseInt(searchParams.get('limit') || String(githubConfig.contributionLimit))

    const contributions = await fetchUserPullRequests(username, limit)

    return NextResponse.json({
      success: true,
      contributions,
      count: contributions.length
    })
  } catch {
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch contributions',
      contributions: []
    }, { status: 500 })
  }
}
