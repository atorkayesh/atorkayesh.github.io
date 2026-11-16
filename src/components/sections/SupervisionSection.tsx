import Link from "next/link";
import { supervision } from "@/data/supervision";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Supervised, SupervisionLevel } from "@/types/supervision";

const levelGroups: Array<{ label: string; value: SupervisionLevel }> = [
  { label: "Doctoral", value: "phd" },
  { label: "Master's", value: "masters" },
  { label: "Bachelor's", value: "bachelors" },
  { label: "Internships", value: "intern" },
];

const previewSupervision = supervision.slice(0, 5);

function SupervisionArticle({ item }: { item: Supervised }) {
  return (
    <article
      className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-4 last:border-0 sm:grid-cols-[6rem_1fr]"
      key={`${item.level}-${item.name}-${item.year}`}
    >
      <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
        {item.period ?? item.year}
      </div>
      <div className="min-w-0">
        <h4 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
          {item.name}
        </h4>
        <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">{item.topic}</p>
        <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
          <span className="text-foreground/80">{item.institution}</span>
          {item.funding ? <> &middot; {item.funding}</> : null}
        </p>
        {item.leadSupervisor ? (
          <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
            Lead Supervisor: <span className="text-foreground/80">{item.leadSupervisor}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function SupervisionSection() {
  return (
    <section className="scroll-mt-24" id="supervision">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading>
          Student Supervision
        </SectionHeading>
        <Link
          className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/supervision"
        >
          View all <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-8 space-y-10">
        {levelGroups.map((group) => {
          const items = previewSupervision.filter((item) => item.level === group.value);
          if (items.length === 0) return null;
          return (
            <div key={group.value}>
              <h3 className="text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
                {group.label}
              </h3>
              <div className="mt-1">
                {items.map((item) => (
                  <SupervisionArticle item={item} key={`${item.level}-${item.name}-${item.year}`} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
