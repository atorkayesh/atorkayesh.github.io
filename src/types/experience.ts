export interface AcademicExperience {
  type: string;
  title: string;
  institution: string;
  location: string;
  yearStart: number;
  yearEnd: number | "Present";
  description?: string;
}
