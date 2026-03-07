import { createFileRoute } from '@tanstack/react-router'
import HeroBanner from '@/features/about/components/HeroBanner'
import HistorySection from '@/features/about/components/HistorySection'
import MissionVisionMottoSection from '@/features/about/components/MissionVisionMottoSection'
import TeamSection from '@/features/about/components/TeamSection'
import AboutCTASection from '@/features/about/components/AboutCTASection'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About Us | Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Learn about Dreams Travel and Tours — our history, mission, vision, and the passionate team behind your dream Philippine vacations since 2010.',
      },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      <HeroBanner />
      <HistorySection />
      <MissionVisionMottoSection />
      <TeamSection />
      <AboutCTASection />
    </main>
  )
}
