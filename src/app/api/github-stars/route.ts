import { NextRequest, NextResponse } from 'next/server'
import { fetchRepositoryStars } from '@/lib/github'
import { githubConfig } from '@/config/github'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const owner = searchParams.get('owner') || githubConfig.portfolioRepo.owner
    const repo = searchParams.get('repo') || githubConfig.portfolioRepo.repo

    const stars = await fetchRepositoryStars(owner, repo)

    return NextResponse.json({
      success: true,
      stars
    })
  } catch {
    return NextResponse.json({
      success: false,
      stars: 0
    }, { status: 500 })
  }
}
