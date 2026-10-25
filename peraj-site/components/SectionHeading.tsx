import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, lead, dark, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("t-eyebrow", dark && "text-gold")} data-reveal>
        {eyebrow}
      </p>
      <h2 className={cn("t-h2 mt-4", dark ? "text-white" : "text-navy")} data-split>
        {title}
      </h2>
      {lead && (
        <p className={cn("t-lead mt-5 max-w-xl", dark && "text-white/70")} data-reveal>
          {lead}
        </p>
      )}
    </div>
  );
}
