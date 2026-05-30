import Link from "next/link";
import { publications } from "@/data/publications";
import { PublicationEntry } from "@/components/ui/PublicationEntry";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewPublications = [...publications]
  .sort((a, b) => b.year - a.year)
  .slice(0, 5);

export function PublicationsPreviewSection() {
  return (
    <section className="scroll-mt-24" id="publications">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading subtitle="Selected Peer-Reviewed Publications">
          Publications
        </SectionHeading>
        <Link
          className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/publications"
        >
          View All 22 Publications <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-8 space-y-6">
        {previewPublications.map((publication, index) => (
          <PublicationEntry
            index={index + 1}
            key={publication.id}
            publication={publication}
          />
        ))}
      </div>
    </section>
  );
}
