import Link from "next/link";
import { awards } from "@/data/awards";
import { AwardItem } from "@/components/ui/AwardItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewAwards = [...awards].sort((a, b) => b.year - a.year).slice(0, 5);

export function AwardsSection() {
  return (
    <section className="scroll-mt-24" id="awards">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading subtitle="Fellowships, grants, and presentation awards.">
          Awards
        </SectionHeading>
        <Link
          className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/awards"
        >
          View All Awards <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-8">
        {previewAwards.map((award) => (
          <AwardItem award={award} key={`${award.year}-${award.title}`} />
        ))}
      </div>
    </section>
  );
}
