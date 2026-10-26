"use client";

import { useRef, type ComponentProps } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

// The page's one hero sequence (brief MO-4): headline lines rise, the photo unmasks from the bottom
// while settling from 1.08 scale, then the stat tiles land. Transform and opacity only, under 1.2s.
// Markup opts in with data-hero-line, data-hero-copy, data-hero-mask, data-hero-img, data-hero-tile.
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
          .from("[data-hero-mask]", { yPercent: 100, duration: 0.8, ease: "expo.out" }, 0.3)
          .from("[data-hero-img]", { yPercent: -100, scale: 1.08, duration: 0.8, ease: "expo.out" }, 0.3)
          .from("[data-hero-tile]", { autoAlpha: 0, y: 16, duration: 0.45, stagger: 0.08 }, 0.65);
      });
    },
    { scope: root },
  );

  return <div ref={root} {...props} />;
}
