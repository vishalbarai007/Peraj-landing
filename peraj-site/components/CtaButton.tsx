import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cta } from "@/content/site";

// The primary CTA, identical wherever it appears (hero, mid-page, close).
export default function CtaButton() {
  return (
    <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
      {cta.primary}
      <ArrowRight aria-hidden className="transition-transform duration-(--duration-fast) group-hover/button:translate-x-0.5" />
    </Button>
  );
}
