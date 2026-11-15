"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import {
  BadgeCheck,
  Download,
  GraduationCap,
  Link,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { person } from "@/data/person";
import { cn, withBasePath } from "@/lib/utils";

const navGroups = [
  {
    label: "Profile",
    links: [{ href: "/#about", id: "about", label: "About" }],
  },
  {
    label: "Background",
    links: [
      { href: "/#education", id: "education", label: "Education" },
      { href: "/#positions", id: "positions", label: "Academic Positions" },
      { href: "/#experiences", id: "experiences", label: "Experiences" },
      { href: "/#awards", id: "awards", label: "Honors & Awards" },
      { href: "/#industry", id: "industry", label: "Industry Experiences" },
    ],
  },
  {
    label: "Research",
    links: [
      { href: "/#publications", id: "publications", label: "Publications" },
      { href: "/#grants", id: "grants", label: "Grants" },
      { href: "/#software", id: "software", label: "Software" },
      { href: "/#datasets", id: "datasets", label: "Datasets" },
    ],
  },
  {
    label: "Activities",
    links: [
      { href: "/#teaching", id: "teaching", label: "Teaching" },
      { href: "/#conferences", id: "conferences", label: "Conferences" },
      { href: "/#supervision", id: "supervision", label: "Student Supervision" },
      { href: "/#services", id: "services", label: "Services" },
    ],
  },
];

const socialLinks = [
  { href: person.socialLinks.linkedin, icon: Link, label: "LinkedIn" },
  {
    href: person.socialLinks.googleScholar,
    icon: GraduationCap,
    label: "Google Scholar",
  },
  { href: person.socialLinks.orcid, icon: BadgeCheck, label: "ORCID" },
  { href: `mailto:${person.email}`, icon: Mail, label: "Email" },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

const pathSectionMap: Record<string, string> = {
  "/publications": "publications",
  "/awards": "awards",
  "/conferences": "conferences",
  "/supervision": "supervision",
  "/contact": "contact",
  "/research": "research",
};

export function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const effectiveActive = pathSectionMap[pathname] ?? activeSection;

  useEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  // Close the drawer with the Escape key.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const ids = navGroups.flatMap((g) => g.links).map((l) => l.id);

    const update = () => {
      const trigger = window.innerHeight * 0.3;
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

      if (atBottom) {
        const lastVisible = [...sections]
          .reverse()
          .find((el) => el.getBoundingClientRect().top < window.innerHeight);
        if (lastVisible) {
          setActiveSection(lastVisible.id);
          return;
        }
      }

      let current = sections[0]?.id ?? "about";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= trigger) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeGroup =
    navGroups.find((g) => g.links.some((l) => l.id === effectiveActive))?.label ??
    "Profile";

  return (
    <>
      {/* Mobile top bar — hamburger trigger */}
      <div className="sticky top-0 z-40 -mx-6 flex items-center justify-between border-b border-border/40 bg-background/90 px-6 py-3 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:hidden">
        <NextLink
          href="/"
          className="font-serif text-lg font-bold leading-none text-foreground transition-colors hover:text-accent"
        >
          {person.name}
        </NextLink>
        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Open navigation menu"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border/60 text-foreground/80 transition-colors hover:text-foreground"
        >
          <Menu aria-hidden="true" className="size-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Panel */}
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[82%] max-w-xs flex-col overflow-y-auto bg-background shadow-2xl transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
            <div>
              <p className="font-serif text-base font-bold leading-tight text-foreground">
                {person.name}
              </p>
              <p className="mt-0.5 text-[0.7rem] font-semibold text-accent">
                {person.title}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex size-9 items-center justify-center rounded-md border border-border/60 text-foreground/80 transition-colors hover:text-foreground"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav
            aria-label="Primary"
            className="flex flex-1 flex-col gap-6 px-6 py-6"
          >
            {navGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-muted/50">
                  {group.label}
                </p>
                <div className="flex flex-col">
                  {group.links.map((link) => {
                    const isActive = effectiveActive === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "rounded-md px-2 py-2 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors",
                          isActive
                            ? "bg-foreground/5 text-foreground"
                            : "text-muted/70 hover:bg-foreground/5 hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="border-t border-border/40 px-6 py-5">
            {person.cvPath && (
              <a
                href={withBasePath(person.cvPath)}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="mb-5 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-all hover:bg-accent/85 active:scale-[0.98]"
              >
                <Download aria-hidden="true" className="size-3" />
                Download CV
              </a>
            )}
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    aria-label={link.label}
                    href={link.href}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="text-muted/50 transition-colors hover:text-foreground"
                  >
                    <Icon aria-hidden="true" className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden flex-col justify-between py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[44%] lg:max-w-sm lg:py-24 lg:pr-12">
        <div>
          {/* Identity */}
          <h1 className="whitespace-nowrap font-serif text-3xl font-bold leading-[1.1] lg:text-4xl">
            <NextLink href="/" className="text-foreground transition-colors hover:text-accent">
              {person.name}
            </NextLink>
          </h1>
          <p className="mt-3 text-[0.85rem] font-semibold text-accent">
            {person.title}
          </p>

          <p className="mt-1 text-[0.75rem] text-muted whitespace-nowrap">
            {person.affiliations.join(" · ")}
          </p>

          <p className="mt-1 text-[0.65rem] text-muted">{person.location}</p>

          {/* Nav */}
          <nav aria-label="Primary" className="mt-12 flex flex-col gap-4">
            {navGroups.map((group) => {
              const isExpanded = group.label === activeGroup;
              return (
                <div key={group.label}>
                  <a
                    href={group.links[0]?.href}
                    className={cn(
                      "mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] transition-colors",
                      isExpanded
                        ? "text-foreground"
                        : "text-muted/40 hover:text-muted",
                    )}
                  >
                    {group.label}
                  </a>
                  <div
                    className={cn(
                      "flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
                      isExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    {group.links.map((link) => {
                      const isActive = effectiveActive === link.id;
                      return (
                        <a
                          key={link.id}
                          href={link.href}
                          className="group flex items-center gap-4 py-1.5"
                        >
                          <span
                            className={cn(
                              "inline-block h-px transition-all duration-300",
                              isActive
                                ? "w-14 bg-foreground"
                                : "w-6 bg-border group-hover:w-10 group-hover:bg-muted",
                            )}
                          />
                          <span
                            className={cn(
                              "text-[11px] font-bold uppercase tracking-[0.15em] transition-colors",
                              isActive
                                ? "text-foreground"
                                : "text-muted/70 group-hover:text-foreground",
                            )}
                          >
                            {link.label}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom: download cv + social icons */}
        <div className="mt-10">
          {person.cvPath && (
            <a
              href={withBasePath(person.cvPath)}
              rel="noopener noreferrer"
              target="_blank"
              className="mb-5 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-sm transition-all hover:bg-accent/85 hover:shadow-md active:scale-[0.98]"
            >
              <Download aria-hidden="true" className="size-3" />
              Download CV
            </a>
          )}
          <div className="flex flex-wrap items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  aria-label={link.label}
                  href={link.href}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  className="text-muted/50 transition-colors hover:text-foreground"
                >
                  <Icon aria-hidden="true" className="size-[18px]" />
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-[11px] text-muted/40">© 2026 {person.name}</p>
        </div>
      </aside>
    </>
  );
}
