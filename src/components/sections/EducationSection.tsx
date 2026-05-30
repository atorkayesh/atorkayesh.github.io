import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function EducationSection() {
  return (
    <section className="scroll-mt-24" id="education">
      <SectionHeading subtitle="Academic degrees and thesis work.">
        Education
      </SectionHeading>
      <Timeline className="mt-8">
        {education.map((item, index) => {
          const yearRange = `${item.yearStart}-${item.yearEnd}`;

          return (
            <TimelineItem
              isLast={index === education.length - 1}
              key={`${item.degree}-${item.institution}`}
              year={yearRange}
            >
              <article>
                <h3 className="text-lg font-semibold leading-7 text-foreground">
                  {item.degree} in {item.field}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {item.institution} · {item.location}
                </p>
                {item.thesis ? (
                  <p className="mt-3 text-sm leading-6 text-foreground">
                    <span className="font-medium">Thesis:</span> {item.thesis}
                  </p>
                ) : null}
              </article>
            </TimelineItem>
          );
        })}
      </Timeline>
    </section>
  );
}
