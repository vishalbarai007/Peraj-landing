"use client";

import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { contact, cta } from "@/content/site";
import { cn } from "@/lib/utils";
import LeadForm from "./LeadForm";

// Appears after the hero and opens the lead form in a dialog, so the CTA is always one tap away.
export default function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            size="lg"
            className={cn(
              "fixed right-4 bottom-4 z-40 shadow-lg shadow-ink/15 transition-[opacity,translate,background-color] duration-(--duration-base) ease-(--ease-out) sm:right-8 sm:bottom-8",
              show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
            )}
            tabIndex={show ? 0 : -1}
          />
        }
      >
        <PhoneCall aria-hidden strokeWidth={1.5} /> {cta.primary}
      </DialogTrigger>
      <DialogContent className="max-h-[92dvh] overflow-y-auto rounded-(--radius) p-6 sm:max-w-xl sm:p-8">
        <DialogHeader>
          <DialogTitle className="t-h3 text-navy">{contact.formTitle}</DialogTitle>
          <DialogDescription>{contact.dialogDescription}</DialogDescription>
        </DialogHeader>
        <LeadForm id="dialog" />
      </DialogContent>
    </Dialog>
  );
}
