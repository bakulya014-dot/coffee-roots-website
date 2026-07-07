// Generates abstract placeholder artwork for the gallery as local SVGs.
// These stand in until the SPEC.md §10 image set is generated/licensed —
// swapping to real photos only requires replacing files + lib/gallery-data.ts.
//
// Run: node scripts/generate-placeholders.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = join(import.meta.dirname, "..", "public", "images");

// Brand palette (styles/globals.css tokens, as hex for SVG)
const PALETTE = ["#FAF7F1", "#EAE1D2", "#C58B5A", "#4A3628", "#26221F"];

// Mixed aspect ratios for masonry rhythm per SPEC.md §10:
// 4:5, 1:1, 3:4 repeating.
const SIZES = [
  [800, 1000],
  [900, 900],
  [750, 1000],
];

// Small deterministic PRNG so output is reproducible run-to-run.
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeSvg(index) {
  const rand = mulberry32(index * 1337 + 7);
  const [w, h] = SIZES[index % SIZES.length];
  const bg = PALETTE[index % 2]; // cream / warm-beige alternating
  const g1 = PALETTE[2 + (index % 3)]; // caramel / coffee / charcoal

  // 4-6 translucent circles suggesting cups, beans, and light
  let shapes = "";
  const count = 4 + Math.floor(rand() * 3);
  for (let i = 0; i < count; i++) {
    const cx = Math.round(rand() * w);
    const cy = Math.round(rand() * h);
    const r = Math.round((0.1 + rand() * 0.25) * Math.min(w, h));
    const fill = PALETTE[2 + Math.floor(rand() * 3)];
    const opacity = (0.12 + rand() * 0.25).toFixed(2);
    shapes += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="${g1}" stop-opacity="0.45"/>
</linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
${shapes}
</svg>`;
}

mkdirSync(OUT_DIR, { recursive: true });
for (let i = 0; i < 9; i++) {
  const name = `gallery-${String(i + 1).padStart(2, "0")}.svg`;
  writeFileSync(join(OUT_DIR, name), makeSvg(i));
  console.log(`wrote ${name}`);
}
