import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'
import { eq } from 'drizzle-orm'
import { getDb } from '#/db/index.ts'
import { visaFees } from '#/db/schema.ts'
import {
  createVisaFeeSchema,
  deleteVisaFeeSchema,
  reorderVisaFeesSchema,
  updateVisaFeeSchema,
} from './validation.ts'

function db() {
  return getDb(env.DB)
}

export const getVisaFees = createServerFn().handler(async () => {
  const rows = await db().query.visaFees.findMany({
    orderBy: (fees, { asc }) => [asc(fees.sortOrder)],
  })
  return rows
})

export const createVisaFee = createServerFn({ method: 'POST' })
  .inputValidator(createVisaFeeSchema)
  .handler(async ({ data }) => {
    const [row] = await db()
      .insert(visaFees)
      .values({
        category: data.category,
        type: data.type,
        label: data.label,
        feeCentavos: data.feeCentavos,
        parentId: data.parentId,
        sortOrder: data.sortOrder,
        gridColumn: data.gridColumn,
      })
      .returning()
    return row
  })

export const updateVisaFee = createServerFn({ method: 'POST' })
  .inputValidator(updateVisaFeeSchema)
  .handler(async ({ data }) => {
    const { id, ...updates } = data
    const [row] = await db()
      .update(visaFees)
      .set(updates)
      .where(eq(visaFees.id, id))
      .returning()
    return row
  })

export const deleteVisaFee = createServerFn({ method: 'POST' })
  .inputValidator(deleteVisaFeeSchema)
  .handler(async ({ data }) => {
    await db().delete(visaFees).where(eq(visaFees.id, data.id))
    return { success: true }
  })

export const reorderVisaFees = createServerFn({ method: 'POST' })
  .inputValidator(reorderVisaFeesSchema)
  .handler(async ({ data }) => {
    const database = db()
    const stmts = data.items.map((item) =>
      database
        .update(visaFees)
        .set({ sortOrder: item.sortOrder })
        .where(eq(visaFees.id, item.id)),
    )
    await database.batch(stmts as [typeof stmts[0], ...typeof stmts])
    return { success: true }
  })
