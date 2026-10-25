import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { cta, process } from "@/content/site";
import { cn } from "@/lib/utils";

const stick = ["top-28", "top-36", "top-44"];
const tones = ["bg-mint text-navy", "bg-primary text-white", "bg-ink text-white"];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
          <div className="mt-10" data-reveal>
            <Button nativeButton={false} render={<a href="#contact" />} className="group h-14 rounded-full px-8 text-base font-semibold hover:bg-teal-deep">
              {cta.primary}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Button>
          </div>
        </div>
        <ol className="grid gap-6 lg:col-span-7">
          {process.steps.map((s, i) => (
            <li
              key={s.n}
              className={cn("group sticky flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-xl shadow-ink/5 sm:p-10", stick[i], tones[i])}
            >
              <div className="flex items-start justify-between">
                <span className="font-heading text-[clamp(5rem,9vw,8rem)] leading-none opacity-30 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-60">{s.n}</span>
                <span className="rounded-full border border-current/30 px-4 py-1.5 text-sm font-medium">{s.time}</span>
              </div>
              <div>
                <h3 className="t-h3">{s.title}</h3>
                <p className="mt-3 max-w-md opacity-80">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
