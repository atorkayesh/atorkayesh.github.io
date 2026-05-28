export type ConferencePresentationType = "oral" | "poster" | "proceedings";

export interface ConferencePresentation {
  authors: string[];
  title: string;
  conference: string;
  location: string;
  date: string;
  type: ConferencePresentationType;
}
