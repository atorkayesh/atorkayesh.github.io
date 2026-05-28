export type PublicationType =
  | "journal-article"
  | "conference-paper"
  | "book-chapter"
  | "preprint"
  | "other";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  tags: string[];
  type: PublicationType;
  isCorresponding: boolean;
}
