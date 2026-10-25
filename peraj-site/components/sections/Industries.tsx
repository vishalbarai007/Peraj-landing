import { ArrowUpRight } from "lucide-react";
import Icon from "@/components/Icon";
import Spotlight from "@/components/motion/Spotlight";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/content/site";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
];

export default function Industries() {
  return (
    <section id="industries" className="section bg-mist">
      <div className="wrap">
        <SectionHeading eyebrow={industries.eyebrow} title={industries.title} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12" data-stagger>
          {industries.items.map((it, i) => (
            <Spotlight
              key={it.title}
              className={cn(
                "group flex h-[19rem] flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-white",
                spans[i],
              )}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-mint text-primary transition-all duration-500 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white">
                  <Icon name={it.icon} className="size-7" />
                </span>
                <ArrowUpRight className="size-6 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden />
              </div>
              <div className="relative">
                <span className="font-heading text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-2 max-w-xs">{it.title}</h3>
              </div>
              <Icon name={it.icon} className="pointer-events-none absolute -right-6 -bottom-6 size-40 text-current opacity-[0.04] transition-transform duration-700 group-hover:scale-125 group-hover:opacity-10" strokeWidth={1} />
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
