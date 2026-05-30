import { positions } from "@/data/positions";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function PositionsSection() {
  return (
    <section className="scroll-mt-24" id="positions">
      <SectionHeading subtitle="Academic appointments and research roles.">
        Positions
      </SectionHeading>
      <Timeline className="mt-8">
        {positions.map((position, index) => {
          const isCurrent = position.yearEnd === "Present";
          const yearRange = `${position.yearStart}-${position.yearEnd}`;

          return (
            <TimelineItem
              isLast={index === positions.length - 1}
              key={`${position.role}-${position.institution}-${position.yearStart}`}
              year={yearRange}
            >
              <article>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold leading-7 text-foreground">
                    {position.role}
                  </h3>
                  {isCurrent ? <Badge>Present</Badge> : null}
                </div>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {position.institution} · {position.department}
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {position.location}
                </p>
              </article>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
