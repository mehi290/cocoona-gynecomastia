import diagram from "@/assets/tissue-diagram.jpg";
import { Section, SectionHeading, Rule } from "./primitives";

export function Glandular() {
  return (
    <Section id="glandular" tone="ink" ariaLabelledBy="glandular-heading">
      <SectionHeading id="glandular-heading" tone="ink">
        Why Training Never Fixed It
      </SectionHeading>
      <Rule tone="ink" />

      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          <p className="text-ink-foreground text-base leading-relaxed">
            Gynecomastia is enlarged glandular breast tissue, not fat. It is driven by hormones, not
            calories. That is why chest training, cardio and cutting weight change everything except
            the thing you wanted them to change.
          </p>
          <p className="text-ink-muted text-base leading-relaxed">
            It does not resolve on its own once established. Surgical removal is the only method
            that removes glandular tissue.
          </p>
        </div>

        <figure className="m-0">
          <img
            src={diagram}
            alt="Clinical illustration comparing dense glandular chest tissue with diffuse fatty tissue in cross-section"
            width={1200}
            height={800}
            loading="lazy"
            className="border-ink-border w-full border bg-background"
          />
          <figcaption className="text-ink-muted mt-2 text-xs">
            Illustration: glandular tissue (left) compared with fatty tissue (right).
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
