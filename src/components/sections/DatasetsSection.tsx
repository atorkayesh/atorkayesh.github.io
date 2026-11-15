import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { datasets } from "@/data/datasets";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DatasetsSection() {
  return (
    <section className="scroll-mt-24" id="datasets">
      <SectionHeading>Datasets</SectionHeading>
      <div className="mt-8">
        {datasets.map((dataset) => (
          <article
            key={dataset.title}
            className="flex items-baseline gap-x-2.5 border-b border-border/40 py-5 last:border-0"
          >
            <h3 className="text-[0.9375rem] font-semibold leading-6 text-foreground">
              {dataset.title}
            </h3>
            <a
              className="inline-flex items-center gap-0.5 text-[0.6875rem] font-medium uppercase tracking-wide text-accent underline-offset-2 hover:underline"
              href={dataset.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              Zenodo
              <ExternalLinkIcon aria-hidden="true" className="size-3" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
