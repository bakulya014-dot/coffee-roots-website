import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const ROUTES = ["", "/menu", "/about", "/gallery", "/reservations", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
