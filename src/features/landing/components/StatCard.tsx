import { m } from 'motion/react'
import { useMotionHover } from '@/lib/motion'

export default function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const hoverProps = useMotionHover({ scale: 1.03 })

  return (
    <m.div
      {...hoverProps}
      className="flex flex-col items-center gap-1 rounded-xl bg-dt-surface-cta px-3 py-3 sm:px-5 sm:py-3.5"
    >
      <span className="text-lg font-extrabold text-dt-primary sm:text-[22px]">{value}</span>
      <span className="text-[10px] text-dt-body sm:text-[11px]">{label}</span>
    </m.div>
  )
}
