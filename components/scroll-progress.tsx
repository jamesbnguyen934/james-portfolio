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
        background: 'linear-gradient(90deg, #818cf8, #06b6d4, #f472b6)',
      }}
    />
  )
}
