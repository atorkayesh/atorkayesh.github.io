import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { Footer } from "./Footer";
import { Header } from "./Header";

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <SkipToContent />
      <Header />
      <div className="flex flex-1 flex-col" id="main-content">
        {children}
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
