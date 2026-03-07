import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import SectionHeader from './components/SectionHeader'
import ServiceCard from './components/ServiceCard'
import { services } from './data/services'

export default function ServicesSection() {
  return (
    <section className="bg-background px-5 py-14 sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-10 sm:gap-14">
        <ScrollReveal>
          <SectionHeader
            eyebrow="WHAT WE OFFER"
            title="Travel Made Effortless"
            subtitle="From the moment you dream it to the moment you live it — we handle everything."
          />
        </ScrollReveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
