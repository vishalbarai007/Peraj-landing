import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
};

// The one section title block: eyebrow, H2, optional lead. Static by design (brief MO-1 dropped split-text titles).
export default function SectionHeading({ id, eyebrow, title, lead, dark, center, className }: Props) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      <p className={cn("t-eyebrow flex items-center gap-3", center && "justify-center", dark && "text-gold")}>
        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-gold" />
        {eyebrow}
      </p>
      <h2 id={id} className={cn("t-h2 mt-4", dark ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {lead && <p className={cn("t-lead mt-5 max-w-xl", center && "mx-auto", dark && "text-white/70")}>{lead}</p>}
    </div>
  );
}
