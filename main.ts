import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
void here;

const text = "My inbox has 4,000 unread emails, so I marked them all read and called it the most productive minute of my quarter.";

// The punchline works by reframing "mark all read" as a productivity win, so the joke's payoff is the redefinition of done, not the unread count itself.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
