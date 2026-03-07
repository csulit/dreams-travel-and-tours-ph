import { ScrollReveal, StaggerGrid, StaggerItem } from '@/lib/motion'
import SectionHeader from './components/SectionHeader'
import TestimonialCard from './components/TestimonialCard'
import { testimonials } from './data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="bg-dt-surface-light px-5 py-14 sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-10 sm:gap-12">
        <ScrollReveal>
          <SectionHeader
            eyebrow="TRAVELER STORIES"
            title="What Our Travelers Say"
          />
        </ScrollReveal>
        <StaggerGrid className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
