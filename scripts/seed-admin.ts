/**
 * Seed an admin user into the local D1 database.
 *
 * Usage:
 *   bun run scripts/seed-admin.ts <email> <password> [name]
 *
 * Example:
 *   bun run scripts/seed-admin.ts admin@dreams.ph MySecurePass123 "Admin User"
 */
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import Database from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as authSchema from "../src/db/auth-schema.ts";
import * as schema from "../src/db/schema.ts";

const [email, password, name = "Admin"] = process.argv.slice(2);

if (!email || !password) {
  console.error("Usage: bun run scripts/seed-admin.ts <email> <password> [name]");
  process.exit(1);
}

// Open the local D1 SQLite database — find the non-empty .sqlite file
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const d1Dir = ".wrangler/state/v3/d1/miniflare-D1DatabaseObject";
const dbFile = readdirSync(d1Dir)
  .filter((f) => f.endsWith(".sqlite") && statSync(join(d1Dir, f)).size > 0)
  .sort((a, b) => statSync(join(d1Dir, b)).size - statSync(join(d1Dir, a)).size)[0];

if (!dbFile) {
  console.error("No local D1 database found. Run `bun run dev` first to initialize it, then apply migrations with `bun run db:migrate:local`.");
  process.exit(1);
}

const sqlite = new Database(join(d1Dir, dbFile));
const db = drizzle(sqlite, { schema: { ...schema, ...authSchema } });

// Read BETTER_AUTH_SECRET from .dev.vars
import { readFileSync } from "node:fs";
const devVars = readFileSync(".dev.vars", "utf-8");
const secretMatch = devVars.match(/^BETTER_AUTH_SECRET=(.+)$/m);
if (!secretMatch) {
  console.error("BETTER_AUTH_SECRET not found in .dev.vars");
  process.exit(1);
}

const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }),
  secret: secretMatch[1],
  baseURL: "http://localhost:3000",
  emailAndPassword: { enabled: true },
});

const ctx = await auth.$context;
const created = await ctx.internalAdapter.createUser({
  email,
  name,
  emailVerified: true,
});

if (!created) {
  console.error("Failed to create user");
  process.exit(1);
}

// Hash password and create credential account
const hashedPassword = await ctx.password.hash(password);
await ctx.internalAdapter.linkAccount({
  userId: created.id,
  accountId: created.id,
  providerId: "credential",
  password: hashedPassword,
});

console.log(`Admin user created: ${email} (id: ${created.id})`);
