import { Link, Outlet, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, LogOut } from 'lucide-react'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { authClient } from '#/lib/auth-client.ts'

export default function AdminLayout() {
  const navigate = useNavigate()

  async function handleSignOut() {
    await authClient.signOut()
    navigate({ to: '/login' })
  }

  return (
    <div className="min-h-screen bg-dt-surface-light">
      <header className="sticky top-0 z-40 border-b border-dt-border bg-background">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="rounded-md bg-dt-surface-badge px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-dt-primary">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium text-dt-body no-underline transition-colors hover:text-dt-primary-dark"
            >
              <ArrowLeft className="size-4" />
              Back to Site
            </Link>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="size-4" />
              Sign out
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
    </div>
  )
}
