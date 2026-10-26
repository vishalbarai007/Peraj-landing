import Image from "next/image";
import { hero } from "@/content/site";

// Hero visual: one bordered unit, photo on top with the stat tiles docked to its bottom edge.
export default function HeroPanel() {
  return (
    <figure className="card-surface overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
        <div data-hero-mask data-hero-hide className="absolute inset-0 overflow-hidden">
          <Image
            data-hero-img
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </div>
      <dl className="grid grid-cols-2 divide-x divide-border border-t border-border">
        {hero.stats.map((s) => (
          <div key={s.label} data-hero-tile data-hero-hide className="flex flex-col-reverse gap-2 p-5 sm:p-6">
            <dt className="t-caption">{s.label}</dt>
            <dd className="t-stat text-navy">{s.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
