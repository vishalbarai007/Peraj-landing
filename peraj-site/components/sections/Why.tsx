import Spotlight from "@/components/motion/Spotlight";
import SectionHeading from "@/components/SectionHeading";
import { why } from "@/content/site";
import { cn } from "@/lib/utils";
import Pitfalls from "./Pitfalls";

const tile = "group flex flex-col justify-between rounded-3xl p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10 sm:p-9";

function Num({ value, suffix, className }: { value: number; suffix: string; className?: string }) {
  return (
    <p className={cn("font-heading leading-none", className)}>
      <span data-count={value}>{value}</span>
      {suffix}
    </p>
  );
}

export default function Why() {
  const s = why.stats;
  return (
    <section id="why" className="section">
      <div className="wrap">
        <SectionHeading eyebrow={why.eyebrow} title={why.title} />

        <div className="mt-14 grid auto-rows-[minmax(15rem,auto)] gap-5 md:grid-cols-6 lg:grid-cols-12" data-stagger>
          <Spotlight className={cn(tile, "bg-ink text-white md:col-span-6 lg:col-span-5 lg:row-span-2")}>
            <div aria-hidden className="absolute -right-24 -bottom-24 size-[26rem] rounded-full border border-white/10" />
            <div aria-hidden className="absolute -right-12 -bottom-12 size-[20rem] rounded-full border border-white/10" />
            <div aria-hidden className="absolute -right-0 -bottom-0 size-[14rem] rounded-full border border-gold/40" />
            <p className="t-eyebrow text-gold">{s.years.note}</p>
            <div>
              <Num value={s.years.value} suffix={s.years.suffix} className="text-[clamp(7rem,14vw,13rem)] text-white" />
              <p className="mt-2 text-xl text-white/80">{s.years.label}</p>
            </div>
          </Spotlight>

          <Spotlight className={cn(tile, "border border-border bg-mint md:col-span-3 lg:col-span-4")}>
            <svg viewBox="0 0 100 100" className="size-28 -rotate-90" aria-hidden>
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(16 42 67 / 0.1)" strokeWidth="8" />
              <circle cx="50" cy="50" r="42" pathLength="100" strokeDasharray="100" data-ring={s.claims.value} fill="none" stroke="var(--primary)" strokeLinecap="round" strokeWidth="8" />
            </svg>
            <div>
              <Num value={s.claims.value} suffix={s.claims.suffix} className="text-6xl text-navy" />
              <p className="mt-2 font-semibold text-navy">{s.claims.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.claims.note}</p>
            </div>
          </Spotlight>

          <Spotlight className={cn(tile, "border border-border bg-card md:col-span-3 lg:col-span-3")}>
            <div aria-hidden className="grid grid-cols-10 gap-1.5">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className={cn("aspect-square rounded-full transition-colors duration-500 group-hover:bg-primary", i < 39 ? "bg-primary/70" : "bg-border")} />
              ))}
            </div>
            <div>
              <Num value={s.retention.value} suffix={s.retention.suffix} className="text-6xl text-navy" />
              <p className="mt-2 font-semibold text-navy">{s.retention.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.retention.note}</p>
            </div>
          </Spotlight>

          <Spotlight className={cn(tile, "overflow-hidden bg-primary text-white md:col-span-6 lg:col-span-7")}>
            <div aria-hidden className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgb(255_255_255/0.55)_1.5px,transparent_1.5px)] [background-size:22px_22px] transition-transform duration-700 group-hover:scale-105" />
            <div className="relative flex flex-wrap gap-2">
              {why.countryChips.map((c) => (
                <span key={c} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
                  {c}
                </span>
              ))}
            </div>
            <div className="relative">
              <Num value={s.countries.value} suffix={s.countries.suffix} className="text-7xl" />
              <p className="mt-2 text-lg font-semibold">{s.countries.label}</p>
              <p className="mt-1 text-white/80">{s.countries.note}</p>
            </div>
          </Spotlight>
        </div>

        <Pitfalls />
      </div>
    </section>
  );
}
