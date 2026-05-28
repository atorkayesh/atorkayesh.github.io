export interface AcademicPosition {
  role: string;
  institution: string;
  department: string;
  location: string;
  yearStart: number;
  yearEnd: number | "Present";
}
