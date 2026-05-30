import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillList } from "@/components/ui/SkillList";

export function SkillsSection() {
  return (
    <section className="scroll-mt-24" id="skills">
      <SectionHeading subtitle="Programming, analysis tools, and working languages.">
        Skills
      </SectionHeading>
      <SkillList className="mt-8" skills={skills} />
    </section>
  );
}
