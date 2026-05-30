import { Fragment } from "react";
import { positions } from "@/data/positions";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PositionsSection() {
  return (
    <section className="scroll-mt-24" id="positions">
      <SectionHeading>
        Positions
      </SectionHeading>
      <div className="mt-8 grid grid-cols-[auto_1fr] gap-x-5">
        {positions.map((position) => {
          const isCurrent = position.yearEnd === "Present";
          return (
            <Fragment key={`${position.yearStart}-${position.institution}`}>
              <div
                className="whitespace-nowrap border-b border-border/40 py-5 font-mono text-xs leading-6 tabular-nums text-muted/80 last-of-type:border-0"
              >
                {position.period}
              </div>
              <div
                className="min-w-0 border-b border-border/40 py-5 last-of-type:border-0"
              >
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                    {position.role}
                  </h3>
                  {isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent">
                      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                  <span className="font-medium text-foreground/80">{position.institution}</span>
                  {" "}&middot; {position.location}
                </p>
                <p className="mt-0.5 text-[0.8125rem] leading-6 text-muted">
                  {position.departmentLabel ?? "Department"}: <span className="text-foreground/80">{position.department}</span>
                </p>
              </div>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
