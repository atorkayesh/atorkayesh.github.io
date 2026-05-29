"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollToTopProps = {
  className?: string;
};

export function ScrollToTop({ className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        className,
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp aria-hidden="true" className="size-4" />
    </button>
  );
}
