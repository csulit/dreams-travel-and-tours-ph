import { Toast as ToastPrimitive } from '@base-ui/react/toast'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

function ToastProvider(props: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />
}

function ToastViewport({
  className,
  ...props
}: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      className={cn(
        'fixed right-0 bottom-0 z-[200] flex w-full max-w-sm flex-col gap-2 p-4',
        className,
      )}
      {...props}
    />
  )
}

const toastTypeStyles: Record<string, string> = {
  success: 'border-green-500/30 bg-green-50 dark:bg-green-950/30',
  error: 'border-red-500/30 bg-red-50 dark:bg-red-950/30',
}

function ToastRoot({
  className,
  ...props
}: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      className={(state) =>
        cn(
          'relative rounded-lg border border-dt-border bg-background p-4 pr-10 shadow-md transition-all data-[ending-style]:translate-x-full data-[ending-style]:opacity-0 data-[starting-style]:translate-x-full data-[starting-style]:opacity-0',
          typeof props.toast?.type === 'string' && toastTypeStyles[props.toast.type],
          typeof className === 'function' ? className(state) : className,
        )
      }
      {...props}
    />
  )
}

function ToastTitle({
  className,
  ...props
}: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      className={cn('text-sm font-semibold text-dt-heading', className)}
      {...props}
    />
  )
}

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      className={cn('mt-0.5 text-xs text-dt-body', className)}
      {...props}
    />
  )
}

function ToastClose({
  className,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      className={cn(
        'absolute top-3 right-3 rounded-md p-1 text-dt-muted transition-colors hover:text-dt-heading',
        className,
      )}
      {...props}
    >
      <X className="size-3.5" />
    </ToastPrimitive.Close>
  )
}

export {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
}
