import { ChevronUp, ChevronDown, Pencil, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { centavosToPHP } from '@/lib/format-currency'
import type { VisaFee } from '#/db/schema.ts'

const typeBadge: Record<VisaFee['type'], string> = {
  main: 'bg-dt-primary/10 text-dt-primary-dark',
  sub: 'bg-dt-surface-badge text-dt-body',
  info: 'border border-dt-border text-dt-muted',
}

interface VisaFeeRowProps {
  visaFee: VisaFee
  onEdit: (fee: VisaFee) => void
  onDelete: (fee: VisaFee) => void
  onMoveUp: (fee: VisaFee) => void
  onMoveDown: (fee: VisaFee) => void
  isFirst: boolean
  isLast: boolean
  depth: number
}

export default function VisaFeeRow({
  visaFee,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
  depth,
}: VisaFeeRowProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-dt-surface-badge/50',
        depth > 0 && 'ml-6 border-l-2 border-dt-primary/20 pl-4',
      )}
    >
      {/* Reorder buttons */}
      <div className="flex flex-col gap-0.5">
        <Button
          variant="ghost"
          size="icon-xs"
          disabled={isFirst}
          onClick={() => onMoveUp(visaFee)}
          aria-label="Move up"
        >
          <ChevronUp className="size-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon-xs"
          disabled={isLast}
          onClick={() => onMoveDown(visaFee)}
          aria-label="Move down"
        >
          <ChevronDown className="size-3" />
        </Button>
      </div>

      {/* Label + type badge */}
      <div className="flex min-w-0 flex-1 items-center gap-2.5">
        <span className="truncate text-sm font-medium text-dt-heading">
          {visaFee.label}
        </span>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${typeBadge[visaFee.type]}`}
        >
          {visaFee.type}
        </span>
      </div>

      {/* Fee */}
      <span className="shrink-0 text-sm font-semibold tabular-nums text-dt-heading">
        {visaFee.feeCentavos != null
          ? centavosToPHP(visaFee.feeCentavos)
          : '—'}
      </span>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={() => onEdit(visaFee)}
          aria-label={`Edit ${visaFee.label}`}
        >
          <Pencil className="size-3" />
        </Button>
        <Button
          variant="destructive"
          size="icon-xs"
          onClick={() => onDelete(visaFee)}
          aria-label={`Delete ${visaFee.label}`}
        >
          <Trash2 className="size-3" />
        </Button>
      </div>
    </div>
  )
}
