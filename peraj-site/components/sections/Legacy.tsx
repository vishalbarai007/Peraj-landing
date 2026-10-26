"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MaskReveal from "@/components/motion/MaskReveal";
import SectionHeading from "@/components/SectionHeading";
import { legacy } from "@/content/site";
import { cn } from "@/lib/utils";

const items = legacy.milestones;
const pad = (n: number) => String(n).padStart(2, "0");
const fade = "transition-opacity duration-(--duration-base) ease-(--ease-out)";

// Legacy layout A as a timeline carousel: photo (5 cols) beside the heading, a year rail, the active
// milestone and prev/next arrows (7 cols). Photo and text cross-fade in place; nothing changes size.
export default function Legacy() {
  const [active, setActive] = useState(0);
  const step = (dir: -1 | 1) => setActive((i) => (i + dir + items.length) % items.length);

  return (
    <section id="legacy" aria-labelledby="legacy-title" className="section bg-mist">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <MaskReveal className="card-surface relative aspect-[4/5] overflow-hidden lg:col-span-5">
          {items.map((m, i) => (
            <Image
              key={m.year}
              data-mask-img
              src={m.image}
              alt={i === active ? m.alt : ""}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={cn("object-cover", fade, i === active ? "opacity-100" : "opacity-0")}
            />
          ))}
        </MaskReveal>

        <div className="lg:col-span-7">
          <SectionHeading id="legacy-title" eyebrow={legacy.eyebrow} title={legacy.title} />

          <ol className="mt-(--title-gap) grid grid-cols-5 border-t border-border">
            {items.map((m, i) => (
              <li key={m.year}>
                <button
                  type="button"
                  aria-current={i === active ? "step" : undefined}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative -mt-px flex min-h-11 w-full items-end border-t-2 pt-3 text-sm font-semibold tabular-nums transition-colors duration-(--duration-fast)",
                    i === active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-navy",
                  )}
                >
                  {m.year}
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid" aria-live="polite">
            {items.map((m, i) => (
              <article
                key={m.year}
                aria-hidden={i !== active}
                className={cn("col-start-1 row-start-1", fade, i === active ? "opacity-100" : "invisible opacity-0")}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="t-figure text-primary">{m.year}</p>
                  {"placeholder" in m && (
                    <span className="rounded-full border border-dashed border-navy/30 px-3 py-1 text-sm text-muted-foreground">
                      {legacy.placeholderBadge}
                    </span>
                  )}
                </div>
                <h3 className="t-h3 mt-4 text-navy">{m.title}</h3>
                <p className="mt-2 max-w-xl text-muted-foreground">{m.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
            <p className="t-caption tabular-nums">
              {pad(active + 1)} / {pad(items.length)}
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="size-11" onClick={() => step(-1)} aria-label={legacy.prev}>
                <ArrowLeft className="size-5" strokeWidth={1.5} aria-hidden />
              </Button>
              <Button variant="outline" size="icon" className="size-11" onClick={() => step(1)} aria-label={legacy.next}>
                <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
