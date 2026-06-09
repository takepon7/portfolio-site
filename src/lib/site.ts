/**
 * 本番URLの解決。Vercel では VERCEL_PROJECT_PRODUCTION_URL が自動注入される。
 * 独自ドメインがある場合は NEXT_PUBLIC_SITE_URL で上書きする。
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
