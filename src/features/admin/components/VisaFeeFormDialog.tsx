import { useState, useEffect, useCallback, useRef } from 'react'
import { z } from 'zod/v4'
import {
  Dialog,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogPortal,
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectItem,
} from '@/components/ui/select'
import { Field, FieldLabel, FieldControl } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { phpToCentavos } from '@/lib/format-currency'
import type { VisaFee } from '#/db/schema.ts'

type FormData = {
  label: string
  category: 'standard' | 'additional'
  type: 'main' | 'sub' | 'info'
  feePHP: string
  gridColumn: 'left' | 'right' | null
  parentId: string | null
  sortOrder: number
}

const formSchema = z
  .object({
    label: z.string().min(1, 'Label is required').max(200),
    category: z.enum(['standard', 'additional']),
    type: z.enum(['main', 'sub', 'info']),
    feePHP: z.string(),
    gridColumn: z.enum(['left', 'right']).nullable(),
    parentId: z.string().uuid().nullable(),
    sortOrder: z.number().int().nonnegative(),
  })
  .refine((d) => d.type === 'info' || (d.feePHP !== '' && !isNaN(Number(d.feePHP))), {
    message: 'Fee is required for non-info entries',
    path: ['feePHP'],
  })
  .refine((d) => d.category !== 'standard' || d.gridColumn !== null, {
    message: 'Grid column is required for standard entries',
    path: ['gridColumn'],
  })
  .refine((d) => d.type === 'main' || d.parentId !== null, {
    message: 'Parent is required for sub/info entries',
    path: ['parentId'],
  })

interface VisaFeeFormDialogProps {
  mode: 'create' | 'edit'
  initialData?: VisaFee
  parentOptions: { id: string; label: string }[]
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: {
    label: string
    category: 'standard' | 'additional'
    type: 'main' | 'sub' | 'info'
    feeCentavos: number | null
    gridColumn: 'left' | 'right' | null
    parentId: string | null
    sortOrder: number
  }) => void
  nextSortOrder: number
  isPending: boolean
}

const emptyForm: FormData = {
  label: '',
  category: 'standard',
  type: 'main',
  feePHP: '',
  gridColumn: 'left',
  parentId: null,
  sortOrder: 0,
}

