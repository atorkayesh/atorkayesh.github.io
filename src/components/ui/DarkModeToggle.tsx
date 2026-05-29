"use client";

import { useSyncExternalStore } from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

type DarkModeToggleProps = {
  className?: string;
};

const themeOrder = ["system", "light", "dark"] as const;
const subscribe = () => () => undefined;
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function DarkModeToggle({ className }: DarkModeToggleProps) {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { setTheme, theme = "system" } = useTheme();

  const currentTheme = themeOrder.includes(theme as (typeof themeOrder)[number])
    ? (theme as (typeof themeOrder)[number])
    : "system";
  const nextTheme = themeOrder[(themeOrder.indexOf(currentTheme) + 1) % themeOrder.length] ?? "system";
  const label = mounted ? `Switch theme to ${nextTheme}` : "Theme toggle";

  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      disabled={!mounted}
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      {currentTheme === "dark" ? <Moon aria-hidden="true" className="size-4" /> : null}
      {currentTheme === "light" ? <Sun aria-hidden="true" className="size-4" /> : null}
      {currentTheme === "system" ? <Laptop aria-hidden="true" className="size-4" /> : null}
    </button>
  );
}
