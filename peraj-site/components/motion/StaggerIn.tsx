"use client";

import { useRef, type ComponentProps } from "react";
import { gsap, motion, useGSAP } from "@/lib/gsap";

// Reveals [data-stagger-item] children once, in reading order, to show a sequence. Static for reduced motion.
export default function StaggerIn(props: ComponentProps<"div">) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-stagger-item]", {
          autoAlpha: 0,
          y: 16,
          duration: motion.base,
          ease: motion.ease,
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        });
      });
    },
    { scope: root },
  );

  return <div ref={root} {...props} />;
}
