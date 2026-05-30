import { person } from "@/data/person";
import { Tag } from "@/components/ui/Tag";

export function AboutSection() {
  return (
    <section className="scroll-mt-8" id="about">
      <p className="text-sm leading-7 text-muted">{person.bio}</p>
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Research interests">
        {person.researchInterests.map((interest) => (
          <Tag key={interest}>{interest}</Tag>
        ))}
      </div>
    </section>
  );
}
