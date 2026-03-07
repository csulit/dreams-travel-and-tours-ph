import SectionHeader from './components/SectionHeader'
import ServiceCard from './components/ServiceCard'
import { services } from './data/services'

export default function ServicesSection() {
  return (
    <section className="bg-background px-6 py-20 lg:px-30">
      <div className="flex flex-col items-center gap-14">
        <SectionHeader
          eyebrow="WHAT WE OFFER"
          title="Travel Made Effortless"
          subtitle="From the moment you dream it to the moment you live it — we handle everything."
        />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
