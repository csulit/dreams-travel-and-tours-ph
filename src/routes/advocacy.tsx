import { createFileRoute } from '@tanstack/react-router'
import AdvocacyHeroSection from '@/features/advocacy/components/AdvocacyHeroSection'
import AdvocacyOutreachSection from '@/features/advocacy/components/AdvocacyOutreachSection'
import AdvocacyCTASection from '@/features/advocacy/components/AdvocacyCTASection'

export const Route = createFileRoute('/advocacy')({
  head: () => ({
    meta: [
      {
        title: 'Advocacy | Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Learn about our community advocacy program — partnering with local homes and shelters across the Philippines to provide food, supplies, and opportunities.',
      },
    ],
  }),
  component: AdvocacyPage,
})

function AdvocacyPage() {
  return (
    <main>
      <AdvocacyHeroSection />
      <AdvocacyOutreachSection />
      <AdvocacyCTASection />
    </main>
  )
}
