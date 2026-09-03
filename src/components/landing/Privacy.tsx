import { Section, SectionHeading, Rule } from "./primitives";
import { Lock, Shield, UserCheck, Key, CalendarCheck } from "lucide-react";

const PRIVACY_POINTS = [
  {
    title: "Private VIP Entrance & Free Valet",
    desc: "Discreet rear arrival at our Al Wasl Road villa. You enter directly into a private consultation suite.",
    icon: Key,
  },
  {
    title: "Direct Surgeon Consultation",
    desc: "You meet personally with Dr. Sanjay for your assessment, never a sales coordinator or assistant.",
    icon: UserCheck,
  },
  {
    title: "Encrypted Patient Confidentiality",
    desc: "Your records, photos, and personal details are strictly protected under UAE DHA confidentiality protocols.",
    icon: Lock,
  },
  {
    title: "Discreet Same-Day Discharge",
    desc: "Day surgery facility allows you to undergo your procedure and return home comfortably on the same day.",
    icon: Shield,
  },
];

export function Privacy() {
  return (
    <Section id="privacy" tone="ink" ariaLabelledBy="privacy-heading">
      <SectionHeading id="privacy-heading" tone="ink">
        100% Confidentiality & Private VIP Care
      </SectionHeading>
      <Rule tone="ink" />

      <p className="text-ink-muted -mt-3 mb-8 max-w-2xl text-sm leading-relaxed">
        We understand that male breast reduction is a deeply personal matter. Cocoona is designed from the ground up to ensure complete anonymity, privacy, and peace of mind.
      </p>

      {/* Grid of Privacy Features */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRIVACY_POINTS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="border-ink-border/80 bg-white/5 backdrop-blur-sm border rounded-xl p-5 space-y-3 transition-colors hover:border-accent/50"
            >
              <div className="bg-accent/15 text-accent p-2.5 rounded-lg w-fit">
                <Icon className="size-5" />
              </div>
              <h3 className="text-ink-foreground font-serif text-base font-medium">{item.title}</h3>
              <p className="text-ink-muted text-xs leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink-border/60">
        <p className="text-ink-muted text-xs">
          Villa 898, Raaji Street, Al Wasl Road, Jumeirah 2, Dubai · Discreet private entrance
        </p>
        <a
          href="#top"
          className="bg-accent text-accent-foreground hover:opacity-90 inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 text-xs font-semibold tracking-wide shrink-0 transition-opacity"
        >
          <CalendarCheck className="size-4" />
          Book Private Assessment
        </a>
      </div>
    </Section>
  );
}
