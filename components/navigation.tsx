'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToSection } from '@/lib/scroll'
import { Menu, X } from 'lucide-react'
import Logo from './logo'

const navItems = [
  { label: 'About',      targetId: 'hero' },
  { label: 'Experience', targetId: 'experience' },
  { label: 'Skills',     targetId: 'skills' },
  { label: 'Projects',   targetId: 'portfolio' },
  { label: 'Contact',    targetId: 'contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    setIsOpen(false)
    scrollToSection(id)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? { background: 'rgba(6,3,13,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(139,92,246,0.15)', paddingTop: '1rem', paddingBottom: '1rem' }
          : { background: 'transparent', borderBottom: '1px solid transparent', paddingTop: '1.5rem', paddingBottom: '1.5rem' }
      }
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <button type="button" onClick={() => go('hero')}>
          <Logo size="md" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => go(item.targetId)}
              className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-colors group"
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(139,92,246,0.08)' }}
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="btn-primary"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}
            onClick={() => go('contact')}
          >
            Hire Me
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg text-slate-300"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(10,6,20,0.97)', borderTop: '1px solid rgba(139,92,246,0.15)' }}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(item.targetId)}
                  className="text-left w-full py-3 px-4 text-lg font-medium text-slate-200 rounded-xl hover:text-white transition-colors"
                  style={{ background: 'rgba(139,92,246,0.04)', border: '1px solid rgba(139,92,246,0.08)' }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="btn-primary mt-4 w-full justify-center"
                onClick={() => go('contact')}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
