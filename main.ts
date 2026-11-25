// The lie, printed. Clicked "agree" without reading? This is your line.
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const lie = readFileSync(join(HERE, "entry.txt"), "utf8").trim();
console.log(lie);
