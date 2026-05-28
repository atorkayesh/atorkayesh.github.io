export interface Person {
  name: string;
  title: string;
  bio: string;
  email: string;
  affiliations: string[];
  socialLinks: {
    linkedin?: string;
    googleScholar?: string;
    orcid?: string;
    github?: string;
    website?: string;
  };
}
