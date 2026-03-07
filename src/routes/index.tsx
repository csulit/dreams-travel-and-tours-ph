import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/features/landing/HeroSection'
import TourPackagesSection from '@/features/landing/TourPackagesSection'
import ServicesSection from '@/features/landing/ServicesSection'
import TestimonialsSection from '@/features/landing/TestimonialsSection'
import CTASection from '@/features/landing/CTASection'

export const Route = createFileRoute('/')({ component: LandingPage })

function LandingPage() {
  return (
    <main>
      <HeroSection />
      <TourPackagesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
