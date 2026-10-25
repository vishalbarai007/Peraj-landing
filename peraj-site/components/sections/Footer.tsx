import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import { cta, footer, nav, site } from "@/content/site";

const link = "group/link inline-flex items-center gap-1 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="relative -mt-10 overflow-hidden rounded-t-[2.5rem] bg-navy text-white/70 lg:rounded-t-[4rem]">
      <div className="wrap pt-[clamp(4rem,8vw,7rem)]">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-white/10 pb-14">
          <div>
            <h2 className="t-h2 max-w-2xl text-white">{footer.cta}</h2>
            <p className="t-lead mt-4 text-white/60">{footer.ctaSub}</p>
          </div>
          <Magnetic>
            <Button nativeButton={false} render={<a href="#contact" />} className="group h-16 rounded-full px-10 text-base font-semibold hover:bg-teal-deep">
              {cta.primary}
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </Button>
          </Magnetic>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo.svg" alt={site.name} width={132} height={33} className="h-12 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-sm leading-relaxed">{site.license}.</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">{footer.explore}</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className={link}>{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">{footer.reach}</h3>
            <ul className="mt-5 space-y-3">
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className={link}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className={link}>{site.email}</a></li>
              {footer.social.map((s) => (
                <li key={s.label}><a href={s.href} className={link}>{s.label}<ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover/link:opacity-100" aria-hidden /></a></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-white">{footer.hqLabel}</h3>
            <p className="mt-5 leading-relaxed">{site.hq}.</p>
            <a href="#top" className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pr-5 pl-2 text-sm text-white transition-colors hover:border-primary hover:bg-primary">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10"><ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden /></span>
              {footer.top}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((l) => (
              <li key={l.label}><a href={l.href} className={link}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <p aria-hidden className="pointer-events-none -mb-[0.2em] text-center font-heading text-[clamp(8rem,28vw,30rem)] leading-[0.8] text-outline select-none" data-parallax="30">
        {footer.wordmark}
      </p>
    </footer>
  );
}
