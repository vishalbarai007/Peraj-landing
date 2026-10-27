---
version: 1
status: approved
updated: 2026-10-27
---

# Design Brief

Source of truth for this project. Written by `doable-discovery`, approved by the user, and binding on every session. Do not edit by hand mid-build: change a locked decision through an amendment (`/doable-frontend change <ID or area>`), which updates this file and adds a line to the changelog.

Each decision is `ID | status | value`. Status is `decided`, `defaulted` (user said "you pick") or `unknown`. The brief is complete only when no required field is `unknown`.

## 1. Locked decisions

### Brand
- BR-1 | decided | Name and one-line description: Peraj Insurance Brokers. Fiduciary commercial insurance and advisory partner, trusted since 1951 (from `content/site.ts`)
- BR-2 | decided | Audience: business decision-makers (CFO, COO, MD) at Indian enterprises across industrials, infrastructure, energy, logistics, financial services and tech, plus individuals and families (from `content/site.ts`)
- BR-3 | defaulted | Tone: confident, calm, trustworthy
- BR-4 | decided | Primary action and exact CTA label: request a callback, "Request a callback" (from `content/site.ts`)

### Visual style
- ST-1 | decided | Style direction: corporate modern. Clean, grid-led bento layouts, crisp surfaces and real photography where it matters
- ST-2 | defaulted | Density and whitespace: balanced
- ST-3 | decided | Shape language: 12px card radius, 1px hairline border, flat (no heavy shadows); pill buttons

### Dimensionality
- DM-1 | defaulted | 2D flat
- DM-2 | n/a | 3D approach: not used

### Typography
- TY-1 | decided | Heading family and weight: Forum 400, for H1 and H2 only (existing brand font)
- TY-2 | decided | Body family: Inter, also used for card titles, stats, labels and UI
- TY-3 | defaulted | Scale and mood: balanced

### Colour
- CO-1 | defaulted | Mode: light only
- CO-2 | decided | Palette (amended 2026-10-27): background cream #FFFCEF, text #3D3D3D, navy / ink #1E3157, primary cyan #00AEEF (fills only; navy text on it), teal-deep #00678F (cyan for text on light), mint #DEF2EF, mist #F4F2E6
- CO-3 | defaulted | Accent: cyan for primary actions, focus and highlights on dark bands. Never cyan text on cream (fails contrast): use teal-deep
- CO-4 | defaulted | Gradients: none. Drop the blurred blobs. Only a dark scrim over photos where text sits on them, contrast-checked

### UI elements
- UI-1 | decided | Behaviour layer: shadcn on Base UI (dialog, accordion, carousel mechanics via Embla). All visuals custom
- UI-2 | decided | Buttons: pill. Solid teal primary and outline secondary, with a trailing arrow on the primary
- UI-3 | decided | Card language: flat bordered (12px, hairline), bento compositions. Actual designs proposed per section
- UI-4 | decided | Icons: Lucide, 1.5 stroke (existing)
- UI-5 | decided | Forms: callback form inline in Contact plus a dialog from header and floating CTA (existing; Google Forms wiring)

### Motion
- MO-1 | decided | Intensity: subtle. One hero sequence and small purposeful reveals. No marquee, no scrubbing, no pinning, no magnetic, spotlight, parallax or float effects
- MO-2 | decided | Signature moment: hero sequence
- MO-3 | defaulted | Reduced motion: full content visible, no animation
- MO-4 | decided | Hero animation: photo mask reveal. Headline lines rise in sequence, then the hero photo unmasks with clip-path from the bottom while scaling 1.08 to 1, then the stat tiles settle. Total under 1.2s

### Imagery
- IM-1 | decided | Source: Magnific stock (no client photos yet; swappable later via one file and one data entry). Never generated
- IM-2 | defaulted | Treatment: framed with 12px card radius, natural light, slightly cool and neutral grade, consistent across the page; real Indian business and industrial settings
- IM-3 | defaulted | Video: none
- IM-4 | decided | Sections with images: Hero, Legacy, Industries, Proof (sector photos, amended 2026-10-27). Exempt by client choice: Why, Pitfalls, Solutions, Process, FAQs, Contact, Footer

### Stack
- SK-1 | decided | Next.js 16.4.3 (App Router), React 19.3, Tailwind v4, shadcn (base-nova, Base UI), GSAP 3.15 + @gsap/react, Lucide (from `package.json`)

## 2. Pages and sections

