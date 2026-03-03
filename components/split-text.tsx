'use client'

import { motion, type Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  /** Delay between each character (chars mode) */
  charDelay?: number
  /** Delay between each word (words mode) */
  wordDelay?: number
  /** Additional delay before animation starts */
  delay?: number
  /** Custom variants — defaults to charFlip (chars) or wordBlurUp (words) */
  variants?: Variants
  /** 'chars' splits each character, 'words' splits each word */
  mode?: 'chars' | 'words'
  /** Whether to keep the style inline-block (default true) */
  inline?: boolean
}

const charFlipVariants: Variants = {
  hidden: { opacity: 0, y: '110%', rotateX: 45 },
  visible: {
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const wordBlurUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function SplitText({
  text,
  className = '',
  charDelay = 0.025,
  wordDelay = 0.06,
  delay = 0,
  variants,
  mode = 'words',
  inline = true,
}: SplitTextProps) {
  if (mode === 'chars') {
    return (
      <motion.span
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: charDelay, delayChildren: delay }}
        aria-label={text}
        style={{ display: inline ? 'inline-flex' : 'flex', overflow: 'hidden' }}
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={variants ?? charFlipVariants}
            aria-hidden
            style={{ display: 'inline-block', transformOrigin: 'bottom' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: wordDelay, delayChildren: delay }}
      aria-label={text}
      style={{ display: inline ? 'inline-flex' : 'flex', flexWrap: 'wrap' }}
    >
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={variants ?? wordBlurUpVariants}
          aria-hidden
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
