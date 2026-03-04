'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, Layers } from 'lucide-react'
import { staggerContainer, fadeUp, charRevolveDrop } from '@/lib/animations'
import SplitText from '@/components/split-text'

type Project = {
  id: string
  title: string
  category: string
  url: string
  images: string[]
  description: string
  features: string[]
  techStack: string[]
  accent: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Beam AI',
    category: 'Enterprise AI Agent Platform',
    url: 'https://beam.ai',
    images: ['/projects/beam-1.jpg', '/projects/beam-2.jpg', '/projects/beam-3.jpg'],
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
    featured: true,
  },
  {
    id: '02',
    title: 'Butterflies AI',
    category: 'Generative Social Network',
    url: 'https://www.butterflies.ai',
    images: ['/projects/butterflies-1.png', '/projects/butterflies-2.png', '/projects/butterflies-3.png'],
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
  },
  {
    id: '03',
    title: 'Yolo Health',
    category: 'Digital Health Platform',
    url: 'https://yolohealth.app/',
    images: ['/projects/yolohealth-1.png', '/projects/yolohealth-2.png', '/projects/yolohealth-3.png'],
    description:
      'Adaptive clinical assessment and long-term coaching platform with an AI personalization engine aggregating biometric data, journal entries, and engagement signals.',
    features: [
      'Full HIPAA compliance via AWS infrastructure',
      'Biometric + engagement signal personalization',
      'Low-friction mobile-first UX',
      'Multi-coaching model compatibility',
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Supabase', 'AWS', 'HIPAA'],
    accent: '#c084fc',
  },
  {
    id: '04',
    title: 'Fellow',
    category: 'AI Meeting Intelligence',
    url: 'https://fellow.app',
    images: ['/projects/fellow-1.jpg', '/projects/fellow-2.jpg', '/projects/fellow-3.jpg'],
    description:
      'AI meeting assistant that auto-generates action items, summaries, and transcripts — deeply integrated with calendars, CRMs, and project management tools.',
    features: [
      'AI-generated notes + action item extraction',
      'Meeting recording with full transcript',
      'Salesforce & CRM sync integration',
      'Multi-workspace collaborative support',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'LLM', 'WebSockets'],
    accent: '#34d399',
  },
  {
    id: '05',
    title: 'Fulgent AI',
    category: 'Generative AI Platform',
    url: 'https://fulgent.ai',
    images: ['/projects/fulgent-1.png', '/projects/fulgent-2.jpg', '/projects/fulgent-3.jpg'],
    description:
      'Advanced AI headshot generator producing photorealistic professional portraits across 20+ styles — powered by custom fine-tuned diffusion models for enterprise use.',
    features: [
      'Photorealistic output across 20+ styles',
      'Fine-tuned diffusion model pipeline',
      'Batch generation with brand consistency',
      'Enterprise-grade output quality',
    ],
    techStack: ['Python', 'Diffusion Models', 'Next.js', 'FastAPI', 'AWS'],
    accent: '#f59e0b',
  },
  {
    id: '06',
    title: 'TaoStats',
    category: 'Blockchain Analytics',
    url: 'https://taostats.io',
    images: ['/projects/taostats-1.png', '/projects/taostats-2.png', '/projects/taostats-3.png'],
    description:
      'Real-time analytics dashboard for the Bittensor decentralized AI network — tracking validators, subnets, market data, and on-chain activity with high-throughput data visualization.',
    features: [
      'Live TAO price + volume + market data',
      'Validator leaderboard with weight tracking',
      'Subnet analytics and emission data',
      'On-chain transaction explorer',
    ],
    techStack: ['React', 'TypeScript', 'WebSockets', 'D3.js', 'REST APIs'],
    accent: '#10b981',
  },
  {
    id: '07',
    title: 'Wavel',
    category: 'AI Video Studio',
    url: 'https://wavel.ai',
    images: ['/projects/wavel-1.jpg', '/projects/wavel-2.jpg', '/projects/wavel-3.jpg'],
    description:
      'All-in-one AI video production platform automating dubbing, subtitles, clip generation, and brand styling — used by global brands to scale content pipelines at speed.',
    features: [
      '100+ language AI dubbing',
      'Auto subtitles + brand style presets',
      'AI shorts & clip generator',
      'Script-to-video generation pipeline',
    ],
    techStack: ['React', 'Node.js', 'AWS', 'AI/LLM', 'FFmpeg'],
    accent: '#6366f1',
  },
]

