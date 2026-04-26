import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "clay" | "sage" | "sand" | "outline";
  className?: string;
}

export const Badge = ({ children, variant = "clay", className }: BadgeProps) => {
  const variants = {
    clay: "text-clay font-medium tracking-[0.2em] uppercase text-[11px]",
    sage: "bg-sage-light text-sage px-3 py-1 rounded-full text-[10px] font-medium",
    sand: "bg-white/15 text-cream px-3 py-1 rounded-full text-[10px] font-medium tracking-[0.15em] uppercase",
    outline: "border border-sand text-ink-4 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider",
  };

  return (
    <span className={cn("inline-flex items-center gap-2", variants[variant], className)}>
      {variant === "clay" && <span className="w-6 h-[0.5px] bg-clay" />}
      {children}
    </span>
  );
};
