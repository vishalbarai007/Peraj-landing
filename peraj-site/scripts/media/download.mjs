// Build-time tool: download approved Magnific picks into client/media/stock/ and write the manifest.
// Run: node --env-file=.env.local scripts/media/download.mjs [slot ...]
// With slot ids, downloads only those and appends them to the manifest.
// Reads MAGNIFIC_API_KEY from the environment only. Never prints it.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const key = process.env.MAGNIFIC_API_KEY;
if (!key) {
  console.error("MAGNIFIC_API_KEY is not set.");
  process.exit(1);
}

// Approved 2026-10-27. slot -> [resource id, public file name, section and role]
const picks = {
  "H-1": [429660591, "hero", "Hero, lead photo"],
  "L-1": [40412532, "legacy", "Legacy, heritage photo"],
  "I-1": [52329832, "industry-industrials", "Industries, industrials tile"],
  "I-2": [85357850, "industry-infrastructure", "Industries, infrastructure tile"],
  "I-3": [52744973, "industry-energy", "Industries, energy tile"],
  "I-4": [284399055, "industry-logistics", "Industries, logistics tile"],
  "I-5": [16589831, "industry-financial", "Industries, financial tile"],
  "I-6": [234434773, "industry-technology", "Industries, technology tile"],
  "P-1": [316502314, "proof-pharma", "Proof, pharmaceuticals slide"],
  "L-2": [43691597, "legacy-1952", "Legacy, 1952 slide (era atmosphere)"],
  "L-3": [40705743, "legacy-1970", "Legacy, 1970 slide (era atmosphere)"],
  "L-4": [432243723, "legacy-1978", "Legacy, 1978 slide (era atmosphere)"],
  "L-5": [60301037, "legacy-2002", "Legacy, 2002 slide (era atmosphere)"],
};

const only = process.argv.slice(2);

const dir = "client/media/stock";
const shortlist = JSON.parse(await readFile(`${dir}/shortlist.json`, "utf8"));
const headers = { "x-magnific-api-key": key, "Accept-Language": "en-US" };
const today = new Date().toISOString().slice(0, 10);

async function detail(id) {
  for (const s of Object.values(shortlist)) {
    const hit = s.results.find((r) => r.id === id);
    if (hit) return hit;
  }
  const res = await fetch(`https://api.magnific.com/v1/resources?filters[ids]=${id}`, { headers });
  const { data } = await res.json();
  const r = data[0];
  return { id, title: r.title, url: r.url, licenses: r.licenses?.map((l) => l.type), author: r.author?.name };
}

await mkdir(dir, { recursive: true });
const rows = [];
for (const [slot, [id, name, role]] of Object.entries(picks)) {
  if (only.length && !only.includes(slot)) continue;
  const res = await fetch(`https://api.magnific.com/v1/resources/${id}/download?image_size=2000px`, { headers });
  if (!res.ok) throw new Error(`${slot} ${id}: HTTP ${res.status} ${await res.text()}`);
  const { data } = await res.json();
  if (data.prompt) throw new Error(`${slot} ${id}: AI-generated resource, rejected`);
  const file = await fetch(data.url);
  if (!file.ok) throw new Error(`${slot} ${id}: file HTTP ${file.status}`);
  const ext = (data.filename.split(".").pop() || "jpg").toLowerCase();
  const local = `${slot}-${id}.${ext}`;
  await writeFile(`${dir}/${local}`, Buffer.from(await file.arrayBuffer()));
  const info = await detail(id);
  rows.push(`| ${name}.webp | ${role} | Magnific | ${id} / ${info.url} | ${info.author ?? ""} | ${(info.licenses ?? []).join(", ")}, see Magnific licence | ${today} |`);
  console.log(`${slot} ${id} -> ${local}`);
}

if (only.length) {
  const existing = await readFile(`${dir}/manifest.md`, "utf8");
  await writeFile(`${dir}/manifest.md`, existing.trimEnd() + "\n" + rows.join("\n") + "\n");
} else {
  const manifest = `# Stock media manifest

Source originals: \`client/media/stock/\`. Optimised files: \`public/media/\`. Replace an image by swapping the file and its entry in \`content/site.ts\`.

| file | slot | source | resource ID / URL | author | licence | date |
|---|---|---|---|---|---|---|
${rows.join("\n")}
`;
  await writeFile(`${dir}/manifest.md`, manifest);
}
