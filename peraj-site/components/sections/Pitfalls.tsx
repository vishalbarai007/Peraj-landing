import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { pitfalls } from "@/content/site";

// Pitfalls layout A: one ruled row per pitfall. Title, the problem, then the Peraj fix on a mint tile. All visible.
export default function Pitfalls() {
  return (
    <section id="pitfalls" aria-labelledby="pitfalls-title" className="section bg-background">
      <div className="wrap">
        <SectionHeading id="pitfalls-title" eyebrow={pitfalls.eyebrow} title={pitfalls.title} />

        <ol className="mt-(--title-gap) border-t border-border">
          {pitfalls.items.map((p, i) => (
            <li key={p.title} className="grid gap-5 border-b border-border py-8 lg:grid-cols-12 lg:items-center lg:gap-8">
              <div className="flex items-baseline gap-4 lg:col-span-3">
                <span className="t-caption tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 text-navy">{p.title}</h3>
              </div>
              <div className="lg:col-span-4">
                <p className="t-caption font-medium">{pitfalls.problemLabel}</p>
                <p className="mt-1 text-muted-foreground">{p.problem}</p>
              </div>
              <ArrowRight aria-hidden strokeWidth={1.5} className="hidden size-5 justify-self-center text-muted-foreground lg:col-span-1 lg:block" />
              <div className="rounded-(--radius) bg-mint p-5 lg:col-span-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-teal-deep">
                  <Check aria-hidden strokeWidth={2} className="size-4" />
                  {pitfalls.fixLabel}
                </p>
                <p className="mt-1 text-navy">{p.fix}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
