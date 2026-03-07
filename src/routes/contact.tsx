import { createFileRoute } from '@tanstack/react-router'
import ContactHeroBanner from '@/features/contact/components/ContactHeroBanner'
import ContactSection from '@/features/contact/components/ContactSection'
import ContactCTASection from '@/features/contact/components/ContactCTASection'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Contact | Dreams Travel & Tours',
      },
      {
        name: 'description',
        content:
          'Get in touch with Dreams Travel & Tours. Contact us for tour packages, visa processing, and immigration services. Visit our offices in Las Pinas City and Sta. Rosa, Laguna.',
      },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main>
      <ContactHeroBanner />
      <ContactSection />
      <ContactCTASection />
    </main>
  )
}
