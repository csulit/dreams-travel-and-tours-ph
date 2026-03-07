import { ScrollReveal, fadeIn } from '@/lib/motion'

export default function HeroBanner() {
  return (
    <ScrollReveal variants={fadeIn}>
      <section className="relative h-60 w-full overflow-hidden sm:h-80 lg:h-120">
        <img
          src="https://images.unsplash.com/photo-1736524535555-eeb4f4a67143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzE5MDczMzF8&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Philippine landscape"
          className="size-full object-cover"
          loading="eager"
        />
      </section>
    </ScrollReveal>
  )
}
