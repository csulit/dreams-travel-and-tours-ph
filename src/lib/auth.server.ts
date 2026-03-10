import { getRequestHeaders } from "@tanstack/react-start/server";
import { env } from "cloudflare:workers";
import { createAuth, type AuthEnv } from "./auth.ts";

function auth() {
  return createAuth(env.DB, env as unknown as AuthEnv);
}

export async function ensureSession() {
  const session = await auth().api.getSession({
    headers: getRequestHeaders() as unknown as Headers,
  });
  if (!session) throw new Error("Unauthorized");
  return session;
}
