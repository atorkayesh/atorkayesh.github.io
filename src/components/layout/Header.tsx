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
  const [activeSection, setActiveSection] = useState("");
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
        "sticky top-0 z-40 border-b border-transparent bg-background/70 transition-all backdrop-blur-xl",
        isScrolled && "border-border/70 bg-background/85 shadow-sm",
      )}
    >
      <PageWrapper className="flex h-[4.5rem] items-center justify-between gap-4 py-3">
        <a
          className="group flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#main-content"
        >
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-accent/20 bg-accent/10 font-serif text-sm font-semibold text-accent transition-colors group-hover:bg-accent/15">
            AT
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-5 text-foreground">
              {person.name}
            </span>
            <span className="block truncate text-xs leading-4 text-muted">
              Postdoctoral Researcher
            </span>
          </span>
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center rounded-full border border-border/80 bg-background/70 p-1 shadow-sm backdrop-blur md:flex"
        >
          {navLinks.map((link) => (
            <a
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                activeSection === link.id && "bg-accent/10 text-foreground",
              )}
              href={link.href}
              key={link.id}
            >
              {activeSection === link.id ? (
                <span
                  aria-hidden="true"
                  className="absolute left-3 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent"
                />
              ) : null}
              <span className={cn(activeSection === link.id && "pl-2")}>
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <DarkModeToggle />
          <a
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-primary/15 bg-primary px-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-accent/20 dark:bg-accent dark:text-slate-950 dark:hover:bg-accent/90"
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
            className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-background/75 text-foreground shadow-sm transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </button>
        </div>
      </PageWrapper>
      <div
        className={cn(
          "grid overflow-hidden border-t border-border/70 bg-background/90 backdrop-blur-xl transition-[grid-template-rows]",
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
                  activeSection === link.id && "bg-accent/10 text-foreground",
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
