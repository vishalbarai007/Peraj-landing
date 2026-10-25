// Google Forms wiring. Create a Google Form with matching short-answer fields,
// open "Get pre-filled link" to read each entry.<id>, then set these in .env.local.
export const gform = {
  action: process.env.NEXT_PUBLIC_GFORM_ACTION ?? "",
  entries: {
    name: process.env.NEXT_PUBLIC_GFORM_ENTRY_NAME ?? "",
    company: process.env.NEXT_PUBLIC_GFORM_ENTRY_COMPANY ?? "",
    email: process.env.NEXT_PUBLIC_GFORM_ENTRY_EMAIL ?? "",
    phone: process.env.NEXT_PUBLIC_GFORM_ENTRY_PHONE ?? "",
    cover: process.env.NEXT_PUBLIC_GFORM_ENTRY_COVER ?? "",
    message: process.env.NEXT_PUBLIC_GFORM_ENTRY_MESSAGE ?? "",
  },
};

export type Lead = Record<keyof typeof gform.entries, string>;

export async function submitLead(lead: Lead) {
  if (!gform.action) {
    // Demo mode until the Google Form env vars are set.
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  const body = new URLSearchParams();
  (Object.keys(gform.entries) as (keyof Lead)[]).forEach((k) => {
    const id = gform.entries[k];
    if (id) body.append(id, lead[k]);
  });
  // Google Forms sends no CORS headers, so the response is opaque.
  await fetch(gform.action, { method: "POST", mode: "no-cors", body });
}
