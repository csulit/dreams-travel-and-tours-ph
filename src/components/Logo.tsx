import { cn } from '@/lib/utils'

export default function Logo({
  variant = 'dark',
}: {
  variant?: 'light' | 'dark'
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="gradient-primary size-9 rounded-full" />
      <div className="flex flex-col">
        <span
          className={cn(
            'text-[22px] font-extrabold tracking-[4px]',
            variant === 'dark' ? 'text-dt-primary-dark' : 'text-white',
          )}
        >
          DREAMS
        </span>
        <span
          className={cn(
            'text-[11px] tracking-[2px]',
            variant === 'dark' ? 'text-dt-primary' : 'text-dt-footer-text',
          )}
        >
          Travel &amp; Tours
        </span>
      </div>
    </div>
  )
}
