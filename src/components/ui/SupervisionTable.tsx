"use client";

import { useMemo, useState } from "react";
import type { Supervised, SupervisionLevel } from "@/types/supervision";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

const levels: Array<{ label: string; value: SupervisionLevel }> = [
  { label: "PhDs", value: "phd" },
  { label: "Master's", value: "masters" },
  { label: "Bachelor's", value: "bachelors" },
  { label: "Interns", value: "intern" },
];

type SupervisionTableProps = {
  className?: string;
  items: Supervised[];
};

function hasDaadFunding(item: Supervised) {
  return item.level === "intern" && item.note?.toLowerCase().includes("daad");
}

export function SupervisionTable({ className, items }: SupervisionTableProps) {
  const [activeLevel, setActiveLevel] = useState<SupervisionLevel>("phd");
  const visibleItems = useMemo(
    () => items.filter((item) => item.level === activeLevel),
    [activeLevel, items],
  );

  return (
    <div className={cn("space-y-4", className)}>
      <div aria-label="Supervision level" className="flex flex-wrap gap-2" role="tablist">
        {levels.map((level) => (
          <button
            aria-selected={activeLevel === level.value}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              activeLevel === level.value
                ? "border-accent bg-accent text-white"
                : "border-border bg-background text-foreground hover:bg-foreground/10",
            )}
            key={level.value}
            onClick={() => setActiveLevel(level.value)}
            role="tab"
            type="button"
          >
            {level.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-foreground/5 text-xs uppercase text-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Year</th>
              <th className="px-4 py-3 font-semibold">Topic</th>
              <th className="px-4 py-3 font-semibold">Institution</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {visibleItems.map((item) => (
              <tr key={`${item.level}-${item.name}-${item.year}`}>
                <td className="px-4 py-3 font-medium text-foreground">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>{item.name}</span>
                    {hasDaadFunding(item) ? <Badge variant="funder">DAAD</Badge> : null}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted">{item.year}</td>
                <td className="px-4 py-3 text-muted">{item.topic}</td>
                <td className="px-4 py-3 text-muted">{item.institution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