export default function VisaFeeFormDialog({
  mode,
  initialData,
  parentOptions,
  open,
  onOpenChange,
  onSubmit,
  nextSortOrder,
  isPending,
}: VisaFeeFormDialogProps) {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const nextSortOrderRef = useRef(nextSortOrder)
  nextSortOrderRef.current = nextSortOrder

  useEffect(() => {
    if (!open) return
    if (mode === 'edit' && initialData) {
      setForm({
        label: initialData.label,
        category: initialData.category,
        type: initialData.type,
        feePHP:
          initialData.feeCentavos != null
            ? (initialData.feeCentavos / 100).toString()
            : '',
        gridColumn: initialData.gridColumn,
        parentId: initialData.parentId,
        sortOrder: initialData.sortOrder,
      })
    } else {
      setForm({ ...emptyForm, sortOrder: nextSortOrderRef.current })
    }
    setErrors({})
  }, [open, mode, initialData])

  const updateField = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) => {
      setForm((prev) => {
        const next = { ...prev, [key]: value }
        // Auto-clear conditional fields
        if (key === 'category' && value === 'additional') {
          next.gridColumn = null
        }
        if (key === 'category' && value === 'standard') {
          next.gridColumn = next.gridColumn ?? 'left'
        }
        if (key === 'type' && value === 'main') {
          next.parentId = null
        }
        if (key === 'type' && value === 'info') {
          next.feePHP = ''
        }
        return next
      })
    },
    [],
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = formSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const path = issue.path.join('.')
        if (!fieldErrors[path]) fieldErrors[path] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    const feeCentavos =
      form.type === 'info' || form.feePHP === ''
        ? null
        : phpToCentavos(Number(form.feePHP))

    onSubmit({
      label: form.label,
      category: form.category,
      type: form.type,
      feeCentavos,
      gridColumn: form.category === 'standard' ? form.gridColumn : null,
      parentId: form.type === 'main' ? null : form.parentId,
      sortOrder: form.sortOrder,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogBackdrop />
        <DialogPopup className="max-h-[90vh] overflow-y-auto">
          <DialogTitle>
            {mode === 'create' ? 'Add Visa Fee Entry' : 'Edit Visa Fee Entry'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'create'
              ? 'Fill in the details for the new entry.'
              : 'Update the entry details below.'}
          </DialogDescription>

          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
            {/* Label */}
            <Field className="flex flex-col gap-1.5">
              <FieldLabel>Label</FieldLabel>
              <FieldControl
                value={form.label}
                onChange={(e) => updateField('label', e.target.value)}
                placeholder="e.g. KOREA VISA"
              />
              {errors.label && (
                <span className="text-xs text-red-500">{errors.label}</span>
              )}
            </Field>

            {/* Category + Type row */}
            <div className="grid grid-cols-2 gap-3">
              <Field className="flex flex-col gap-1.5">
                <FieldLabel>Category</FieldLabel>
                <Select
                  value={form.category}
                  onValueChange={(val) =>
                    updateField('category', val as 'standard' | 'additional')
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectPositioner>
                      <SelectPopup>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="additional">Additional</SelectItem>
                      </SelectPopup>
                    </SelectPositioner>
                  </SelectPortal>
                </Select>
                {errors.category && (
                  <span className="text-xs text-red-500">
                    {errors.category}
                  </span>
                )}
              </Field>

              <Field className="flex flex-col gap-1.5">
                <FieldLabel>Type</FieldLabel>
                <Select
                  value={form.type}
                  onValueChange={(val) =>
                    updateField('type', val as 'main' | 'sub' | 'info')
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectPositioner>
                      <SelectPopup>
                        <SelectItem value="main">Main</SelectItem>
                        <SelectItem value="sub">Sub</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                      </SelectPopup>
                    </SelectPositioner>
                  </SelectPortal>
                </Select>
                {errors.type && (
                  <span className="text-xs text-red-500">{errors.type}</span>
                )}
              </Field>
            </div>

            {/* Fee */}
            {form.type !== 'info' && (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel>Fee (PHP)</FieldLabel>
                <FieldControl
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.feePHP}
                  onChange={(e) => updateField('feePHP', e.target.value)}
                  placeholder="e.g. 4000.00"
                />
                {errors.feePHP && (
                  <span className="text-xs text-red-500">{errors.feePHP}</span>
                )}
              </Field>
            )}

            {/* Grid Column — only for standard */}
            {form.category === 'standard' && (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel>Grid Column</FieldLabel>
                <Select
                  value={form.gridColumn ?? 'left'}
                  onValueChange={(val) =>
                    updateField('gridColumn', val as 'left' | 'right')
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectPositioner>
                      <SelectPopup>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectPopup>
                    </SelectPositioner>
                  </SelectPortal>
                </Select>
                {errors.gridColumn && (
                  <span className="text-xs text-red-500">
                    {errors.gridColumn}
                  </span>
                )}
              </Field>
            )}

            {/* Parent — only for sub/info */}
            {form.type !== 'main' && (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel>Parent Entry</FieldLabel>
                <Select
                  value={form.parentId ?? ''}
                  onValueChange={(val) =>
                    updateField('parentId', val || null)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a parent..." />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectPositioner>
                      <SelectPopup>
                        {parentOptions.map((opt) => (
                          <SelectItem key={opt.id} value={opt.id}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectPopup>
                    </SelectPositioner>
                  </SelectPortal>
                </Select>
                {errors.parentId && (
                  <span className="text-xs text-red-500">
                    {errors.parentId}
                  </span>
                )}
              </Field>
            )}

            {/* Sort Order */}
            <Field className="flex flex-col gap-1.5">
              <FieldLabel>Sort Order</FieldLabel>
              <FieldControl
                type="number"
                min="0"
                value={form.sortOrder}
                onChange={(e) =>
                  updateField('sortOrder', parseInt(e.target.value) || 0)
                }
              />
            </Field>

            {/* Actions */}
            <div className="mt-2 flex items-center justify-end gap-2">
              <DialogClose
                render={<Button variant="outline" type="button" />}
              >
                Cancel
              </DialogClose>
              <Button type="submit" variant="gradient" disabled={isPending}>
                {isPending
                  ? 'Saving...'
                  : mode === 'create'
                    ? 'Create'
                    : 'Save Changes'}
              </Button>
            </div>
          </form>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  )
}
