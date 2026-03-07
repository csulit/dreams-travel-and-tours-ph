import { Send, Hotel, Map, ShieldCheck, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Send,
  Hotel,
  Map,
  ShieldCheck,
}

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  const Icon = iconMap[icon]

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-dt-border bg-dt-surface-light p-8">
      <div className="flex size-13 items-center justify-center rounded-xl bg-dt-primary/20">
        {Icon && <Icon className="size-6 text-dt-primary" />}
      </div>
      <h3 className="text-xl font-bold text-dt-heading">{title}</h3>
      <p className="text-sm leading-relaxed text-dt-body">{description}</p>
    </div>
  )
}
