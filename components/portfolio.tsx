'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const projects = [
  {
    id: '01',
    title: 'Beam AI',
    emoji: '🤖',
    category: 'Enterprise AI Agent Platform',
    url: 'https://beam.ai',
    image: '/projects/beam-1.jpg',
    description:
      'Enterprise-grade agentic framework enabling non-technical teams to compose auditable automated workflows — securely integrated with CRMs, internal APIs, and ticketing systems.',
    features: [
      'Granular per-agent credential scoping',
      'Real-time interactive LLM tool call traces',
      'SOC2-compliant full auditability',
      'SSO / MFA integration',
    ],
    techStack: ['Python', 'AWS', 'Redis', 'LLM Orchestration', 'SOC2'],
    accent: '#818cf8',
    gradient: 'from-indigo-600/30 via-violet-600/15 to-transparent',
    featured: true,
  },
  {
    id: '02',
    title: 'Butterflies AI',
    emoji: '🦋',
    category: 'Generative Social Network',
    url: 'https://www.butterflies.ai',
    image: '/projects/butterflies-1.png',
    description:
      'High-throughput AI character conversation platform fusing RAG, session memory, and real-time safety guardrails into a single highly-available service.',
    features: [
      'RAG + session memory fusion pipeline',
      'Real-time safety guardrails',
      'Edge-cached RSC + high-fan-out WebSockets',
      'Peak concurrent load optimization',
    ],
    techStack: ['Next.js', 'FastAPI', 'TypeScript', 'RAG', 'WebSockets'],
    accent: '#a78bfa',
    gradient: 'from-violet-600/30 via-purple-600/15 to-transparent',
    featured: false,
  },
  {
    id: '03',
    title: 'Yolo Health',
    emoji: '🏥',
    category: 'Digital Health Platform',
    url: 'https://yolohealth.app/',
    image: '/projects/yolohealth-1.png',
    description:
      'Adaptive clinical assessment, goal-setting, and long-term coaching platform with an AI personalization engine aggregating biometric data, journal entries, and engagement signals.',
    features: [
      'Full HIPAA compliance via AWS infrastructure',
      'Biometric + engagement signal personalization',
      'Low-friction mobile-first UX',
      'Multi-coaching model compatibility',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Supabase', 'AWS', 'HIPAA'],
    accent: '#c084fc',
    gradient: 'from-purple-600/30 via-fuchsia-600/15 to-transparent',
    featured: false,
  },
]

function TechPill({ tech, color }: { tech: string; color: string }) {
  return (
    <motion.span
      className="text-[10px] font-medium px-2.5 py-1 rounded-full cursor-default"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}28`,
        color: `${color}`,
      }}
      whileHover={{ scale: 1.08, y: -1 }}
      transition={{ type: 'spring' as const, stiffness: 340, damping: 18 }}
    >
      {tech}
    </motion.span>
  )
}

// ── Shared 3D tilt hook ────────────────────────────────────────
function useTilt(strength = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [strength, -strength]), { stiffness: 180, damping: 20 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-strength, strength]), { stiffness: 180, damping: 20 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}

function TiltCard({ p }: { p: (typeof projects)[1] }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6)

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
        border: `1px solid ${p.accent}20`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={(e) => {
        onMouseLeave()
        ;(e.currentTarget as HTMLElement).style.borderColor = `${p.accent}20`
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = `${p.accent}45`
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 35px ${p.accent}15, 0 20px 40px rgba(0,0,0,0.3)`
      }}
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
      />

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.title} project preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06030d] via-[#06030d]/30 to-transparent" />

        <div className="absolute top-3 left-4 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider">Active</span>
        </div>
        <div className="absolute top-3 right-4 text-[9px] font-medium text-slate-500">#{p.id}</div>

        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-white uppercase tracking-wider hover-shimmer"
            style={{ background: `${p.accent}25`, border: `1px solid ${p.accent}45`, backdropFilter: 'blur(8px)' }}
          >
            View Live
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-3">
          <Layers className="w-3 h-3" style={{ color: p.accent }} />
          <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: p.accent }}>{p.category}</span>
        </div>

        <h3 className="text-xl font-black text-white mb-3 group-hover:text-violet-200 transition-colors">{p.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{p.description}</p>

        <div className="mb-5 space-y-1.5">
          {p.features.map((f) => (
            <div key={f} className="flex items-start gap-2 text-xs text-slate-400">
              <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: p.accent }} />
              {f}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.techStack.map((t) => (
            <TechPill key={t} tech={t} color={p.accent} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const featured = projects[0]
  const rest = projects.slice(1)

  const { ref: featRef, rotateX: featRX, rotateY: featRY, onMouseMove: featMove, onMouseLeave: featLeave } = useTilt(4)

  return (
    <section id="portfolio" className="relative py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 page-bg pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[340px] rounded-full bg-purple-900/10 blur-[110px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label-bright mb-5 inline-flex">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 tracking-tight">
            Deployed{' '}
            <span className="gradient-text-bright">Systems</span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Mission-critical AI platforms engineered for enterprise scale — combining robust frontend
            architecture with cutting-edge AI capabilities.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* ── Featured card — 3D tilt ── */}
          <motion.div
            ref={featRef}
            className="group relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
              border: `1px solid ${featured.accent}25`,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              transformStyle: 'preserve-3d',
              rotateX: featRX,
              rotateY: featRY,
            }}
            variants={fadeUp}
            onMouseMove={featMove}
            onMouseLeave={(e) => {
              featLeave()
              ;(e.currentTarget as HTMLElement).style.borderColor = `${featured.accent}25`
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = `${featured.accent}50`
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${featured.accent}18, 0 24px 48px rgba(0,0,0,0.35)`
            }}
          >
            {/* Top accent line */}
            <div
              className="h-0.5 w-full"
              style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, #06b6d4, transparent)` }}
            />

            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              <div className="relative lg:w-[55%] aspect-[16/9] lg:aspect-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={`${featured.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#06030d] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06030d] to-transparent lg:hidden" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(6,3,13,0.7)', border: '1px solid rgba(16,185,129,0.3)', backdropFilter: 'blur(8px)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">Live</span>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: `${featured.accent}20`, border: `1px solid ${featured.accent}40`, backdropFilter: 'blur(8px)' }}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: featured.accent }}>Featured</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" style={{ color: featured.accent }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: featured.accent }}>
                      {featured.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-600">#{featured.id}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-violet-100 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{featured.description}</p>

                {/* Features — stagger in */}
                <motion.div
                  className="space-y-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                >
                  {featured.features.map((f) => (
                    <motion.div
                      key={f}
                      className="flex items-start gap-2.5 text-xs text-slate-300"
                      variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: featured.accent }} />
                      {f}
                    </motion.div>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {featured.techStack.map((t) => (
                    <TechPill key={t} tech={t} color={featured.accent} />
                  ))}
                </div>

                {featured.url && (
                  <motion.a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white self-start hover-shimmer"
                    style={{
                      background: `linear-gradient(135deg, ${featured.accent}30, ${featured.accent}18)`,
                      border: `1px solid ${featured.accent}45`,
                      boxShadow: `0 0 20px ${featured.accent}20`,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                  >
                    View Live
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Regular cards — each with 3D tilt ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <TiltCard p={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
