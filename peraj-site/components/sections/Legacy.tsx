"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { legacy } from "@/content/site";
import { cn } from "@/lib/utils";

// The page's single pinned scene: the timeline scrolls sideways while the page is pinned.
// Below lg, or with reduced motion, it is a native swipe row.
export default function Legacy() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const t = track.current;
        if (!t) return;
        const distance = () => t.scrollWidth - window.innerWidth + 120;
        gsap.to(t, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="legacy" ref={root} className="overflow-hidden bg-ink text-white lg:h-screen">
      <div className="flex flex-col justify-center py-20 lg:h-full lg:py-0">
        <div className="wrap w-full">
          <p className="t-eyebrow text-gold">{legacy.eyebrow}</p>
          <h2 className="t-h2 mt-4 max-w-3xl text-white">{legacy.title}</h2>
          <div className="mt-8 hidden h-px w-full bg-white/15 lg:block">
            <span ref={bar} className="block h-px origin-left scale-x-0 bg-gold" />
          </div>
        </div>
        <div
          ref={track}
          className="mt-10 flex snap-x gap-5 overflow-x-auto px-[clamp(1.25rem,4vw,4rem)] pb-4 lg:w-max lg:snap-none lg:overflow-visible lg:pb-0 lg:pr-[10vw]"
        >
          {legacy.milestones.map((m) => (
            <article
              key={m.year}
              className={cn(
                "group relative flex h-[24rem] w-[82vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-colors duration-500 sm:w-[28rem] lg:h-[26rem] lg:w-[30rem]",
                m.real ? "border-gold/40 bg-white/5 hover:bg-white/10" : "border-dashed border-white/20 hover:border-gold/50",
              )}
            >
              <p className={cn("t-h1 transition-transform duration-500 group-hover:-translate-y-1", m.real ? "text-gold" : "text-outline")}>{m.year}</p>
              <div>
                <h3 className="t-h3">{m.real ? m.title : legacy.placeholderTitle}</h3>
                <p className="mt-3 text-white/70">{m.real ? m.text : legacy.placeholderBody}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
