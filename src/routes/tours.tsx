import { createFileRoute } from '@tanstack/react-router'
import ToursHeroSection from '@/features/tours/components/ToursHeroSection'
import AllToursSection from '@/features/tours/components/AllToursSection'
import ToursCTASection from '@/features/tours/components/ToursCTASection'

export const Route = createFileRoute('/tours')({
  head: () => ({
    meta: [
      {
        title: 'Tours | Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Explore curated Philippine travel packages — from pristine beaches and island hopping to city tours and thrilling adventures across 15+ destinations.',
      },
    ],
  }),
  component: ToursPage,
})

function ToursPage() {
  return (
    <main>
      <ToursHeroSection />
      <AllToursSection />
      <ToursCTASection />
    </main>
  )
}
