import { industry } from "@/data/industry";
import { SectionHeading } from "@/components/ui/SectionHeading";

const [industryExperience] = industry;

export function IndustrySection() {
  if (!industryExperience) return null;

  const responsibilities = industryExperience.responsibilities ?? [];

  return (
    <section className="scroll-mt-24" id="industry">
      <SectionHeading>
        Industry Experiences
      </SectionHeading>
      <div className="mt-8 grid grid-cols-[auto_1fr] gap-x-5">
        <div className="whitespace-nowrap border-b border-border/40 py-5 font-mono text-xs leading-6 tabular-nums text-muted/80">
          {industryExperience.period}
        </div>
        <div className="min-w-0 border-b border-border/40 py-5">
          <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
            {industryExperience.title}
          </h3>
          <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
            <span className="font-medium text-foreground/80">{industryExperience.institution}</span>
            {" "}&middot; {industryExperience.location}
          </p>
          {responsibilities.length > 0 ? (
            <ul className="mt-3 space-y-1.5">
              {responsibilities.map((item) => (
                <li className="flex gap-2.5 text-[0.8125rem] leading-6 text-foreground/90" key={item}>
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-muted/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
