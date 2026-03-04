'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { charDropVanish } from '@/lib/animations'
import SplitText from '@/components/split-text'

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06030d 0%, #0a0616 100%)' }}
    >
      <div className="container relative z-10">
        <div className="mb-12">
          <span className="section-label-bright mb-5 inline-flex">
            Education
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            <SplitText
              text="Academic"
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
              Foundation
            </motion.span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #130c24, #1a0f2e)',
              border: '1px solid rgba(139,92,246,0.2)',
            }}
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500" />
            <div className="p-7 flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-1">
                  B.S. Computer Science
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Stanford University</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    Sep 2009 – May 2013
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    Stanford, CA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
