'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { staggerContainer, fadeLeft, fadeUp } from '@/lib/animations'

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
    role: 'Staff Frontend Engineer, AI & Infrastructure',
    period: 'Jan 2025 – Present',
    location: 'Remote, USA',
    accentColor: '#818cf8',
    achievements: [
      { metric: '+40% delivery speed · 97% CSAT',       description: 'Architected unified Next.js/React infrastructure across 15+ enterprise applications' },
      { metric: '50%+ latency reduction',                description: 'Integrated Vercel AI SDK + LLM streaming via SSE into live dashboards' },
      { metric: 'Onboarding: weeks → days',              description: 'Established modular monorepo with shared Tailwind CSS / Storybook component libraries' },
      { metric: '600+ engineering hours/year recovered', description: 'Engineered Python-based CI/CD pipeline + automated performance telemetry' },
    ],
  },
  {
    id: 'WC',
    company: 'Wolf Careers Inc.',
    role: 'Lead Frontend Engineer',
    period: 'Mar 2019 – Dec 2024',
    location: 'Chicago, IL, USA',
    accentColor: '#a78bfa',
    achievements: [
      { metric: '+18% completion · +25% engagement',  description: 'Led 8-engineer team rebuilding Fortune 500 HR platform (React · TypeScript · Supabase)' },
      { metric: '-40% manual review time',            description: 'Built Python/Flask REST API for automated resume parsing + multi-modal scoring' },
      { metric: '-25% sync errors',                   description: 'Architected Workday + Greenhouse ATS integration vendor management system' },
      { metric: '-15% sprint delivery cycles',        description: 'Standardized Redux Toolkit + React Testing Library workflows org-wide' },
    ],
  },
  {
    id: 'META',
    company: 'Meta Platforms, Inc.',
    role: 'Senior Software Engineer (E5), Frontend Infrastructure',
    period: 'Aug 2016 – Feb 2019',
    location: 'Menlo Park, CA, USA',
    accentColor: '#c084fc',
    achievements: [
      { metric: '-2.3s TTI on low-bandwidth',        description: 'Rendering path optimization for Ads Manager (React/Redux) — $4B+ annual ad spend' },
      { metric: '95% UI regressions blocked',        description: 'Pioneered Python visual regression testing framework integrated into CI/CD' },
      { metric: '-18% build time · improved HMR',   description: 'Migrated 9 Webpack architectures to Vite across product surfaces' },
      { metric: '-30% production bug rate',          description: 'Mentored 5 mid-level engineers · instituted code review governance + Git workflows' },
    ],
  },
  {
    id: 'GOOG',
    company: 'Google LLC',
    role: 'Software Engineer III (L4), Frontend Learning',
    period: 'Jun 2013 – Jul 2016',
    location: 'Mountain View, CA, USA',
    accentColor: '#e879f9',
    achievements: [
      { metric: '<200ms latency · 3B+ users',       description: 'Engineered real-time streaming UI for AI-assisted writing in Google Docs' },
      { metric: 'Lighthouse 68 → 94 (+38 pts)',     description: 'Rebuilt shared React component library across 12 Google Workspace product surfaces' },
      { metric: '+21% QoQ AI feature engagement',  description: 'Built Python/FastAPI telemetry pipeline for behavioral recommendation model fine-tuning' },
      { metric: '52% → 89% test coverage',         description: 'Elevated unit test coverage + resolved 400+ WCAG 2.1 AA violations' },
    ],
  },
]

function JobCard({ job, defaultOpen = false, index }: { job: Job; defaultOpen?: boolean; index: number }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div
      variants={fadeLeft}
      className="flex gap-0 items-stretch"
    >
      {/* ── Timeline node ── */}
      <div className="hidden lg:flex flex-col items-center mr-6 flex-shrink-0">
        {/* Dot */}
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0 z-10 mt-4"
          style={{
            background: `linear-gradient(135deg, ${job.accentColor}30, ${job.accentColor}15)`,
            border: `1.5px solid ${job.accentColor}60`,
            boxShadow: `0 0 14px ${job.accentColor}35`,
          }}
          whileHover={{
            scale: 1.15,
            boxShadow: `0 0 24px ${job.accentColor}70`,
            transition: { duration: 0.2 },
          }}
        >
          {job.id.slice(0, 2)}
        </motion.div>
        {/* Animated line segment */}
        <motion.div
          className="flex-1 w-px mt-1"
          style={{ background: `linear-gradient(180deg, ${job.accentColor}40, transparent)`, transformOrigin: 'top' }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* ── Card ── */}
      <motion.div
        className="flex-1 overflow-hidden rounded-2xl transition-all duration-300 mb-4"
        style={{
          background: open ? 'linear-gradient(145deg, #130c24, #1a0f2e)' : '#100a1e',
          border: `1px solid ${open ? `${job.accentColor}35` : 'rgba(139,92,246,0.12)'}`,
          boxShadow: open ? `0 0 28px ${job.accentColor}12` : 'none',
        }}
        whileHover={!open ? {
          borderColor: `${job.accentColor}30`,
          boxShadow: `0 0 20px ${job.accentColor}10`,
          y: -2,
          transition: { duration: 0.2 },
        } : {}}
      >
        {/* Accent top bar when open */}
        {open && (
          <motion.div
            className="h-0.5 w-full"
            style={{ background: `linear-gradient(90deg, transparent, ${job.accentColor}, transparent)` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}

        {/* Header */}
        <button
          type="button"
          className="w-full p-6 flex items-start justify-between gap-4 text-left"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-start gap-4">
            {/* Mobile dot */}
            <div
              className="lg:hidden w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: job.accentColor, boxShadow: `0 0 8px ${job.accentColor}` }}
            />
            <div>
              <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-1">{job.id}</div>
              <h3 className="text-base font-bold text-white mb-0.5">{job.company}</h3>
              <p className="text-sm font-semibold" style={{ color: job.accentColor }}>{job.role}</p>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />{job.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="w-3 h-3" />{job.location}
                </span>
              </div>
            </div>
          </div>
          <motion.div
            className="flex-shrink-0 mt-1 text-slate-500"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.div>
        </button>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <motion.div
            className="px-6 pb-6 border-t"
            style={{ borderColor: `${job.accentColor}15` }}
            initial="hidden"
            animate={open ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
            }}
          >
            <div className="mt-5 space-y-4">
              {job.achievements.map((a, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3"
                  variants={fadeUp}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: job.accentColor }}
                  />
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed">{a.description}</p>
                    <motion.span
                      className="inline-block mt-1.5 text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                      style={{
                        background: `${job.accentColor}15`,
                        color: job.accentColor,
                        border: `1px solid ${job.accentColor}25`,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {a.metric}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 md:py-32 overflow-hidden"
      style={{ background: '#06030d' }}
    >
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-violet-900/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] rounded-full bg-fuchsia-900/8 blur-[90px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label-bright mb-5 inline-flex">
            Career Timeline
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 tracking-tight leading-tight">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            10+ years across Google, Meta, and high-growth startups — shipping infrastructure that moved metrics at scale.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {jobs.map((job, i) => (
            <JobCard key={job.id} job={job} defaultOpen={i === 0} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
