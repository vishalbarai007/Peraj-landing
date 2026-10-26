"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = { value: number; suffix?: string; className?: string };

// Counts from 0 to value once, the first time it scrolls into view. Server HTML and reduced motion show the final value.
export default function CountUp({ value, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const decimals = value % 1 ? 1 : 0;
  const format = (n: number) => n.toFixed(decimals) + suffix;

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const state = { v: 0 };
      el.textContent = format(0);
      gsap.to(state, {
        v: value,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = format(state.v);
        },
      });
      return () => {
        el.textContent = format(value);
      };
    });
  });

  return (
    <span className={className}>
      <span ref={ref} aria-hidden>
        {format(value)}
      </span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}
