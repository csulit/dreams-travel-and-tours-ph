import {
  createFileRoute,
  Link,
  redirect,
  useRouter,
} from '@tanstack/react-router'
import { Toast } from '@base-ui/react/toast'
import AdminLayout from '@/features/admin/components/AdminLayout'
import {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from '@/components/ui/toast'
import { getSession } from '#/lib/auth-session.ts'

export const Route = createFileRoute('/admin')({
  beforeLoad: async () => {
    const session = await getSession()
    if (!session) throw redirect({ to: '/login' })
    return { user: session.user }
  },
  component: AdminRoute,
  errorComponent: AdminErrorComponent,
  notFoundComponent: AdminNotFoundComponent,
})

function AdminRoute() {
  return (
    <ToastProvider>
      <AdminLayout />
      <Toasts />
    </ToastProvider>
  )
}

function AdminErrorComponent({ error }: { error: Error }) {
  const router = useRouter()

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl font-extrabold text-dt-primary-dark sm:text-8xl">
        500
      </p>
      <h1 className="mt-4 text-2xl font-bold text-dt-heading sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-dt-body">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <button
        type="button"
        onClick={() => router.invalidate()}
        className="gradient-primary mt-8 rounded-md px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
      >
        Try Again
      </button>
    </main>
  )
}

function AdminNotFoundComponent() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl font-extrabold text-dt-primary-dark sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-dt-heading sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-dt-body">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        to="/admin/visa-fees"
        className="gradient-primary mt-8 inline-block rounded-md px-8 py-3 text-sm font-bold text-white no-underline transition hover:-translate-y-0.5"
      >
        Back to Dashboard
      </Link>
    </main>
  )
}

function Toasts() {
  const { toasts } = Toast.useToastManager()

  return (
    <ToastViewport>
      {toasts.map((toast) => (
        <ToastRoot key={toast.id} toast={toast}>
          <ToastTitle>{toast.title}</ToastTitle>
          {toast.description && (
            <ToastDescription>{toast.description}</ToastDescription>
          )}
          <ToastClose />
        </ToastRoot>
      ))}
    </ToastViewport>
  )
}
