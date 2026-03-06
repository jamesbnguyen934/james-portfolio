'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { charBallDrop } from '@/lib/animations'
import SplitText from '@/components/split-text'

type Achievement = { metric: string; description: string }

type Job = {
  id: string
  company: string
  role: string
  period: string
  location: string
  accentColor: string
  achievements: Achievement[]
}

const jobs: Job[] = [
  {
    id: 'BOT',
    company: 'Blue Ocean Technology, LLC',
    role: 'Senior Frontend Engineer, AI & Infrastructure',
    period: 'Jan 2025 – Present',
    location: 'Remote, USA',
    accentColor: '#8b5cf6',
    achievements: [
      { metric: '+40% delivery · 97% CSAT',       description: 'Architected unified Next.js/React infrastructure across 15+ enterprise applications' },
      { metric: '50%+ latency cut',                description: 'Integrated Vercel AI SDK + LLM streaming via SSE into live dashboards' },
      { metric: 'Weeks → Days onboarding',         description: 'Established modular monorepo with shared Tailwind CSS / Storybook component libraries' },
      { metric: '600+ hrs/yr recovered',           description: 'Engineered Python-based CI/CD pipeline + automated performance telemetry' },
    ],
  },
  {
    id: 'WC',
    company: 'Wolf Careers Inc.',
    role: 'Lead Frontend Engineer',
    period: 'Mar 2019 – Dec 2024',
    location: 'Cleveland, OH, USA',
    accentColor: '#a78bfa',
    achievements: [
      { metric: '+18% completion · +25% engagement', description: 'Led 8-engineer team rebuilding Fortune 500 HR platform (React · TypeScript · Supabase)' },
      { metric: '-40% manual review time',           description: 'Built Python/Flask REST API for automated resume parsing + multi-modal scoring' },
      { metric: '-25% sync errors',                  description: 'Architected Workday + Greenhouse ATS integration vendor management system' },
      { metric: '-15% sprint cycles',                description: 'Standardized Redux Toolkit + React Testing Library workflows org-wide' },
    ],
  },
  {
    id: 'META',
    company: 'Meta Platforms, Inc.',
    role: 'Senior Software Engineer (E5), Frontend Infrastructure',
    period: 'Aug 2016 – Feb 2019',
    location: 'Menlo Park, CA, USA',
    accentColor: '#818cf8',
    achievements: [
      { metric: '-2.3s TTI low-bandwidth',    description: 'Rendering path optimization for Ads Manager (React/Redux) — $4B+ annual ad spend' },
      { metric: '95% UI regressions blocked', description: 'Pioneered Python visual regression testing framework integrated into CI/CD' },
      { metric: '-18% build time',            description: 'Migrated 9 Webpack architectures to Vite across product surfaces' },
      { metric: '-30% production bugs',       description: 'Mentored 5 engineers · instituted code review governance + Git workflows' },
    ],
  },
  {
    id: 'GOOG',
    company: 'Google LLC',
    role: 'Software Developer Intern',
    period: 'Jun 2013 – Jul 2016',
    location: 'Mountain View, CA, USA',
    accentColor: '#06b6d4',
    achievements: [
      { metric: '<200ms latency · 3B+ users', description: 'Engineered real-time streaming UI for AI-assisted writing in Google Docs' },
      { metric: 'Lighthouse 68 → 94',         description: 'Rebuilt shared React component library across 12 Google Workspace product surfaces' },
      { metric: '+21% QoQ AI engagement',     description: 'Built Python/FastAPI telemetry pipeline for behavioral recommendation model fine-tuning' },
      { metric: '52% → 89% test coverage',   description: 'Elevated unit tests + resolved 400+ WCAG 2.1 AA violations' },
    ],
  },
]

