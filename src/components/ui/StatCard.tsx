import { cn } from "@/lib/utils";

type StatCardProps = {
  className?: string;
  label: string;
  value: number | string;
};

export function StatCard({ className, label, value }: StatCardProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-3xl font-semibold leading-none text-foreground">{value}</div>
      <div className="mt-1 text-sm font-medium text-muted">{label}</div>
    </div>
  );
}
