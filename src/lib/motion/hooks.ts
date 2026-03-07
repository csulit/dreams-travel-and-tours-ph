import { useLocation } from '@tanstack/react-router'
import { useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

const visitedRoutes = new Set<string>()

export function useFirstVisit(): boolean {
  const pathname = useLocation({ select: (loc) => loc.pathname })
  const [isFirst] = useState(() => !visitedRoutes.has(pathname))

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      visitedRoutes.add(pathname)
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return isFirst
}

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
