import { ScrollReveal, fadeIn } from '@/lib/motion'
import { heroImage } from '../data/services'

export default function ServicesHeroBanner() {
  return (
    <ScrollReveal variants={fadeIn}>
      <section className="relative h-60 w-full overflow-hidden sm:h-80 lg:h-120">
        <img
          src={heroImage}
          alt="Travel services landscape"
          className="size-full object-cover"
          loading="eager"
        />
      </section>
    </ScrollReveal>
  )
}
