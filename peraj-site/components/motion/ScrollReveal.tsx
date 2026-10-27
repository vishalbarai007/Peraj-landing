"use client";

import { gsap, motion, ScrollTrigger, useGSAP } from "@/lib/gsap";

// One quiet reveal for the whole page: every [data-reveal] rises 20px and fades in once, in reading order
// per batch. Hidden only after JS runs (below the fold), so server HTML and reduced motion show everything.
export default function ScrollReveal() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(items, { autoAlpha: 0, y: 20 });
      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.6, ease: motion.ease, stagger: 0.08, overwrite: true }),
      });
    });
  });

  return null;
}
