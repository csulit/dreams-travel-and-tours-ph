import { m } from 'motion/react'
import { useMotionHover } from '@/lib/motion'
import type { Tour } from '../data/tours'

export default function TourPackageCard({ tour }: { tour: Tour }) {
  const hoverProps = useMotionHover({ y: -4 })

  return (
    <m.div
      {...hoverProps}
      className="flex flex-col overflow-hidden rounded-2xl border border-dt-border bg-background"
    >
      <div className="overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-lg font-bold text-dt-heading">{tour.name}</h3>

        <span className="w-fit rounded-full bg-dt-surface-badge px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-dt-primary">
          {tour.tag}
        </span>

        <p className="flex-1 text-sm leading-relaxed text-dt-body">
          {tour.description}
        </p>

        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-dt-muted">
            STARTS AT
          </span>
          <span className="text-xl font-extrabold text-dt-primary">
            {tour.price}
          </span>
        </div>
      </div>

      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <button
          type="button"
          className="w-full rounded-lg bg-dt-surface-badge py-3 text-sm font-bold text-dt-primary-dark transition-colors hover:bg-dt-surface-badge/80"
        >
          View Package &rarr;
        </button>
      </div>
    </m.div>
  )
}