Section order (kept from the current page): Hero, Why, Pitfalls, Legacy, Solutions, Process, Industries, Proof, FAQs, Contact, Footer. Blocks are added by the pre-build mini-grill.

### Section: Hero (built 2026-10-27)
- Job and message: what Peraj is, who it serves, request a callback
- Content source: `hero`, `cta` in `content/site.ts`
- Layout: A, split. Text in 7 columns (eyebrow, two-line H1, lead, primary and outline CTAs, IRDAI badge); photo panel in 5 columns. Stacks below the text on mobile
- Component design: HeroPanel, one 12px hairline card with a 4:5 photo (4:3 on mobile) and two stat tiles docked under it (99.8% claims satisfaction, 2 hrs callback)
- Image: H-1 Magnific 429660591, `public/media/hero.webp`, preloaded
- Motion: hero sequence (budget 1/1). Lines rise (0.6s, 0.15s stagger), copy fades up, photo unmasks from the bottom via transform counter-slide while scaling 1.08 to 1, tiles land at 0.65s. Ends under 1.2s. Hidden only when JS and motion are allowed, with a 2.5s CSS failsafe
- Reference: MO-4 photo mask reveal (user-picked option)

### Section: Header (built 2026-10-27)
- Job and message: navigate, reach the CTA
- Layout: A, flat bar on the page container (72px). Transparent at the top; white plus hairline after 24px of scroll. Mobile: full-screen white menu sheet with Inter links and a full-width CTA
- Image: none (logo only; exempt)
- Motion: CSS colour transition on scroll only (200ms)

### Section: Why (built 2026-10-27)
- Job and message: credibility in numbers
- Content source: `why`
- Layout: B, ruled stat row. Shared SectionHeading, then 4 columns split by hairlines (2×2 on mobile), with country chips beneath. Mist surface
- Component design: unboxed stat column. Large Inter figure, label, caption note
- Image: none (exempt, IM-4)
- Motion: count-up from 0, once on first view (1.2s); final values in server HTML and for screen readers; static for reduced motion

### Section: Pitfalls (built 2026-10-27)
- Job and message: where standard policies fail, and how Peraj fixes it
- Content source: `pitfalls` (tap hint removed; everything is visible)
- Layout: A, problem-to-fix rows. Ruled rows: number and title (3 cols), problem (4), arrow (1), fix tile (4). Stacked on mobile. White surface
- Component design: mint fix tile, 12px, with a teal-deep "The Peraj fix" label and check (teal on mint fails contrast at 4.34:1)
- Image: none (exempt, IM-4)
- Motion: none. It's reading content, and motion would compete with the comparison

### Section: Legacy (rebuilt as carousel 2026-10-27)
- Job and message: heritage since 1951, milestone by milestone
- Content source: `legacy`. 1951 is real. 1952, 1970, 1978 and 2002 use clearly marked placeholder text with a "Content to come" badge (TODO(placeholder), user to replace)
- Layout: A kept. 4:5 photo card (5 cols) beside the heading, a 5-year rail (clickable, active year marked on the hairline), the active milestone (year, title, text) and a ruled footer with an "01 / 05" counter and 44px prev/next arrows (7 cols). Arrows wrap. Mist surface
- Image: one per year. 1951 is L-1 (40412532). 1952–2002 are Magnific era atmosphere (43691597, 40705743, 432243723, 60301037), never presented as Peraj's archive
- Motion: frame unmasks once on entry (MaskReveal); photo and text cross-fade in place on change (500ms opacity), with a fixed height so there's no layout shift. Static for reduced motion

### Section: Solutions (built 2026-10-27)
- Job and message: what Peraj covers
- Content source: `solutions` (the carousel prev/next labels and "Inquire coverage" links were removed; no solution pages exist)
- Layout: A, hairline spec grid. 3×2 cells sharing 1px borders inside one 12px card; 2 columns on tablet, 1 on mobile. White surface
- Component design: cell with a Lucide icon in a mint 44px square (teal-deep), Inter title and a muted line; mint-tint hover only
- Image: none (exempt, IM-4)
- Motion: none (dense reading grid); CSS hover tint 200ms

### Section: Process (built 2026-10-27)
- Job and message: three steps from first call to full protection; hosts the mid-page CTA
- Content source: `process`
- Layout: B. Heading, lead and CtaButton sticky in 5 columns (desktop); three ruled step rows in 7 (number in teal, title, time chip, text). Mist surface
- Image: none (exempt, IM-4)
- Motion: steps appear in reading order once (StaggerIn, 16px rise, 80ms stagger, 0.5s). Static for reduced motion

