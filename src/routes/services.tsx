import { createFileRoute } from '@tanstack/react-router'
import ServicesHeroBanner from '@/features/services/components/ServicesHeroBanner'
import OurServicesSection from '@/features/services/components/OurServicesSection'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      {
        title: 'Services | Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Airline ticketing, visa processing, and immigration services. View our complete list of visa fees and processing services for 20+ countries.',
      },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <main>
      <ServicesHeroBanner />
      <OurServicesSection />
    </main>
  )
}
