"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cta, nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-[105rem] items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6",
          scrolled ? "border-border bg-white/80 shadow-lg shadow-ink/5 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" aria-label={`${site.name} home`} className="shrink-0 rounded-md">
          <Image src="/logo.svg" alt={site.name} width={132} height={33} priority className="h-8 w-auto" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-primary"
            >
              {n.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            render={<a href="#contact" />}
            className="hidden h-11 rounded-full px-6 text-sm font-semibold hover:bg-teal-deep sm:inline-flex"
          >
            {cta.primary}
          </Button>
          <Dialog>
            <DialogTrigger render={<Button variant="ghost" size="icon" className="size-11 rounded-full lg:hidden" aria-label="Menu" />}>
              <Menu className="size-6" aria-hidden />
            </DialogTrigger>
            <DialogContent className="top-0 left-0 h-dvh max-w-none translate-x-0 translate-y-0 content-start rounded-none bg-ink p-8 pt-24 text-white sm:max-w-none">
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <nav aria-label="Mobile" className="grid gap-2">
                {nav.map((n) => (
                  <DialogClose key={n.href} nativeButton={false} render={<a href={n.href} />} className="t-h2 border-b border-white/10 py-4">
                    {n.label}
                  </DialogClose>
                ))}
              </nav>
              <DialogClose nativeButton={false} render={<a href="#contact" />} className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-primary font-semibold">
                {cta.primary}
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
