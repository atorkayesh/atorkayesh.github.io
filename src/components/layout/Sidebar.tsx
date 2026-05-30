"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, Download, GraduationCap, Link, Mail } from "lucide-react";
import { person } from "@/data/person";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#research", id: "research", label: "Research" },
  { href: "#publications", id: "publications", label: "Publications" },
  { href: "#teaching", id: "teaching", label: "Teaching" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const socialLinks = [
  { href: person.socialLinks.linkedin, icon: Link, label: "LinkedIn" },
  { href: person.socialLinks.googleScholar, icon: GraduationCap, label: "Google Scholar" },
  { href: person.socialLinks.orcid, icon: BadgeCheck, label: "ORCID" },
  { href: `mailto:${person.email}`, icon: Mail, label: "Email" },
].filter((link): link is typeof link & { href: string } => Boolean(link.href));

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((s): s is HTMLElement => Boolean(s));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

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
        <nav aria-label="Primary" className="mt-14 flex flex-col">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className="group flex items-center gap-4 py-2.5"
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
