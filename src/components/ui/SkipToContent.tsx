import { cn } from "@/lib/utils";

type SkipToContentProps = {
  className?: string;
  targetId?: string;
};

export function SkipToContent({
  className,
  targetId = "main-content",
}: SkipToContentProps) {
  return (
    <a
      className={cn(
        "sr-only z-50 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-2 focus:outline-offset-2 focus:outline-accent",
        className,
      )}
      href={`#${targetId}`}
    >
      Skip to content
    </a>
  );
}
