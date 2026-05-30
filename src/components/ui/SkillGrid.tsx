import type { Skill, SkillCategory } from "@/types/skill";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

const categories: Array<{ label: string; value: SkillCategory }> = [
  { label: "Programming", value: "programming" },
  { label: "Technical Tools", value: "technical" },
  { label: "Languages", value: "language" },
];

type SkillGridProps = {
  className?: string;
  skills: Skill[];
};

export function SkillGrid({ className, skills }: SkillGridProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {categories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category.value);

        return (
          <section className="space-y-3" key={category.value}>
            <h3 className="text-sm font-semibold uppercase tracking-normal text-muted">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <Badge key={`${skill.category}-${skill.name}`} variant="tag">
                  {skill.level ? `${skill.name} (${skill.level})` : skill.name}
                </Badge>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
