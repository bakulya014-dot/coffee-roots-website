// One-time pipeline: download the final Higgsfield renders and convert them
// to web-weight progressive JPEGs in /public/images.
// Run: node scripts/fetch-and-optimize.mjs
// The JOBS map records which generation produced each site asset —
// provenance documentation for the portfolio write-up.

import { mkdirSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const OUT = join(import.meta.dirname, "..", "public", "images");
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3G8OuOHSScRvmWEEY7CvLeh4J25";

// file → { key: cdn timestamp_jobid, max: target max long edge }
const JOBS = {
  // Named slots
  "hero-interior":    { key: "hf_20260707_182504_d0a56d20-998a-4a72-9a0b-85bd00e87d6d", max: 2048 },
  "interior-seating": { key: "hf_20260707_182558_1029bcac-89d3-4e43-b096-d18cebe8ad97", max: 1800 },
  "exterior":         { key: "hf_20260707_182526_6966f73e-7ab7-4157-9c43-772bcbed9a26", max: 1800 },
  // Instagram tiles
  "tile-latte":       { key: "hf_20260707_182802_2e5ea50d-f34e-46f1-8a03-5e9d40d4d70d", max: 1200 },
  "tile-pastry":      { key: "hf_20260707_182043_240003b7-dade-47b2-8565-5e1d82442d8c", max: 1200 },
  "tile-work":        { key: "hf_20260707_182737_9347fe49-c367-436e-bee4-7f983bf7d7c0", max: 1200 },
  "tile-plants":      { key: "hf_20260707_182100_f48f45bc-d173-40a4-8489-16cbb69e6dba", max: 1200 },
  "tile-dessert":     { key: "hf_20260707_181240_687f75cd-9708-48b9-a46e-daf7f611e4a2", max: 1200 },
  "tile-beans":       { key: "hf_20260707_182820_281a78af-acdc-4aff-aae7-01748fbf87f0", max: 1200 },
  // Gallery
  "gallery-01":       { key: "hf_20260707_182939_41415607-4dfa-4602-b644-645238666a47", max: 1600 },
  "gallery-02":       { key: "hf_20260707_181300_50e67ea3-9fba-472f-8fa7-a618c63ac245", max: 1600 },
  "gallery-03":       { key: "hf_20260707_181307_c0874b7e-f26a-4948-b0e6-2a5168815ead", max: 1600 },
  "gallery-04":       { key: "hf_20260707_182109_e99a49e1-d5ef-4f45-a28c-50ade1f57d72", max: 1600 },
  "gallery-05":       { key: "hf_20260707_182104_f5067d17-94d8-4e86-8620-7084810c8de7", max: 1600 },
  "gallery-06":       { key: "hf_20260707_182856_043986ec-2d46-4194-8394-88e4645b0b69", max: 1600 },
  "gallery-07":       { key: "hf_20260707_182900_8078cdd9-a34d-4ed4-9d78-b4ad92be5153", max: 1600 },
  "gallery-08":       { key: "hf_20260707_181333_7c318030-47c0-42a3-b78e-d6ddaea07488", max: 1600 },
  "gallery-09":       { key: "hf_20260707_183012_94c9dc2f-b7f6-4ca8-b70c-3908a6b1495b", max: 1600 },
};

mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const [name, { key, max }] of Object.entries(JOBS)) {
  const url = `${CDN}/${key}.png`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`✗ ${name}: HTTP ${res.status} for ${url}`);
    process.exitCode = 1;
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const out = join(OUT, `${name}.jpg`);
  const img = sharp(buf).resize({ width: max, height: max, fit: "inside", withoutEnlargement: true });
  const info = await img.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(out);
  manifest[name] = { width: info.width, height: info.height, bytes: info.size };
  console.log(`✓ ${name}.jpg ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}KB`);
}

writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));

// Old placeholder PNG from the style proof is superseded
const oldPng = join(OUT, "hero-interior.png");
if (existsSync(oldPng)) unlinkSync(oldPng);
