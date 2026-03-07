import { useReducedMotion } from 'motion/react'

type HoverConfig = {
  y?: number
  scale?: number
}

export function useMotionHover(config: HoverConfig) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return {}
  }

  return {
    whileHover: config,
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
  }
}
