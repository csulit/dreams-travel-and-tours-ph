import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import { Separator } from '@/components/ui/separator'
import { stats, historyParagraphs } from '../data/about'

export default function HistorySection() {
  return (
    <section className="bg-background px-5 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-6">
        <ScrollReveal>
          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1 bg-dt-border" />
            <h2 className="text-lg font-extrabold tracking-[3px] text-dt-primary-dark sm:text-2xl">
              OUR HISTORY
            </h2>
            <Separator className="flex-1 bg-dt-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col gap-5">
            {historyParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] leading-[1.7] text-dt-body sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <StaggerGrid className="mt-2 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-dt-surface-cta px-4 py-5 sm:px-10 sm:py-6">
                <span className="text-2xl font-extrabold text-dt-primary sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-dt-body sm:text-sm">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
