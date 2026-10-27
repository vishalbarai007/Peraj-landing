"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cta, nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

// Header layout A: flat bar on the page container. Transparent at the top; white with a hairline once scrolled.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-(--duration-fast)",
        scrolled ? "border-border bg-background/70 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="wrap flex h-18 items-center justify-between gap-6">
        <a href="#top" aria-label={`${site.name} home`} className="shrink-0 rounded-md">
          <Image src="/logo.svg" alt={site.name} width={132} height={33} loading="eager" className="h-8 w-auto" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors duration-(--duration-fast) hover:text-teal-deep"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button nativeButton={false} render={<a href="#contact" />} className="hidden h-11 px-5 text-sm font-semibold sm:inline-flex">
            {cta.primary}
          </Button>
          <Dialog>
            <DialogTrigger render={<Button variant="ghost" size="icon" className="size-11 lg:hidden" aria-label="Open menu" />}>
              <Menu className="size-6" strokeWidth={1.5} aria-hidden />
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="top-0 left-0 flex h-dvh max-w-none translate-x-0 translate-y-0 flex-col rounded-none bg-background p-0 ring-0 sm:max-w-none"
            >
              <div className="wrap flex h-18 shrink-0 items-center justify-between border-b border-border">
                <DialogTitle className="text-sm font-semibold text-navy">{site.name}</DialogTitle>
                <DialogClose render={<Button variant="ghost" size="icon" className="size-11" aria-label="Close menu" />}>
                  <X className="size-6" strokeWidth={1.5} aria-hidden />
                </DialogClose>
              </div>
              <nav aria-label="Mobile" className="wrap grid flex-1 content-start py-4">
                {nav.map((n) => (
                  <DialogClose
                    key={n.href}
                    nativeButton={false}
                    render={<a href={n.href} />}
                    className="flex items-center justify-between border-b border-border py-4 text-lg font-medium text-navy"
                  >
                    {n.label}
                    <ArrowRight className="size-5 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                  </DialogClose>
                ))}
              </nav>
              <div className="wrap pb-8">
                <DialogClose
                  nativeButton={false}
                  render={<a href="#contact" />}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground"
                >
                  {cta.primary}
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
