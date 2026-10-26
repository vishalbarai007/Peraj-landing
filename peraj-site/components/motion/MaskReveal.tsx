"use client";

import { useRef, type ComponentProps } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Unmasks a framed image from the bottom once, on first view: the frame's inner layer slides up while the
// [data-mask-img] child counter-slides and settles from 1.08 scale. Transform only. Static for reduced motion.
export default function MaskReveal({ children, ...props }: ComponentProps<"div">) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const trigger = { trigger: root.current, start: "top 80%", once: true };
        gsap.from("[data-mask-layer]", { yPercent: 100, duration: 0.8, ease: "expo.out", scrollTrigger: trigger });
        gsap.from("[data-mask-img]", { yPercent: -100, scale: 1.08, duration: 0.8, ease: "expo.out", scrollTrigger: trigger });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} {...props}>
      <div data-mask-layer className="absolute inset-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
