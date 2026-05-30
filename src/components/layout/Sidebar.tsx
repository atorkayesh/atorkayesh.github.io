"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Download, GraduationCap, Link, Mail } from "lucide-react";
import { person } from "@/data/person";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Profile",
    links: [
      { href: "#about", id: "about", label: "About" },
      { href: "#education", id: "education", label: "Education" },
      { href: "#positions", id: "positions", label: "Positions" },
    ],
  },
  {
    label: "Research",
    links: [
      { href: "#research", id: "research", label: "Research" },
      { href: "#publications", id: "publications", label: "Publications" },
      { href: "#grants", id: "grants", label: "Grants" },
      { href: "#awards", id: "awards", label: "Awards" },
    ],
  },
  {
    label: "Activities",
    links: [
      { href: "#teaching", id: "teaching", label: "Teaching" },
      { href: "#conferences", id: "conferences", label: "Conferences" },
      { href: "#supervision", id: "supervision", label: "Supervision" },
      { href: "#services", id: "services", label: "Services" },
    ],
  },
  {
    label: "Background",
    links: [
      { href: "#experiences", id: "experiences", label: "Experiences" },
      { href: "#software", id: "software", label: "Software" },
      { href: "#industry", id: "industry", label: "Industry" },
      { href: "#skills", id: "skills", label: "Skills" },
      { href: "#contact", id: "contact", label: "Contact" },
    ],
  },
];

const socialLinks = [
  { href: person.socialLinks.linkedin, icon: Link, label: "LinkedIn" },
  { href: person.socialLinks.googleScholar, icon: GraduationCap, label: "Google Scholar" },
  { href: person.socialLinks.orcid, icon: BadgeCheck, label: "ORCID" },
  { href: `mailto:${person.email}`, icon: Mail, label: "Email" },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const ids = navGroups.flatMap((g) => g.links).map((l) => l.id);

    const update = () => {
      const trigger = window.innerHeight * 0.3;
      let current = ids[0] ?? "about";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= trigger) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeGroup = navGroups.find((g) =>
    g.links.some((l) => l.id === activeSection),
  )?.label ?? "Profile";

  return (
    <aside className="flex flex-col justify-between py-16 lg:sticky lg:top-0 lg:h-screen lg:w-[44%] lg:max-w-sm lg:py-24 lg:pr-12">
      <div>
        {/* Identity */}
        <h1 className="font-serif text-4xl font-bold leading-[1.1] text-foreground lg:text-5xl">
          {person.name}
        </h1>
        <p className="mt-3 text-[15px] font-semibold text-accent">
          {person.title}
        </p>
        <p className="mt-1 text-sm text-muted">
          {person.affiliations.join(" · ")}
        </p>
        <p className="mt-1 text-sm text-muted">{person.location}</p>

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
                    isExpanded ? "text-foreground" : "text-muted/40 hover:text-muted",
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
                    const isActive = activeSection === link.id;
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

      {/* Bottom: social icons + download cv */}
      <div className="mt-10">
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                aria-label={link.label}
                href={link.href}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                className="text-muted/50 transition-colors hover:text-foreground"
              >
                <Icon aria-hidden="true" className="size-[18px]" />
              </a>
            );
          })}
          <a
            aria-label="Download CV"
            href="/documents/ali-torkayesh-cv.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="text-muted/50 transition-colors hover:text-foreground"
          >
            <Download aria-hidden="true" className="size-[18px]" />
          </a>
        </div>
        <p className="mt-6 text-[11px] text-muted/40">
          © 2026 {person.name}
        </p>
      </div>
    </aside>
  );
}
