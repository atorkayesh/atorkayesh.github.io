import type { SoftwarePackage } from "@/types/software";
import { Badge } from "./Badge";
import { ExternalLink } from "./ExternalLink";
import { cn } from "@/lib/utils";

type SoftwareCardProps = {
  className?: string;
  software: SoftwarePackage;
};

export function SoftwareCard({ className, software }: SoftwareCardProps) {
  return (
    <article className={cn("rounded-lg border border-border bg-background p-5", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold leading-7 text-foreground">{software.name}</h3>
        <Badge variant="tag">{software.language}</Badge>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{software.description}</p>
      {software.githubUrl ? (
        <div className="mt-4">
          <ExternalLink href={software.githubUrl}>GitHub</ExternalLink>
        </div>
      ) : null}
    </article>
  );
}
