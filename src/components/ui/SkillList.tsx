import type { Skill, SkillCategory } from "@/types/skill";
import { cn } from "@/lib/utils";

const categories: Array<{ label: string; value: SkillCategory }> = [
  { label: "Programming", value: "programming" },
  { label: "Technical Tools", value: "technical" },
  { label: "Languages", value: "language" },
];

type SkillListProps = {
  className?: string;
  skills: Skill[];
};

function formatSkill(skill: Skill) {
  return skill.level ? `${skill.name} (${skill.level})` : skill.name;
}

export function SkillList({ className, skills }: SkillListProps) {
  return (
    <div className={cn(className)}>
      {categories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category.value);

        if (categorySkills.length === 0) {
          return null;
        }

        return (
          <div
            className="grid gap-x-5 gap-y-1 border-b border-border/40 py-5 last:border-0 sm:grid-cols-[10rem_1fr]"
            key={category.value}
          >
            <h3 className="pt-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-muted">
              {category.label}
            </h3>
            <p className="text-[0.8125rem] leading-6 text-foreground/90">
              {categorySkills.map(formatSkill).join(", ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
