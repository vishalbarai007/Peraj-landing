"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const q = <T extends HTMLElement | SVGElement>(sel: string) => gsap.utils.toArray<T>(sel);

// Scroll motion for the whole page. Markup opts in with data attributes:
// data-reveal, data-stagger, data-split, data-parallax="<px>", data-count="<n>", data-ring="<pct>".
export default function Animations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const once = (trigger: Element, start = "top 88%") => ({ trigger, start, once: true });

      q<HTMLElement>("[data-split]").forEach((el) => {
        const words = (el.textContent ?? "").trim().split(/\s+/);
        el.setAttribute("aria-label", words.join(" "));
        el.innerHTML = words
          .map((w) => `<span aria-hidden="true" class="inline-block overflow-hidden pb-[0.12em] align-top"><span class="inline-block" data-word>${w}</span></span>`)
          .join(" ");
        gsap.from(el.querySelectorAll("[data-word]"), {
          yPercent: 115,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: once(el),
        });
      });

      q<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: Number(el.dataset.delay) || 0,
          scrollTrigger: once(el),
        });
      });

      q<HTMLElement>("[data-stagger]").forEach((wrap) => {
        gsap.from(wrap.children, {
          y: 56,
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: once(wrap, "top 85%"),
        });
      });

      q<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 60;
        gsap.fromTo(
          el,
          { y: -amount },
          { y: amount, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      q<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const decimals = end % 1 ? 1 : 0;
        const state = { v: 0 };
        el.textContent = (0).toFixed(decimals);
        gsap.to(state, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: once(el, "top 92%"),
          onUpdate: () => {
            el.textContent = state.v.toFixed(decimals);
          },
        });
      });

      q<SVGElement>("[data-ring]").forEach((el) => {
        const pct = Number(el.getAttribute("data-ring"));
        gsap.fromTo(
          el,
          { strokeDashoffset: 100 },
          { strokeDashoffset: 100 - pct, duration: 1.8, ease: "power3.out", scrollTrigger: once(el, "top 92%") },
        );
      });
    });
  });

  return null;
}
