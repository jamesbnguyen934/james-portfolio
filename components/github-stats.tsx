'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, Code2, Users, BookOpen, ExternalLink } from 'lucide-react'
import { staggerContainer, fadeUp, fadeLeft } from '@/lib/animations'
import SplitText from '@/components/split-text'

// ── Language color map ────────────────────────────────────────────
const LANG_COLORS: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f1e05a',
  Python:      '#3572A5',
  Rust:        '#dea584',
  Go:          '#00ADD8',
  CSS:         '#563d7c',
  HTML:        '#e34c26',
  Java:        '#b07219',
  'C++':       '#f34b7d',
  'C#':        '#178600',
  Ruby:        '#701516',
  Swift:       '#F05138',
  Kotlin:      '#A97BFF',
  Shell:       '#89e051',
  Vue:         '#41b883',
  Svelte:      '#ff3e00',
  Dart:        '#00B4AB',
  MDX:         '#1B1F24',
  SCSS:        '#c6538c',
}

const getLangColor = (lang: string) => LANG_COLORS[lang] || '#8b5cf6'

// ── Types ─────────────────────────────────────────────────────────
interface Repo {
  name: string
  description: string | null
  language: string | null
  stars: number
  forks: number
  url: string
  updatedAt: string
}

interface GitHubData {
  name: string
  login: string
  publicRepos: number
  followers: number
  totalStars: number
  languages: { name: string; count: number }[]
  topRepos: Repo[]
}

// ── Helpers ───────────────────────────────────────────────────────
function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const days = Math.floor(diff / 86_400_000)
  if (days === 0) return 'today'
  if (days === 1) return '1d ago'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}yr ago`
}

// ── Repo card ─────────────────────────────────────────────────────
function RepoCard({ repo, delay }: { repo: Repo; delay: number }) {
  const langColor = repo.language ? getLangColor(repo.language) : '#8b5cf6'

  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 p-5 rounded-2xl hover-shimmer transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
        border: `1px solid rgba(139,92,246,0.14)`,
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = `${langColor}45`
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${langColor}14`
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.14)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
      }}
    >
      {/* Top accent */}
      <div className="h-0.5 -mx-5 -mt-5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${langColor}60, transparent)` }} />

      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen className="w-3.5 h-3.5 flex-shrink-0" style={{ color: langColor }} />
          <span className="text-sm font-semibold text-white truncate group-hover:text-violet-200 transition-colors">
            {repo.name}
          </span>
        </div>
        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-0.5" />
      </div>

      {repo.description && (
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{repo.description}</p>
      )}

      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        {repo.stars > 0 && (
          <span className="flex items-center gap-1 text-[10px] text-slate-500">
            <Star className="w-3 h-3" />
            {repo.stars}
          </span>
        )}
        {repo.forks > 0 && (
          <span className="flex items-center gap-1 text-[10px] text-slate-500">
            <GitFork className="w-3 h-3" />
            {repo.forks}
          </span>
        )}
        <span className="ml-auto text-[10px] text-slate-600">{timeAgo(repo.updatedAt)}</span>
      </div>
    </motion.a>
  )
}

// ── Main component ────────────────────────────────────────────────
export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const totalLangCount = data?.languages.reduce((s, l) => s + l.count, 0) || 1

  return (
    <section
      id="github"
      className="relative py-28 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0616 0%, #06030d 100%)' }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-violet-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-indigo-900/8 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <motion.div
          className="mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={fadeUp} className="section-label-bright mb-5 inline-flex">
            Open Source
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 tracking-tight"
          >
            <SplitText text="GitHub" mode="chars" charDelay={0.04} />{' '}
            <motion.span
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.38, duration: 0.5 }}
              style={{ display: 'inline-block' }}
              className="gradient-text"
            >
              Activity
            </motion.span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 max-w-xl leading-relaxed">
            Real open-source footprint — repositories, language usage, and recent activity pulled live from the GitHub API.
          </motion.p>
        </motion.div>

        {loading ? (
          /* Skeleton */
          <div className="space-y-8 animate-pulse">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 rounded-2xl bg-white/3" />
              ))}
            </div>
            <div className="h-14 rounded-xl bg-white/3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-32 rounded-2xl bg-white/3" />
              ))}
            </div>
          </div>
        ) : !data ? (
          <div className="text-slate-500 text-sm">Could not load GitHub data.</div>
        ) : (
          <div className="space-y-10">

            {/* ── Stats bar ── */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: BookOpen, label: 'Repositories', value: data.publicRepos, color: '#8b5cf6' },
                { icon: Star,     label: 'Total Stars',  value: data.totalStars,  color: '#e879f9' },
                { icon: Users,    label: 'Followers',    value: data.followers,   color: '#818cf8' },
                { icon: Github,   label: 'Profile',      value: '@' + data.login, color: '#a78bfa', href: `https://github.com/${data.login}` },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="flex flex-col gap-2 p-5 rounded-2xl"
                  style={{
                    background: `${s.color}10`,
                    border: `1px solid ${s.color}25`,
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <s.icon className="w-4 h-4" style={{ color: s.color }} />
                  <div className="text-2xl font-black text-white leading-none">{s.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* ── Language breakdown bar ── */}
            <motion.div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.14)' }}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Code2 className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold text-white">Language Breakdown</span>
                <span className="ml-auto text-xs text-slate-600">across {data.publicRepos} repos</span>
              </div>

              {/* Stacked bar */}
              <div className="flex h-3 rounded-full overflow-hidden mb-5 gap-px">
                {data.languages.map((l) => (
                  <motion.div
                    key={l.name}
                    className="h-full"
                    style={{ background: getLangColor(l.name) }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(l.count / totalLangCount) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    title={`${l.name}: ${Math.round((l.count / totalLangCount) * 100)}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {data.languages.map((l) => (
                  <span key={l.name} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: getLangColor(l.name) }} />
                    {l.name}
                    <span className="text-slate-600">{Math.round((l.count / totalLangCount) * 100)}%</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Top repos grid ── */}
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-5 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Top Repositories
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.topRepos.map((repo, i) => (
                  <RepoCard key={repo.name} repo={repo} delay={i * 0.06} />
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  )
}
