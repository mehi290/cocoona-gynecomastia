import { MapPin, Clock, Navigation } from "lucide-react";
import reception from "@/assets/clinic-reception.jpg";
import theatre from "@/assets/clinic-theatre.jpg";
import consult from "@/assets/clinic-consult.jpg";
import { CLINIC, DIRECTIONS_URL, MAP_EMBED_URL } from "@/lib/clinic";
import { Section, SectionHeading, Rule } from "./primitives";

const PHOTOS = [
  { src: reception, alt: "Reception area of the Cocoona clinic on Al Wasl Road" },
  { src: theatre, alt: "Accredited day surgery operating theatre at the clinic" },
  { src: consult, alt: "Private consultation room at the clinic" },
];

export function Clinic() {
  return (
    <Section id="clinic" tone="muted" ariaLabelledBy="clinic-heading">
      <SectionHeading id="clinic-heading">Where You'll Be Treated</SectionHeading>
      <Rule />

      <p className="max-w-2xl text-base leading-relaxed">
        {CLINIC.name}, Al Wasl Road, Dubai. An accredited day surgery facility, your procedure
        happens here, not at a third-party hospital.
      </p>

      <div className="mt-9 grid gap-8 md:grid-cols-2">
        <div className="bg-card border-border border p-6">
          <dl className="space-y-5 text-sm">
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="text-accent mt-0.5 size-4 shrink-0" />
              <div>
                <dt className="text-primary font-semibold">Address</dt>
                <dd className="text-muted-foreground mt-1 leading-relaxed">
                  {CLINIC.name}
                  <br />
                  {CLINIC.addressLine1}
                  <br />
                  {CLINIC.addressLine2}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock aria-hidden="true" className="text-accent mt-0.5 size-4 shrink-0" />
              <div>
                <dt className="text-primary font-semibold">Opening hours</dt>
                <dd className="text-muted-foreground mt-1">{CLINIC.hours}</dd>
              </div>
            </div>
          </dl>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-ink mt-6 inline-flex h-12 items-center justify-center gap-2 px-5 text-sm font-semibold tracking-wide transition-colors"
          >
            <Navigation aria-hidden="true" className="size-4" />
            Get Directions
          </a>
        </div>

        <div className="border-border min-h-[280px] border">
          <iframe
            title="Map showing the Cocoona clinic location on Al Wasl Road, Dubai"
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[280px] w-full"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {PHOTOS.map((photo) => (
          <img
            key={photo.alt}
            src={photo.src}
            alt={photo.alt}
            width={1280}
            height={854}
            loading="lazy"
            className="border-border h-44 w-full border object-cover"
          />
        ))}
      </div>
    </Section>
  );
}
