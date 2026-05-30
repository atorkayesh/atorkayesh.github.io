import { teaching } from "@/data/teaching";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeachingSection() {
  return (
    <section className="scroll-mt-24" id="teaching">
      <SectionHeading subtitle="Teaching assistant roles and supported courses.">
        Teaching
      </SectionHeading>
      <div className="mt-8 space-y-8">
        {teaching.map((entry) => (
          <article
            className="border-l border-border pl-5"
            key={`${entry.institution}-${entry.yearStart}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold leading-7 text-foreground">
                {entry.role}
              </h3>
              <Badge variant="year">
                {entry.yearStart}-{entry.yearEnd}
              </Badge>
            </div>
            <p className="mt-1 text-sm leading-6 text-muted">
              {entry.institution} · {entry.location}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
              {entry.courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
