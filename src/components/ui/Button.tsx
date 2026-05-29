import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./Spinner";

const buttonVariants = {
  primary:
    "border-transparent bg-primary text-white shadow-sm hover:bg-primary/90 dark:bg-accent dark:text-slate-950 dark:hover:bg-accent/90",
  outline:
    "border-border bg-transparent text-foreground hover:border-accent hover:bg-accent/10",
  ghost: "border-transparent bg-transparent text-foreground hover:bg-foreground/10",
};

const buttonSizes = {
  sm: "h-8 gap-1.5 px-3 text-sm",
  md: "h-10 gap-2 px-4 text-sm",
  lg: "h-12 gap-2.5 px-5 text-base",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingLabel?: string;
  size?: keyof typeof buttonSizes;
  variant?: keyof typeof buttonVariants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      isLoading = false,
      loadingLabel = "Loading",
      size = "md",
      type = "button",
      variant = "primary",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      aria-busy={isLoading || undefined}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md border font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? <Spinner aria-hidden className="size-4" label={loadingLabel} /> : null}
      <span className={cn(isLoading && "opacity-80")}>{children}</span>
    </button>
  ),
);

Button.displayName = "Button";
