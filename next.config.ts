import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray package-lock.json exists in the user's
  // home directory, which otherwise makes Next.js infer the wrong root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
