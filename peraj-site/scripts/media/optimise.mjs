// Build-time tool: crop stock originals to their slot ratio at 2x display size and export WebP to public/media/.
// Run: node scripts/media/optimise.mjs
import { mkdir, stat } from "node:fs/promises";
import sharp from "sharp";

// source in client/media/stock -> [output name, width, height]
const jobs = {
  "H-1-429660591.jpg": ["hero", 1280, 1600],
  "L-1-40412532.jpg": ["legacy", 1120, 1400],
  "I-1-52329832.jpg": ["industry-industrials", 1200, 900],
  "I-2-85357850.jpg": ["industry-infrastructure", 1200, 900],
  "I-3-52744973.jpg": ["industry-energy", 1200, 900],
  "I-4-284399055.jpg": ["industry-logistics", 1200, 900],
  "I-5-16589831.jpg": ["industry-financial", 1200, 900],
  "I-6-234434773.jpg": ["industry-technology", 1200, 900],
  "P-1-316502314.jpg": ["proof-pharma", 960, 1200],
  "L-2-43691597.jpg": ["legacy-1952", 1120, 1400],
  "L-3-40705743.jpg": ["legacy-1970", 1120, 1400],
  "L-4-432243723.jpg": ["legacy-1978", 1120, 1400],
  "L-5-60301037.jpg": ["legacy-2002", 1120, 1400],
  // Portrait crops of approved industry photos for the Proof slider (same resources, no new downloads).
  "I-1-52329832.jpg#proof": ["proof-industrials", 960, 1200],
  "I-6-234434773.jpg#proof": ["proof-technology", 960, 1200],
};

await mkdir("public/media", { recursive: true });
for (const [src, [name, width, height]] of Object.entries(jobs)) {
  const out = `public/media/${name}.webp`;
  await sharp(`client/media/stock/${src.split("#")[0]}`)
    .resize(width, height, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 72 })
    .toFile(out);
  console.log(`${out} ${Math.round((await stat(out)).size / 1024)}KB`);
}
