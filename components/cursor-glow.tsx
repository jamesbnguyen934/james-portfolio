'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  // Dot follows cursor exactly (no spring — pixel-perfect)
  const dotX = useMotionValue(-300)
  const dotY = useMotionValue(-300)

  // Ambient glow — slow, barely perceptible
  const rawX = useMotionValue(-300)
  const rawY = useMotionValue(-300)
  const glowX = useSpring(rawX, { stiffness: 55, damping: 22 })
  const glowY = useSpring(rawY, { stiffness: 55, damping: 22 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setVisible(true)

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('button, a, [role="button"], input, textarea, select, label')) {
        setHovering(true)
      }
    }

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('button, a, [role="button"], input, textarea, select, label')) {
        setHovering(false)
      }
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout',  onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout',  onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [dotX, dotY, rawX, rawY])

  if (!visible) return null

  return (
    <>
      {/* ── Ambient glow — subtle, follows slowly ── */}
      <motion.div
        className="pointer-events-none fixed z-[1] rounded-full"
        style={{
          width: 160,
          height: 160,
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
        }}
      />

      {/* ── Precise dot — exact cursor position ── */}
      <motion.div
        className="pointer-events-none fixed z-[61] rounded-full"
        animate={{
          scale: clicking ? 0.5 : hovering ? 1.8 : 1,
          background: hovering
            ? 'rgba(232,121,249,0.95)'
            : 'rgba(192,132,252,0.95)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{
          width: 6,
          height: 6,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: hovering
            ? '0 0 10px rgba(232,121,249,0.9), 0 0 22px rgba(232,121,249,0.4)'
            : '0 0 8px rgba(139,92,246,0.9), 0 0 18px rgba(139,92,246,0.4)',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}
