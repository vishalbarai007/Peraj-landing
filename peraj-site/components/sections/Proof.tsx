"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import SectionHeading from "@/components/SectionHeading";
import { proof } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Proof() {
  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setIndex(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <section id="proof" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-4">
          <SectionHeading eyebrow={proof.eyebrow} title={proof.title} />
          <div className="mt-10 flex items-center gap-3" data-reveal>
            <Button variant="outline" size="icon" className="size-14 rounded-full hover:border-primary hover:text-primary" onClick={() => api?.scrollPrev()} aria-label={proof.prev}>
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="outline" size="icon" className="size-14 rounded-full hover:border-primary hover:text-primary" onClick={() => api?.scrollNext()} aria-label={proof.next}>
              <ArrowRight className="size-5" />
            </Button>
            <div className="ml-3 flex gap-2" aria-hidden>
              {proof.items.map((p, i) => (
                <span key={p.org} className={cn("h-1.5 rounded-full bg-primary transition-all duration-500", i === index ? "w-10" : "w-3 opacity-30")} />
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-8" data-reveal>
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {proof.items.map((p) => (
                <CarouselItem key={p.org}>
                  <figure className="flex min-h-[26rem] flex-col justify-between rounded-[2rem] bg-ink p-8 text-white sm:p-12">
                    <div className="flex items-center gap-3">
                      <span className="flex gap-0.5 text-gold" aria-hidden>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-5 fill-current" />
                        ))}
                      </span>
                      <span className="text-sm text-white/60">{proof.rating}</span>
                    </div>
                    <blockquote className="font-heading text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2]">&ldquo;{p.quote}&rdquo;</blockquote>
                    <figcaption className="border-t border-white/15 pt-5">
                      <span className="font-semibold">{p.who}</span>
                      <span className="text-white/60">, {p.org}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
