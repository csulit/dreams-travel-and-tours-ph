import SectionHeader from './components/SectionHeader'
import TestimonialCard from './components/TestimonialCard'
import { testimonials } from './data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="bg-dt-surface-light px-6 py-20 lg:px-30">
      <div className="flex flex-col items-center gap-12">
        <SectionHeader
          eyebrow="TRAVELER STORIES"
          title="What Our Travelers Say"
        />
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
