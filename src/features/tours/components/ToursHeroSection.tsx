import { m, useReducedMotion } from 'motion/react'
import { Search } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  fadeUp,
  heroContainer,
  reducedMotionFade,
  scaleFade,
  useFirstVisit,
} from '@/lib/motion'

const heroImage =
  'https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDYyMzV8&ixlib=rb-4.1.0&q=80&w=1080'

export default function ToursHeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const isFirstVisit = useFirstVisit()

  const fade = shouldReduceMotion ? reducedMotionFade : fadeUp
  const hero = shouldReduceMotion ? reducedMotionFade : heroContainer
  const scale = shouldReduceMotion ? reducedMotionFade : scaleFade

  const initial = isFirstVisit ? ('hidden' as const) : (false as const)
  const animate = 'visible' as const

  return (
    <section className="relative flex min-h-120 items-center justify-center overflow-hidden sm:min-h-140 lg:min-h-160">
      {/* Background image */}
      <m.img
        variants={scale}
        initial={initial}
        animate={animate}
        src={heroImage}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <m.div
        variants={hero}
        initial={initial}
        animate={animate}
        className="relative z-10 flex max-w-200 flex-col items-center gap-5 px-5 py-16 text-center sm:gap-7 sm:px-6 lg:px-20"
      >
        <m.div variants={fade}>
          <Badge
            variant="secondary"
            className="w-fit gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:py-5 sm:text-sm"
          >
            <span className="inline-block size-2 rounded-full bg-white sm:size-2.5" />
            Explore the Philippines
          </Badge>
        </m.div>

        <m.h1
          variants={fade}
          className="text-[clamp(2rem,7vw,60px)] font-extrabold leading-tight text-white"
        >
          Discover Your Next Adventure
        </m.h1>

        <m.p
          variants={fade}
          className="max-w-140 text-[15px] leading-relaxed text-white/80 sm:text-[17px]"
        >
          Browse our curated collection of Philippine travel packages.
          From pristine beaches to vibrant cities — find your perfect
          getaway.
        </m.p>

        {/* Search bar (decorative) */}
        <m.div
          variants={fade}
          className="flex w-full max-w-130 items-center gap-3 rounded-full bg-white/15 px-5 py-3 backdrop-blur-sm sm:px-6 sm:py-4"
        >
          <Search className="size-5 shrink-0 text-white/60" />
          <span className="flex-1 text-left text-sm text-white/50 sm:text-[15px]">
            Search destinations, tours, activities...
          </span>
          <Button
            variant="gradient"
            className="rounded-full px-6 py-2.5 text-sm font-bold sm:px-8"
          >
            Search
          </Button>
        </m.div>
      </m.div>
    </section>
  )
}
