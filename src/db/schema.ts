import {
  sqliteTable,
  text,
  integer,
  type AnySQLiteColumn,
} from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const visaFees = sqliteTable("visa_fees", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  category: text("category", { enum: ["standard", "additional"] }).notNull(),
  type: text("type", { enum: ["main", "sub", "info"] }).notNull(),
  label: text("label").notNull(),
  feeCentavos: integer("fee_centavos"),
  parentId: integer("parent_id").references((): AnySQLiteColumn => visaFees.id),
  sortOrder: integer("sort_order").notNull(),
  gridColumn: text("grid_column", { enum: ["left", "right"] }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
});

export type VisaFee = typeof visaFees.$inferSelect;
export type NewVisaFee = typeof visaFees.$inferInsert;
