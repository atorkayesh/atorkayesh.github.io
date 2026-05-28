export interface Grant {
  title: string;
  program: string;
  funder: string;
  pi: string;
  amount?: string;
  yearStart: number;
  yearEnd: number;
  projects: string[];
}
