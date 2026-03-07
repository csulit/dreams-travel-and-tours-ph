import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { AnimatePresence, m } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Tours', to: '#' },
  { label: 'Services', to: '#' },
  { label: 'Contact', to: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-dt-border bg-background">
      <nav className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-20">
        <Link to="/" className="no-underline">
          <Logo />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="text-sm font-medium text-dt-body no-underline transition-colors hover:text-dt-primary-dark"
              activeProps={{ className: 'text-sm font-bold text-dt-primary-dark no-underline transition-colors hover:text-dt-primary-dark' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="gradient" className="hidden rounded-md px-7 py-5 text-sm font-bold lg:inline-flex">
            Book Now
          </Button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-10 items-center justify-center rounded-full border border-dt-border bg-dt-surface-badge text-dt-heading shadow-sm transition hover:-translate-y-0.5 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <m.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-5" />
                </m.span>
              ) : (
                <m.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-5" />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-dt-border bg-background lg:hidden"
          >
            <div className="px-5 pb-5 pt-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    activeOptions={{ exact: link.to === '/' }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-[15px] font-medium text-dt-body no-underline transition-colors hover:bg-dt-surface-badge"
                    activeProps={{ className: 'rounded-lg px-4 py-3 text-[15px] font-bold text-dt-primary-dark no-underline transition-colors hover:bg-dt-surface-badge' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 px-4">
                <Button variant="gradient" className="w-full rounded-md py-3 text-sm font-bold">
                  Book Now
                </Button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
