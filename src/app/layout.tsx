import type { Metadata } from "next";
import { RootLayout as SiteRootLayout } from "@/components/layout/RootLayout";
import { inter, playfairDisplay } from "@/lib/fonts";
import { ogImage, siteDescription, siteKeywords, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali E. Torkayesh | Postdoctoral Researcher",
    template: "%s | Ali E. Torkayesh",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Ali E. Torkayesh", url: siteUrl }],
  creator: "Ali E. Torkayesh",
  publisher: "Ali E. Torkayesh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ali E. Torkayesh | Postdoctoral Researcher",
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali E. Torkayesh | Postdoctoral Researcher",
    description: siteDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: "/favicon.ico",
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
