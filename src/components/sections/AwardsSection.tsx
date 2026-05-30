import { awards } from "@/data/awards";
import { AwardItem } from "@/components/ui/AwardItem";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sortedAwards = [...awards].sort((a, b) => b.year - a.year);

export function AwardsSection() {
  return (
    <section className="scroll-mt-24" id="awards">
      <SectionHeading subtitle="Fellowships, grants, and presentation awards.">
        Awards
      </SectionHeading>
      <div className="mt-8">
        {sortedAwards.map((award) => (
          <AwardItem award={award} key={`${award.year}-${award.title}`} />
        ))}
      </div>
    </section>
  );
}
