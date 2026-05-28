import type { Grant } from "@/types/grant";

export const grants: Grant[] = [
  {
    title: "Fuel and Chemical Science Center",
    program: "Fuel and Chemical Science Center",
    funder: "DFG",
    pi: "Prof. Venghaus",
    yearStart: 2026,
    yearEnd: 2032,
    projects: ["Policy analysis", "Behavioral impacts"],
  },
  {
    title: "SupplHyInno Rhineland",
    program: "HyInnoSys2",
    funder: "BMBF",
    pi: "Prof. Venghaus",
    amount: "~€1,579,605",
    yearStart: 2025,
    yearEnd: 2028,
    projects: ["Hydrogen economy"],
  },
  {
    title: "Fuel Cell & Battery EVs",
    program: "ISPF",
    funder: "Forschungszentrum Jülich",
    pi: "Dr. Petra Zapp",
    amount: "~£24,050",
    yearStart: 2024,
    yearEnd: 2025,
    projects: ["Fuel Cell & Battery EVs"],
  },
  {
    title: "Fuel Science Center",
    program: "Fuel Science Center",
    funder: "DFG",
    pi: "Prof. Venghaus",
    yearStart: 2019,
    yearEnd: 2025,
    projects: ["Policy impact", "Market regulation"],
  },
];
