import { grants } from "@/data/grants";
import { GrantEntry } from "@/components/ui/GrantEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

const currentYear = new Date().getFullYear();

function isOngoingGrant(yearEnd?: number) {
  return !yearEnd || yearEnd >= currentYear;
}

const sortedGrants = [...grants].sort((a, b) => b.yearStart - a.yearStart);

export function GrantsSection() {
  return (
    <section className="scroll-mt-24" id="grants">
      <SectionHeading subtitle="Funded research projects and collaborative programs.">
        Grants
      </SectionHeading>
      <div className="mt-8">
        {sortedGrants.map((grant) => (
          <GrantEntry
            grant={grant}
            key={`${grant.funder}-${grant.title}-${grant.yearStart}`}
            ongoing={isOngoingGrant(grant.yearEnd)}
          />
        ))}
      </div>
    </section>
  );
}
