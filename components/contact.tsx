'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { staggerContainer, fadeLeft, fadeRight, fadeUp, charTwister } from '@/lib/animations'
import SplitText from '@/components/split-text'

const contactChannels = [
  {
    icon: Mail,
    label: 'Email',
    value: 'james.nguyen93112@gmail.com',
    href: 'mailto:james.nguyen93112@gmail.com',
    color: '#818cf8',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/james-nguyen-8b8b253b2',
    href: 'https://linkedin.com/in/james-nguyen-8b8b253b2',
    color: '#a78bfa',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jamesbnguyen934',
    href: 'https://github.com/jamesbnguyen934',
    color: '#c084fc',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Marietta, GA · Remote-First',
    href: null,
    color: '#e879f9',
  },
]

const formFields = [
  { id: 'name',    label: 'Your Name',     type: 'text',  placeholder: 'Full name' },
  { id: 'email',   label: 'Email Address', type: 'email', placeholder: 'Email address' },
  { id: 'subject', label: 'Subject',       type: 'text',  placeholder: 'Role / Opportunity / Project' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `NAME: ${formData.name}\nEMAIL: ${formData.email}\nSUBJECT: ${formData.subject}\n\nMESSAGE:\n${formData.message}`
    window.location.href = `mailto:james.nguyen93112@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06030d 0%, #0a0616 100%)' }}
    >
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mb-14">
          <span className="section-label-bright mb-5 inline-flex">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-4">
            <SplitText
              text="Let's Work"
              mode="chars"
              variants={charTwister}
              charDelay={0.04}
            />{' '}
            <motion.span
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.50, duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
              className="gradient-text"
            >
              Together
            </motion.span>
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Open to Staff / Principal Frontend Engineer roles — especially at the intersection of AI products, developer tooling, and infrastructure at scale. Response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Contact Channels — stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.h3 variants={fadeLeft} className="text-sm font-bold text-white mb-6">
              Direct Channels
            </motion.h3>

            {contactChannels.map((info) => (
              <motion.div key={info.label} variants={fadeLeft}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover-shimmer"
                    style={{
                      background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
                      border: '1px solid rgba(139,92,246,0.15)',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = `${info.color}40`
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.15)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateX(0)'
                    }}
                  >
                    <motion.div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}25` }}
                      whileHover={{ scale: 1.12, rotate: -5 }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                    >
                      <info.icon className="w-4 h-4" style={{ color: info.color }} />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: info.color }}>
                        {info.label}
                      </div>
                      <div className="text-sm text-slate-300 group-hover:text-white transition-colors truncate">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
                      border: '1px solid rgba(139,92,246,0.15)',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}25` }}
                    >
                      <info.icon className="w-4 h-4" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: info.color }}>
                        {info.label}
                      </div>
                      <div className="text-sm text-slate-300">{info.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-xl mt-2"
              style={{
                background: 'linear-gradient(145deg, #0d1a14, #0f1f18)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold text-white">Currently Available</span>
              </div>
              <p className="text-sm text-slate-400">
                Open to Staff / Principal roles at the intersection of AI products, developer tooling, and infrastructure at scale.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Message Form — fade-right + stagger fields */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
                border: '1px solid rgba(139,92,246,0.18)',
              }}
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500" />
              <motion.form
                onSubmit={handleSubmit}
                className="p-7 space-y-5"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {formFields.map((field) => (
                  <motion.div key={field.id} variants={fadeUp}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={(formData as Record<string, string>)[field.id]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp}>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-violet-400 uppercase tracking-widest mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(139,92,246,0.2)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.08)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    placeholder="Tell me about the role or project..."
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <motion.button
                    type="submit"
                    className="btn-primary w-full justify-center hover-shimmer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                  >
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
