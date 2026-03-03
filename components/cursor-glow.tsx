'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)

  const rawX = useMotionValue(-300)
  const rawY = useMotionValue(-300)
  const x = useSpring(rawX, { stiffness: 140, damping: 25 })
  const y = useSpring(rawY, { stiffness: 140, damping: 25 })

  useEffect(() => {
    // Only on pointer-precise (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    setVisible(true)
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [rawX, rawY])

  if (!visible) return null

  return (
    <>
      {/* Large ambient blob that follows cursor */}
      <motion.div
        className="pointer-events-none fixed z-[2] rounded-full"
        style={{
          width: 520,
          height: 520,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)',
        }}
      />

      {/* Small precise glow dot */}
      <motion.div
        className="pointer-events-none fixed z-[61] rounded-full"
        style={{
          width: 10,
          height: 10,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background: 'rgba(139,92,246,0.75)',
          boxShadow:
            '0 0 14px rgba(139,92,246,0.9), 0 0 28px rgba(168,85,247,0.4)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}
