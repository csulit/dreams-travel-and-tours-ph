import { Link } from '@tanstack/react-router'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { Button } from './ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '#' },
  { label: 'Tours', to: '#' },
  { label: 'Services', to: '#' },
  { label: 'Contact', to: '#' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dt-border bg-background">
      <nav className="mx-auto flex h-20 max-w-360 items-center justify-between px-6 lg:px-20">
        <Link to="/" className="no-underline">
          <Logo />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium no-underline transition-colors hover:text-dt-primary-dark ${
                link.label === 'Home' ? 'text-dt-primary-dark' : 'text-dt-body'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="gradient" className="hidden rounded-md px-7 py-3 text-sm font-bold lg:inline-flex">
            Book Now
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
