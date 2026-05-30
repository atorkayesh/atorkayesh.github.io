import type { Metadata } from "next";
import { supervision } from "@/data/supervision";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SupervisionLevel } from "@/types/supervision";

export function generateMetadata(): Metadata {
  return {
    title: "Student Supervision",
    description:
      "Doctoral, master's, bachelor's, and internship students supervised by Ali E. Torkayesh at RWTH Aachen University.",
    alternates: {
      canonical: "/supervision",
    },
  };
}

const levelGroups: Array<{ label: string; value: SupervisionLevel }> = [
  { label: "Doctoral", value: "phd" },
  { label: "Master's", value: "masters" },
  { label: "Bachelor's", value: "bachelors" },
  { label: "Internships", value: "intern" },
];

export default function SupervisionPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <SectionHeading subtitle="Supervised doctoral, master's, bachelor's, and internship work.">
        Student Supervision
      </SectionHeading>
      <div className="mt-10 space-y-10">
        {levelGroups.map((group) => {
          const items = supervision.filter((item) => item.level === group.value);
          if (items.length === 0) return null;
          return (
            <div key={group.value}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-1">
                {items.map((item) => (
                  <article
                    className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-4 last:border-0 sm:grid-cols-[6rem_1fr]"
                    key={`${item.level}-${item.name}-${item.year}`}
                  >
                    <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
                      {item.year}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">{item.topic}</p>
                      <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                        <span className="text-foreground/80">{item.institution}</span>
                        {item.note ? <> &middot; {item.note}</> : null}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
}
