import { Field as FieldPrimitive } from '@base-ui/react/field'

import { cn } from '@/lib/utils'

function Field(props: FieldPrimitive.Root.Props) {
  return <FieldPrimitive.Root {...props} />
}

function FieldLabel({
  className,
  ...props
}: FieldPrimitive.Label.Props) {
  return (
    <FieldPrimitive.Label
      className={cn('text-[13px] font-semibold text-dt-heading', className)}
      {...props}
    />
  )
}

function FieldError({
  className,
  ...props
}: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      className={cn('text-xs text-red-500', className)}
      {...props}
    />
  )
}

function FieldControl({
  className,
  ...props
}: FieldPrimitive.Control.Props) {
  return (
    <FieldPrimitive.Control
      className={cn(
        'h-11 w-full rounded-lg border border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading outline-none transition-colors placeholder:text-dt-muted focus:border-dt-primary focus:ring-3 focus:ring-dt-primary/20 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Field, FieldLabel, FieldError, FieldControl }
