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
        "sticky top-0 z-40 border-b border-border/40 bg-background/90 transition-all duration-200 backdrop-blur-xl",
        isScrolled && "bg-background/96 shadow-sm",
      )}
    >
      <PageWrapper className="relative flex h-14 items-center justify-between gap-8">
        <a
          className="group min-w-0 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href="#main-content"
        >
          <span className="block font-serif text-[15px] font-medium leading-none tracking-tight text-foreground transition-opacity group-hover:opacity-60">
            {person.name}
          </span>
          <span className="mt-[3px] block text-[10px] font-medium uppercase tracking-[0.14em] text-muted/70">
            Postdoctoral Researcher
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
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

        <div className="hidden items-center gap-5 md:flex">
          <DarkModeToggle className="border-border/60 bg-transparent shadow-none" />
          <a
            className="flex items-center gap-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="/documents/ali-torkayesh-cv.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Download aria-hidden="true" className="size-3.5 shrink-0" />
            <span>Download CV</span>
          </a>
        </div>

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
              <DarkModeToggle className="size-8 border-border/60 bg-transparent shadow-none" />
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
            <a
              className="mt-3 flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              href="/documents/ali-torkayesh-cv.pdf"
              onClick={() => setIsMenuOpen(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Download aria-hidden="true" className="size-3.5" />
              Download CV
            </a>
          </PageWrapper>
        </div>
      </div>
    </header>
  );
}
