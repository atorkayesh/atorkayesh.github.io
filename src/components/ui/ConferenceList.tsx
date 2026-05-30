import type { ConferencePresentation } from "@/types/conference";
import { ConferenceEntry } from "./ConferenceEntry";
import { cn } from "@/lib/utils";

export function getConferenceYear(date: string) {
  return date.match(/\d{4}/)?.[0] ?? "Other";
}

type ConferenceListProps = {
  className?: string;
  conferences: ConferencePresentation[];
};

export function ConferenceList({ className, conferences }: ConferenceListProps) {
  const conferenceGroups = Object.entries(
    conferences.reduce<Record<string, ConferencePresentation[]>>((groups, conference) => {
      const year = getConferenceYear(conference.date);

      groups[year] ??= [];
      groups[year].push(conference);

      return groups;
    }, {}),
  ).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));

  return (
    <div className={cn(className)}>
      {conferenceGroups.map(([year, yearConferences]) => (
        <section
          aria-labelledby={`conferences-${year}`}
          className="grid gap-x-5 gap-y-4 border-b border-border/40 py-6 first:pt-0 last:border-0 sm:grid-cols-[6rem_1fr]"
          key={year}
        >
          <h3
            className="font-mono text-xs leading-6 tabular-nums text-muted/80 sm:pt-0.5"
            id={`conferences-${year}`}
          >
            {year}
          </h3>
          <div className="divide-y divide-border/50">
            {yearConferences.map((conference, index) => (
              <ConferenceEntry
                conference={conference}
                key={`${year}-${conference.title}-${index}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
