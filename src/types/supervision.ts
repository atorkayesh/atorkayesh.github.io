export type SupervisionLevel = "phd" | "masters" | "bachelors" | "intern";

export interface Supervised {
  name: string;
  year: number;
  period?: string;
  topic: string;
  institution: string;
  level: SupervisionLevel;
  leadSupervisor?: string;
  funding?: string;
}
