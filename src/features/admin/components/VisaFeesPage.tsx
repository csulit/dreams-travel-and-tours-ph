import { useState, useMemo, useCallback } from 'react'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  useVisaFees,
  useCreateVisaFee,
  useUpdateVisaFee,
  useDeleteVisaFee,
  useReorderVisaFees,
} from '../hooks/use-visa-fees'
import VisaFeeRow from './VisaFeeRow'
import VisaFeeFormDialog from './VisaFeeFormDialog'
import DeleteConfirmDialog from './DeleteConfirmDialog'
import type { VisaFee } from '#/db/schema.ts'

export default function VisaFeesPage() {
  const { data: allFees } = useVisaFees()
  const createMutation = useCreateVisaFee()
  const updateMutation = useUpdateVisaFee()
  const deleteMutation = useDeleteVisaFee()
  const reorderMutation = useReorderVisaFees()

  // Dialog state
  const [formOpen, setFormOpen] = useState(false)
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create')
  const [editingFee, setEditingFee] = useState<VisaFee | undefined>()
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deletingFee, setDeletingFee] = useState<VisaFee | undefined>()

  // Split data by category
  const { standard, additional, parentOptions, childrenMap, nextSortOrder } =
    useMemo(() => {
      const std = allFees.filter((f) => f.category === 'standard')
      const add = allFees.filter((f) => f.category === 'additional')

      const parents = allFees
        .filter((f) => f.type === 'main')
        .map((f) => ({ id: f.id, label: f.label }))

      const childMap = new Map<number, VisaFee[]>()
      for (const fee of allFees) {
        if (fee.parentId != null) {
          const existing = childMap.get(fee.parentId) ?? []
          existing.push(fee)
          childMap.set(fee.parentId, existing)
        }
      }

      const maxSort = allFees.reduce(
        (max, f) => Math.max(max, f.sortOrder),
        -1,
      )

      return {
        standard: {
          left: std.filter((f) => f.gridColumn === 'left'),
          right: std.filter((f) => f.gridColumn === 'right'),
        },
        additional: add,
        parentOptions: parents,
        childrenMap: childMap,
        nextSortOrder: maxSort + 1,
      }
    }, [allFees])

  // Build additional hierarchy: main entries with their children inline
  const additionalHierarchy = useMemo(() => {
    const mains = additional.filter((f) => f.type === 'main')
    const result: { fee: VisaFee; depth: number }[] = []
    for (const main of mains) {
      result.push({ fee: main, depth: 0 })
      const children = childrenMap.get(main.id) ?? []
      for (const child of children) {
        result.push({ fee: child, depth: 1 })
      }
    }
    // Include orphaned non-main entries (shouldn't normally happen)
    const accounted = new Set(result.map((r) => r.fee.id))
    for (const fee of additional) {
      if (!accounted.has(fee.id)) {
        result.push({ fee, depth: 0 })
      }
    }
    return result
  }, [additional, childrenMap])

  const additionalFlatFees = useMemo(
    () => additionalHierarchy.map((h) => h.fee),
    [additionalHierarchy],
  )

  const handleEdit = useCallback((fee: VisaFee) => {
    setFormMode('edit')
    setEditingFee(fee)
    setFormOpen(true)
  }, [])

  const handleCreate = useCallback(() => {
    setFormMode('create')
    setEditingFee(undefined)
    setFormOpen(true)
  }, [])

  const handleDelete = useCallback((fee: VisaFee) => {
    setDeletingFee(fee)
    setDeleteOpen(true)
  }, [])

  const handleSwap = useCallback(
    (list: VisaFee[], index: number, direction: -1 | 1) => {
      const target = list[index + direction]
      if (!target) return
      const current = list[index]
      reorderMutation.mutate({
        data: {
          items: [
            { id: current.id, sortOrder: target.sortOrder },
            { id: target.id, sortOrder: current.sortOrder },
          ],
        },
      })
    },
    [reorderMutation],
  )

  const handleFormSubmit = useCallback(
    (data: {
      label: string
      category: 'standard' | 'additional'
      type: 'main' | 'sub' | 'info'
      feeCentavos: number | null
      gridColumn: 'left' | 'right' | null
      parentId: number | null
      sortOrder: number
    }) => {
      if (formMode === 'create') {
        createMutation.mutate(
          { data },
          { onSuccess: () => setFormOpen(false) },
        )
      } else if (editingFee) {
        updateMutation.mutate(
          {
            data: {
              id: editingFee.id,
              label: data.label,
              feeCentavos: data.feeCentavos,
              sortOrder: data.sortOrder,
              gridColumn: data.gridColumn,
            },
          },
          { onSuccess: () => setFormOpen(false) },
        )
      }
    },
    [formMode, editingFee, createMutation, updateMutation],
  )

  const handleDeleteConfirm = useCallback(() => {
    if (!deletingFee) return
    deleteMutation.mutate(
      { data: { id: deletingFee.id } },
      { onSuccess: () => setDeleteOpen(false) },
    )
  }, [deletingFee, deleteMutation])

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dt-heading">
            Visa Fees Management
          </h1>
          <p className="mt-1 text-sm text-dt-body">
            {allFees.length} entries total
          </p>
        </div>
        <Button variant="gradient" onClick={handleCreate}>
          <Plus className="size-4" data-icon="inline-start" />
          Add New
        </Button>
      </div>

      {/* Standard Visa Fees */}
      <section className="mt-8">
        <h2 className="text-xs font-bold uppercase tracking-[2px] text-dt-primary">
          Standard Visa Fees
        </h2>
        <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <FeeColumnCard
            label="Left Column"
            fees={standard.left}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSwap={handleSwap}
          />
          <FeeColumnCard
            label="Right Column"
            fees={standard.right}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSwap={handleSwap}
          />
        </div>
      </section>

      {/* Additional Visa Fees */}
      <section className="mt-8">
        <h2 className="text-xs font-bold uppercase tracking-[2px] text-dt-primary">
          Additional Visa Fees
        </h2>
        <div className="mt-3 rounded-xl border border-dt-border bg-background p-3">
          {additionalHierarchy.map(({ fee, depth }, i) => (
            <VisaFeeRow
              key={fee.id}
              visaFee={fee}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onMoveUp={() => handleSwap(additionalFlatFees, i, -1)}
              onMoveDown={() => handleSwap(additionalFlatFees, i, 1)}
              isFirst={i === 0}
              isLast={i === additionalHierarchy.length - 1}
              depth={depth}
            />
          ))}
          {additionalHierarchy.length === 0 && (
            <p className="px-3 py-4 text-sm text-dt-muted">No entries</p>
          )}
        </div>
      </section>

      {/* Form Dialog */}
      <VisaFeeFormDialog
        mode={formMode}
        initialData={editingFee}
        parentOptions={parentOptions}
        open={formOpen}
        onOpenChange={setFormOpen}
        onSubmit={handleFormSubmit}
        nextSortOrder={nextSortOrder}
        isPending={createMutation.isPending || updateMutation.isPending}
      />

      {/* Delete Confirm */}
      <DeleteConfirmDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        label={deletingFee?.label ?? ''}
        hasChildren={deletingFee ? childrenMap.has(deletingFee.id) : false}
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </div>
  )
}

function FeeColumnCard({
  label,
  fees,
  onEdit,
  onDelete,
  onSwap,
}: {
  label: string
  fees: VisaFee[]
  onEdit: (fee: VisaFee) => void
  onDelete: (fee: VisaFee) => void
  onSwap: (list: VisaFee[], index: number, direction: -1 | 1) => void
}) {
  return (
    <div className="rounded-xl border border-dt-border bg-background p-3">
      <span className="mb-2 block px-3 text-[11px] font-semibold uppercase tracking-wider text-dt-muted">
        {label}
      </span>
      {fees.map((fee, i) => (
        <VisaFeeRow
          key={fee.id}
          visaFee={fee}
          onEdit={onEdit}
          onDelete={onDelete}
          onMoveUp={() => onSwap(fees, i, -1)}
          onMoveDown={() => onSwap(fees, i, 1)}
          isFirst={i === 0}
          isLast={i === fees.length - 1}
          depth={0}
        />
      ))}
      {fees.length === 0 && (
        <p className="px-3 py-4 text-sm text-dt-muted">No entries</p>
      )}
    </div>
  )
}
