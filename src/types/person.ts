export interface Person {
  name: string;
  title: string;
  avatar?: string;
  cvPath?: string;
  bio: string;
  email: string;
  email2?: string;
  affiliations: string[];
  department: string;
  location: string;
  researchInterests: string[];
  heroStats: {
    publications: number;
    grants: number;
    awards: number;
    countries: number;
  };
  socialLinks: {
    linkedin?: string | null;
    googleScholar?: string | null;
    orcid?: string | null;
    github?: string;
    website?: string;
  };
}
