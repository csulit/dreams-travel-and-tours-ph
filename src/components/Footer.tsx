import { Facebook, Instagram, Mail } from 'lucide-react'
import Logo from './Logo'

const quickLinks = ['Home', 'About Us', 'Tours', 'Services', 'Advocacy']
const popularTours = [
  'El Nido, Palawan',
  'Boracay Island',
  'Siargao Island',
  'Cebu City',
  'Batanes Islands',
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
      <div className="mx-auto flex max-w-360 flex-col gap-12 px-6 py-16 md:flex-row md:gap-20 lg:px-30">
        {/* Brand */}
        <div className="flex max-w-[320px] flex-col gap-5">
          <Logo variant="light" />
          <p className="text-sm leading-[1.7] text-dt-footer-text">
            Your trusted travel partner across the Philippines. Crafting
            unforgettable journeys since 2009.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Mail].map((Icon, i) => (
              <div
                key={i}
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
              key={link}
              href="#"
              className="text-sm text-dt-footer-text no-underline hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Popular Tours */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white">Popular Tours</h4>
          {popularTours.map((tour) => (
            <a
              key={tour}
              href="#"
              className="text-sm text-dt-footer-text no-underline hover:text-white"
            >
              {tour}
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
        <div className="mx-auto flex max-w-360 flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row lg:px-30">
          <span className="text-[13px] text-dt-footer-muted">
            &copy; {year} Dreams Travel &amp; Tours. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[13px] text-dt-footer-muted no-underline hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
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
