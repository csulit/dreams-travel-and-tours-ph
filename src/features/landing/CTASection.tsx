import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="bg-dt-surface-cta px-6 py-16 lg:px-30 lg:py-25">
      <div className="gradient-cta flex flex-col items-center gap-7 rounded-3xl px-6 py-16 lg:px-25 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[4px] text-dt-cta-eyebrow">
          READY TO EXPLORE?
        </span>
        <h2 className="max-w-200 text-center text-4xl font-extrabold text-white lg:text-[52px] lg:leading-tight">
          Start Your Journey Today
        </h2>
        <p className="max-w-145 text-center text-lg leading-relaxed text-dt-cta-sub">
          Book your next Philippine adventure with Dreams Travel &amp; Tours.
          Let us craft the perfect itinerary for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="xl"
            className="rounded-lg bg-white px-10 py-4.5 text-[17px] font-bold text-dt-primary-dark dark:text-[oklch(0.35_0.06_220)] hover:bg-white/90"
          >
            Plan My Trip
          </Button>
          <Button
            size="xl"
            className="rounded-lg bg-white/20 px-10 py-4.5 text-[17px] font-semibold text-white hover:bg-white/30"
          >
            Contact Us
          </Button>
        </div>
        <p className="text-[13px] text-dt-cta-trust">
          No hidden fees &bull; Free consultation &bull; 24/7 support
        </p>
      </div>
    </section>
  )
}
