import { Button } from '@/components/ui/button'
import { ScrollReveal, scaleFade } from '@/lib/motion'

export default function ToursCTASection() {
  return (
    <section className="bg-dt-surface-cta px-5 py-10 sm:px-6 sm:py-16 lg:px-20 lg:py-25">
      <ScrollReveal variants={scaleFade}>
        <div className="gradient-cta mx-auto flex max-w-360 flex-col items-center gap-5 rounded-2xl px-5 py-12 sm:gap-7 sm:rounded-3xl sm:px-8 sm:py-16 lg:px-25 lg:py-20">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-dt-cta-eyebrow sm:text-xs sm:tracking-[4px]">
            READY TO EXPLORE?
          </span>
          <h2 className="max-w-200 text-center text-[clamp(1.75rem,5vw,52px)] font-extrabold leading-tight text-white">
            Start Your Journey Today
          </h2>
          <p className="max-w-145 text-center text-[15px] leading-relaxed text-dt-cta-sub sm:text-lg">
            Book your next Philippine adventure with Dreams Travel &amp; Tours.
            Let us craft the perfect itinerary for you.
          </p>
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button
              size="xl"
              className="rounded-lg bg-white px-10 py-4.5 text-[15px] font-bold text-dt-primary-dark sm:text-[17px] dark:text-[oklch(0.35_0.06_220)] hover:bg-white/90"
            >
              Plan My Trip
            </Button>
            <Button
              size="xl"
              className="rounded-lg bg-white/20 px-10 py-4.5 text-[15px] font-semibold text-white sm:text-[17px] hover:bg-white/30"
            >
              Contact Us
            </Button>
          </div>
          <p className="text-center text-[12px] text-dt-cta-trust sm:text-[13px]">
            No hidden fees &bull; Free consultation &bull; 24/7 support
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
