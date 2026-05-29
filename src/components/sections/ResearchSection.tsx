import {
  BarChart3,
  GitBranch,
  Network,
  Route,
  Scale,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const researchAreas = [
  {
    description:
      "I examine how transport systems can shift away from fossil fuels without losing reliability or accessibility. The work connects technology adoption, infrastructure choices, and climate policy design.",
    icon: Route,
    title: "Sustainable Transport",
  },
  {
    description:
      "My research studies Power-to-X pathways for hard-to-electrify transport and industrial demand. It focuses on how market structures and regulation shape diffusion.",
    icon: Workflow,
    title: "Power-to-X",
  },
  {
    description:
      "I analyze policy mixes for renewable fuels, hydrogen, and sustainable aviation. This includes coherence, sequencing, and the signals policy creates for investors and users.",
    icon: Scale,
    title: "Policy Analysis",
  },
  {
    description:
      "I use agent-based models to represent heterogeneous actors and bounded decision making. These models help test how behavior and regulation interact over time.",
    icon: Network,
    title: "Agent-Based Modeling",
  },
  {
    description:
      "I apply multi-criteria decision methods to compare technologies and strategies under uncertainty. The aim is transparent evaluation across economic, environmental, and operational criteria.",
    icon: BarChart3,
    title: "Multi-Criteria Decision Making",
  },
  {
    description:
      "I study how emerging fuel markets form, scale, and respond to policy pressure. This includes barriers, feedback loops, and competition between alternative technologies.",
    icon: GitBranch,
    title: "Market Dynamics",
  },
];

export function ResearchSection() {
  return (
    <section className="scroll-mt-24" id="research">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading subtitle="Six connected areas frame the research agenda.">
          Research
        </SectionHeading>
        <a
          className="inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          href="/research"
        >
          Detailed research view
        </a>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {researchAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              className="rounded-lg border border-border bg-background p-5 shadow-sm"
              key={area.title}
            >
              <div className="inline-flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-foreground">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
