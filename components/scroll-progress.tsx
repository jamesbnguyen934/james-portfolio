'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[200] pointer-events-none"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #8b5cf6, #e879f9, #c4b5fd, #a78bfa)',
        backgroundSize: '250% 100%',
        animation: 'gradient-flow 4s ease-in-out infinite',
      }}
    />
  )
}
