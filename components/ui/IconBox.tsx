import React from "react";
import { cn } from "@/lib/utils";

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: React.ReactNode | string;
  variant?: "default" | "gold" | "subtle";
  /** Text colours for the surface the box sits on. */
  tone?: "dark" | "light";
}

const IconBox = React.forwardRef<HTMLDivElement, IconBoxProps>(
  ({ icon: Icon, title, description, variant = "default", tone = "dark", className, ...props }, ref) => {
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
            "p-2.5 rounded-xl flex items-center justify-center border transition-colors duration-300",
            tone === "light" &&
              "bg-gradient-to-br from-ssl-blue/10 to-ssl-gold/10 border-white text-ssl-blue shadow-sm group-hover:from-ssl-blue group-hover:to-ssl-blue group-hover:text-white",
            tone === "dark" && variant === "default" && "bg-white/[0.06] border-white/10 text-slate-200 group-hover:text-ssl-gold",
            tone === "dark" && variant === "gold" && "bg-ssl-gold/10 border-ssl-gold/25 text-ssl-gold",
            tone === "dark" && variant === "subtle" && "bg-white/[0.04] border-white/5 text-slate-400 group-hover:text-slate-200"
          )}
        >
          <span aria-hidden="true" className="flex"><Icon className="h-6 w-6" /></span>
        </div>
        <h3 className={cn("text-lg font-semibold tracking-tight", tone === "light" ? "text-ssl-bg" : "text-white")}>{title}</h3>
        <p className={cn("text-sm leading-relaxed", tone === "light" ? "text-slate-600" : "text-slate-300")}>{description}</p>
      </div>
    );
  }
);

IconBox.displayName = "IconBox";

export { IconBox };
