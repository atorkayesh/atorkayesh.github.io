export type SkillCategory = "programming" | "technical" | "language";

export interface Skill {
  name: string;
  category: SkillCategory;
  level?: string;
}
