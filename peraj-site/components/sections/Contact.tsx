import { Clock, Mail, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { contact, site } from "@/content/site";

const iconWrap = "flex size-11 shrink-0 items-center justify-center rounded-full bg-beige/10 text-gold";

// Contact layout A: the page's one dark closing band. Reassurance and direct lines left, the callback form right.
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-ink text-beige">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} dark />
          <ul data-reveal className="mt-10 space-y-4">
            <li className="flex items-center gap-4">
              <span className={iconWrap}>
                <Clock aria-hidden strokeWidth={1.5} className="size-5" />
              </span>
              {contact.promise}
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                <span className={iconWrap}>
                  <Phone aria-hidden strokeWidth={1.5} className="size-5" />
                </span>
                <span className="underline-offset-4 group-hover:underline">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                <span className={iconWrap}>
                  <Mail aria-hidden strokeWidth={1.5} className="size-5" />
                </span>
                <span className="underline-offset-4 group-hover:underline">{site.email}</span>
              </a>
            </li>
          </ul>
        </div>

        <div data-reveal className="card-surface bg-background p-6 text-navy sm:p-10 lg:col-span-7">
          <h3 className="t-h3 mb-6">{contact.formTitle}</h3>
          <LeadForm id="contact" />
        </div>
      </div>
    </section>
  );
}
