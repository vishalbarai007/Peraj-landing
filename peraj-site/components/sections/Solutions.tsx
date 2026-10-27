import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { solutions } from "@/content/site";

// Solutions layout A: hairline spec grid. Cells share 1px borders (gap-px over the border colour) inside one card.
export default function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="section bg-background">
      <div className="wrap">
        <SectionHeading id="solutions-title" eyebrow={solutions.eyebrow} title={solutions.title} />

        <div className="card-surface mt-(--title-gap) overflow-hidden">
          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {solutions.items.map((s) => (
              <li key={s.title} data-reveal className="bg-background/70 p-7 transition-colors duration-(--duration-fast) hover:bg-mint/40 sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-(--radius) bg-mint text-teal-deep">
                  <Icon name={s.icon} className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="t-h3 mt-6 text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
