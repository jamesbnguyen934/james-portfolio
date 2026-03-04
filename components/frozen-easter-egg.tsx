'use client'

import { motion } from 'framer-motion'

function SnowflakeIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <g stroke={color} strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.5" />
        <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" strokeWidth="1.5" />
        <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" strokeWidth="1.5" />
        <line x1="12" y1="6" x2="9" y2="4" strokeWidth="1" />
        <line x1="12" y1="6" x2="15" y2="4" strokeWidth="1" />
        <line x1="12" y1="18" x2="9" y2="20" strokeWidth="1" />
        <line x1="12" y1="18" x2="15" y2="20" strokeWidth="1" />
        <line x1="6" y1="12" x2="4" y2="9" strokeWidth="1" />
        <line x1="6" y1="12" x2="4" y2="15" strokeWidth="1" />
        <line x1="18" y1="12" x2="20" y2="9" strokeWidth="1" />
        <line x1="18" y1="12" x2="20" y2="15" strokeWidth="1" />
      </g>
    </svg>
  )
}

const PALETTE = ['#a5f3fc', '#c4b5fd', '#e0f2fe', '#7dd3fc', '#ddd6fe', '#bfdbfe']

// 45 flakes — initial delays spread evenly over 7s so snowfall is
// continuous from the first frame, no "all start at once" burst.
const FLAKES = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  x: (i * 37 + 11) % 100,                  // 0–100 vw
  size: 8 + ((i * 3) % 4) * 4,             // 8 | 12 | 16 | 20 px
  duration: 3.5 + ((i * 7) % 10) * 0.35,   // 3.5–7 s
  delay: (i / 44) * 7,                      // 0–7 s spread
  drift: (((i * 17) % 15) - 7) * 18,       // ±126 px horizontal
  rotate: (i % 2 === 0 ? 1 : -1) * (120 + (i % 4) * 60),
  color: PALETTE[i % PALETTE.length],
  maxOpacity: 0.22 + ((i * 3) % 5) * 0.06, // 0.22–0.46
}))

export default function AmbientSnowflakes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {FLAKES.map((f) => (
        <motion.div
          key={f.id}
          className="absolute"
          style={{ left: `${f.x}%`, top: '-30px' }}
          initial={{ y: 0, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: 1500,
            x: f.drift,
            rotate: f.rotate,
            opacity: [0, f.maxOpacity, f.maxOpacity, 0],
          }}
          transition={{
            y:       { duration: f.duration, delay: f.delay, repeat: Infinity, repeatDelay: 0, ease: 'linear' },
            x:       { duration: f.duration, delay: f.delay, repeat: Infinity, repeatDelay: 0, ease: 'linear' },
            rotate:  { duration: f.duration, delay: f.delay, repeat: Infinity, repeatDelay: 0, ease: 'linear' },
            opacity: { duration: f.duration, delay: f.delay, repeat: Infinity, repeatDelay: 0, ease: 'linear', times: [0, 0.07, 0.90, 1] },
          }}
        >
          <SnowflakeIcon size={f.size} color={f.color} />
        </motion.div>
      ))}
    </div>
  )
}
