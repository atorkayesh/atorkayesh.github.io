"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { person } from "@/data/person";
import { cn } from "@/lib/utils";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";
import { PageWrapper } from "./PageWrapper";

const navLinks = [
  { href: "#research", id: "research", label: "Research" },
  { href: "#publications", id: "publications", label: "Publications" },
  { href: "#teaching", id: "teaching", label: "Teaching" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState(navLinks[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent bg-background/90 transition-all",
        isScrolled && "border-border/80 shadow-sm backdrop-blur-md",
      )}
    >
      <PageWrapper className="flex h-16 items-center justify-between gap-4">
        <a
          className="min-w-0 text-base font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#main-content"
        >
          {person.name}
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                activeSection === link.id && "bg-foreground/10 text-foreground",
              )}
              href={link.href}
              key={link.id}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <DarkModeToggle />
          <a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-accent dark:text-slate-950 dark:hover:bg-accent/90"
            href="/documents/ali-torkayesh-cv.pdf"
          >
            <Download aria-hidden="true" className="size-4" />
            Download CV
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </button>
        </div>
      </PageWrapper>
      <div
        className={cn(
          "grid overflow-hidden border-t border-border/70 transition-[grid-template-rows]",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        id="mobile-navigation"
      >
        <div className="min-h-0">
          <PageWrapper className="flex flex-col gap-1 py-3 md:hidden">
            {navLinks.map((link) => (
              <a
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/10 hover:text-foreground",
                  activeSection === link.id && "bg-foreground/10 text-foreground",
                )}
                href={link.href}
                key={link.id}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-white dark:bg-accent dark:text-slate-950"
              href="/documents/ali-torkayesh-cv.pdf"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download aria-hidden="true" className="size-4" />
              Download CV
            </a>
          </PageWrapper>
        </div>
      </div>
    </header>
  );
}
