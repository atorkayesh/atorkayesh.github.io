import { industry } from "@/data/industry";
import { Badge } from "@/components/ui/Badge";
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

  const responsibilities = getResponsibilities(industryExperience.description);

  return (
    <section className="scroll-mt-24" id="industry">
      <SectionHeading subtitle="Professional software implementation experience.">
        Industry
      </SectionHeading>
      <article className="mt-8 rounded-lg border border-border bg-background p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="tag">{industryExperience.title}</Badge>
          <Badge variant="year">
            {industryExperience.yearStart}-{industryExperience.yearEnd}
          </Badge>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-7 text-foreground">
          {industryExperience.institution}
        </h3>
        <p className="mt-1 text-sm leading-6 text-muted">{industryExperience.location}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
