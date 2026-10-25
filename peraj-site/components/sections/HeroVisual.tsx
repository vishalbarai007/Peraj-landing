"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, PhoneCall, TriangleAlert } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { hero } from "@/content/site";
import { cn } from "@/lib/utils";

const card = "absolute rounded-3xl border border-border bg-white/90 p-5 shadow-2xl shadow-ink/10 backdrop-blur";

export default function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);
  const c = hero.cards;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const el = root.current;
        if (!el) return;
        const layers = gsap.utils.toArray<HTMLElement>("[data-depth]");
        const setters = layers.map((l) => ({
          x: gsap.quickTo(l, "x", { duration: 0.8, ease: "power3.out" }),
          y: gsap.quickTo(l, "y", { duration: 0.8, ease: "power3.out" }),
          d: Number(l.dataset.depth),
        }));
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          setters.forEach((s) => {
            s.x(nx * s.d);
            s.y(ny * s.d);
          });
        };
        el.addEventListener("pointermove", move);
        return () => el.removeEventListener("pointermove", move);
      });
      gsap.from("[data-depth]", { y: 60, opacity: 0, scale: 0.92, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.3 });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative mx-auto h-[34rem] w-full max-w-xl lg:h-[40rem] lg:max-w-none">
      <div data-depth="12" className="absolute inset-x-[14%] top-0 bottom-0 overflow-hidden rounded-t-full bg-gradient-to-b from-mint via-white to-mint ring-1 ring-border">
        <svg viewBox="0 0 400 560" className="absolute inset-0 size-full text-primary/25" fill="none" stroke="currentColor" aria-hidden>
          {[1, 2, 3, 4, 5].map((i) => (
            <ellipse key={i} cx="200" cy="300" rx={30 + i * 34} ry={50 + i * 48} strokeWidth="1" />
          ))}
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/15 to-transparent" />
      </div>

      <div data-depth="40" className={cn(card, "top-[8%] left-0 flex w-60 items-center gap-3 animate-float")}>
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" aria-hidden />
        </span>
        <div>
          <p className="text-sm font-semibold text-navy">{c.claim.label}</p>
          <p className="text-xs text-muted-foreground">{c.claim.text}</p>
        </div>
      </div>

      <div data-depth="55" className={cn(card, "top-[22%] right-0 w-44 border-white/10 bg-ink text-white [animation-delay:-2s] animate-float")}>
        <svg viewBox="0 0 100 100" className="mx-auto size-24 -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="9" />
          <circle cx="50" cy="50" r="42" pathLength="100" strokeDasharray="100" data-ring={c.ring.value} fill="none" stroke="var(--primary)" strokeLinecap="round" strokeWidth="9" />
        </svg>
        <p className="mt-2 text-center font-heading text-3xl">{c.ring.value}%</p>
        <p className="text-center text-xs text-white/60">{c.ring.label}</p>
      </div>

      <div data-depth="30" className={cn(card, "bottom-[14%] left-[2%] w-64 [animation-delay:-4s] animate-float")}>
        <p className="mb-3 text-sm font-semibold text-navy">{c.audit.title}</p>
        <ul className="space-y-2">
          {c.audit.rows.map((r) => (
            <li key={r.name} className="flex items-center justify-between text-sm text-navy/80">
              {r.name}
              {r.ok ? <CheckCircle2 className="size-4 text-primary" aria-label="Covered" /> : <TriangleAlert className="size-4 text-gold" aria-label="Gap" />}
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-full bg-gold/15 px-3 py-1 text-center text-xs font-semibold text-navy">{c.audit.gap}</p>
      </div>

      <div data-depth="65" className={cn(card, "right-[4%] bottom-[2%] flex items-center gap-3 border-0 bg-primary text-white animate-float")}>
        <span className="flex size-11 items-center justify-center rounded-full bg-white/15">
          <PhoneCall className="size-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs text-white/70">{c.callback.label}</p>
          <p className="font-heading text-2xl leading-none">{c.callback.value}</p>
        </div>
      </div>
    </div>
  );
}
