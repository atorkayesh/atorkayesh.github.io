"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
        "sticky top-0 z-40 border-b border-border/40 bg-background/90 transition-all duration-200 backdrop-blur-xl",
        isScrolled && "bg-background/96 shadow-sm",
      )}
    >
      <PageWrapper className="relative flex h-14 items-center justify-between">
        {/* Badge — left anchor */}
        <a
          aria-label="Ali Torkayesh — back to top"
          className="group shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#main-content"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-md border border-border/70 bg-foreground font-serif text-[14px] font-bold tracking-wide text-background shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
            AT
          </span>
        </a>

        {/* Nav — absolutely centered in the bar */}
        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              className={cn(
                "relative py-1 text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                activeSection === link.id && "text-foreground",
              )}
              href={link.href}
              key={link.id}
            >
              {activeSection === link.id ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 -top-1 size-[3px] -translate-x-1/2 rounded-full bg-accent"
                />
              ) : null}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Dark mode toggle — right anchor */}
        <div className="hidden shrink-0 items-center md:flex">
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="fixed right-5 top-2.5 z-50 flex shrink-0 items-center gap-2 md:hidden">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className="inline-flex size-9 items-center justify-center rounded text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </button>
        </div>
      </PageWrapper>

      {/* Mobile nav drawer */}
      <div
        className={cn(
          "grid overflow-hidden border-t border-border/30 bg-background/96 backdrop-blur-xl transition-[grid-template-rows]",
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        id="mobile-navigation"
      >
        <div className="min-h-0">
          <PageWrapper className="flex flex-col gap-0.5 py-3 md:hidden">
            <div className="mb-3 flex items-center justify-between px-2 py-1.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted/60">Appearance</span>
              <DarkModeToggle />
            </div>
            {navLinks.map((link) => (
              <a
                className={cn(
                  "rounded px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground",
                  activeSection === link.id && "text-foreground",
                )}
                href={link.href}
                key={link.id}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </PageWrapper>
        </div>
      </div>
    </header>
  );
}
