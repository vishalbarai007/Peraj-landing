"use client";

import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

// Wrapper that feeds the pointer position to the .spot hover glow.
export default function Spotlight({ className, onPointerMove, ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("spot", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        onPointerMove?.(e);
      }}
    />
  );
}
