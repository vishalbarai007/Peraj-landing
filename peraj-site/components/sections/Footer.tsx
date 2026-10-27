import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { footer, nav, site } from "@/content/site";

const link = "inline-flex min-h-11 items-center gap-1 transition-colors duration-(--duration-fast) hover:text-beige";
const heading = "text-sm font-semibold text-beige";

// Compact footer continuing the ink band from Contact: brand and licence, link columns, legal row.
export default function Footer() {
  return (
    <footer className="bg-ink text-beige/75">
      <div className="wrap">
        <div className="grid gap-10 border-t border-white/10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Image src="/logo.svg" alt={site.name} width={132} height={33} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-sm">{site.license}.</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className={heading}>{footer.explore}</h2>
            <ul className="mt-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className={link}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2">
            <h2 className={heading}>{footer.reach}</h2>
            <ul className="mt-3">
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={link}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={link}>
                  {site.email}
                </a>
              </li>
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={link}>
                    {s.label}
                    <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className={heading}>{footer.hqLabel}</h2>
            <p className="mt-4">{site.hq}.</p>
            <a href="#top" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-beige transition-colors duration-(--duration-fast) hover:text-gold">
              <ArrowUp aria-hidden strokeWidth={1.5} className="size-4" />
              {footer.top}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright}</p>
          <ul className="flex flex-wrap gap-x-6">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
