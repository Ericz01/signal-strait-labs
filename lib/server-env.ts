import { getCloudflareContext } from '@opennextjs/cloudflare';

// Read a server-side env var or secret. Call this inside a request handler,
// never at module scope: on Cloudflare Workers, secrets are delivered per
// request through the runtime `env` binding. Falls back to `process.env` for
// `next dev` and other non-Workers contexts.
export function getServerEnv(name: string): string | undefined {
  try {
    // Only available inside a Worker request context; throws elsewhere.
    const env = getCloudflareContext().env as unknown as Record<string, unknown>;
    const value = env[name];
    if (typeof value === 'string' && value.length > 0) return value;
  } catch {
    // Not running inside a Cloudflare Workers request context.
  }
  return process.env[name] || undefined;
}
