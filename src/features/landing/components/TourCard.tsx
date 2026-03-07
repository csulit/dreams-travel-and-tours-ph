import { m } from 'motion/react'
import { Button } from '@/components/ui/button'
import { useMotionHover } from '@/lib/motion'

export default function TourCard({
  name,
  price,
  image,
}: {
  name: string
  price: string
  image: string
}) {
  const hoverProps = useMotionHover({ y: -4 })

  return (
    <m.div
      {...hoverProps}
      className="flex flex-col overflow-hidden rounded-2xl border border-dt-border bg-background"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-103 sm:h-55"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-dt-heading">{name}</h3>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-semibold uppercase tracking-[2px] text-dt-muted">
            STARTS AT
          </span>
          <span className="text-[22px] font-extrabold text-dt-primary">
            {price}
          </span>
        </div>
        <Button variant="soft" className="w-full justify-center rounded-lg py-3">
          Read More
        </Button>
      </div>
    </m.div>
  )
}
