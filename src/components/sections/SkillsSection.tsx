import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGrid } from "@/components/ui/SkillGrid";

export function SkillsSection() {
  return (
    <section className="scroll-mt-24" id="skills">
      <SectionHeading subtitle="Programming, analysis tools, and working languages.">
        Skills
      </SectionHeading>
      <SkillGrid className="mt-8" skills={skills} />
    </section>
  );
}
