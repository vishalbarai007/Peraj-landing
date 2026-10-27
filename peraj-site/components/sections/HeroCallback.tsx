"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cta, hero } from "@/content/site";

// Pill bar: takes the phone number, then hands off to the callback form with it pre-filled.
export default function HeroCallback() {
  const [phone, setPhone] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const field = document.getElementById("contact-phone") as HTMLInputElement | null;
    if (field) field.value = phone;
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById(phone ? "contact-name" : "contact-phone")?.focus({ preventScroll: true }), 600);
  }

  return (
    <form onSubmit={onSubmit} className="glass flex w-full max-w-lg items-center gap-2 rounded-full p-1.5 pl-6 shadow-sm">
      <label className="min-w-0 flex-1">
        <span className="block text-xs text-muted-foreground">{hero.phoneLabel}</span>
        <input
          type="tel"
          name="hero-phone"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91"
          className="w-full bg-transparent text-base font-medium text-navy placeholder:text-navy/40 focus:outline-none"
        />
      </label>
      <Button type="submit" size="lg" className="h-12 shrink-0 px-5 sm:px-7">
        {cta.primary}
        <ArrowRight aria-hidden className="hidden sm:block" />
      </Button>
    </form>
  );
}
