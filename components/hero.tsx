'use client'

import { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, ArrowRight, Download, Code2, Zap, Cloud, Cpu, Layers } from 'lucide-react'
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion'
import Image from 'next/image'
import { scrollToSection } from '@/lib/scroll'
import SplitText from './split-text'

const socialLinks = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/jamesbnguyen934' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/james-nguyen-8b8b253b2' },
  { icon: Mail,     label: 'Email',    href: 'mailto:james.nguyen93112@gmail.com' },
] as const

const miniStats = [
  { value: '10+',  label: 'Years',         color: '#8b5cf6' },
  { value: '3B+',  label: 'Users Served',  color: '#06b6d4' },
  { value: '$4B+', label: 'Revenue',       color: '#818cf8' },
  { value: '15+',  label: 'Ent. Apps',     color: '#c4b5fd' },
]

const statusItems = [
  'obsessing over LLM latency',
  'shipping enterprise apps',
  'turning coffee into code',
  'building things that scale',
]

// ── Orbiting skill badges ──────────────────────────────────────────
const orbitingBadges = [
  { label: 'React',      color: '#818cf8', Icon: Code2,   radius: 195, duration: 16, startAngle: 0   },
  { label: 'Next.js',    color: '#06b6d4', Icon: Layers,  radius: 215, duration: 22, startAngle: 55  },
  { label: 'TypeScript', color: '#a78bfa', Icon: Zap,     radius: 200, duration: 19, startAngle: 115 },
  { label: 'AI / LLM',  color: '#e879f9', Icon: Cpu,     radius: 215, duration: 17, startAngle: 175 },
  { label: 'AWS',        color: '#c4b5fd', Icon: Cloud,   radius: 195, duration: 24, startAngle: 235 },
  { label: 'Python',     color: '#fb923c', Icon: Code2,   radius: 210, duration: 20, startAngle: 295 },
]

