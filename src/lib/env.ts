export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof window !== "undefined"
    ? window.location.origin
    : `https://${process.env.VERCEL_URL || "localhost:3000"}`);
