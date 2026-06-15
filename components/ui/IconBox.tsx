import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: React.ReactNode | string;
  variant?: "default" | "gold" | "subtle";
}

const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  ({ icon: Icon, title, description, variant = "default", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3 h-full w-full justify-between items-start",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "p-2.5 rounded-lg flex items-center justify-center transition-colors duration-300",
            variant === "default" && "bg-slate-800/40 text-slate-300 group-hover:bg-slate-800 group-hover:text-amber-500",
            variant === "gold" && "bg-amber-500/10 text-amber-500 border border-amber-500/20",
            variant === "subtle" && "bg-slate-800/20 text-slate-400 group-hover:bg-slate-700/30 group-hover:text-slate-300"
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-100 tracking-tight">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    );
  }
);

IconBox.displayName = "IconBox";

export { IconBox };
