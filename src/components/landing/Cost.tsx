import { Section, SectionHeading, Rule } from "./primitives";
import { SectionCtaBlock } from "./SectionCtaBlock";

const COVERED = [
  "Surgeon's fee",
  "Facility fee",
  "Anaesthesia",
  "Compression garment",
  "Follow-up visits",
];

export function Cost() {
  return (
    <Section id="cost" tone="muted" ariaLabelledBy="cost-heading">
      <SectionHeading id="cost-heading">What It Costs</SectionHeading>
      <Rule />

      <p className="max-w-2xl text-base leading-relaxed">
        The figure depends on grade, technique, and whether excision, liposuction or both are
        needed. Your exact cost is confirmed at consultation, in writing, before you commit to
        anything.
      </p>

      <div className="border-border bg-card mt-8 max-w-2xl border p-6 rounded-xl shadow-sm">
        <h3 className="text-primary font-serif text-lg">What your fee covers</h3>
        <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
          {COVERED.map((item) => (
            <li key={item} className="border-border flex gap-2 border-b pb-2 last:border-b-0">
              <span aria-hidden="true" className="bg-accent mt-2 size-1 shrink-0 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Section CTA Block */}
      <SectionCtaBlock
        heading="Get a price for your specific case"
        subtext="Final cost depends on grade and technique. We'll confirm yours at consultation."
        buttonText="Discuss Cost at Consultation"
        bgVariant="card"
      />
    </Section>
  );
}