// ── Tech pill ─────────────────────────────────────────────────────
function TechPill({ tech, color }: { tech: string; color: string }) {
  return (
    <motion.span
      className="text-[10px] font-medium px-2.5 py-1 rounded-full cursor-default"
      style={{ background: `${color}12`, border: `1px solid ${color}28`, color }}
      whileHover={{ scale: 1.08, y: -1 }}
      transition={{ type: 'spring' as const, stiffness: 340, damping: 18 }}
    >
      {tech}
    </motion.span>
  )
}

// ── Image slider ──────────────────────────────────────────────────
function ImageSlider({ images, title, sizes }: { images: string[]; title: string; sizes: string }) {
  const [idx, setIdx] = useState(0)

  const prev = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }
  const next = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); setIdx(i => (i + 1) % images.length) }
  const goTo = (e: React.MouseEvent, i: number) => { e.preventDefault(); e.stopPropagation(); setIdx(i) }

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <motion.div key={src} className="absolute inset-0" animate={{ opacity: i === idx ? 1 : 0 }} transition={{ duration: 0.4 }}>
          <Image src={src} alt={`${title} ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes={sizes} />
        </motion.div>
      ))}

      {/* Arrows */}
      <button type="button" onClick={prev} className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(6,3,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
        <ChevronLeft className="w-3.5 h-3.5 text-white" />
      </button>
      <button type="button" onClick={next} className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(6,3,13,0.8)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}>
        <ChevronRight className="w-3.5 h-3.5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} type="button" onClick={(e) => goTo(e, i)}
            className="h-1 rounded-full transition-all duration-300"
            style={{ width: i === idx ? '16px' : '5px', background: i === idx ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>
    </div>
  )
}

// ── 3D tilt hook ──────────────────────────────────────────────────
function useTilt(strength = 6) {
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
  const onMouseLeave = () => { rawX.set(0); rawY.set(0) }
  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}

// ── Grid project card ─────────────────────────────────────────────
function ProjectCard({ p }: { p: Project }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(4)

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
        border: `1px solid ${p.accent}20`,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={(e) => {
        onMouseLeave()
        ;(e.currentTarget as HTMLElement).style.borderColor = `${p.accent}20`
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = `${p.accent}55`
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.accent}18, 0 20px 40px rgba(0,0,0,0.4)`
      }}
    >
      {/* Top accent line */}
      <div className="h-0.5 flex-shrink-0" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }} />

      {/* Image area with hover reveal */}
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <ImageSlider images={p.images} title={p.title} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />

        {/* Permanent bottom gradient for footer readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#130c24]/95 via-[#130c24]/20 to-transparent z-10 pointer-events-none" />

        {/* Live badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-semibold text-emerald-400 uppercase tracking-wider">Live</span>
        </div>

        {/* Hover reveal overlay — slides up */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          style={{
            background: `linear-gradient(to top, rgba(6,3,13,0.97) 0%, rgba(6,3,13,0.75) 55%, transparent 100%)`,
            transition: 'opacity 0.3s ease',
          }}
        >
          <div
            className="transform translate-y-4 group-hover:translate-y-0"
            style={{ transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
          >
            <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">{p.description}</p>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white hover-shimmer"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}35, ${p.accent}20)`,
                  border: `1px solid ${p.accent}55`,
                  boxShadow: `0 0 20px ${p.accent}25`,
                }}
              >
                View Live <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Always-visible footer */}
      <div className="flex flex-col p-5 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-3 h-3 flex-shrink-0" style={{ color: p.accent }} />
          <span className="text-[10px] font-semibold uppercase tracking-wider truncate" style={{ color: p.accent }}>{p.category}</span>
          <span className="ml-auto text-[9px] font-medium text-slate-600 flex-shrink-0">#{p.id}</span>
        </div>
        <h3 className="text-base font-black text-white mb-3 group-hover:text-violet-100 transition-colors">{p.title}</h3>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.techStack.slice(0, 4).map((t) => <TechPill key={t} tech={t} color={p.accent} />)}
          {p.techStack.length > 4 && (
            <span className="text-[10px] font-medium px-2.5 py-1 rounded-full text-slate-500"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              +{p.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────
export default function Portfolio() {
  const featured = projects[0]
  const rest = projects.slice(1)
  const { ref: featRef, rotateX: featRX, rotateY: featRY, onMouseMove: featMove, onMouseLeave: featLeave } = useTilt(3)

  return (
    <section id="portfolio" className="relative py-28 md:py-32 overflow-hidden">
      <div className="absolute inset-0 page-bg pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[400px] rounded-full bg-purple-900/12 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <div className="mb-14">
          <span className="section-label-bright mb-5 inline-flex">Featured Work</span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-5">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                <SplitText
                  text="Deployed"
                  mode="chars"
                  variants={charRevolveDrop}
                  charDelay={0.04}
                />{' '}
                <motion.span
                  initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.42, duration: 0.5, ease: 'easeOut' }}
                  style={{ display: 'inline-block' }}
                  className="gradient-text-bright"
                >
                  Systems
                </motion.span>
              </h2>
              <p className="text-slate-400 max-w-xl leading-relaxed">
                Mission-critical AI platforms engineered for enterprise scale — combining robust frontend architecture with cutting-edge AI capabilities.
              </p>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-2xl font-black text-white">{projects.length}+</span>
              <span className="text-sm text-slate-400">projects shipped</span>
            </div>
          </div>
        </div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* ── Featured card ── */}
          <motion.div
            ref={featRef}
            className="group relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
              border: `1px solid ${featured.accent}22`,
              transformStyle: 'preserve-3d',
              rotateX: featRX,
              rotateY: featRY,
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            variants={fadeUp}
            onMouseMove={featMove}
            onMouseLeave={(e) => {
              featLeave()
              ;(e.currentTarget as HTMLElement).style.borderColor = `${featured.accent}22`
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = `${featured.accent}55`
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 55px ${featured.accent}20, 0 24px 50px rgba(0,0,0,0.4)`
            }}
          >
            <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, #22d3ee, transparent)` }} />

            <div className="flex flex-col lg:flex-row">
              {/* Image with slider */}
              <div className="relative lg:w-[55%] aspect-video lg:aspect-auto overflow-hidden">
                <ImageSlider images={featured.images} title={featured.title} sizes="(min-width: 1024px) 55vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#130c24] hidden lg:block z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130c24] to-transparent lg:hidden z-10 pointer-events-none" />
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(6,3,13,0.7)', border: '1px solid rgba(16,185,129,0.3)', backdropFilter: 'blur(8px)' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">Live</span>
                </div>
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full"
                  style={{ background: `${featured.accent}20`, border: `1px solid ${featured.accent}40`, backdropFilter: 'blur(8px)' }}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: featured.accent }}>Featured</span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" style={{ color: featured.accent }} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: featured.accent }}>{featured.category}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-600">#{featured.id}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-violet-100 transition-colors">{featured.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{featured.description}</p>

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
                  {featured.techStack.map((t) => <TechPill key={t} tech={t} color={featured.accent} />)}
                </div>

                {featured.url && (
                  <motion.a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white self-start hover-shimmer"
                    style={{
                      background: `linear-gradient(135deg, ${featured.accent}35, ${featured.accent}20)`,
                      border: `1px solid ${featured.accent}50`,
                      boxShadow: `0 0 22px ${featured.accent}25`,
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

          {/* ── 6-project grid — 3 cols on lg ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <motion.div key={p.id} variants={fadeUp}>
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
