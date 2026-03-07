import { Facebook, Instagram, Mail } from 'lucide-react'
import Logo from './Logo'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Tours', href: '/tours' },
  { label: 'Services', href: '/services' },
  { label: 'Advocacy', href: '/advocacy' },
]
const popularTours = [
  { label: 'El Nido, Palawan', href: '/tours/el-nido-palawan' },
  { label: 'Boracay Island', href: '/tours/boracay-island' },
  { label: 'Siargao Island', href: '/tours/siargao-island' },
  { label: 'Cebu City', href: '/tours/cebu-city' },
  { label: 'Batanes Islands', href: '/tours/batanes-islands' },
]
const contactInfo = [
  'info@dreamstravelph.com',
  '+63 (02) 123-4567',
  'Makati City, Metro Manila',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dt-footer-bg">
      {/* Main */}
      <div className="mx-auto grid max-w-360 grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 sm:py-16 lg:grid-cols-4 lg:gap-12 lg:px-20">
        {/* Brand */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="text-sm leading-[1.7] text-dt-footer-text">
            Your trusted travel partner across the Philippines. Crafting
            unforgettable journeys since 2009.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, name: 'facebook' },
              { Icon: Instagram, name: 'instagram' },
              { Icon: Mail, name: 'mail' },
            ].map(({ Icon, name }) => (
              <div
                key={name}
                className="flex size-9 items-center justify-center rounded-lg bg-white/8"
              >
                <Icon className="size-4 text-dt-footer-icon" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white">Quick Links</h4>
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-dt-footer-text no-underline hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Popular Tours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white">Popular Tours</h4>
          {popularTours.map((tour) => (
            <a
              key={tour.label}
              href={tour.href}
              className="text-sm text-dt-footer-text no-underline hover:text-white"
            >
              {tour.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white">Contact</h4>
          {contactInfo.map((info) => (
            <span key={info} className="text-sm text-dt-footer-text">
              {info}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-white/6">
        <div className="mx-auto flex max-w-360 flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-6 sm:py-6 sm:text-left lg:px-20">
          <span className="text-[13px] text-dt-footer-muted">
            &copy; {year} Dreams Travel &amp; Tours. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-[13px] text-dt-footer-muted no-underline hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[13px] text-dt-footer-muted no-underline hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
