import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ContactSection } from "@/components/sections/ContactSection";

export function generateMetadata(): Metadata {
  return {
    title: "Contact",
    description:
      "Contact Ali E. Torkayesh for academic collaborations, research inquiries, supervision, and sustainable transport policy projects.",
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <PageWrapper className="px-0 sm:px-0 lg:px-0">
      <ContactSection />
    </PageWrapper>
  );
}
