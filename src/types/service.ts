export interface AcademicService {
  role: string;
  organization: string;
  yearStart: number;
  yearEnd: number | "Present";
  journals: string[];
}
