import { CalendarCheck, PhoneCall, UserCheck } from "lucide-react";
import { Section, SectionHeading, Rule, Placeholder } from "./primitives";

export function Aftercare() {
  return (
    <Section id="aftercare" tone="ink" ariaLabelledBy="aftercare-heading">
      <SectionHeading id="aftercare-heading" tone="ink">
        What Happens After
      </SectionHeading>
      <Rule tone="ink" />

      <p className="text-ink-foreground max-w-3xl text-lg leading-relaxed sm:text-xl">
        Your follow-up appointments are scheduled before you leave, not arranged afterwards.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="border-ink-border border p-6">
          <CalendarCheck aria-hidden="true" className="text-accent size-5" />
          <h3 className="text-ink-foreground mt-3 font-serif text-base">Booked before you leave</h3>
          <p className="text-ink-muted mt-2 text-sm leading-relaxed">
            <Placeholder>[FOLLOWUP_INTERVALS_PLACEHOLDER]</Placeholder>
          </p>
        </div>
        <div className="border-ink-border border p-6">
          <PhoneCall aria-hidden="true" className="text-accent size-5" />
          <h3 className="text-ink-foreground mt-3 font-serif text-base">A direct contact route</h3>
          <p className="text-ink-muted mt-2 text-sm leading-relaxed">
            You get a direct contact route for questions during recovery.
          </p>
        </div>
        <div className="border-ink-border border p-6">
          <UserCheck aria-hidden="true" className="text-accent size-5" />
          <h3 className="text-ink-foreground mt-3 font-serif text-base">A named person</h3>
          <p className="text-ink-muted mt-2 text-sm leading-relaxed">
            Someone specific to reach — not a general reception line.
          </p>
        </div>
      </div>
    </Section>
  );
}
