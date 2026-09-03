import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCtaBlockProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  href?: string;
  bgVariant?: "card" | "secondary";
  className?: string;
}

export function SectionCtaBlock({
  heading,
  subtext,
  buttonText,
  href = "#top",
  bgVariant = "card",
  className,
}: SectionCtaBlockProps) {
  return (
    <div
      className={cn(
        "mt-6 sm:mt-8 w-full rounded-xl border border-border/80 px-5 py-4 sm:px-6 sm:py-5 shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 text-left",
        bgVariant === "card"
          ? "bg-card text-card-foreground"
          : "bg-secondary/70 text-foreground",
        className
      )}
    >
      <div className="space-y-1 max-w-2xl">
        <h3 className="text-primary font-serif font-bold text-base sm:text-lg md:text-xl tracking-tight leading-snug">
          {heading}
        </h3>
        {subtext && (
          <p className="text-muted-foreground text-xs sm:text-sm font-medium leading-normal">
            {subtext}
          </p>
        )}
      </div>

      <div className="shrink-0 w-full sm:w-auto">
        <a
          href={href}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#B5894B] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#9C733B] focus:outline-none focus:ring-2 focus:ring-[#B5894B] focus:ring-offset-2 cursor-pointer whitespace-nowrap"
        >
          <span>{buttonText}</span>
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
