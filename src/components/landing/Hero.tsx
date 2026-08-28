import { Check } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { ConsultForm } from "./ConsultForm";

const BULLETS = [
  "Free private consultation, you'll be told your grade and what's realistic",
  "Day surgery on Al Wasl Road, in and out the same day",
  "Follow-up scheduled before you leave, no chasing",
];

export function Hero() {
  return (
    <section id="top" className="relative bg-ink text-ink-foreground scroll-mt-6 overflow-hidden px-5 py-12 sm:px-8 md:py-20">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gynecmastia hero.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right opacity-25 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-2 md:items-start md:gap-14">
        {/* Left Column: Headline, Subtitle, Bullets */}
        <div className="space-y-6">
          <div>
            <h1 className="text-ink-foreground text-3xl sm:text-4xl md:text-5xl font-serif">
              Gynecomastia Surgery in Dubai
            </h1>
          </div>
          <p className="text-ink-muted text-base leading-relaxed">
            Performed by Dr. Sanjay Parashar, consultant plastic surgeon and founder of Cocoona, at
            our accredited day surgery centre on Al Wasl Road. Assessment, procedure and follow-up
            under one roof, you see the surgeon, not a coordinator.
          </p>

          <ul className="space-y-3 pt-2">
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

        {/* Right Column: Consult Form */}
        <div>
          <ConsultForm idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
