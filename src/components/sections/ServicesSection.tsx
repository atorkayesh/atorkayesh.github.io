import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const [primaryService] = services;

export function ServicesSection() {
  if (!primaryService) return null;

  return (
    <section className="scroll-mt-24" id="services">
      <SectionHeading>
        Academic Service
      </SectionHeading>
      <div className="mt-8 space-y-10">

        {/* Editorial Activities */}
        <div>
          <h3 className="text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
            Editorial Activities
          </h3>
          <article className="mt-1 grid grid-cols-[4.5rem_1fr] gap-x-5 border-b border-border/40 py-4 last:border-0 sm:grid-cols-[6rem_1fr]">
            <div className="pt-0.5 font-mono text-xs leading-6 tabular-nums text-muted/80">
              {primaryService.yearStart}&ndash;{primaryService.yearEnd}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h4 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
                  {primaryService.role}
                </h4>
                {primaryService.yearEnd === "Present" ? (
                  <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[0.8125rem] leading-6 text-muted">
                <span className="font-medium text-foreground/80">{primaryService.organization}</span>
              </p>
            </div>
          </article>
        </div>

        {/* Peer-Review Activities */}
        <div>
          <h3 className="text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
            Peer-Review Activities
          </h3>
          <div className="mt-3">
            <ul className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
              {primaryService.journals.map((journal) => (
                <li
                  className="flex gap-2.5 text-[0.8125rem] leading-6 text-foreground/90"
                  key={journal}
                >
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-muted/50" />
                  <span>{journal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
