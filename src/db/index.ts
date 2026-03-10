import { drizzle } from 'drizzle-orm/d1'
import * as schema from './schema.ts'
import * as authSchema from './auth-schema.ts'

export function getDb(d1: D1Database) {
  return drizzle(d1, { schema: { ...schema, ...authSchema } })
}

export type AppDatabase = ReturnType<typeof getDb>
