import { grants } from "@/data/grants";
import { GrantEntry } from "@/components/ui/GrantEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sortedGrants = [...grants].sort((a, b) => b.yearStart - a.yearStart);

export function GrantsSection() {
  return (
    <section className="scroll-mt-24" id="grants">
      <SectionHeading subtitle="Association in Research Grants">
        Grants
      </SectionHeading>
      <div className="mt-8">
        {sortedGrants.map((grant) => (
          <GrantEntry
            grant={grant}
            key={`${grant.funder}-${grant.title}-${grant.yearStart}`}
          />
        ))}
      </div>
    </section>
  );
}
