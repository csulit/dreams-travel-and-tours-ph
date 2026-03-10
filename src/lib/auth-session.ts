import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { env } from "cloudflare:workers";
import { createAuth, type AuthEnv } from "./auth.ts";

function auth() {
  return createAuth(env.DB, env as unknown as AuthEnv);
}

export const getSession = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await auth().api.getSession({
      headers: getRequestHeaders() as unknown as Headers,
    });
    return session;
  },
);
