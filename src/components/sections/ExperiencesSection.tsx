import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperiencesSection() {
  return (
    <section className="scroll-mt-24" id="experiences">
      <SectionHeading>
        Academic Experiences
      </SectionHeading>
      <div className="mt-8">
        {experiences.map((experience) => {
          const showType = experience.type !== experience.title;

          return (
            <article
              className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]"
              key={`${experience.title}-${experience.institution}-${experience.yearStart}`}
            >
              <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
                {experience.yearStart === experience.yearEnd ? (
                  experience.yearStart
                ) : (
                  <>
                    {experience.yearStart}&ndash;{experience.yearEnd}
                  </>
                )}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                    {experience.title}
                  </h3>
                  {showType ? (
                    <span className="text-[0.6875rem] font-medium uppercase tracking-wide text-muted/70">
                      {experience.type}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                  <span className="font-medium text-foreground/80">{experience.institution}</span>
                  {" "}&middot; {experience.location}
                </p>
                {experience.description ? (
                  <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                    {experience.description}
                  </p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
