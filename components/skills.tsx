'use client'

import { motion } from 'framer-motion'
import { Cpu, Database, Cloud, TestTube, Layers, Code2 } from 'lucide-react'
import { staggerContainer, scaleIn, charSideSlide } from '@/lib/animations'
import SplitText from '@/components/split-text'
import type { Variants } from 'framer-motion'

const categories = [
  {
    label: 'Languages',
    icon: Code2,
    color: '#818cf8',
    skills: ['TypeScript', 'JavaScript ES6+', 'Python', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    label: 'Frontend & UI',
    icon: Layers,
    color: '#a78bfa',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Framer Motion', 'ShadcnUI', 'Storybook'],
  },
  {
    label: 'AI & ML',
    icon: Cpu,
    color: '#c084fc',
    skills: ['Vercel AI SDK', 'OpenAI API', 'Anthropic API', 'LangChain', 'LlamaIndex', 'RAG Architecture', 'LLM Orchestration', 'SSE Streaming'],
  },
  {
    label: 'Backend & Data',
    icon: Database,
    color: '#e879f9',
    skills: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL', 'WebSockets', 'Supabase', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Infrastructure & DevOps',
    icon: Cloud,
    color: '#f472b6',
    skills: ['AWS S3 / Lambda / CloudFront', 'Vercel', 'Docker', 'GitHub Actions', 'CI/CD', 'Vite', 'Webpack', 'Monorepo Architecture'],
  },
  {
    label: 'Testing & Quality',
    icon: TestTube,
    color: '#fb7185',
    skills: ['Jest', 'Cypress', 'Playwright', 'React Testing Library', 'WCAG 2.1 AA', 'Visual Regression'],
  },
]

// Stagger variants for skill pills
const pillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
}
const pillItem: Variants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0616 0%, #06030d 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-violet-900/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">

        {/* Heading */}
        <div className="mb-14">
          <span className="section-label-bright mb-5 inline-flex">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-5 mb-4 tracking-tight">
            <SplitText
              text="Skills &"
              mode="chars"
              variants={charSideSlide}
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
              Technologies
            </motion.span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A production-tested toolkit refined over 10+ years — from real-time AI streaming interfaces to enterprise-scale monorepos.
          </p>
        </div>

        {/* Category cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                className="relative group overflow-hidden rounded-2xl p-6 hover-shimmer"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(139,92,246,0.14)',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
                }}
                variants={scaleIn}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${cat.color}14`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.14)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />

                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${cat.color}18`,
                      border: `1px solid ${cat.color}30`,
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </motion.div>
                  <h3 className="text-sm font-bold text-white">{cat.label}</h3>
                </div>

                {/* Skill pills — staggered */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={pillContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={pillItem}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full text-slate-400 cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        transition: 'background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s',
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                        transition: { type: 'spring', stiffness: 350, damping: 18 },
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = `${cat.color}15`
                        ;(e.currentTarget as HTMLElement).style.borderColor = `${cat.color}35`
                        ;(e.currentTarget as HTMLElement).style.color = cat.color
                        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${cat.color}25`
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'
                        ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                        ;(e.currentTarget as HTMLElement).style.color = ''
                        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Corner glow on hover */}
                <div
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: cat.color }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
