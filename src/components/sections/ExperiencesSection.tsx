import { experiences } from "@/data/experiences";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperiencesSection() {
  return (
    <section className="scroll-mt-24" id="experiences">
      <SectionHeading subtitle="Research visits, PhD schools, and summer schools.">
        Academic Experiences
      </SectionHeading>
      <div className="mt-8 space-y-6">
        {experiences.map((experience) => (
          <article
            className="rounded-lg border border-border bg-background p-5"
            key={`${experience.title}-${experience.institution}-${experience.yearStart}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="tag">{experience.type}</Badge>
              <Badge variant="year">
                {experience.yearStart}-{experience.yearEnd}
              </Badge>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-foreground">
              {experience.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              {experience.institution} · {experience.location}
            </p>
            {experience.description ? (
              <p className="mt-3 text-sm leading-6 text-foreground">
                {experience.description}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
