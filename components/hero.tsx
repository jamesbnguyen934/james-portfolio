'use client'

import { useRef, useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin, ArrowRight, Download, Code2, Zap, Cloud, Cpu, Layers } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { scrollToSection } from '@/lib/scroll'
import SplitText from './split-text'
import AmbientSnowflakes from './frozen-easter-egg'

const socialLinks = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/jamesbnguyen934' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/james-nguyen-8b8b253b2' },
  { icon: Mail,     label: 'Email',    href: 'mailto:james.nguyen93112@gmail.com' },
] as const

const miniStats = [
  { value: '10+',  label: 'Years',         color: '#818cf8' },
  { value: '3B+',  label: 'Users Served',  color: '#06b6d4' },
  { value: '$4B+', label: 'Revenue',       color: '#a78bfa' },
  { value: '15+',  label: 'Ent. Apps',     color: '#f472b6' },
]

const statusItems = [
  'obsessing over LLM latency',
  'shipping enterprise apps',
  'turning coffee into code',
  'building things that scale',
]

const techBadges = [
  { label: 'React',      color: '#818cf8', Icon: Code2,   delay: '0s',    style: { top: '-16px',  left: '50%',  transform: 'translateX(-50%)' } },
  { label: 'Next.js',    color: '#06b6d4', Icon: Layers,  delay: '0.6s',  style: { right: '-28px', top: '30%',  transform: 'translateY(-50%)' } },
  { label: 'TypeScript', color: '#a78bfa', Icon: Zap,     delay: '1.2s',  style: { bottom: '-16px', left: '50%', transform: 'translateX(-50%)' } },
  { label: 'AI / LLM',  color: '#f472b6', Icon: Cpu,     delay: '1.8s',  style: { left: '-28px',  top: '70%',  transform: 'translateY(-50%)' } },
  { label: 'AWS',        color: '#34d399', Icon: Cloud,   delay: '0.9s',  style: { top: '8%',      right: '6%' } },
  { label: 'Python',     color: '#fb923c', Icon: Code2,   delay: '1.5s',  style: { bottom: '8%',   left: '6%'  } },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  // ── Scroll parallax for background blobs ──
  const { scrollY } = useScroll()
  const blob1Y = useTransform(scrollY, [0, 600], [0, -100])
  const blob2Y = useTransform(scrollY, [0, 600], [0, -60])

  // ── Mouse parallax for the orbital visual ──
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const orbX = useSpring(rawX, { stiffness: 55, damping: 18 })
  const orbY = useSpring(rawY, { stiffness: 55, damping: 18 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    rawX.set(x * 22)
    rawY.set(y * 22)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  const [statusIdx, setStatusIdx] = useState(0)
  const [avatarClicked, setAvatarClicked] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => setStatusIdx(i => (i + 1) % statusItems.length), 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden min-h-[95vh] flex items-center pt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Aurora background (scroll parallax) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-72 -left-72 w-[700px] h-[700px] rounded-full bg-violet-700/25 blur-[140px] animate-aurora"
          style={{ y: blob1Y }}
        />
        <motion.div
          className="absolute -bottom-72 right-0 w-[650px] h-[650px] rounded-full bg-fuchsia-700/18 blur-[140px] animate-aurora"
          style={{ animationDelay: '-4s', y: blob2Y }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-900/12 blur-[110px]"
        />
        {/* Ambient snowflakes */}
        <AmbientSnowflakes />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />
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
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.32)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
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
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400/70 animate-pulse rounded-[1px]" />
            </motion.div>

            {/* Main headline — clip-path reveal + SplitText */}
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
              style={{ background: 'linear-gradient(90deg, #818cf8, #06b6d4, #f472b6)' }}
            />

            {/* Sub-headline — blur in */}
            <motion.p
              initial={{ opacity: 0, filter: 'blur(8px)', y: 14 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-slate-400 max-w-[520px] leading-relaxed"
            >
              I&apos;m <span className="text-white font-semibold">James Nguyen</span> — Senior Frontend Engineer
              at the intersection of{' '}
              <span className="text-violet-300 font-semibold">AI products</span>,{' '}
              <span className="text-cyan-300 font-semibold">performance engineering</span>, and{' '}
              <span className="text-fuchsia-300 font-semibold">UI infrastructure</span>.
              10+ years shipping at Google &amp; Meta.
            </motion.p>

            {/* Mini stats — stagger */}
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

            {/* CTAs — stagger */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              >
                <button
                  type="button"
                  className="btn-primary hover-shimmer"
                  onClick={() => scrollToSection('contact')}
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              >
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

          {/* ── Right: Animated Orbital Visual — mouse parallax ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ x: orbX, y: orbY }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center"
          >
            <div className="relative w-[460px] h-[460px]">

              {/* Glow halos — electric palette */}
              <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-[90px]" />
              <div className="absolute inset-[40px] rounded-full bg-fuchsia-500/20 blur-[65px]" />
              <div className="absolute inset-[90px] rounded-full bg-cyan-500/12 blur-[45px]" />

              {/* Outer spinning ring + dot */}
              <div className="absolute inset-0 rounded-full border border-violet-400/25 animate-spin-slow">
                <div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-violet-400"
                  style={{ boxShadow: '0 0 14px rgba(168,85,247,1), 0 0 28px rgba(168,85,247,0.5)' }}
                />
              </div>

              {/* Middle spinning ring (reverse) + dot */}
              <div className="absolute inset-[62px] rounded-full border border-fuchsia-400/35 animate-spin-reverse">
                <div
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fuchsia-400"
                  style={{ boxShadow: '0 0 12px rgba(232,121,249,1), 0 0 24px rgba(232,121,249,0.5)' }}
                />
              </div>

              {/* Inner ring */}
              <div
                className="absolute inset-[124px] rounded-full border border-cyan-400/30"
                style={{ animation: 'spin-slow 22s linear infinite' }}
              >
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
                  style={{ boxShadow: '0 0 10px rgba(34,211,238,1), 0 0 20px rgba(34,211,238,0.5)' }}
                />
              </div>

              {/* Center avatar — hover zoom + click FRIES burst */}
              <div
                className="absolute inset-[105px] cursor-pointer"
                onClick={() => setAvatarClicked(true)}
              >
                {/* Actual avatar — scales to 130% on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden animate-electric"
                  style={{
                    boxShadow: '0 0 0 3px rgba(168,85,247,0.5), 0 0 0 6px rgba(168,85,247,0.15), 0 0 60px rgba(168,85,247,0.7), 0 0 120px rgba(232,121,249,0.3)',
                  }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                >
                  <Image
                    src="/avatar.jpg"
                    alt="James Nguyen"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>

                {/* FRIES ghost — starts at hover size (1.15), bursts out on click */}
                <AnimatePresence>
                  {avatarClicked && (
                    <motion.div
                      key="fries-burst"
                      className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                      initial={{ scale: 1.15, opacity: 0 }}
                      animate={{ scale: 2.3, opacity: [0, 0.75, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                        opacity: { times: [0, 0.2, 1], duration: 0.6 },
                      }}
                      onAnimationComplete={() => setAvatarClicked(false)}
                    >
                      <Image
                        src="/avatar.jpg"
                        alt=""
                        fill
                        className="object-cover object-top"
                        aria-hidden
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating tech badges */}
              {techBadges.map(({ label, color, Icon, delay, style: badgeStyle }) => (
                <motion.div
                  key={label}
                  className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white z-10 animate-float cursor-default"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}50`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 0 14px ${color}28`,
                    animationDelay: delay,
                    ...badgeStyle,
                  }}
                  whileHover={{ scale: 1.12, boxShadow: `0 0 22px ${color}60` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <Icon className="w-3 h-3" style={{ color }} />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
