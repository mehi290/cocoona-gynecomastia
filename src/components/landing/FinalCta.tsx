import { CalendarCheck, MessageCircle, Phone, Navigation } from "lucide-react";
import { CLINIC, DIRECTIONS_URL, WHATSAPP_URL } from "@/lib/clinic";
import { SectionHeading, Rule } from "./primitives";

const secondary =
  "border-ink-muted text-ink-foreground hover:bg-ink-border inline-flex h-12 items-center justify-center gap-2 border px-5 text-sm font-semibold tracking-wide transition-colors";

export function FinalCta() {
  return (
    <section
      id="book"
      aria-labelledby="book-heading"
      className="bg-ink text-ink-foreground scroll-mt-6 px-5 py-8 pb-20 sm:px-8 md:py-10 md:pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading id="book-heading" tone="ink">
          Ready to stop dressing around it?
        </SectionHeading>
        <Rule tone="ink" />

        <p className="text-ink-muted max-w-2xl text-base leading-relaxed">
          Private consultation at our Al Wasl Road clinic. You will know exactly where you
          stand.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#top"
            className="bg-accent text-accent-foreground inline-flex h-12 items-center justify-center gap-2 px-5 text-sm font-semibold tracking-wide"
          >
            <CalendarCheck aria-hidden="true" className="size-4" />
            Book Private Consultation
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={secondary}>
            <MessageCircle aria-hidden="true" className="size-4" />
            Chat on WhatsApp
          </a>
          <a href={CLINIC.phoneHref} className={secondary}>
            <Phone aria-hidden="true" className="size-4" />
            Call Cocoona
          </a>
          <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className={secondary}>
            <Navigation aria-hidden="true" className="size-4" />
            Get Directions
          </a>
        </div>

        <div className="border-ink-border mt-10 border-t pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-block rounded-md bg-white/95 p-2 border border-white/20 w-fit">
            <img
              src="/drsanjay logo.png"
              alt="Dr. Sanjay - Cocoona Centre for Aesthetic Transformation"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-ink-muted text-xs leading-relaxed">
            {CLINIC.name} · {CLINIC.addressLine1}, {CLINIC.addressLine2} · {CLINIC.hours}
            <br />
            Results of any surgical procedure vary between individuals. All surgery carries risk;
            suitability is determined at consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
