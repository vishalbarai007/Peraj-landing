import CountUp from "@/components/motion/CountUp";
import SectionHeading from "@/components/SectionHeading";
import { why } from "@/content/site";
import { cn } from "@/lib/utils";

// Why layout B: ruled stat row. Four columns split by hairlines (2×2 on mobile), chips underneath.
export default function Why() {
  const stats = [why.stats.years, why.stats.claims, why.stats.retention, why.stats.countries];
  return (
    <section id="why" aria-labelledby="why-title" className="section bg-mist">
      <div className="wrap">
        <SectionHeading id="why-title" eyebrow={why.eyebrow} title={why.title} />

        <dl className="mt-(--title-gap) grid grid-cols-2 border-y border-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className={cn(
                "flex flex-col gap-2 py-8 pr-5 lg:px-8 lg:py-10 lg:first:pl-0",
                i % 2 === 1 && "border-l border-border pl-5",
                i > 1 && "border-t border-border lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
            >
              <dt className="order-2 font-semibold text-navy">{s.label}</dt>
              <dd className="order-1">
                <CountUp value={s.value} suffix={s.suffix} className="t-figure text-navy" />
              </dd>
              <dd className="t-caption order-3">{s.note}</dd>
            </div>
          ))}
        </dl>

        <ul data-reveal className="mt-8 flex flex-wrap gap-2">
          {why.countryChips.map((c) => (
            <li key={c} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-navy">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
