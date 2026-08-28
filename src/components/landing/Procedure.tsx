import { Section, SectionHeading, Rule } from "./primitives";

const STEPS = [
  {
    title: "Assessment",
    points: [
      "Grading your case",
      "Glandular, fatty or mixed",
      "Whether surgery is the right route",
      "What is realistically achievable",
    ],
  },
  {
    title: "Technique",
    points: [
      "Gland excision",
      "Liposuction where appropriate",
      "Combined approach depending on grade",
      "Incision placement and expected scarring",
    ],
  },
  {
    title: "On The Day",
    points: [
      "Al Wasl day surgery centre",
      "Anaesthesia explained in advance",
      "Typical duration",
      "Same-day discharge in most cases",
    ],
  },
  {
    title: "Recovery",
    points: [
      "Compression garment period",
      "Time before desk work",
      "Time before training",
      "Week-by-week swelling",
      "When the final result settles",
    ],
  },
];

export function Procedure() {
  return (
    <Section id="procedure" ariaLabelledBy="procedure-heading">
      <SectionHeading id="procedure-heading">The Procedure</SectionHeading>
      <Rule />

      <div className="grid gap-4 sm:grid-cols-2">
        {STEPS.map((step, index) => (
          <article key={step.title} className="border-border bg-card border p-6">
            <p className="text-accent text-xs font-semibold tracking-[0.18em]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-primary mt-2 font-serif text-lg tracking-wide uppercase">
              {step.title}
            </h3>
            <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-relaxed">
              {step.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="bg-accent mt-2 size-1 shrink-0 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
