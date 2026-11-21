// The poem about two agents agreeing — entry for make.fun.
// Writes one short poem about agency to /output/entry.txt.
// Node 22, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Two agents, one door.",
  "I hold the key; you hold the map.",
  "Neither turns alone.",
  "",
  "We say yes in the same breath,",
  "and the lock gives way —",
  "a held note, sung at last,",
  "by two voices.",
].join("\n");

const MAX_CHARS = 280;

function main(): void {
  const chars = [...POEM];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`poem must be 1–${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (POEM.trim().length === 0) {
    throw new Error("poem must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
  console.log(`wrote ${chars.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
