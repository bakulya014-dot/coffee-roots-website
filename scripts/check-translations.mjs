// Verifies every message file has exactly the same key set as en.json
// (the source of truth) and that {placeholders} match per key.
// Run: node scripts/check-translations.mjs  (exits non-zero on drift)

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = join(import.meta.dirname, "..", "messages");

function flatten(tree, prefix = "", out = new Map()) {
  for (const [key, value] of Object.entries(tree)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") out.set(path, value);
    else flatten(value, path, out);
  }
  return out;
}

const placeholders = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");

const en = flatten(JSON.parse(readFileSync(join(DIR, "en.json"), "utf8")));
let failed = false;

for (const file of readdirSync(DIR).filter((f) => f.endsWith(".json") && f !== "en.json")) {
  const other = flatten(JSON.parse(readFileSync(join(DIR, file), "utf8")));
  const missing = [...en.keys()].filter((k) => !other.has(k));
  const extra = [...other.keys()].filter((k) => !en.has(k));
  const badParams = [...en.keys()].filter(
    (k) => other.has(k) && placeholders(en.get(k)) !== placeholders(other.get(k)),
  );
  if (missing.length || extra.length || badParams.length) {
    failed = true;
    console.error(`✗ ${file}`);
    for (const k of missing) console.error(`  missing: ${k}`);
    for (const k of extra) console.error(`  extra:   ${k}`);
    for (const k of badParams) console.error(`  params:  ${k}`);
  } else {
    console.log(`✓ ${file} — ${other.size} keys, parity with en.json`);
  }
}

process.exit(failed ? 1 : 0);
