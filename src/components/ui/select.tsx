import { Select as SelectPrimitive } from '@base-ui/react/select'
import { ChevronDown, Check } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select(props: SelectPrimitive.Root.Props<string>) {
  return <SelectPrimitive.Root {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-11 w-full items-center justify-between rounded-lg border border-dt-border bg-dt-surface-light px-4 text-sm text-dt-heading outline-none transition-colors focus:border-dt-primary focus:ring-3 focus:ring-dt-primary/20 disabled:pointer-events-none disabled:opacity-50 data-[placeholder]:text-dt-muted',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <ChevronDown className="size-4 text-dt-muted" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectValue(props: SelectPrimitive.Value.Props) {
  return <SelectPrimitive.Value {...props} />
}

function SelectPortal(props: SelectPrimitive.Portal.Props) {
  return <SelectPrimitive.Portal {...props} />
}

function SelectPositioner({
  className,
  ...props
}: SelectPrimitive.Positioner.Props) {
  return (
    <SelectPrimitive.Positioner
      className={cn('z-[100]', className)}
      {...props}
    />
  )
}

function SelectPopup({
  className,
  ...props
}: SelectPrimitive.Popup.Props) {
  return (
    <SelectPrimitive.Popup
      className={cn(
        'max-h-[var(--available-height)] overflow-y-auto rounded-lg border border-dt-border bg-background p-1 shadow-lg outline-none transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      className={cn(
        'flex cursor-default items-center gap-2 rounded-md px-3 py-2 text-sm text-dt-heading outline-none select-none data-[highlighted]:bg-dt-surface-badge',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="flex size-4 items-center justify-center">
        <Check className="size-3.5" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectItem,
}
