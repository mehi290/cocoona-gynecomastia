import { Check } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { ConsultForm } from "./ConsultForm";

const BULLETS = [
  "Free private consultation — you'll be told your grade and what's realistic",
  "Message on WhatsApp — no phone call needed",
  "Day surgery on Al Wasl Road — in and out the same day",
  "Follow-up scheduled before you leave — no chasing",
];

export function Hero() {
  return (
    <section id="top" className="bg-ink text-ink-foreground scroll-mt-6 px-5 py-12 sm:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2 md:items-start md:gap-14">
        <div className="md:col-start-2 md:row-start-1">
          <div className="mb-5 inline-block rounded-lg bg-white/95 p-2.5 shadow-sm border border-white/20">
            <img
              src="/Cocoona logo.png"
              alt="Cocoona Centre for Aesthetic Transformation"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Al Wasl Road, Dubai
          </p>
          <h1 className="text-ink-foreground mt-4 text-3xl sm:text-4xl md:text-5xl">
            Gynecomastia Surgery in Dubai
          </h1>
          <p className="text-ink-muted mt-5 text-base leading-relaxed">
            Performed by Dr. Sanjay Parashar, consultant plastic surgeon and founder of Cocoona, at
            our accredited day surgery centre on Al Wasl Road. Assessment, procedure and follow-up
            under one roof — you see the surgeon, not a coordinator.
          </p>
        </div>

        <div className="md:col-start-1 md:row-span-2 md:row-start-1">
          <ConsultForm idPrefix="hero" />
        </div>

        <div className="md:col-start-2 md:row-start-2">
          <ul className="space-y-3">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <Check aria-hidden="true" className="text-accent mt-1 size-4 shrink-0" />
                <span className="text-ink-foreground text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="border-ink-border text-ink-muted mt-7 border-t pt-5 text-xs tracking-wide sm:text-sm">
            {CLINIC.rating} ★ from {CLINIC.reviewCount} Google reviews
            <span className="text-accent mx-2">·</span>
            Al Wasl Road, Dubai
            <span className="text-accent mx-2">·</span>
            {CLINIC.founded}
          </p>
        </div>
      </div>
    </section>

  );
}
