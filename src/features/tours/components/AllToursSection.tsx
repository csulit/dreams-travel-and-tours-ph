import { useState } from 'react'
import SectionHeader from '@/features/landing/components/SectionHeader'
import { ScrollReveal, StaggerGrid, StaggerItem, fadeUp } from '@/lib/motion'
import { tours, filterCategories, type FilterCategory } from '../data/tours'
import TourPackageCard from './TourPackageCard'

export default function AllToursSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All')

  const filteredTours =
    activeFilter === 'All'
      ? tours
      : tours.filter((tour) => tour.categories.includes(activeFilter))

  return (
    <section className="bg-background px-5 py-10 sm:px-6 sm:py-16 lg:px-20 lg:py-25">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-8 sm:gap-12">
        <ScrollReveal variants={fadeUp}>
          <SectionHeader
            eyebrow="POPULAR DESTINATIONS"
            title="Explore Our Tour Packages"
            subtitle="Handpicked destinations across the Philippines — from tropical islands to cultural cities and thrilling adventures."
          />
        </ScrollReveal>

        {/* Filter pills */}
        <ScrollReveal variants={fadeUp}>
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeFilter === category
                    ? 'gradient-primary text-white'
                    : 'border border-dt-border bg-background text-dt-body hover:border-dt-primary/30 hover:text-dt-primary-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tour cards grid */}
        <StaggerGrid className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredTours.map((tour) => (
            <StaggerItem key={tour.name}>
              <TourPackageCard tour={tour} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
