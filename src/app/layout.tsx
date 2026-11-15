import type { Metadata } from "next";
import { RootLayout as SiteRootLayout } from "@/components/layout/RootLayout";
import { inter, playfairDisplay } from "@/lib/fonts";
import { ogImage, siteDescription, siteKeywords, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Torkayesh | Postdoctoral Researcher",
    template: "%s | Ali Torkayesh",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Ali Torkayesh", url: siteUrl }],
  creator: "Ali Torkayesh",
  publisher: "Ali Torkayesh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ali Torkayesh | Postdoctoral Researcher",
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Torkayesh | Postdoctoral Researcher",
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteRootLayout>{children}</SiteRootLayout>
      </body>
    </html>
  );
}
