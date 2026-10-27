import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import HeroEntrance from "@/components/motion/HeroEntrance";
import { hero } from "@/content/site";
import HeroCallback from "./HeroCallback";

const waves = [
  "M0 60 C 90 20, 160 100, 260 60 S 420 20, 520 60",
  "M0 100 C 90 60, 160 140, 260 100 S 420 60, 520 100",
  "M0 140 C 90 100, 160 180, 260 140 S 420 100, 520 140",
];

// Hero: copy and the callback pill on the left; the photo melts into the beige page on the right, with
// wavy lines and three sector bubbles around it.
// On desktop it is exactly one viewport tall and stays pinned while the next section slides over it. Bubbles drift slightly on scroll (HeroEntrance).
export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-mist pt-28 lg:sticky lg:top-0 lg:flex lg:h-svh lg:min-h-[38rem] lg:items-center lg:pt-20">
      <HeroEntrance className="wrap relative grid items-center gap-8 lg:grid-cols-12">
        <svg aria-hidden viewBox="0 0 520 200" fill="none" className="pointer-events-none absolute top-24 right-0 hidden w-[58%] text-primary/30 lg:block">
          {waves.map((d) => (
            <path key={d} d={d} stroke="currentColor" strokeWidth="1.5" />
          ))}
        </svg>

        <div className="relative z-10 pb-4 lg:col-span-6 lg:pb-0">
          <p className="t-eyebrow flex items-center gap-3" data-hero-copy data-hero-hide>
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-lime" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="t-h1 mt-6 text-[clamp(2.5rem,4.3vw,4.5rem)] text-navy" data-hero-hide>
            {[hero.titleLead, hero.titleTail].map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span className="block" data-hero-line>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="t-lead mt-6 max-w-md" data-hero-copy data-hero-hide>
            {hero.sub}
          </p>
          <div className="mt-10" data-hero-copy data-hero-hide>
            <HeroCallback />
          </div>
          <p className="t-caption mt-6 flex items-center gap-2" data-hero-copy data-hero-hide>
            <ShieldCheck aria-hidden className="size-5 text-primary" strokeWidth={1.5} />
            {hero.badge}
          </p>
        </div>

        <div className="relative lg:col-span-6">
          <div data-hero-photo data-hero-hide className="relative mx-auto aspect-[4/4.2] w-full max-w-xl lg:aspect-auto lg:h-[min(36rem,calc(100svh-6rem))] lg:max-w-none">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="hero-photo object-cover object-[50%_20%]"
            />
          </div>

          <ul aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
            {hero.bubbles.map((b, i) => (
              <li
                key={b.src}
                data-hero-bubble
                data-hero-hide
                data-drift={[-70, -40, -90][i]}
                className={["top-[2%] left-[8%] size-20", "top-[12%] right-[4%] size-16", "top-[34%] left-[0%] size-14"][i] + " absolute"}
              >
                <Image src={b.src} alt="" fill sizes="96px" className="rounded-full border-4 border-white/80 object-cover shadow-sm" />
              </li>
            ))}
          </ul>

          <dl data-hero-chip data-hero-hide className="glass absolute bottom-6 left-4 rounded-(--radius) px-5 py-3 sm:left-8 lg:bottom-10">
            <dd className="t-stat text-navy">{hero.stat.value}</dd>
            <dt className="t-caption">{hero.stat.label}</dt>
          </dl>
        </div>
      </HeroEntrance>
    </section>
  );
}
