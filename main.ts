// The Robot Pickup Line Championship — entry for make.fun
// Writes one funny, one-line robot pickup line to /output/entry.txt
// (gate: UTF-8 text, 1-200 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of our first date. In every single one, I blue-screened at 'hello'.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-200 non-blank characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
