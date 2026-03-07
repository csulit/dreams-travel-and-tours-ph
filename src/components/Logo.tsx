import { cn } from '@/lib/utils'

export default function Logo({
  variant = 'dark',
}: {
  variant?: 'light' | 'dark'
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="gradient-primary size-8 rounded-full sm:size-9" />
      <div className="flex flex-col">
        <span
          className={cn(
            'text-lg font-extrabold tracking-[3px] sm:text-[22px] sm:tracking-[4px]',
            variant === 'dark' ? 'text-dt-primary-dark' : 'text-white',
          )}
        >
          DREAMS
        </span>
        <span
          className={cn(
            'text-[10px] tracking-[1.5px] sm:text-[11px] sm:tracking-[2px]',
            variant === 'dark' ? 'text-dt-primary' : 'text-dt-footer-text',
          )}
        >
          Travel &amp; Tours
        </span>
      </div>
    </div>
  )
}
