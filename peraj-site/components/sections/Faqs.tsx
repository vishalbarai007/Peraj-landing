import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { faq } from "@/content/site";

export default function Faqs() {
  return (
    <section id="faqs" className="section bg-mist">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
          <p className="mt-8 text-muted-foreground" data-reveal>{faq.more}</p>
          <a href="#contact" className="group mt-2 inline-flex items-center gap-2 font-semibold text-primary" data-reveal>
            {faq.moreCta}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
        <Accordion defaultValue={["q0"]} className="gap-3 lg:col-span-8" data-reveal>
          {faq.items.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="rounded-2xl border border-border bg-card px-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 data-open:border-primary/40 data-open:shadow-lg">
              <AccordionTrigger className="gap-6 py-6 text-lg font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
