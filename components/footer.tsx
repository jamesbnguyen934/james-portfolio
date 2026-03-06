'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowUpRight, MapPin } from 'lucide-react'
import { scrollToSection } from '@/lib/scroll'
import { staggerContainer, fadeUp, fadeLeft } from '@/lib/animations'
import Logo from './logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ background: '#06030d' }}>
      <div className="absolute inset-0 page-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-28 left-1/3 h-[480px] w-[480px] rounded-full bg-violet-600/10 blur-[110px] pointer-events-none" />

      <div className="container relative z-10 pt-20 pb-10">
        <div>
          {/* CTA band — slide up */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/90">Let's build something great</div>
              <div className="mt-2 text-2xl sm:text-3xl font-bold text-white">
                Ready to talk about a role or a project?
              </div>
              <div className="mt-3 text-sm text-slate-400 max-w-2xl">
                I help teams ship fast, polished product experiences — and the UI infrastructure that keeps them reliable at scale.
              </div>
            </div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <motion.button
                type="button"
                className="btn-primary hover-shimmer"
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
              >
                Contact
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline hover-shimmer">
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div className="md:col-span-5" variants={fadeLeft}>
              <Logo size="md" />
              <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-md">
                Senior Frontend Engineer specializing in GenAI product experiences, frontend architecture, and performance.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <MapPin className="h-3.5 w-3.5 text-violet-300" />
                  Marietta, GA · Remote
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.18)' }}>
                  <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-violet-300">Available</span>
                </span>
              </div>

              <div className="mt-6 flex gap-2.5">
                {[
                  { Icon: Github,   href: 'https://github.com/jamesbnguyen934',           label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://linkedin.com/in/james-nguyen-8b8b253b2', label: 'LinkedIn' },
                  { Icon: Mail,     href: 'mailto:james.nguyen93112@gmail.com',             label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    whileHover={{ scale: 1.12, y: -2, borderColor: 'rgba(139,92,246,0.4)' }}
                    transition={{ type: 'spring' as const, stiffness: 320, damping: 18 }}
                  >
                    <Icon className="w-4 h-4 text-slate-300/80" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div className="md:col-span-3" variants={fadeUp}>
              <h3 className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-5">Navigation</h3>
              <ul className="space-y-3">
                {[
                  { label: 'About',      id: 'hero' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Skills',     id: 'skills' },
                  { label: 'Projects',   id: 'portfolio' },
                  { label: 'Contact',    id: 'contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <motion.button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-slate-400 hover:text-violet-200 transition-colors flex items-center gap-2 group underline-grow"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 22 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full transition-colors group-hover:bg-violet-400" style={{ background: 'rgba(139,92,246,0.45)' }} />
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div className="md:col-span-4" variants={fadeUp}>
              <h3 className="text-xs font-semibold text-violet-300 uppercase tracking-widest mb-5">Contact</h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:james.nguyen93112@gmail.com"
                  className="group flex items-center gap-3 p-4 rounded-2xl hover-shimmer"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ borderColor: 'rgba(139,92,246,0.3)', y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-4 h-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                    james.nguyen93112@gmail.com
                  </span>
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl hover-shimmer"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ borderColor: 'rgba(139,92,246,0.3)', y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FileText className="w-4 h-4 text-violet-300 flex-shrink-0" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Resume (PDF)</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="text-xs text-slate-500">© {currentYear} James B. Nguyen · All rights reserved</div>
            <div className="text-xs text-slate-500">Built with Next.js · Tailwind CSS · Framer Motion</div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
