import { m, useReducedMotion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  fadeIn,
  fadeUp,
  heroContainer,
  reducedMotionFade,
  scaleFade,
  staggerContainer,
  staggerItem,
  useFirstVisit,
} from '@/lib/motion'
import StatCard from '@/features/landing/components/StatCard'
import { heroImage, heroStats } from '../data/advocacy'

export default function AdvocacyHeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  const fade = shouldReduceMotion ? reducedMotionFade : fadeUp
  const fadeSimple = shouldReduceMotion ? reducedMotionFade : fadeIn
  const hero = shouldReduceMotion ? reducedMotionFade : heroContainer
  const scale = shouldReduceMotion ? reducedMotionFade : scaleFade
  const stagger = shouldReduceMotion ? reducedMotionFade : staggerContainer
  const item = shouldReduceMotion ? reducedMotionFade : staggerItem

  const initial = isFirstVisit ? ('hidden' as const) : (false as const)
  const animate = 'visible' as const

  return (
    <section className="flex w-full flex-col bg-background lg:min-h-180 lg:flex-row">
      {/* Left */}
      <m.div
        variants={hero}
        initial={initial}
        animate={animate}
        className="flex w-full flex-col justify-center gap-4 px-5 py-8 sm:gap-7 sm:px-6 sm:py-16 md:px-10 lg:w-1/2 lg:px-20 lg:py-25"
      >
        <m.div variants={fadeSimple}>
          <Badge
            variant="secondary"
            className="w-fit gap-2 rounded-full bg-dt-surface-badge px-4 py-2.5 text-xs font-semibold text-dt-primary sm:gap-2.5 sm:px-5 sm:py-5 sm:text-sm"
          >
            <span className="inline-block size-2 rounded-full bg-dt-primary sm:size-2.5" />
            Community Advocacy
          </Badge>
        </m.div>

        <m.div variants={fade} className="flex flex-col">
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Helping
          </h1>
          <h1 className="gradient-text text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight">
            Hands
          </h1>
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Together
          </h1>
        </m.div>

        <m.p
          variants={fade}
          className="max-w-140 text-[15px] leading-relaxed text-dt-body sm:text-[17px]"
        >
          We partner with local homes and shelters across the Philippines to
          provide food, supplies, and opportunities all year round.
        </m.p>

        <m.div
          variants={fade}
          className="flex w-full flex-wrap gap-3 sm:gap-4"
        >
          <Button variant="gradient" size="xl" className="flex-1 sm:flex-none">
            Donate Now
          </Button>
          <Button variant="soft" size="xl" className="flex-1 sm:flex-none">
            Volunteer With Us
          </Button>
        </m.div>

        <m.p
          variants={fadeSimple}
          className="text-[13px] text-dt-muted"
        >
          Supported by local partners and volunteers nationwide
        </m.p>
      </m.div>

      {/* Right */}
      <m.div
        variants={hero}
        initial={initial}
        animate={animate}
        className="flex w-full flex-col items-center justify-center gap-2.5 px-5 pb-8 pt-2 sm:gap-4 sm:p-6 md:px-10 lg:w-1/2 lg:p-10"
      >
        <m.img
          variants={scale}
          src={heroImage}
          alt="Community outreach volunteers helping local families"
          className="h-48 w-full rounded-2xl object-cover sm:h-80 lg:h-120 lg:rounded-3xl"
        />
        <m.div
          variants={stagger}
          className="grid w-full grid-cols-3 gap-2 sm:gap-4"
        >
          {heroStats.map((stat) => (
            <m.div key={stat.label} variants={item}>
              <StatCard value={stat.value} label={stat.label} />
            </m.div>
          ))}
        </m.div>
      </m.div>
    </section>
  )
}
