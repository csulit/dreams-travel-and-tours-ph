import { Target, Eye, Heart } from 'lucide-react'
import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import { Separator } from '@/components/ui/separator'
import { missionVisionMotto } from '../data/about'

const iconMap = { Target, Eye, Heart } as const

export default function MissionVisionMottoSection() {
  return (
    <section className="bg-dt-surface-light px-5 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-10 sm:gap-12">
        <ScrollReveal>
          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1 bg-dt-border" />
            <h2 className="text-center text-lg font-extrabold tracking-[2px] text-dt-primary-dark sm:text-2xl">
              MISSION - VISION - MOTTO
            </h2>
            <Separator className="flex-1 bg-dt-border" />
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {missionVisionMotto.map((item) => {
            const Icon = iconMap[item.icon]
            const isGradient = item.variant === 'gradient'

            return (
              <StaggerItem key={item.label}>
                <div
                  className={`flex h-full flex-col gap-4 rounded-2xl p-8 sm:p-10 ${
                    isGradient
                      ? 'gradient-primary'
                      : 'border border-dt-border bg-background'
                  }`}
                >
                  <div
                    className={`flex size-13 items-center justify-center rounded-xl ${
                      isGradient ? 'bg-white/20' : 'gradient-primary'
                    }`}
                  >
                    <Icon className="size-7 text-white" />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-[3px] ${
                      isGradient ? 'text-dt-cta-eyebrow' : 'text-dt-primary'
                    }`}
                  >
                    {item.label}
                  </span>
                  <h3
                    className={`text-xl font-extrabold sm:text-[22px] ${
                      isGradient ? 'text-white' : 'text-dt-heading'
                    }`}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className={`text-[15px] leading-[1.7] ${
                      isGradient ? 'text-dt-cta-sub' : 'text-dt-body'
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGrid>
      </div>
    </section>
  )
}
