// Build-time tool: search Magnific stock photos per media slot and write a shortlist.
// Run: node --env-file=.env.local scripts/media/search.mjs
// Reads MAGNIFIC_API_KEY from the environment only. Never prints it.
import { mkdir, readFile, writeFile } from "node:fs/promises";

const key = process.env.MAGNIFIC_API_KEY;
if (!key) {
  console.error("MAGNIFIC_API_KEY is not set.");
  process.exit(1);
}

const slots = [
  { id: "H-1", term: "indian business advisor meeting client modern office", orientation: "portrait", people: "indian" },
  { id: "L-1", term: "mumbai heritage colonial building facade", orientation: "portrait" },
  { id: "I-1", term: "indian engineer factory production line", orientation: "landscape", people: "indian" },
  { id: "I-2", term: "india infrastructure construction site crane", orientation: "landscape" },
  { id: "I-3", term: "solar power plant india", orientation: "landscape" },
  { id: "I-4", term: "container port cranes logistics", orientation: "landscape" },
  { id: "I-5", term: "mumbai business district skyline", orientation: "landscape" },
  { id: "I-6", term: "data center server room", orientation: "landscape" },
  { id: "P-1", term: "indian scientist pharmaceutical laboratory", orientation: "portrait", people: "indian" },
  { id: "L-2", term: "vintage typewriter old documents desk", orientation: "portrait" },
  { id: "L-3", term: "old mumbai colonial street architecture", orientation: "portrait" },
  { id: "L-4", term: "vintage office filing archive ledgers", orientation: "portrait" },
  { id: "L-5", term: "mumbai office building glass modern", orientation: "portrait" },
];

async function search(slot) {
  const q = new URLSearchParams({ term: slot.term, limit: "8", order: "relevance" });
  q.set("filters[content_type][photo]", "1");
  q.set("filters[ai-generated][excluded]", "1");
  q.set(`filters[orientation][${slot.orientation}]`, "1");
  if (slot.people) q.set(`filters[people][ethnicity]`, slot.people);
  const res = await fetch(`https://api.magnific.com/v1/resources?${q}`, {
    headers: { "x-magnific-api-key": key, "Accept-Language": "en-US" },
  });
  if (!res.ok) throw new Error(`${slot.id}: HTTP ${res.status} ${await res.text()}`);
  const { data } = await res.json();
  return data.map((r) => ({
    id: r.id,
    title: r.title,
    url: r.url,
    preview: r.image?.source?.url,
    size: r.image?.source?.size,
    licenses: r.licenses?.map((l) => l.type),
    author: r.author?.name,
  }));
}

// Optional: node ... search.mjs <slot-id> "<term>" re-runs one slot with a new term and merges it in.
const [only, term] = process.argv.slice(2);
const file = "client/media/stock/shortlist.json";
const out = only ? JSON.parse(await readFile(file, "utf8")) : {};
for (const slot of slots) {
  if (only && slot.id !== only) continue;
  const s = term ? { ...slot, term } : slot;
  out[slot.id] = { term: s.term, results: await search(s) };
}
await mkdir("client/media/stock", { recursive: true });
await writeFile(file, JSON.stringify(out, null, 2));
for (const [id, s] of Object.entries(out)) {
  console.log(`${id} (${s.results.length}): ${s.results.map((r) => `${r.id}[${r.licenses}]`).join(" ")}`);
}