### Section: Industries (built 2026-10-27)
- Job and message: sector fluency
- Content source: `industries` (image and alt added per item)
- Layout: A, photo cards. 3×2 grid (2 on tablet, 1 on mobile) of 12px hairline cards, with a 4:3 photo on top and an icon and title on white below. White surface
- Image: I-1..I-6 Magnific (52329832, 85357850, 52744973, 284399055, 16589831, 234434773), `public/media/industry-*.webp`
- Motion: none on scroll; CSS hover zoom of the photo to 1.03 (500ms ease-out). No information is hover-only

### Section: Proof (rebuilt 2026-10-27)
- Job and message: trust at claim time
- Content source: `proof`. Quotes paraphrased and rating unsourced, both shown by user choice and flagged TODO(verify)
- Reference: global.lockton.com/in/en quote band. Structure only (centred quote over a portrait rail with peeking neighbours and flanking arrows); none of its copy, images or code
- Layout: ink band. Centred heading, opening gold glyph, large Inter quote (TY-1 kept, user choice) cross-fading in place at a fixed height, role and org, rating line. Below it, an Embla rail of 4:5 photos: the active slide centred, neighbours dimmed to 40% and scaled 0.95, with 44px arrows flanking the centre
- Image: sector photos, not people quoted. Each carries a visible sector label: Engineering (crop of I-1), Pharmaceuticals (P-1, Magnific 316502314), Cloud & cyber (crop of I-6)
- Motion: Embla slide (loop, duration 24; jumps without animation for reduced motion), quote cross-fade 500ms, slide dim and scale 500ms. No autoplay

### Section: FAQs (built 2026-10-27)
- Layout: A. Heading and "Talk to an adviser" sticky in 4 columns (desktop); unboxed hairline accordion in 8, first item open, plus icon rotates to a cross. White surface
- Image: none (exempt, IM-4)
- Motion: Base UI accordion. The panel opens without animating height (rules.md 9); content fades and settles 4px (200ms)

### Section: Contact (built 2026-10-27)
- Layout: A, ink closing band. Heading (gold eyebrow), lead, and the promise, phone and email lines in 5 columns; white 12px form card in 7. The "Let's talk" marquee and glow were removed
- Image: none (exempt, IM-4)
- Motion: none, so the form is usable instantly

### Section: Footer (built 2026-10-27)
- Layout: compact ink footer. Logo and licence, Explore, Reach us, HQ and back to top, then the legal row. The CTA band and outline wordmark were dropped (`footer.cta`/`ctaSub` kept in site.ts by user choice)
- Floating CTA: label unified to "Request a callback" (rule 5)

## 3. Open questions

- Testimonials are paraphrased from the client site (`TODO(verify)`): exact quotes and permission still needed
- Phone number is a placeholder; email to confirm; social and legal links are `#`
- Legacy milestones 1952, 1970, 1978 and 2002 have no content (`TODO(placeholder)`)

## 4. Changelog

- 2026-10-27 | created | initial brief approved (discovery rounds 1-2)
- 2026-10-27 | amended | section order: Pitfalls split out of Why into its own section (user choice)
- 2026-10-27 | amended | IM-4: Proof gains sector photos; Proof rebuilt after the Lockton quote-band reference (user request)
- 2026-10-27 | amended | Legacy becomes a milestone carousel with per-year photos and placeholder milestones (user request)
- 2026-10-27 | built | all sections built; QA at 375/768/1024/1440: no horizontal scroll, no text under 14px, one H1, all images alt-texted, no console errors, production build clean
- 2026-10-27 | amended | user request: palette becomes green #133215 / lime #92B775 / beige #F3E8D3 (CO-2, CO-3: lime replaces gold); semi-transparent glass surfaces allowed; hero rebuilt as copy + callback pill + blended photo (Magnific 426491486) + wavy lines + 3 sector bubbles with scroll drift (MO-1, MO-4); light scroll reveals on every section via `[data-reveal]` (ScrollReveal). Logo asset unchanged
- 2026-10-27 | amended | user request: palette becomes cream #FFFCEF / navy #1E3157 / cyan #00AEEF / text #3D3D3D (CO-2, CO-3); gradients, dark mode and extra utilities from the supplied CSS not adopted (CO-1, CO-4 kept); old token names remapped
