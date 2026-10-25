"use client";

import { useState } from "react";
import { AlertTriangle, Gavel, Percent, ShieldCheck } from "lucide-react";
import { pitfalls } from "@/content/site";
import { cn } from "@/lib/utils";

const icons = [AlertTriangle, Gavel, Percent];

export default function Pitfalls() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
        <div>
          <p className="t-eyebrow">{pitfalls.eyebrow}</p>
          <h3 className="t-h2 mt-4 max-w-2xl text-navy">{pitfalls.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{pitfalls.hint}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3" data-stagger>
        {pitfalls.items.map((p, i) => {
          const Icon = icons[i];
          const on = flipped === i;
          return (
            <button
              key={p.title}
              type="button"
              aria-pressed={on}
              onClick={() => setFlipped(on ? null : i)}
              className="group h-80 text-left [perspective:1200px] focus-visible:outline-none"
            >
              <span
                className={cn(
                  "relative block size-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-focus-visible:ring-3 group-focus-visible:ring-primary/40 md:group-hover:[transform:rotateY(180deg)]",
                  on && "[transform:rotateY(180deg)]",
                )}
              >
                <span className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-border bg-mist p-8 [backface-visibility:hidden]">
                  <span className="flex size-14 items-center justify-center rounded-full bg-white text-gold shadow-sm">
                    <Icon className="size-7" aria-hidden />
                  </span>
                  <span>
                    <span className="t-eyebrow text-muted-foreground">{pitfalls.problemLabel}</span>
                    <span className="t-h3 mt-3 block text-navy">{p.title}</span>
                    <span className="mt-3 block text-muted-foreground">{p.problem}</span>
                  </span>
                </span>
                <span className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-ink p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="flex size-14 items-center justify-center rounded-full bg-primary text-white">
                    <ShieldCheck className="size-7" aria-hidden />
                  </span>
                  <span>
                    <span className="t-eyebrow text-gold">{pitfalls.fixLabel}</span>
                    <span className="t-h3 mt-3 block">{p.title}</span>
                    <span className="mt-3 block text-white/75">{p.fix}</span>
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
