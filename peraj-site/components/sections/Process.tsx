import CtaButton from "@/components/CtaButton";
import StaggerIn from "@/components/motion/StaggerIn";
import SectionHeading from "@/components/SectionHeading";
import { process } from "@/content/site";

// Process layout B: title, lead and the mid-page CTA stay in view (desktop) beside three ruled step rows.
export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section bg-mist">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading id="process-title" eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>

        <StaggerIn className="lg:col-span-7">
          <ol className="border-t border-border">
            {process.steps.map((s) => (
              <li key={s.n} data-stagger-item className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-8 sm:grid-cols-[4rem_1fr]">
                <span className="t-stat text-primary">{s.n}</span>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="t-h3 text-navy">{s.title}</h3>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-sm text-navy">{s.time}</span>
                  </div>
                  <p className="mt-2 max-w-xl text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </StaggerIn>
      </div>
    </section>
  );
}
