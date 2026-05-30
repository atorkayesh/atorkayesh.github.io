import Link from "next/link";
import { conferences } from "@/data/conferences";
import { ConferenceList, getConferenceYear } from "@/components/ui/ConferenceList";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewConferences = [...conferences]
  .sort((a, b) => Number(getConferenceYear(b.date)) - Number(getConferenceYear(a.date)))
  .slice(0, 5);

export function ConferencesSection() {
  return (
    <section className="scroll-mt-24" id="conferences">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading subtitle="Conference Presentations, Posters &amp; Proceedings">
          Conferences
        </SectionHeading>
        <Link
          className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/conferences"
        >
          View All Conferences <span aria-hidden="true">→</span>
        </Link>
      </div>
      <ConferenceList className="mt-8" conferences={previewConferences} />
    </section>
  );
}
