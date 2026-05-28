export type SupervisionLevel = "phd" | "masters" | "bachelors" | "intern";

export interface Supervised {
  name: string;
  year: number | string;
  topic: string;
  institution: string;
  level: SupervisionLevel;
  note?: string;
}
