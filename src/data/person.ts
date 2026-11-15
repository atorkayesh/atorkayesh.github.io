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
    "Policy Analysis",
    "Computational Political Science",
    "ABM",
    "Sustainable Transport",
    "Energy Transition",
    "NLP",
    "LLMs",
  ],
  bio:
    "I'm a postdoctoral researcher at RWTH Aachen University and Forschungszentrum Jülich. My work brings together policy analysis, computational political science, and market development assessment, with a focus on energy and transport systems. I'm particularly interested in understanding how sustainable aviation can take off, and I'm beginning to explore maritime transport as well. To make sense of these complex transitions, I draw on agent-based modeling, operational research, decision analysis models, natural language processing, and large language models.",
  heroStats: {
    publications: 22,
    grants: 4,
    awards: 10,
    countries: 8,
  },
};
