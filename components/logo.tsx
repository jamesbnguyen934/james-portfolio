'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
  const badgeSize = size === 'sm' ? 'w-7 h-7 text-xs' : size === 'lg' ? 'w-10 h-10 text-sm' : 'w-9 h-9 text-sm'

  return (
    <motion.div
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`${badgeSize} rounded-xl flex items-center justify-center font-heading font-bold text-white`}
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        JN
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold text-white tracking-tight ${textSize}`}>
          James Nguyen
        </span>
        <span className="text-[9px] font-medium text-violet-400 uppercase tracking-[0.15em] mt-0.5">
          Staff Engineer · AI
        </span>
      </div>
    </motion.div>
  )
}
