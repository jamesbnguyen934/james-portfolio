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

// ── Per-character entrance animations (CSS keyframe ports) ────
/** Revolves in from top-left with rotation and scale (animation one) */
export const charRevolveScale: Variants = {
  hidden: { opacity: 0, x: -150, y: -50, rotate: -180, scale: 3 },
  visible: {
    opacity: [null, 1],
    x: [-150, 20, 0],
    y: [-50, 20, 0],
    rotate: [-180, 30, 0],
    scale: [3, 0.3, 1],
    transition: { duration: 0.4, ease: 'easeOut', times: [0, 0.6, 1] },
  },
}

/** Drops from top-right with bounce rotation (animation two) */
export const charBallDrop: Variants = {
  hidden: { opacity: 0, x: 200, y: -100, scale: 2 },
  visible: {
    opacity: [null, 1],
    x: [200, 0, 0],
    y: [-100, 20, 0],
    rotate: [0, -180, 0],
    scale: [2, 0.5, 1],
    transition: { duration: 0.3, ease: 'easeOut', times: [0, 0.6, 1] },
  },
}

/** Slides from left with scale overshoot (animation three) */
export const charSideSlide: Variants = {
  hidden: { opacity: 0, x: -300, scale: 0 },
  visible: {
    opacity: [null, 1, 1, 1, 1],
    x: [-300, 20, 20, 0, 0],
    scale: [0, 1, 1, 1.2, 1],
    transition: { duration: 0.5, ease: 'easeOut', times: [0, 0.6, 0.8, 0.99, 1] },
  },
}

/** Drops from above with spiral rotation (animation four) */
export const charRevolveDrop: Variants = {
  hidden: { opacity: 0, y: -100, rotate: 360, scale: 0 },
  visible: {
    opacity: [null, 0.7, 0.9, 1],
    y: [-100, -50, 20, 0],
    rotate: [360, 180, 0, 0],
    scale: [0, 1, 0.8, 1],
    transition: { duration: 0.3, ease: 'easeOut', times: [0, 0.3, 0.6, 1] },
  },
}

/** Drops in, vanishes mid-air, then reappears (animation five) */
export const charDropVanish: Variants = {
  hidden: { opacity: 0, y: -100, rotate: 360, scale: 0 },
  visible: {
    opacity: [0, 0.7, 1, 0, 1],
    y: [-100, -50, 20, -100, 0],
    x: [0, 0, 0, -100, 0],
    rotate: [360, 180, 0, -180, 0],
    scale: [0, 1, 0.8, 1.5, 1],
    transition: { duration: 0.5, ease: 'easeOut', times: [0, 0.3, 0.5, 0.8, 1] },
  },
}

/** Twists in from the right with rotation (animation six) */
export const charTwister: Variants = {
  hidden: { opacity: 0, x: 150, rotate: -180 },
  visible: {
    opacity: [0, 1, 1],
    x: [150, 0, 0],
    rotate: [-180, 0, 0],
    transition: { duration: 0.5, ease: 'easeOut', times: [0, 0.1, 1] },
  },
}

/** Slides from left, overshoots scale, vanishes, then reappears (animation seven) */
export const charLeftRight: Variants = {
  hidden: { opacity: 0, x: -150, scale: 0.3 },
  visible: {
    opacity: [0, 1, 1, 0, 1],
    x: [-150, 50, 0, 0, 0],
    scale: [0.3, 0.7, 0.7, 2, 1],
    transition: { duration: 0.5, ease: 'easeOut', times: [0, 0.4, 0.6, 0.8, 1] },
  },
}
