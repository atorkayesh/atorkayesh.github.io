import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  return (
    <section className="scroll-mt-24" id="education">
      <SectionHeading>
        Education
      </SectionHeading>
      <div className="mt-8">
        {education.map((item) => (
          <article
            className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]"
            key={`${item.degree}-${item.institution}`}
          >
            <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
              {item.yearStart}&ndash;{item.yearEnd}
            </div>
            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                {item.degree}
              </h3>
              <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                {item.field}
              </p>
              <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                <span className="font-medium text-foreground/80">{item.institution}</span>
                {" "}&middot; {item.location}
              </p>
              {item.thesis ? (
                <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                  <span className="font-medium text-foreground/80">{item.thesisLabel ?? "Thesis"}:</span> {item.thesis}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
