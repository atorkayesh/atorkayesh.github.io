import { conferences } from "@/data/conferences";
import { ConferenceEntry } from "@/components/ui/ConferenceEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getConferenceYear(date: string) {
  return date.match(/\d{4}/)?.[0] ?? "Other";
}

const conferenceGroups = Object.entries(
  conferences.reduce<Record<string, typeof conferences>>((groups, conference) => {
    const year = getConferenceYear(conference.date);

    groups[year] ??= [];
    groups[year].push(conference);

    return groups;
  }, {}),
).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));

export function ConferencesSection() {
  return (
    <section className="scroll-mt-24" id="conferences">
      <SectionHeading subtitle="Conference talks, posters, and proceedings.">
        Conferences
      </SectionHeading>
      <div className="mt-8 space-y-10">
        {conferenceGroups.map(([year, yearConferences]) => (
          <section
            aria-labelledby={`conferences-${year}`}
            className="grid gap-5 sm:grid-cols-[4rem_1fr]"
            key={year}
          >
            <h3
              className="font-serif text-2xl font-semibold leading-8 text-foreground"
              id={`conferences-${year}`}
            >
              {year}
            </h3>
            <div className="space-y-6">
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
    </section>
  );
}
