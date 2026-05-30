import { grants } from "@/data/grants";
import { GrantCard } from "@/components/ui/GrantCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const currentYear = new Date().getFullYear();

function isOngoingGrant(yearEnd?: number) {
  return !yearEnd || yearEnd > currentYear;
}

export function GrantsSection() {
  return (
    <section className="scroll-mt-24" id="grants">
      <SectionHeading subtitle="Funded research projects and collaborative programs.">
        Grants
      </SectionHeading>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {grants.map((grant) => (
          <GrantCard
            className={
              isOngoingGrant(grant.yearEnd)
                ? "border-accent/35 bg-accent/5 shadow-sm ring-1 ring-accent/15"
                : undefined
            }
            grant={grant}
            key={`${grant.funder}-${grant.title}-${grant.yearStart}`}
          />
        ))}
      </div>
    </section>
  );
}
