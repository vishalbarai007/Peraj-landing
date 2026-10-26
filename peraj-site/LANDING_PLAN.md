# Peraj Landing Plan (redesign)

Status: approved 2026-10-27; built 2026-10-27. Binding inputs: `.doable/brief.md` (approved 2026-10-27), `rules.md`.

## Goal and CTA
- Goal: business decision-makers request a callback from a senior adviser.
- Primary CTA (exact, everywhere): **Request a callback**. Placed in the hero, mid-page (after Process) and in Contact; also header and floating button (which keep their existing labels: header "Request a callback", floating "Get a callback").
- Secondary: "Explore our legacy" (hero only).

## Archetype and merged direction
Archetype: professional services / advisory (trust-led, not SaaS).

- **Order:** keep the current order (brief). It already matches both references' flow: hero, credibility stats, heritage, solutions, sectors, proof, help/contact.
- **Borrow:**
  - Hero: photo-led and people-centred (Howden, Lockton), but one fixed message, not a carousel
  - Why: a stat band right after the hero, with numbers and one statement (Howden)
  - Legacy: heritage as text plus a single strong image (Howden "Born in London")
  - Industries: a scannable sector grid (Howden), upgraded to photo tiles per brief IM-4
  - Contact: reassurance copy, direct lines and a form in one block (Howden, Lockton "We're here to help")
- **Avoid:** carousel hero, mega-menus, title-only cards, leadership/careers content.
- **Differentiate:** since 1951 (older than both), fiduciary not salesperson, in-house claims advocacy, a free 3-step audit process. Shown in Why, Process, Proof and the FAQs.
- **Visual direction:** corporate modern bento. Flat 12px hairline cards, pill buttons, white and mist surfaces, navy text, teal actions, Forum only on H1 and H2.

## Sections

| # | Section | Job | Copy source | Image | Motion |
|---|---|---|---|---|---|
| 1 | Header | Navigate and reach the CTA | `nav`, `cta` | none (exempt); logo | CSS: background and hairline appear after scroll |
| 2 | Hero | What, who, act | `hero` | **H-1** hero photo | Hero sequence: photo mask reveal (MO-4) |
| 3 | Why | Credibility in numbers | `why` | exempt | Count-up of 4 stats, once on first view |
| 3b | Pitfalls | Problem, then the Peraj fix | `pitfalls` | exempt | Decided at its layout gate |
| 4 | Legacy | Heritage since 1951 | `legacy` | L-1 plus 4 era photos (one per milestone) | Image unmask on entry; arrows cross-fade the year, text and photo |
| 5 | Solutions | What we cover | `solutions` | exempt (Lucide icons) | None: dense reading grid, motion adds nothing |
| 6 | Process | How it works, 3 steps | `process` | exempt | Steps appear in order (stagger 80ms); also hosts the mid-page CTA |
| 7 | Industries | Sector fluency | `industries` | **I-1..I-6** sector photos | CSS hover only: image scale 1.03, 250ms |
| 8 | Proof | Trust at claim time | `proof` | P-1 plus crops of I-1 and I-6 (labelled sector photos) | Embla slide plus quote cross-fade, no autoplay |
| 9 | FAQs | Remove objections | `faq` | exempt | Accordion open/close from tokens |
| 10 | Contact | Convert | `contact`, `form` | exempt | None: the form must be instantly usable |
| 11 | Footer | Close and legal | `footer` | exempt | None |

Layouts are **not** decided here. Each one is proposed (2-3 options plus image slot and card design) and approved before it's built.

Pitfalls: correction 2026-10-27. It was rendered inside Why, not off-page. It is now its own section after Why (user choice).

## Motion budget (MO-1 subtle)
- Hero sequence: 1 of 1
- Ambient: 0 (both marquees and float removed)
- Pinned: 0
- Scrubbed: 0
- Removed: Magnetic, Spotlight, parallax blobs, rotating word, split-text headings.
- All reveals are set from JS in `useGSAP` with `gsap.matchMedia`; reduced motion shows everything static.

## Media plan (Magnific stock; `MAGNIFIC_API_KEY` set, checked without printing)
One treatment: 12px radius, natural light, cool-neutral grade, real Indian business and industrial settings, no visible brand marks, no text in the image, no clichés (handshakes, thumbs-up).

| Slot | Role | Ratio | Search terms (draft) | Alt intent |
|---|---|---|---|---|
| H-1 | Hero lead photo | 4:5 desktop, 4:3 mobile | Indian business advisers meeting client in modern office, natural light | Senior adviser reviewing cover with a business owner |
| L-1 | Legacy | 4:5 | Mumbai heritage commercial building facade, Fort district; alt: vintage ledger desk | Mumbai heritage building, nod to 1951 |
| I-1 | Industrials & manufacturing | 4:3 | Indian factory engineer production line | Engineer on a manufacturing floor |
| I-2 | Infrastructure & construction | 4:3 | India infrastructure construction site crane bridge | Infrastructure under construction |
| I-3 | Energy & utilities | 4:3 | solar farm India / power plant transmission | Solar and power infrastructure |
| I-4 | Transport & logistics | 4:3 | container port cranes Mumbai logistics | Container port and logistics |
| I-5 | Financial institutions | 4:3 | Mumbai financial district skyline offices | Financial district offices |
| I-6 | Technology & telecom | 4:3 | data centre server racks / telecom tower | Data centre infrastructure |

Process: shortlist 3-5 candidates per slot, then you approve them, then **8 downloads** go into `client/media/stock/`, optimised to AVIF/WebP in `public/media/` and recorded in `client/media/stock/manifest.md`.

## Gaps and TODO(placeholder)
- Testimonials paraphrased (`TODO(verify)`): exact quotes and permission needed
- Phone placeholder; email to confirm; social and legal links `#`
- Legacy milestones 1952, 1970, 1978, 2002 have no content
- The "Callback within 2 hrs" and "99.8%" hero tiles reuse existing client claims from `content/site.ts`

## Deviations from rules.md
- **Copy source:** `content/site.ts` already holds the client copy (from the existing client site), so `client/copy.md` is not duplicated. site.ts stays the single source.
- **Images:** 7 sections are image-exempt by client choice (brief IM-4), recorded in the brief.
- **Hero H1:** static "Built on trust. Shaped around people." (rotating word dropped by MO-1 subtle; "people." is the first word in the client list).
