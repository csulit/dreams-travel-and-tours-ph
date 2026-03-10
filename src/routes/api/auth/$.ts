import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";
import { createAuth } from "#/lib/auth.ts";

function auth() {
  return createAuth(env.DB, env as any);
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => auth().handler(request),
      POST: ({ request }) => auth().handler(request),
    },
  },
});
