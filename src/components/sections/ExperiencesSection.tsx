import { Fragment } from "react";
import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperiencesSection() {
  return (
    <section className="scroll-mt-24" id="experiences">
      <SectionHeading>
        Academic Experiences
      </SectionHeading>
      <div className="mt-8 grid grid-cols-[auto_1fr] gap-x-5">
        {experiences.map((experience) => (
          <Fragment key={`${experience.yearStart}-${experience.institution}`}>
            <div
              className="whitespace-nowrap border-b border-border/40 py-5 pt-5 font-mono text-xs leading-6 tabular-nums text-muted/80 last-of-type:border-0"
            >
              {experience.period}
            </div>
            <div
              className="min-w-0 border-b border-border/40 py-5 last-of-type:border-0"
            >
              <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                {experience.title}
              </h3>
              <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                <span className="font-medium text-foreground/80">{experience.institution}</span>
                {" "}&middot; {experience.location}
              </p>
              {experience.subUnit ? (
                <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                  {experience.subUnitLabel ?? "Group"}: <span className="text-foreground/80">{experience.subUnit}</span>
                </p>
              ) : null}
              {experience.details ? (
                <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                  {experience.details}
                </p>
              ) : null}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
