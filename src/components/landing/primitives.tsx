import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tone = "light",
  ariaLabelledBy,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "muted" | "ink";
  ariaLabelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "scroll-mt-6 px-5 py-14 sm:px-8 md:py-20",
        tone === "muted" && "bg-secondary",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  children,
  tone = "light",
  className,
}: {
  id?: string;
  children: ReactNode;
  tone?: "light" | "ink";
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl",
        tone === "ink" ? "text-ink-foreground" : "text-primary",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Rule({ tone = "light" }: { tone?: "light" | "ink" }) {
  return (
    <span
      aria-hidden="true"
      className={cn("mt-4 mb-7 block h-px w-14", tone === "ink" ? "bg-accent" : "bg-accent")}
    />
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="border-accent/60 bg-accent/10 text-foreground inline-block border border-dashed px-2 py-0.5 font-mono text-[0.8rem] tracking-tight">
      {children}
    </span>
  );
}
