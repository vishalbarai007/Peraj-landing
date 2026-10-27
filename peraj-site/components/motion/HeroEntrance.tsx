"use client";

import { useRef, type ComponentProps } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

// The page's one hero sequence: headline lines rise, copy fades up, the photo and bubbles settle in, then
// the stat chip lands. After it, [data-drift] bubbles float up slightly as the hero scrolls away.
// Markup opts in with data-hero-line, data-hero-copy, data-hero-photo, data-hero-bubble, data-hero-chip, data-drift.
export default function HeroEntrance(props: ComponentProps<"div">) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: motion.ease } })
          .set("[data-hero-hide]", { visibility: "visible" })
          .from("[data-hero-line]", { yPercent: 110, duration: 0.6, stagger: 0.15 }, 0)
          .from("[data-hero-copy]", { autoAlpha: 0, y: 12, duration: motion.base, stagger: 0.06 }, 0.25)
          .from("[data-hero-photo]", { autoAlpha: 0, x: 40, duration: 0.9, ease: "expo.out" }, 0.2)
          .from("[data-hero-bubble]", { autoAlpha: 0, scale: 0.5, duration: 0.6, stagger: 0.1, ease: "back.out(1.6)" }, 0.6)
          .from("[data-hero-chip]", { autoAlpha: 0, y: 16, duration: 0.45 }, 0.8);

        const next = document.getElementById("after-hero");
        if (next && root.current) {
          // Hero recedes as the next section slides over it (desktop pins the hero; on mobile it just scrolls).
          gsap.to(root.current, {
            y: -60,
            opacity: 0.4,
            scale: 0.97,
            ease: "none",
            scrollTrigger: { trigger: next, start: "top bottom", end: "top top", scrub: 0.6 },
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
          gsap.to(el, {
            y: Number(el.dataset.drift),
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 0.8 },
          });
        });
      });
    },
    { scope: root },
  );

  return <div ref={root} {...props} />;
}
