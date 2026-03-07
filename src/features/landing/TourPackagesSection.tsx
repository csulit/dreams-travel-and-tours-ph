import SectionHeader from './components/SectionHeader'
import TourCard from './components/TourCard'
import { tours } from './data/tours'

export default function TourPackagesSection() {
  return (
    <section className="bg-dt-surface-light px-6 py-20 lg:px-30">
      <div className="flex flex-col items-center gap-14">
        <SectionHeader
          eyebrow="EXPLORE PHILIPPINES"
          title="Our Tour Packages"
          subtitle="Handpicked destinations with all-inclusive packages for every type of traveler."
        />
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <TourCard key={tour.name} {...tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
