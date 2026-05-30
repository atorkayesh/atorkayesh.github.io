import { industry } from "@/data/industry";
import { SectionHeading } from "@/components/ui/SectionHeading";

const [industryExperience] = industry;

function getResponsibilities(description?: string) {
  return description
    ? description
        .replace(/\.$/, "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];
}

export function IndustrySection() {
  if (!industryExperience) {
    return null;
  }

  const responsibilities = getResponsibilities(industryExperience.details);

  return (
    <section className="scroll-mt-24" id="industry">
      <SectionHeading>
        Industry Experiences
      </SectionHeading>
      <div className="mt-8">
        <article className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[6rem_1fr]">
          <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
            {industryExperience.period}
          </div>
          <div className="min-w-0">
            <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
              {industryExperience.title}
            </h3>
            <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
              <span className="font-medium text-foreground/80">
                {industryExperience.institution}
              </span>
              {" "}&middot; {industryExperience.location}
            </p>
            <ul className="mt-3 space-y-1.5">
              {responsibilities.map((responsibility) => (
                <li
                  className="flex gap-2.5 text-[0.8125rem] leading-6 text-foreground/90"
                  key={responsibility}
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-muted/50"
                  />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
