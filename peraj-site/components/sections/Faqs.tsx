import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { faq } from "@/content/site";

// FAQs layout A: heading and "Still unsure?" link stay in view (desktop) beside an unboxed, hairline-ruled accordion.
export default function Faqs() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="section bg-background">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeading id="faqs-title" eyebrow={faq.eyebrow} title={faq.title} />
          <p data-reveal className="mt-8 text-muted-foreground">{faq.more}</p>
          <a
            href="#contact"
            className="group mt-1 inline-flex min-h-11 items-center gap-2 font-semibold text-teal-deep underline-offset-4 hover:underline"
          >
            {faq.moreCta}
            <ArrowRight aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-(--duration-fast) group-hover:translate-x-0.5" />
          </a>
        </div>

        <Accordion data-reveal defaultValue={["q0"]} className="border-t border-border lg:col-span-8">
          {faq.items.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="border-b border-border">
              <AccordionTrigger className="items-center gap-6 rounded-none py-6 text-lg font-semibold text-navy hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-teal-deep">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
