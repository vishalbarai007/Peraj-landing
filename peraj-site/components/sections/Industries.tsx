import Image from "next/image";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/content/site";

// Industries layout A: photo cards. 4:3 photo on top, icon and sector title on white below; text never sits on a photo.
export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="section bg-background">
      <div className="wrap">
        <SectionHeading id="industries-title" eyebrow={industries.eyebrow} title={industries.title} />

        <ul className="mt-(--title-gap) grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((it) => (
            <li key={it.title} className="card-surface group flex flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={it.image}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-(--duration-base) ease-(--ease-out) group-hover:scale-103"
                />
              </div>
              <div className="flex flex-1 items-start gap-3 border-t border-border p-5">
                <Icon name={it.icon} className="mt-0.5 size-5 shrink-0 text-teal-deep" strokeWidth={1.5} />
                <h3 className="t-h3 text-navy">{it.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
