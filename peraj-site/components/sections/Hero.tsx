import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import CtaButton from "@/components/CtaButton";
import HeroEntrance from "@/components/motion/HeroEntrance";
import { cta, hero } from "@/content/site";
import HeroPanel from "./HeroPanel";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-background pt-28 pb-(--section-y) lg:pt-36">
      <HeroEntrance className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="t-eyebrow flex items-center gap-3" data-hero-copy data-hero-hide>
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-gold" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="t-h1 mt-6 text-navy" data-hero-hide>
            {[hero.titleLead, hero.titleTail].map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span className="block" data-hero-line>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="t-lead mt-6 max-w-xl" data-hero-copy data-hero-hide>
            {hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-hero-copy data-hero-hide>
            <CtaButton />
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#legacy" />}>
              {cta.secondary}
            </Button>
          </div>
          <p className="t-caption mt-8 flex items-center gap-2" data-hero-copy data-hero-hide>
            <ShieldCheck aria-hidden className="size-5 text-primary" strokeWidth={1.5} />
            {hero.badge}
          </p>
        </div>
        <div className="lg:col-span-5">
          <HeroPanel />
        </div>
      </HeroEntrance>
    </section>
  );
}
