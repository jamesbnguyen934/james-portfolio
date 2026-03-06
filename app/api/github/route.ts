import { NextResponse } from 'next/server'

const USERNAME = 'jamesbnguyen934'

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'portfolio-site',
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`, { headers, next: { revalidate: 3600 } }),
    ])

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: 'GitHub API error' }, { status: 502 })
    }

    const user = await userRes.json()
    const repos: GitHubRepo[] = await reposRes.json()

    // Language frequency across all repos
    const langMap: Record<string, number> = {}
    for (const repo of repos) {
      if (repo.language && !repo.fork) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1
      }
    }
    const languages = Object.entries(langMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({ name, count }))

    // Top repos by stars (exclude forks)
    const topRepos = repos
      .filter(r => !r.fork && r.description)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .map(r => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        url: r.html_url,
        updatedAt: r.updated_at,
      }))

    const totalStars = repos.filter(r => !r.fork).reduce((s, r) => s + r.stargazers_count, 0)

    return NextResponse.json({
      name: user.name || user.login,
      login: user.login,
      avatar: user.avatar_url,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      languages,
      topRepos,
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

interface GitHubRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  html_url: string
  updated_at: string
  fork: boolean
}
