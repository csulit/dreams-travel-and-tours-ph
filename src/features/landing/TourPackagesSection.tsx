import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import SectionHeader from './components/SectionHeader'
import TourCard from './components/TourCard'
import { tours } from './data/tours'

export default function TourPackagesSection() {
  return (
    <section className="bg-dt-surface-light px-5 py-14 sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-10 sm:gap-14">
        <ScrollReveal>
          <SectionHeader
            eyebrow="EXPLORE PHILIPPINES"
            title="Our Tour Packages"
            subtitle="Handpicked destinations with all-inclusive packages for every type of traveler."
          />
        </ScrollReveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <StaggerItem key={tour.name}>
              <TourCard {...tour} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
