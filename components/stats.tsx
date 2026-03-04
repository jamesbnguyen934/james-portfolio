'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion'
import { Users, Globe, Zap, TrendingUp, Activity, BarChart3 } from 'lucide-react'
import { staggerContainer, fadeUp, charRevolveScale } from '@/lib/animations'
import SplitText from '@/components/split-text'

type Stat = {
  icon: React.ElementType
  value: string
  label: string
  sub: string
  color: string
  colSpan?: number
  featured?: boolean
  before?: string
  after?: string
  counter?: { prefix?: string; to: number; suffix?: string; duration?: number }
}

const stats: Stat[] = [
  {
    icon: Globe,
    value: '3B+',
    label: 'Global Users Reached',
    sub: 'Shipped products used by 3B+ people globally — Google Docs AI and Workspace productivity tools.',
    color: '#818cf8',
    colSpan: 2,
    counter: { to: 3, suffix: 'B+' },
  },
  {
    icon: TrendingUp,
    value: '$4B+',
    label: 'Annual Ad Revenue',
    sub: 'Meta Ads Manager infrastructure supporting $4B+ yearly ad spend.',
    color: '#06b6d4',
    colSpan: 1,
    counter: { prefix: '$', to: 4, suffix: 'B+' },
  },
  {
    icon: Users,
    value: '15+',
    label: 'Enterprise Apps',
    sub: 'Architected at Blue Ocean Technology',
    color: '#c084fc',
    colSpan: 1,
    counter: { to: 15, suffix: '+' },
  },
  {
    icon: Activity,
    value: '600+',
    label: 'Eng. Hours / yr Saved',
    sub: 'Via CI/CD automation & observability',
    color: '#e879f9',
    colSpan: 1,
    counter: { to: 600, suffix: '+', duration: 1.4 },
  },
  {
    icon: Zap,
    value: '50%',
    label: 'AI Latency Reduction',
    sub: 'SSE LLM streaming pipeline',
    color: '#f472b6',
    colSpan: 1,
    counter: { to: 50, suffix: '%' },
  },
  {
    icon: BarChart3,
    value: '+38pts',
    label: 'Lighthouse Score Jump',
    sub: 'Rebuilt shared React component library across 12 Google Workspace product surfaces, achieving 97th-percentile performance globally.',
    color: '#fb7185',
    colSpan: 3,
    featured: true,
    before: '68',
    after: '94',
    counter: { prefix: '+', to: 38, suffix: 'pts' },
  },
]

// ── Count-up value display ──────────────────────────────────────
function CountUp({
  prefix = '',
  to,
  suffix = '',
  duration = 1.6,
  className = '',
}: {
  prefix?: string
  to: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) => Math.round(v))

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(motionVal, to, { duration, ease: 'easeOut' })
    return ctrl.stop
  }, [inView, motionVal, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06030d 0%, #0a0616 100%)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-violet-900/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="section-label-bright mb-5 inline-flex">
            Impact Metrics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-5 mb-4 tracking-tight">
            <SplitText
              text="Real-world results"
              mode="chars"
              variants={charRevolveScale}
              charDelay={0.04}
            />{' '}
            <motion.span
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.82, duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
              className="gradient-text"
            >
              at scale
            </motion.span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Every number traces back to shipped code, live systems, and measurable business outcomes.
          </p>
        </div>

        {/* Bento grid — staggered entrance */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon
            const colClass =
              s.colSpan === 3 ? 'sm:col-span-2 lg:col-span-3' :
              s.colSpan === 2 ? 'lg:col-span-2' : ''

            return (
              <motion.div
                key={i}
                className={`relative group overflow-hidden rounded-2xl hover-shimmer ${colClass}`}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(139,92,246,0.16)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
                }}
                variants={fadeUp}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = `${s.color}45`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px ${s.color}18`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.16)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-0.5 w-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                />

                {/* ── Featured card (Lighthouse) ── */}
                {s.featured ? (
                  <div className="p-7 flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: s.color }} />
                      </div>
                      <div
                        className="text-5xl font-black text-white leading-none font-heading"
                        style={{ textShadow: `0 0 30px ${s.color}50` }}
                      >
                        {s.counter ? (
                          <CountUp {...s.counter} />
                        ) : s.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-200 mt-2">{s.label}</div>
                    </div>

                    <div
                      className="hidden md:block w-px h-20 self-center rounded-full"
                      style={{ background: `linear-gradient(180deg, transparent, ${s.color}40, transparent)` }}
                    />

                    <div className="flex-1">
                      <p className="text-sm text-slate-400 leading-relaxed mb-5">{s.sub}</p>
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Before</div>
                          <div className="text-3xl font-black text-red-400">{s.before}</div>
                        </div>
                        <div className="text-slate-500 text-xl font-light">→</div>
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">After</div>
                          <div className="text-3xl font-black text-emerald-400">{s.after}</div>
                        </div>
                        <div
                          className="ml-2 px-4 py-2 rounded-xl text-sm font-bold"
                          style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}25` }}
                        >
                          97th percentile
                        </div>
                      </div>
                    </div>
                  </div>

                ) : (
                  /* ── Regular card ── */
                  <div className={`p-7 h-full flex flex-col ${s.colSpan === 2 ? 'md:flex-row md:items-center md:gap-8' : ''}`}>
                    <motion.div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                      style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                      whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </motion.div>

                    <div className={s.colSpan === 2 ? 'flex-1' : ''}>
                      <div
                        className="text-4xl font-black text-white mb-1 font-heading leading-none"
                        style={{ textShadow: `0 0 24px ${s.color}40` }}
                      >
                        {s.counter ? (
                          <CountUp {...s.counter} />
                        ) : s.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-200 mb-1.5">{s.label}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{s.sub}</div>
                    </div>
                  </div>
                )}

                {/* Hover corner glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: s.color }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
