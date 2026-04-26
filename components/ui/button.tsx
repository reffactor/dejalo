import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-ink text-white hover:bg-clay transform hover:-translate-y-0.5",
      secondary: "bg-ink text-white hover:bg-ink-2",
      white: "bg-cream text-clay hover:bg-white transform hover:-translate-y-0.5",
      outline: "border border-white/20 text-cream bg-transparent hover:bg-white/10",
      ghost: "text-ink-3 hover:text-ink transition-colors",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-8 py-3.5 text-sm font-medium",
      lg: "px-10 py-4 text-base font-medium",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
