import surgeonPhoto from "@/assets/surgeon-placeholder.jpg";
import { Section, SectionHeading, Rule, Placeholder } from "./primitives";

const CREDENTIALS = [
  "International Visiting Professor, American Society of Plastic Surgeons",
  "Chairman Scientific, Emirates Plastic Surgery Society",
  "National Secretary, ISAPS UAE",
  "Diplomate, American Board of Regenerative Medicine",
];

export function Surgeon() {
  return (
    <Section id="surgeon" ariaLabelledBy="surgeon-heading">
      <SectionHeading id="surgeon-heading">Your Surgeon</SectionHeading>
      <Rule />

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-12">
        <figure className="m-0">
          <img
            src={surgeonPhoto}
            alt="Portrait placeholder for Dr. Sanjay Parashar, consultant plastic surgeon"
            width={900}
            height={1100}
            loading="lazy"
            className="border-border w-full border object-cover"
          />
          <figcaption className="mt-2">
            <Placeholder>[SURGEON_PHOTO_PLACEHOLDER — supply approved portrait]</Placeholder>
          </figcaption>
        </figure>

        <div>
          <h3 className="text-primary font-serif text-xl sm:text-2xl">Dr. Sanjay Parashar</h3>
          <p className="text-muted-foreground mt-1 text-sm tracking-wide">
            Consultant Plastic Surgeon · Founder, Cocoona
          </p>

          <ul className="mt-6 space-y-3">
            {CREDENTIALS.map((item) => (
              <li key={item} className="border-border border-b pb-3 text-sm leading-relaxed">
                {item}
              </li>
            ))}
            <li className="border-border border-b pb-3 text-sm">
              <Placeholder>[YEARS_IN_PRACTICE_PLACEHOLDER]</Placeholder>
            </li>
          </ul>

          <blockquote className="border-accent text-primary mt-8 border-l-2 pl-5 text-lg leading-relaxed italic">
            “Every case assessed and performed personally. You are not passed to a junior or handled
            by a sales coordinator.”
          </blockquote>
        </div>
      </div>
    </Section>
  );
}
