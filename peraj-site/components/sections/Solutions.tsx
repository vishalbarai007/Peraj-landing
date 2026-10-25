"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { cta, solutions } from "@/content/site";
import { cn } from "@/lib/utils";

const tones = [
  "bg-ink text-white",
  "bg-primary text-white",
  "bg-mint text-navy",
  "bg-navy text-white",
  "bg-mist text-navy border border-border",
  "bg-gold text-ink",
];

export default function Solutions() {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setProgress(Math.max(0.08, Math.min(1, api.scrollProgress())));
    update();
    api.on("scroll", update).on("reInit", update);
    return () => {
      api.off("scroll", update);
    };
  }, [api]);

  return (
    <section id="solutions" className="section overflow-hidden bg-mist">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={solutions.eyebrow} title={solutions.title} />
          <div className="flex gap-3" data-reveal>
            <Button variant="outline" size="icon" className="size-14 rounded-full hover:border-primary hover:text-primary" onClick={() => api?.scrollPrev()} aria-label={solutions.prev}>
              <ArrowLeft className="size-5" />
            </Button>
            <Button variant="outline" size="icon" className="size-14 rounded-full hover:border-primary hover:text-primary" onClick={() => api?.scrollNext()} aria-label={solutions.next}>
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", dragFree: true, containScroll: false }} className="mt-14 cursor-grab active:cursor-grabbing">
        <CarouselContent className="ml-0 pl-[clamp(1.25rem,4vw,4rem)]">
          {solutions.items.map((s, i) => (
            <CarouselItem key={s.title} className="basis-[84%] pr-5 pl-0 sm:basis-[46%] lg:basis-[32%] xl:basis-[25%]">
              <article className={cn("group relative flex h-[28rem] flex-col justify-between overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2", tones[i % tones.length])}>
                <div aria-hidden className="absolute -top-16 -right-16 size-56 rounded-full bg-current opacity-[0.06] transition-transform duration-700 group-hover:scale-150" />
                <div className="relative flex items-start justify-between">
                  <span className="flex size-16 items-center justify-center rounded-2xl bg-current/10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={s.icon} className="size-8" />
                  </span>
                  <span className="font-heading text-2xl opacity-50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="relative">
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="mt-3 opacity-80">{s.text}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline">
                    {cta.inquire}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </a>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="wrap mt-10">
        <div className="h-1 w-full rounded-full bg-border" aria-hidden>
          <div className="h-full origin-left rounded-full bg-primary transition-transform duration-300" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}
