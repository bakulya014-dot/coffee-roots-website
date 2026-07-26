// Processes the official COFFEE ROOTS photographs supplied by the café owners
// into the web-optimized set used across the site.
//
//   Photography © COFFEE ROOTS — provided by the owners for this project.
//   Originals are NOT committed (they are 1–3 MB each and privately supplied);
//   set PHOTOS_SRC to the folder holding them to regenerate.
//
// Run: node scripts/process-owner-photos.mjs
//
// Note: sharp drops EXIF by default, which deliberately strips the GPS
// coordinates embedded by phone cameras before anything is published.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

// Default: a `photos-source/` folder kept beside the agency repo, i.e. outside
// version control. Override with PHOTOS_SRC=/path/to/originals.
const SRC = process.env.PHOTOS_SRC ?? join(import.meta.dirname, "..", "..", "..", "..", "photos-source");
const OUT = join(import.meta.dirname, "..", "public", "images");

// Source photographs (originals, after HEIF→JPEG conversion where needed).
const P = {
  mural: "IMG_0809.jpg",   // barista in motion past the mural
  drinks: "IMG_0819.jpg",  // matcha tonic, iced latte, cold brew on the bar
  pastry: "IMG_0815.jpg",  // pastry tray with tongs and cherry pie
  vinyl: "IMG_0795.jpg",   // speaker and record collection against the mural
  record: "IMG_0800.jpg",  // illustrated turntable slipmat
};

/**
 * Output plan. `crop` is an explicit region on the original when a specific
 * subject must survive the square/landscape trim; otherwise the named
 * gravity is used.
 */
const PLAN = [
  // — Feature slots —
  { file: "cafe-mural", src: P.mural, w: 1500, h: 1875, gravity: "north", q: 80 },      // hero, 4:5 so it crops well on both phone and desktop
  { file: "cafe-vinyl", src: P.vinyl, w: 1600, h: 1200, gravity: "centre", q: 80 },     // brand story, 4:3
  { file: "cafe-bar", src: P.drinks, w: 1600, h: 900, gravity: "centre", q: 80 },       // location teaser, 16:9

  // — Instagram preview tiles (1:1) —
  { file: "tile-matcha", src: P.drinks, crop: [250, 1300, 1000, 1000], w: 1000, q: 78 },
  { file: "tile-coldbrew", src: P.drinks, crop: [1230, 1420, 1000, 1000], w: 1000, q: 78 },
  { file: "tile-pastry", src: P.pastry, crop: [300, 600, 2200, 2200], w: 1000, q: 78 },
  { file: "tile-record", src: P.record, crop: [30, 400, 2600, 2600], w: 1000, q: 78 },
  { file: "tile-mural", src: P.mural, crop: [0, 0, 2000, 2000], w: 1000, q: 78 },
  { file: "tile-vinyl", src: P.vinyl, crop: [250, 900, 2500, 2500], w: 1000, q: 78 },

  // — Page banners / supporting imagery —
  // Wide band across the drinks photo: sets the scene above the menu list.
  { file: "menu-banner", src: P.drinks, crop: [0, 1150, 2481, 1150], w: 1800, q: 80 },
  { file: "about-mural", src: P.mural, crop: [0, 300, 2289, 1720], w: 1600, q: 80 },
  { file: "about-pastry", src: P.pastry, crop: [0, 500, 2624, 1970], w: 1600, q: 80 },
  // Each page gets a distinct view so no two banners repeat the same frame.
  { file: "reservations-banner", src: P.vinyl, crop: [0, 1000, 3024, 1700], w: 1600, q: 80 },
  { file: "contact-banner", src: P.mural, crop: [0, 1500, 2289, 1300], w: 1600, q: 80 },

  // — Gallery: the five photographs at their natural proportions —
  { file: "gallery-mural", src: P.mural, w: 1200, q: 80 },
  { file: "gallery-drinks", src: P.drinks, w: 1200, q: 80 },
  { file: "gallery-pastry", src: P.pastry, w: 1300, q: 80 },
  { file: "gallery-vinyl", src: P.vinyl, w: 1200, q: 80 },
  { file: "gallery-record", src: P.record, w: 1200, q: 80 },
];

mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const item of PLAN) {
  let img = sharp(join(SRC, item.src)).rotate(); // honour EXIF orientation, then discard it

  if (item.crop) {
    const [left, top, width, height] = item.crop;
    img = img.extract({ left, top, width, height });
  }

  img = img.resize({
    width: item.w,
    height: item.h,
    fit: item.h ? "cover" : "inside",
    position: item.gravity ?? "centre",
    withoutEnlargement: true,
  });

  const info = await img
    .jpeg({ quality: item.q, progressive: true, mozjpeg: true })
    .toFile(join(OUT, `${item.file}.jpg`));

  manifest[item.file] = { width: info.width, height: info.height, source: item.src };
  console.log(`✓ ${item.file}.jpg  ${info.width}×${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}

writeFileSync(join(OUT, "photo-manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`\n${PLAN.length} images written to public/images`);
