export interface Teaching {
  role: string;
  institution: string;
  location: string;
  yearStart: number;
  yearEnd: number | "Present";
  courses: string[];
}
