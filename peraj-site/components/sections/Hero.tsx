import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import { cta, hero, marquee } from "@/content/site";
import HeroVisual from "./HeroVisual";
import RotatingWord from "./RotatingWord";

export default function Hero() {
  const loop = [...marquee, ...marquee];
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-mint/60 via-white to-white pt-28 lg:pt-32">
      <div aria-hidden data-parallax="90" className="pointer-events-none absolute -top-40 -right-40 size-[44rem] rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden data-parallax="60" className="pointer-events-none absolute top-1/3 -left-40 size-[28rem] rounded-full bg-gold/15 blur-3xl" />

      <div className="wrap relative grid items-center gap-10 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="t-eyebrow" data-reveal>{hero.eyebrow}</p>
          <h1 className="t-h1 mt-6 text-navy">
            <span className="block">{hero.titleLead}</span>
            <span className="block">{hero.titleTail}</span>
            <span className="block">
              <RotatingWord words={hero.rotating} />
            </span>
          </h1>
          <p className="t-lead mt-8 max-w-xl" data-reveal data-delay="0.2">{hero.sub}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal data-delay="0.3">
            <Magnetic>
              <Button nativeButton={false} render={<a href="#contact" />} className="group h-14 rounded-full px-8 text-base font-semibold hover:bg-teal-deep">
                {cta.primary}
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Button>
            </Magnetic>
            <Button nativeButton={false} render={<a href="#legacy" />} variant="outline" className="h-14 rounded-full px-8 text-base font-semibold hover:border-primary hover:text-primary">
              {cta.secondary}
            </Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground" data-reveal data-delay="0.4">
            <ShieldCheck className="size-5 text-primary" aria-hidden /> {hero.badge}
          </p>
        </div>
        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-border bg-white/70 py-5 backdrop-blur" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 pr-12 whitespace-nowrap">
          {loop.map((m, i) => (
            <span key={i} className="flex items-center gap-12 font-heading text-2xl text-navy/70">
              {m}
              <span className="size-1.5 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
