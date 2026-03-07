import { m } from 'motion/react'
import { Separator } from '@/components/ui/separator'
import { useMotionHover } from '@/lib/motion'

export default function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string
  name: string
  title: string
}) {
  const hoverProps = useMotionHover({ y: -2 })

  return (
    <m.div
      {...hoverProps}
      className="flex flex-col gap-5 rounded-2xl border border-dt-border bg-background p-6 sm:p-8"
    >
      <span className="text-lg text-dt-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      <p className="text-[15px] leading-[1.7] text-dt-quote">{quote}</p>
      <Separator className="bg-dt-divider" />
      <div className="flex items-center gap-3">
        <div className="gradient-primary size-11 rounded-full" />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-dt-heading">{name}</span>
          <span className="text-xs text-dt-muted">{title}</span>
        </div>
      </div>
    </m.div>
  )
}
