"use client";

import { useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import type { Publication } from "@/types/publication";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  className?: string;
  id?: string;
  onResultsChange: (results: Publication[]) => void;
  onValueChange: (value: string) => void;
  placeholder?: string;
  publications: Publication[];
  value: string;
};

export function SearchInput({
  className,
  id = "publication-search",
  onResultsChange,
  onValueChange,
  placeholder = "Search publications",
  publications,
  value,
}: SearchInputProps) {
  const fuse = useMemo(
    () =>
      new Fuse(publications, {
        keys: ["title", "authors", "journal", "year", "tags"],
        threshold: 0.35,
      }),
    [publications],
  );
  const results = useMemo(() => {
    const query = value.trim();

    return query ? fuse.search(query).map((result) => result.item) : publications;
  }, [fuse, publications, value]);

  useEffect(() => {
    onResultsChange(results);
  }, [onResultsChange, results]);

  return (
    <label className={cn("relative block", className)} htmlFor={id}>
      <span className="sr-only">{placeholder}</span>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted"
      />
      <input
        className="h-11 w-full rounded-md border border-border bg-background pl-10 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
        id={id}
        onChange={(event) => onValueChange(event.target.value)}
        placeholder={placeholder}
        type="search"
        value={value}
      />
    </label>
  );
}
