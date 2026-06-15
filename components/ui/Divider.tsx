import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "gradient" | "gold-gradient" | "solid";
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", variant = "gradient", className, ...props }, ref) => {
    const baseStyles = "shrink-0 bg-zinc-200"; // Default subtle color, adjust as needed

    const orientationStyles =
      orientation === "horizontal"
        ? "w-full h-[1px] my-6"
        : "h-full w-[1px] mx-6 inline-block align-middle";

    const variantStyles = {
      gradient:
        orientation === "horizontal"
          ? "bg-gradient-to-r from-transparent via-slate-800 to-transparent"
          : "bg-gradient-to-b from-transparent via-slate-800 to-transparent",
      "gold-gradient":
        orientation === "horizontal"
          ? "bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
          : "bg-gradient-to-b from-transparent via-amber-500/30 to-transparent",
      solid: "bg-slate-800/60",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, orientationStyles, variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
