import type { Person } from "@/types/person";

export const person: Person = {
  name: "Ali Torkayesh",
  title: "Postdoctoral Researcher",
  avatar: "/images/profile.png",
  cvPath: "/documents/Academic_CV-59.pdf",
  affiliations: ["RWTH Aachen University", "Forschungszentrum Jülich"],
  department: "LuF Economics of Sustainability / ICE-JSA",
  location: "Aachen, Germany",
  email: "torkayesh@sustainability.rwth-aachen.de",
  email2: "atorkayesh@outlook.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/torkayesh/",
    googleScholar: "https://scholar.google.com/citations?user=-eICcigAAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0002-1012-4213",
  },
  researchInterests: [
    "Sustainable Transport",
    "Renewable Fuels",
    "Power-to-X",
    "Hydrogen Economy",
    "Policy Analysis",
    "Agent-Based Modeling",
    "Multi-Criteria Decision Analysis",
    "Energy Systems",
  ],
  bio:
    "Ali Torkayesh is a postdoctoral researcher at RWTH Aachen University and Forschungszentrum Jülich, working at the intersection of sustainable transport, renewable fuels, energy policy, and decision analytics. His research examines how emerging fuel technologies such as Power-to-X, hydrogen, and sustainable aviation fuels can diffuse through markets and policy systems, combining quantitative modeling, expert-based evaluation, and behavioral perspectives to support climate-neutral transport transitions.",
  heroStats: {
    publications: 22,
    grants: 4,
    awards: 10,
    countries: 8,
  },
};
