import type { Metadata } from "next";
import { awards } from "@/data/awards";
import { AwardItem } from "@/components/ui/AwardItem";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateMetadata(): Metadata {
  return {
    title: "Honors & Awards",
    description:
      "Honors, fellowships, scholarships, and presentation awards received by Ali Torkayesh in sustainable transport, renewable fuels, and energy policy research.",
    alternates: {
      canonical: "/awards",
    },
  };
}

const sortedAwards = [...awards].sort((a, b) => b.year - a.year);

export default function AwardsPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <SectionHeading subtitle="Fellowships, scholarships, and presentation awards.">
        Honors &amp; Awards
      </SectionHeading>
      <div className="mt-10">
        {sortedAwards.map((award) => (
          <AwardItem award={award} key={`${award.year}-${award.title}`} />
        ))}
      </div>
    </PageWrapper>
  );
}
