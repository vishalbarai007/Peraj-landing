import { Clock, Mail, Phone } from "lucide-react";
import Spotlight from "@/components/motion/Spotlight";
import LeadForm from "@/components/LeadForm";
import { contact, site } from "@/content/site";

export default function Contact() {
  const loop = Array.from({ length: 8 });
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-[clamp(4.5rem,9vw,8rem)] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden">
        <div className="flex w-max animate-marquee-reverse gap-10 font-heading text-[clamp(5rem,12vw,11rem)] leading-none whitespace-nowrap">
          {loop.map((_, i) => (
            <span key={i} className={i % 2 ? "text-gold/30" : "text-outline"}>
              {contact.banner}
            </span>
          ))}
        </div>
      </div>
      <div aria-hidden data-parallax="70" className="pointer-events-none absolute -bottom-40 -left-40 size-[34rem] rounded-full bg-primary/30 blur-3xl" />

      <div className="wrap relative mt-[clamp(4rem,9vw,8rem)] grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="t-eyebrow text-gold" data-reveal>{contact.eyebrow}</p>
          <h2 className="t-h2 mt-4 text-white" data-split>{contact.title}</h2>
          <p className="t-lead mt-6 max-w-md text-white/70" data-reveal>{contact.lead}</p>
          <ul className="mt-10 space-y-5" data-stagger>
            <li className="flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-gold"><Clock className="size-5" aria-hidden /></span>
              {contact.promise}
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-gold transition-colors group-hover:bg-primary group-hover:text-white"><Phone className="size-5" aria-hidden /></span>
                <span className="underline-offset-4 group-hover:underline">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-gold transition-colors group-hover:bg-primary group-hover:text-white"><Mail className="size-5" aria-hidden /></span>
                <span className="underline-offset-4 group-hover:underline">{site.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <Spotlight className="rounded-[2rem] bg-white p-6 text-navy shadow-2xl shadow-black/30 sm:p-10 lg:col-span-7" data-reveal>
          <h3 className="t-h3 mb-6">{contact.formTitle}</h3>
          <LeadForm id="contact" />
        </Spotlight>
      </div>
    </section>
  );
}
