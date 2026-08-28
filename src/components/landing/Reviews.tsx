import { Star } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { Section, SectionHeading, Rule, Placeholder } from "./primitives";

export function Reviews() {
  return (
    <Section id="reviews" ariaLabelledBy="reviews-heading">
      <SectionHeading id="reviews-heading">What Patients Say</SectionHeading>
      <Rule />

      <div className="border-border bg-card flex flex-wrap items-center gap-x-6 gap-y-3 border p-6">
        <p className="text-primary font-serif text-4xl">{CLINIC.rating}</p>
        <div>
          <p className="text-accent flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-current" />
            ))}
          </p>
          <p className="text-muted-foreground mt-1 text-sm">
            {CLINIC.rating} out of 5 from {CLINIC.reviewCount} Google reviews
          </p>
        </div>
        <p className="w-full sm:w-auto">
          <Placeholder>[GOOGLE_REVIEWS_EMBED_PLACEHOLDER — live rating and count]</Placeholder>
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((index) => (
          <div key={index} className="border-border bg-card border p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              <Placeholder>
                [CONSENTED_TESTIMONIALS_PLACEHOLDER {index} — written patient account, consent on
                file. Do not invent.]
              </Placeholder>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
