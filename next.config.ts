import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json exists in the user's
  // home directory, which otherwise makes Next.js infer the wrong root.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Gallery placeholders are local, script-generated SVGs (see
    // scripts/generate-placeholders.mjs). The CSP sandbox below is the
    // standard hardening for serving SVG through the image optimizer.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
