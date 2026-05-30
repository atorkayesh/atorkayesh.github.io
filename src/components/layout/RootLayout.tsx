import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { Sidebar } from "./Sidebar";

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider>
      <SkipToContent />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 sm:px-10 lg:flex lg:gap-0 lg:px-16">
        <Sidebar />
        <main
          className="min-w-0 flex-1 pb-32 pt-4 lg:py-24 lg:pl-20"
          id="main-content"
        >
          {children}
        </main>
      </div>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
