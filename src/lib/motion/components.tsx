import {
  m,
  useInView,
  useReducedMotion,
  type Variants,
} from 'motion/react'
import { useRef, type ComponentProps, type ElementType, type ReactNode } from 'react'
import { useFirstVisit } from './hooks'
import {
  fadeUp,
  reducedMotionFade,
  staggerContainer,
  staggerItem,
} from './variants'

type ScrollRevealProps = {
  children: ReactNode
  variants?: Variants
  as?: ElementType
} & Omit<ComponentProps<typeof m.div>, 'variants'>

export function ScrollReveal({
  children,
  variants = fadeUp,
  as: Tag = 'div',
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  const MotionTag = m.create(Tag as 'div')
  const activeVariants = shouldReduceMotion ? reducedMotionFade : variants

  return (
    <MotionTag
      ref={ref}
      variants={activeVariants}
      initial={isFirstVisit ? 'hidden' : false}
      animate={isFirstVisit ? (isInView ? 'visible' : 'hidden') : 'visible'}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

type StaggerGridProps = {
  children: ReactNode
  className?: string
}

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  return (
    <m.div
      ref={ref}
      variants={shouldReduceMotion ? reducedMotionFade : staggerContainer}
      initial={isFirstVisit ? 'hidden' : false}
      animate={isFirstVisit ? (isInView ? 'visible' : 'hidden') : 'visible'}
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
