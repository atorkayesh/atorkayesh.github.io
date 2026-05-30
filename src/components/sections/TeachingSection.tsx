import { teaching } from "@/data/teaching";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeachingSection() {
  return (
    <section className="scroll-mt-24" id="teaching">
      <SectionHeading subtitle="Teaching assistant roles and supported courses.">
        Teaching
      </SectionHeading>
      <div className="mt-8">
        {teaching.map((entry) => (
          <article
            className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]"
            key={`${entry.institution}-${entry.yearStart}`}
          >
            <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
              {entry.period}
            </div>
            <div className="min-w-0">
              <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                {entry.role}
              </h3>
              <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                <span className="font-medium text-foreground/80">{entry.institution}</span>
                {" "}&middot; {entry.location}
              </p>
              {entry.chair ? (
                <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                  {entry.chair}
                </p>
              ) : null}
              <ul className="mt-3 space-y-1.5">
                {entry.courses.map((course) => (
                  <li
                    className="flex gap-2.5 text-[0.8125rem] leading-6 text-foreground/90"
                    key={course}
                  >
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-muted/50" aria-hidden="true" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
