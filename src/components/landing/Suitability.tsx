import { Section, SectionHeading, Rule } from "./primitives";

const MAY = [
  "Your chest has not changed despite consistent training",
  "Puffiness is concentrated around the nipple area",
  "It has been there since your teens, or arrived with weight change and stayed",
  "You dress around it, and you have stopped swimming",
];

const MAY_NOT = [
  "Your case may be medication-related or hormone-driven and needs investigation first",
  "You have had recent significant weight change and things may still settle",
  "Your expectations exceed what surgery can achieve",
];

export function Suitability() {
  return (
    <Section id="suitability" ariaLabelledBy="suitability-heading">
      <SectionHeading id="suitability-heading">Is This You?</SectionHeading>
      <Rule />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border-accent bg-card border-t-2 p-6">
          <h3 className="text-primary font-serif text-lg">This may be for you if:</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            {MAY.map((item) => (
              <li key={item} className="border-border border-b pb-3 last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-border bg-card border-t-2 p-6">
          <h3 className="text-primary font-serif text-lg">This may not be for you if:</h3>
          <ul className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed">
            {MAY_NOT.map((item) => (
              <li key={item} className="border-border border-b pb-3 last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-primary mt-8 font-serif text-lg leading-relaxed">
        The consultation exists to find that out. Some men are advised not to proceed.
      </p>
    </Section>
  );
}
