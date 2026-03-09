import { createFileRoute } from '@tanstack/react-router'
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

export const Route = createFileRoute('/admin')({
  component: AdminRoute,
})

function AdminRoute() {
  return (
    <ToastProvider>
      <AdminLayout />
      <Toasts />
    </ToastProvider>
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
