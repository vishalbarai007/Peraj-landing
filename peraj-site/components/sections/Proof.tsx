"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import SectionHeading from "@/components/SectionHeading";
import { proof } from "@/content/site";
import { cn } from "@/lib/utils";

// Slides render twice so Embla can loop with neighbours peeking on both sides.
const slides = [...proof.items, ...proof.items];
const count = proof.items.length;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Proof: ink band. A centred quote that cross-fades in place, above a rail of sector photos
// (active one centred, neighbours dimmed). Photos show the client's sector, labelled, never the person quoted.
export default function Proof() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const active = selected % count;

  useEffect(() => {
    if (!api) return;
    const update = () => setSelected(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  const go = (dir: -1 | 1) => api?.scrollTo((selected + dir + slides.length) % slides.length, reducedMotion());

  return (
    <section id="proof" aria-labelledby="proof-title" className="section overflow-hidden bg-ink text-beige">
      <div className="wrap">
        <SectionHeading id="proof-title" eyebrow={proof.eyebrow} title={proof.title} dark center />

        <div data-reveal className="mx-auto mt-(--title-gap) max-w-3xl text-center">
          <Quote aria-hidden className="mx-auto size-10 rotate-180 fill-current text-gold" strokeWidth={0} />
          <div className="mt-6 grid" aria-live="polite">
            {proof.items.map((p, i) => (
              <figure
                key={p.org}
                aria-hidden={i !== active}
                className={cn(
                  "col-start-1 row-start-1 transition-opacity duration-(--duration-base) ease-(--ease-out)",
                  i === active ? "opacity-100" : "invisible opacity-0",
                )}
              >
                <blockquote className="t-quote text-beige">&ldquo;{p.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 text-beige/75">
                  <span className="font-semibold text-beige">{p.who}</span>, {p.org}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 flex items-center justify-center gap-3 text-sm text-beige/75">
            <span className="flex gap-0.5 text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            {proof.rating}
          </p>
        </div>
      </div>

      <div data-reveal className="relative mx-auto mt-12 max-w-[calc(var(--container)+2*var(--gutter))]">
        <Carousel setApi={setApi} opts={{ loop: true, align: "center", duration: 24 }}>
          <CarouselContent className="-ml-5">
            {slides.map((p, i) => {
              const on = i === selected;
              return (
                <CarouselItem key={`${p.org}-${i}`} aria-hidden={!on} className="basis-[68%] pl-5 sm:basis-[44%] lg:basis-[30%]">
                  <div
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden rounded-(--radius) transition-[opacity,scale] duration-(--duration-base) ease-(--ease-out)",
                      on ? "opacity-100" : "scale-95 opacity-40",
                    )}
                  >
                    <Image src={p.image} alt={on ? p.alt : ""} fill sizes="(min-width: 1024px) 26rem, (min-width: 640px) 44vw, 68vw" className="object-cover" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 text-sm font-medium text-beige">{p.sector}</span>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-(--gutter) sm:justify-center sm:gap-[calc(44%+1rem)] lg:gap-[calc(30%+3rem)]">
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto size-11 border-beige/30 bg-ink/60 text-beige hover:border-beige hover:text-beige"
            onClick={() => go(-1)}
            aria-label={proof.prev}
          >
            <ArrowLeft className="size-5" strokeWidth={1.5} aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="pointer-events-auto size-11 border-beige/30 bg-ink/60 text-beige hover:border-beige hover:text-beige"
            onClick={() => go(1)}
            aria-label={proof.next}
          >
            <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
