"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { form as t } from "@/content/site";
import { submitLead, type Lead } from "@/lib/gform";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "error";
type Errors = Partial<Record<keyof Lead, string>>;

const fieldClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/25 focus-visible:outline-none aria-invalid:border-destructive";

function validate(lead: Lead): Errors {
  const e: Errors = {};
  if (!lead.name.trim()) e.name = t.errors.required;
  if (!/^\S+@\S+\.\S+$/.test(lead.email)) e.email = t.errors.email;
  if (lead.phone.replace(/\D/g, "").length < 8) e.phone = t.errors.phone;
  return e;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function LeadForm({ id }: { id: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const el = e.currentTarget;
    const data = new FormData(el);
    const lead = Object.fromEntries(
      (["name", "company", "email", "phone", "cover", "message"] as const).map((k) => [k, String(data.get(k) ?? "")]),
    ) as Lead;
    const found = validate(lead);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    try {
      await submitLead(lead);
      setStatus("done");
      el.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-12 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden />
        <h3 className="t-h3 text-navy">{t.successTitle}</h3>
        <p className="max-w-xs text-sm text-muted-foreground">{t.successText}</p>
        <Button variant="outline" className="mt-2 h-11 rounded-full px-6" onClick={() => setStatus("idle")}>
          {t.again}
        </Button>
      </div>
    );
  }

  const f = (n: string) => `${id}-${n}`;
  const aria = (n: keyof Lead) => ({ "aria-invalid": errors[n] ? true : undefined, "aria-describedby": errors[n] ? `${f(n)}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={f("name")} label={t.name} error={errors.name}>
          <input id={f("name")} name="name" autoComplete="name" placeholder={t.namePh} className={fieldClass} {...aria("name")} />
        </Field>
        <Field id={f("company")} label={t.company}>
          <input id={f("company")} name="company" autoComplete="organization" placeholder={t.companyPh} className={fieldClass} />
        </Field>
        <Field id={f("email")} label={t.email} error={errors.email}>
          <input id={f("email")} name="email" type="email" autoComplete="email" placeholder={t.emailPh} className={fieldClass} {...aria("email")} />
        </Field>
        <Field id={f("phone")} label={t.phone} error={errors.phone}>
          <input id={f("phone")} name="phone" type="tel" autoComplete="tel" placeholder={t.phonePh} className={fieldClass} {...aria("phone")} />
        </Field>
      </div>
      <Field id={f("cover")} label={t.cover}>
        <select id={f("cover")} name="cover" defaultValue={t.covers[t.covers.length - 1]} className={cn(fieldClass, "appearance-none")}>
          {t.covers.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field id={f("message")} label={t.message}>
        <textarea id={f("message")} name="message" rows={3} placeholder={t.messagePh} className={cn(fieldClass, "h-auto resize-none py-3")} />
      </Field>
      <Button type="submit" disabled={status === "sending"} className="h-12 rounded-full text-base font-semibold hover:bg-teal-deep">
        {status === "sending" ? (
          <>
            <Loader2 className="animate-spin" aria-hidden /> {t.sending}
          </>
        ) : (
          t.submit
        )}
      </Button>
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {t.failed}
        </p>
      )}
      <p className="text-center text-xs text-muted-foreground">{t.privacy}</p>
    </form>
  );
}
