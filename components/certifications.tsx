'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { charDropVanish } from '@/lib/animations'
import SplitText from '@/components/split-text'

type Certification = {
  title: string
  issuer: string
  issued: string
  credentialId?: string
  credentialUrl: string
  color: string
}

const certifications: Certification[] = [
  {
    title: 'Development with AI and Web Services',
    issuer: 'IBM',
    issued: 'Issued Aug 2025',
    credentialUrl: 'https://www.credly.com/badges/2e944b81-621a-4f45-93bf-0297a1250d45',
    color: '#8b5cf6',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM',
    issued: 'Issued May 2025',
    credentialId: 'e4a56ed6-84f9-4402-87ac-65dc814b1833',
    credentialUrl: 'https://www.credly.com/badges/e4a56ed6-84f9-4402-87ac-65dc814b1833',
    color: '#06b6d4',
  },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0616 0%, #06030d 100%)' }}
    >
      <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-violet-900/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mb-10">
          <span className="section-label-bright mb-5 inline-flex">
            Certifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <SplitText
              text="Professional"
              mode="chars"
              variants={charDropVanish}
              charDelay={0.04}
            />{' '}
            <motion.span
              initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
              className="gradient-text"
            >
              Certifications
            </motion.span>
          </h2>
        </div>

        <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
          IBM-issued certifications covering modern web development fundamentals and AI-enabled web services.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #100a1e, #1a0f2e)',
                border: `1px solid ${cert.color}22`,
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = `${cert.color}50`
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${cert.color}18`
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = `${cert.color}22`
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Top accent line */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />

              <div className="p-6">
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-md inline-block"
                    style={{ background: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}28` }}
                  >
                    {cert.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-violet-100 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400">{cert.issued}</p>
                  {cert.credentialId && (
                    <p className="mt-1 text-xs text-slate-500">Credential ID: {cert.credentialId}</p>
                  )}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: cert.color }}
                  >
                    Show credential
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Corner glow */}
              <div
                className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: cert.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
