export interface AcademicPosition {
  role: string;
  institution: string;
  departmentLabel?: string;
  department: string;
  location: string;
  period: string;
  yearStart: number;
  yearEnd: number | "Present";
}
