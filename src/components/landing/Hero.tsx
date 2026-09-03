import { Check, Award } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { ConsultForm } from "./ConsultForm";

const BULLETS = [
  "Private consultation, transparent & realistic information upfront",
  "Day surgery, in and out the same day",
  "Follow-up scheduled before you leave, no chasing",
];

export function Hero() {
  return (
    <section id="top" className="relative bg-ink text-ink-foreground scroll-mt-6 overflow-hidden px-4 py-8 sm:px-6 md:py-10">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-70 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 md:items-start md:gap-10">
        {/* Left Column: Headline, Subtitle, Bullets, Trust Card */}
        <div className="space-y-4">
          {/* Top Trust Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
            <Award className="size-3.5" />
            <span>Voted No.1 Plastic Surgeon in UAE · {CLINIC.founded}</span>
          </div>

          <div>
            <h1 className="text-ink-foreground text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
              Gynecomastia Surgery in Dubai
            </h1>
          </div>
          <p className="text-ink-muted text-base leading-relaxed">
            Performed personally by Dr. Sanjay, plastic surgeon and founder of Cocoona Surgery Centre. Assessment, procedure and follow-up under one roof, We care for our clients!
          </p>

          <ul className="space-y-3 pt-1">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex gap-3 items-start">
                <Check aria-hidden="true" className="text-accent mt-1 size-4 shrink-0" />
                <span className="text-ink-foreground text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Google Reviews Trust Bar */}
          <div className="border-ink-border bg-ink-border/30 backdrop-blur-md mt-6 border rounded-xl px-4 py-2.5 inline-flex items-center shadow-sm">
            <span className="font-bold text-sm text-ink-foreground tracking-tight">
              {CLINIC.reviewCount}+ Verified Patient Reviews
            </span>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="#consultation"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-sm sm:text-base font-bold text-accent-foreground shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Book your private consultation now
            </a>
          </div>
        </div>

        {/* Right Column: Consult Form */}
        <div>
          <ConsultForm idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}

