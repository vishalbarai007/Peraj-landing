"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function RotatingWord({ words }: { words: string[] }) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-word-item]");
        gsap.set(items.slice(1), { yPercent: 110, opacity: 1 });
        const tl = gsap.timeline({ repeat: -1, delay: 1.6 });
        items.forEach((el, i) => {
          const next = items[(i + 1) % items.length];
          tl.to(el, { yPercent: -110, duration: 0.7, ease: "power3.inOut" }, "+=1.9")
            .fromTo(next, { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "power3.inOut", immediateRender: false }, "<");
        });
      });
    },
    { scope: root },
  );

  return (
    <span ref={root} className="relative inline-grid overflow-hidden pb-[0.12em] align-bottom text-primary">
      <span className="sr-only">{words[0]}</span>
      {words.map((w, i) => (
        <span key={w} data-word-item aria-hidden className={`col-start-1 row-start-1 ${i ? "opacity-0" : ""}`}>
          {w}
        </span>
      ))}
    </span>
  );
}
