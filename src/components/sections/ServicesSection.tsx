import { services } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const [primaryService] = services;

export function ServicesSection() {
  if (!primaryService) {
    return null;
  }

  return (
    <section className="scroll-mt-24" id="services">
      <SectionHeading subtitle="Editorial service and peer review activity.">
        Academic Service
      </SectionHeading>
      <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="tag">{primaryService.role}</Badge>
          <Badge variant="year">
            {primaryService.yearStart}-{primaryService.yearEnd}
          </Badge>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-8 text-foreground">
          {primaryService.organization}
        </h3>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold leading-6 text-foreground">
          Peer reviewer for 20+ international journals
        </p>
        <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm leading-6 text-muted sm:grid-cols-2">
          {primaryService.journals.map((journal) => (
            <li className="flex gap-2" key={journal}>
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{journal}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
