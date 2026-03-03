import type { Variants } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

// ── Stagger containers ───────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.02 } },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

// ── Fade directional variants ────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

// ── Scale / blur ──────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease } },
}

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 14 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

// ── Character / word level ───────────────────────────────────
export const charFlip: Variants = {
  hidden: { opacity: 0, y: '110%', rotateX: 45 },
  visible: {
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: { duration: 0.38, ease },
  },
}

export const wordBlurUp: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.45, ease },
  },
}

// ── Draw line (for timeline) ──────────────────────────────────
export const drawLine: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease },
  },
}
