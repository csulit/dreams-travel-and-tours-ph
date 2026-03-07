import {
  m,
  useReducedMotion,
  type Variants,
} from 'motion/react'
import { type ComponentProps, type ReactNode } from 'react'
import { useFirstVisit } from './hooks'
import {
  fadeUp,
  reducedMotionFade,
  staggerContainer,
  staggerItem,
} from './variants'

const defaultViewport = { once: true, amount: 0.2 } as const

type ScrollRevealProps = {
  children: ReactNode
  variants?: Variants
} & Omit<ComponentProps<typeof m.div>, 'variants'>

export function ScrollReveal({
  children,
  variants = fadeUp,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  const activeVariants = shouldReduceMotion ? reducedMotionFade : variants

  return (
    <m.div
      variants={activeVariants}
      initial={isFirstVisit ? 'hidden' : false}
      whileInView={isFirstVisit ? 'visible' : undefined}
      viewport={defaultViewport}
      {...props}
    >
      {children}
    </m.div>
  )
}

type StaggerGridProps = {
  children: ReactNode
  className?: string
}

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  return (
    <m.div
      variants={shouldReduceMotion ? reducedMotionFade : staggerContainer}
      initial={isFirstVisit ? 'hidden' : false}
      whileInView={isFirstVisit ? 'visible' : undefined}
      viewport={defaultViewport}
      className={className}
    >
      {children}
    </m.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      variants={shouldReduceMotion ? reducedMotionFade : staggerItem}
      className={className}
    >
      {children}
    </m.div>
  )
}