function OrbitingBadge({ label, color, Icon, radius, duration, startAngle }: {
  label: string; color: string; Icon: React.ElementType;
  radius: number; duration: number; startAngle: number;
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useAnimationFrame((t) => {
    const angle = (startAngle * Math.PI / 180) + (t / (duration * 1000)) * Math.PI * 2
    x.set(Math.cos(angle) * radius)
    y.set(Math.sin(angle) * radius)
  })

  return (
    <motion.div
      className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white z-10 cursor-default select-none"
      style={{
        background: `${color}18`,
        border: `1px solid ${color}50`,
        backdropFilter: 'blur(10px)',
        boxShadow: `0 0 12px ${color}25`,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        left: '50%',
        top: '50%',
      }}
      whileHover={{ scale: 1.12, boxShadow: `0 0 22px ${color}60` }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <Icon className="w-3 h-3" style={{ color }} />
      {label}
    </motion.div>
  )
}

// ── Main component ─────────────────────────────────────────────────
export default function Hero() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [avatarClicked, setAvatarClicked] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setStatusIdx(i => (i + 1) % statusItems.length), 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[95vh] flex items-center pt-24"
    >
      {/* ── Layer 1: Animated diagonal gradient mesh ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #06030d 0%, #1e0a4a 18%, #3b0764 36%, #06030d 54%, #0f0535 72%, #1a0f3e 88%, #06030d 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient-diagonal 18s ease-in-out infinite',
        }}
      />

      {/* ── Layer 2: Aurora blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-72 -left-72 w-[800px] h-[800px] rounded-full bg-violet-700/25 blur-[150px] animate-aurora" />
        <div
          className="absolute -bottom-72 right-0 w-[700px] h-[700px] rounded-full bg-fuchsia-700/18 blur-[150px] animate-aurora"
          style={{ animationDelay: '-5s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-800/12 blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-4 cursor-default"
              style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.32)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                Open to new opportunities
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                Available
              </span>
            </motion.div>

            {/* Terminal-style rotating status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 font-mono text-[11px] cursor-default"
              style={{ background: 'rgba(6,182,212,0.07)', border: '1px solid rgba(6,182,212,0.2)' }}
            >
              <span className="text-cyan-400 select-none">~$</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.28 }}
                  className="text-slate-300"
                >
                  {statusItems[statusIdx]}
                </motion.span>
              </AnimatePresence>
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400/80 animate-caret rounded-[1px]" />
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-5xl lg:text-[3.75rem] font-black tracking-[-0.025em] leading-[1.08] text-white">
              <motion.span
                className="gradient-text-bright whitespace-nowrap block"
                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Building Premium AI
              </motion.span>
              <SplitText
                text="Interfaces"
                className="text-white/85"
                mode="chars"
                charDelay={0.032}
                delay={0.75}
              />
            </h1>

            {/* Animated accent line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              className="mt-8 mb-6 h-0.5 w-20 origin-left rounded-full"
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #818cf8, #06b6d4)' }}
            />

            {/* Sub-headline — char-by-char animation with proper spacing */}
            <p className="text-base sm:text-lg text-slate-400 max-w-[520px] leading-relaxed">
              {/* "I'm" plain fade */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                I&apos;m
              </motion.span>
              {'\u00A0'}
              {/* "James Nguyen" — char flip */}
              <SplitText text="James Nguyen" className="text-white font-semibold" mode="chars" charDelay={0.022} delay={0.48} />
              {'\u00A0'}
              {/* ", Senior..." — word blur-up */}
              <SplitText text=", Senior Frontend Engineer at the intersection of" className="text-slate-400" mode="words" wordDelay={0.038} delay={0.8} />
              {'\u00A0'}
              {/* "AI products," — char flip, violet */}
              <SplitText text="AI products," className="text-violet-300 font-semibold" mode="chars" charDelay={0.028} delay={1.28} />
              {'\u00A0'}
              {/* "performance engineering," — char flip, cyan */}
              <SplitText text="performance engineering," className="text-cyan-300 font-semibold" mode="chars" charDelay={0.02} delay={1.66} />
              {'\u00A0'}
              {/* "and UI infrastructure." — char flip, indigo */}
              <SplitText text="and UI infrastructure." className="text-indigo-300 font-semibold" mode="chars" charDelay={0.025} delay={2.18} />
              {'\u00A0'}
              {/* "10+ years..." — word blur-up */}
              <SplitText text="10+ years shipping at Google & Meta." className="text-slate-400" mode="words" wordDelay={0.05} delay={2.72} />
            </p>

            {/* Mini stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } },
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {miniStats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7, y: 10 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 20 } },
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}28` }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-lg font-black leading-none" style={{ color: s.color }}>{s.value}</span>
                  <span className="text-xs text-slate-400">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <button type="button" className="btn-primary hover-shimmer" onClick={() => scrollToSection('contact')}>
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline hover-shimmer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="flex items-center gap-2"
              >
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="h-10 w-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <Icon className="h-4 w-4 text-slate-300" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 flex items-center gap-2 text-xs text-slate-500"
            >
              <MapPin className="h-3.5 w-3.5 text-violet-400" />
              Marietta, GA · Remote-First
            </motion.div>
          </div>

          {/* ── Right: Avatar with orbiting skill badges ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center"
          >
            <div className="relative w-[460px] h-[460px]">

              {/* Glow halos */}
              <div className="absolute inset-0 rounded-full bg-violet-600/28 blur-[100px]" />
              <div className="absolute inset-[30px] rounded-full bg-fuchsia-500/18 blur-[70px]" />
              <div className="absolute inset-[80px] rounded-full bg-violet-500/14 blur-[50px]" />

              {/* Rings — borders only, no dots */}
              <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-spin-slow" />
              <div className="absolute inset-[62px] rounded-full border border-fuchsia-400/22 animate-spin-reverse" />
              <div
                className="absolute inset-[124px] rounded-full border border-cyan-400/18"
                style={{ animation: 'spin-slow 22s linear infinite' }}
              />

              {/* Orbiting skill badges */}
              {orbitingBadges.map((badge) => (
                <OrbitingBadge key={badge.label} {...badge} />
              ))}

              {/* Center avatar */}
              <div
                className="absolute inset-[105px] cursor-pointer"
                onClick={() => setAvatarClicked(true)}
              >
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden animate-electric"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <Image
                    src="/avatar.jpg"
                    alt="James Nguyen"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '28% 45%' }}
                    priority
                  />
                </motion.div>

                <AnimatePresence>
                  {avatarClicked && (
                    <motion.div
                      key="burst"
                      className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                      initial={{ scale: 1.15, opacity: 0 }}
                      animate={{ scale: 2.3, opacity: [0, 0.75, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut', opacity: { times: [0, 0.2, 1], duration: 0.6 } }}
                      onAnimationComplete={() => setAvatarClicked(false)}
                    >
                      <Image src="/avatar.jpg" alt="" fill className="object-cover" style={{ objectPosition: '28% 45%' }} aria-hidden />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
