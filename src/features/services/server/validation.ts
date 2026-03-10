import { z } from 'zod/v4'

const categoryEnum = z.enum(['standard', 'additional'])
const typeEnum = z.enum(['main', 'sub', 'info'])
const gridColumnEnum = z.enum(['left', 'right'])

export const createVisaFeeSchema = z
  .object({
    category: categoryEnum,
    type: typeEnum,
    label: z.string().min(1).max(200),
    feeCentavos: z.number().int().nonnegative().nullable(),
    parentId: z.string().uuid().nullable(),
    sortOrder: z.number().int().nonnegative(),
    gridColumn: gridColumnEnum.nullable(),
  })
  .refine((data) => data.type !== 'info' || data.feeCentavos === null, {
    message: 'Info entries should not have a fee',
    path: ['feeCentavos'],
  })
  .refine(
    (data) => data.category !== 'standard' || data.gridColumn !== null,
    {
      message: 'Standard category entries must specify a grid column',
      path: ['gridColumn'],
    },
  )
  .refine(
    (data) =>
      data.type === 'main' || data.parentId !== null,
    {
      message: 'Sub and info entries must have a parent',
      path: ['parentId'],
    },
  )

export type CreateVisaFeeInput = z.infer<typeof createVisaFeeSchema>

export const updateVisaFeeSchema = z.object({
  id: z.string().uuid(),
  label: z.string().min(1).max(200).optional(),
  feeCentavos: z.number().int().nonnegative().nullable().optional(),
  sortOrder: z.number().int().nonnegative().optional(),
  gridColumn: gridColumnEnum.nullable().optional(),
})

export type UpdateVisaFeeInput = z.infer<typeof updateVisaFeeSchema>

export const deleteVisaFeeSchema = z.object({
  id: z.string().uuid(),
})

export type DeleteVisaFeeInput = z.infer<typeof deleteVisaFeeSchema>

export const reorderVisaFeesSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().uuid(),
        sortOrder: z.number().int().nonnegative(),
      }),
    )
    .min(1),
})

export type ReorderVisaFeesInput = z.infer<typeof reorderVisaFeesSchema>
