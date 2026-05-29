"use client";

import { useEffect, useState } from "react";
import { StatCard } from "./StatCard";

type CountUpStatCardProps = {
  label: string;
  value: number;
};

export function CountUpStatCard({ label, value }: CountUpStatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 900;
    const startTime = window.performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return <StatCard label={label} value={displayValue} />;
}