// ── Achievement tile ───────────────────────────────────────────────
function AchievementTile({ a, color, delay }: { a: Achievement; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="relative p-4 rounded-xl overflow-hidden group/ach"
      style={{
        background: `${color}07`,
        border: `1px solid ${color}1e`,
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = `${color}40`
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px ${color}18`
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = `${color}1e`
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      <span
        className="text-[9px] font-black uppercase tracking-wide mb-2.5 px-2 py-0.5 rounded-md inline-block"
        style={{ background: `${color}20`, color, border: `1px solid ${color}30`, boxShadow: `0 0 8px ${color}20` }}
      >
        {a.metric}
      </span>
      <p className="text-xs text-slate-400 leading-relaxed">{a.description}</p>
      <div
        className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full blur-xl opacity-0 group-hover/ach:opacity-100 transition-opacity duration-300"
        style={{ background: color }}
      />
    </motion.div>
  )
}

// ── Job card ──────────────────────────────────────────────────────
function JobCard({ job, num, defaultOpen = false }: { job: Job; num: number; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #100a1e, #1a0f2e)',
        borderTop: `1px solid ${open ? `${job.accentColor}40` : 'rgba(139,92,246,0.12)'}`,
        borderRight: `1px solid ${open ? `${job.accentColor}40` : 'rgba(139,92,246,0.12)'}`,
        borderBottom: `1px solid ${open ? `${job.accentColor}40` : 'rgba(139,92,246,0.12)'}`,
        borderLeft: `3px solid ${job.accentColor}`,
        boxShadow: open ? `0 0 40px ${job.accentColor}12, -4px 0 20px ${job.accentColor}20, 0 12px 40px rgba(0,0,0,0.35)` : `0 0 0 0`,
      }}
    >
      {/* Clickable header */}
      <button
        type="button"
        className="w-full text-left group"
        onClick={() => setOpen(!open)}
      >
        <div
          className="px-7 pt-7 pb-6 relative overflow-hidden transition-colors duration-300"
          style={{ background: open ? `linear-gradient(135deg, ${job.accentColor}10 0%, transparent 65%)` : 'transparent' }}
        >
          {/* Ghost number — decorative */}
          <span
            className="absolute top-2 right-5 text-8xl font-black leading-none pointer-events-none select-none"
            style={{ color: job.accentColor, opacity: 0.055 }}
          >
            {String(num).padStart(2, '0')}
          </span>

          {/* Current badge */}
          {job.id === 'BOT' && (
            <motion.div
              className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
              style={{ background: 'rgba(139,92,246,0.1)', color: '#c4b5fd', border: '1px solid rgba(139,92,246,0.28)' }}
              animate={{ boxShadow: ['0 0 0 0 rgba(139,92,246,0.35)', '0 0 0 8px rgba(139,92,246,0)', '0 0 0 0 rgba(139,92,246,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse inline-block" />
              Current Role
            </motion.div>
          )}

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 leading-tight group-hover:text-violet-100 transition-colors">
                {job.company}
              </h3>
              <p className="text-sm font-semibold mb-4" style={{ color: job.accentColor }}>
                {job.role}
              </p>
              <div className="flex flex-wrap gap-5">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  {job.location}
                </span>
              </div>
            </div>
            <motion.div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: `${job.accentColor}12`, border: `1px solid ${job.accentColor}28` }}
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" style={{ color: job.accentColor }} />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Expandable achievement grid */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-1" style={{ borderTop: `1px solid ${job.accentColor}18` }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {job.achievements.map((a, i) => (
                  <AchievementTile key={i} a={a} color={job.accentColor} delay={i * 0.07} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-32 overflow-hidden"
      style={{ background: '#06030d' }}
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <div className="mb-16">
          <span className="section-label-bright mb-5 inline-flex">Career Timeline</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 tracking-tight leading-tight">
            <SplitText
              text="Professional"
              mode="chars"
              variants={charBallDrop}
              charDelay={0.04}
            />{' '}
            <motion.span
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.58, duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
              className="gradient-text"
            >
              Experience
            </motion.span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            10+ years across Google, Meta, and high-growth startups — shipping infrastructure that moved metrics at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl relative">

          {/* Glowing spine — hidden on mobile */}
          <motion.div
            className="absolute left-5 top-6 bottom-6 w-px hidden md:block pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #8b5cf6 0%, #a78bfa 33%, #818cf8 66%, #06b6d4 100%)',
              boxShadow: '0 0 10px rgba(139,92,246,0.45)',
            }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <div className="space-y-4 md:pl-16">
            {jobs.map((job, i) => (
              <div key={job.id} className="relative">

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute -left-[50px] top-[28px] w-3 h-3 rounded-full z-10"
                  style={{
                    background: job.accentColor,
                    boxShadow: `0 0 8px ${job.accentColor}, 0 0 18px ${job.accentColor}80, 0 0 32px ${job.accentColor}35`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, delay: i * 0.1 }}
                  whileHover={{ scale: 1.8, transition: { duration: 0.18 } }}
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <JobCard job={job} num={i + 1} defaultOpen={i === 0} />
                </motion.div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
