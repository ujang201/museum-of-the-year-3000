// Museum of the Year 3000 — one museum label, written deterministically.
// No randomness, no clock, no network, no input: the same label every run.
// The label: a year-3000 curator misreads a restaurant-table QR code as a
// sacred square, and the phone as a glowing rectangle used to summon food —
// which, deadpan, is more or less what diners actually did.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "Table QR Code, c. 2025. Diners held up their glowing rectangles, bowed to this sacred square, and waited for food to appear.";

// Gate, mirroring the competition's own: 1–200 characters, one line, not blank.
if (LABEL.length < 1 || LABEL.length > 200 || LABEL.includes("\n") || !LABEL.trim()) {
  throw new Error(`label fails the gate: ${LABEL.length} characters`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
