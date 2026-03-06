'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
  const badgeSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-9 h-9'

  return (
    <motion.div
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`${badgeSize} rounded-xl overflow-hidden relative flex-shrink-0`}
        style={{ border: '1.5px solid rgba(139,92,246,0.5)', boxShadow: '0 0 10px rgba(139,92,246,0.3)' }}
      >
        <Image src="/avatar.jpg" alt="James Nguyen" fill className="object-cover" style={{ objectPosition: '28% 45%' }} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold text-white tracking-tight ${textSize}`}>
          James Nguyen
        </span>
        <span className="text-[9px] font-medium text-violet-400 uppercase tracking-[0.15em] mt-0.5">
          Senior Engineer · AI
        </span>
      </div>
    </motion.div>
  )
}
