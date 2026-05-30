export interface Grant {
  title: string;
  institution: string;
  funder: string;
  role: string;
  pi: string;
  amount?: string;
  yearStart: number;
  yearEnd: number;
  topics?: string[];
}
