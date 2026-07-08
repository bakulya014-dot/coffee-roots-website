import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site → exportable to GitHub Pages/any static host.
  output: "export",
  // GitHub Pages serves project sites under /<repo>; the deploy workflow
  // sets NEXT_PUBLIC_BASE_PATH=/coffee-roots. Local dev stays at root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  // Pin the workspace root: a stray package-lock.json exists in the user's
  // home directory, which otherwise makes Next.js infer the wrong root.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Static export has no image-optimizer server; assets are pre-sized
    // JPEGs from scripts/fetch-and-optimize.mjs.
    unoptimized: true,
  },
};

export default nextConfig;
