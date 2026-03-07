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
} from '@/lib/motion'
import StatCard from './components/StatCard'

const heroImage =
  'https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDYyMzV8&ixlib=rb-4.1.0&q=80&w=1080'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const fade = shouldReduceMotion ? reducedMotionFade : fadeUp
  const fadeSimple = shouldReduceMotion ? reducedMotionFade : fadeIn
  const hero = shouldReduceMotion ? reducedMotionFade : heroContainer
  const scale = shouldReduceMotion ? reducedMotionFade : scaleFade
  const stagger = shouldReduceMotion ? reducedMotionFade : staggerContainer
  const item = shouldReduceMotion ? reducedMotionFade : staggerItem

  return (
    <section className="flex w-full flex-col bg-background lg:min-h-180 lg:flex-row">
      {/* Left */}
      <m.div
        variants={hero}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col justify-center gap-4 px-5 py-8 sm:gap-7 sm:px-6 sm:py-16 md:px-10 lg:w-1/2 lg:px-20 lg:py-25"
      >
        <m.div variants={fadeSimple}>
          <Badge
            variant="secondary"
            className="w-fit gap-2 rounded-full bg-dt-surface-badge px-4 py-2.5 text-xs font-semibold text-dt-primary sm:gap-2.5 sm:px-5 sm:py-5 sm:text-sm"
          >
            <span className="inline-block size-2 rounded-full bg-dt-primary sm:size-2.5" />
            Discover the Philippines
          </Badge>
        </m.div>

        <m.div variants={fade} className="flex flex-col">
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Your Dream
          </h1>
          <h1 className="gradient-text text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight">
            Adventure
          </h1>
          <h1 className="text-[clamp(2rem,8vw,72px)] font-extrabold leading-tight text-dt-heading">
            Starts Here
          </h1>
        </m.div>

        <m.p
          variants={fade}
          className="max-w-140 text-[15px] leading-relaxed text-dt-body sm:text-[17px]"
        >
          Experience the beauty of the Philippines with expertly crafted travel
          packages. From pristine beaches to vibrant cities — we take you there.
        </m.p>

        <m.div
          variants={fade}
          className="flex w-full flex-wrap gap-3 sm:gap-4"
        >
          <Button variant="gradient" size="xl" className="flex-1 sm:flex-none">
            Explore Tours
          </Button>
          <Button variant="soft" size="xl" className="flex-1 sm:flex-none">
            View Packages
          </Button>
        </m.div>

        <m.p
          variants={fadeSimple}
          className="text-[13px] text-dt-muted"
        >
          &#9733;&#9733;&#9733;&#9733;&#9733;&nbsp;&nbsp;Trusted by 10,000+
          travelers across the Philippines
        </m.p>
      </m.div>

      {/* Right */}
      <m.div
        variants={hero}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center justify-center gap-2.5 px-5 pb-8 pt-2 sm:gap-4 sm:p-6 md:px-10 lg:w-1/2 lg:p-10"
      >
        <m.img
          variants={scale}
          src={heroImage}
          alt="Beautiful Philippine beach destination"
          className="h-48 w-full rounded-2xl object-cover sm:h-80 lg:h-120 lg:rounded-3xl"
        />
        <m.div
          variants={stagger}
          className="grid w-full grid-cols-3 gap-2 sm:gap-4"
        >
          <m.div variants={item}>
            <StatCard value="10K+" label="Happy Travelers" />
          </m.div>
          <m.div variants={item}>
            <StatCard value="50+" label="Destinations" />
          </m.div>
          <m.div variants={item}>
            <StatCard value="15+" label="Years Experience" />
          </m.div>
        </m.div>
      </m.div>
    </section>
  )
}
