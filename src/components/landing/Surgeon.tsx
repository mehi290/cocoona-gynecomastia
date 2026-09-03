import { useState, useEffect } from "react";
import { Section, SectionHeading, Rule } from "./primitives";
import { Award, CheckCircle2 } from "lucide-react";

const SURGEON_IMAGES = [
  "/dr.sanjay background1.jpeg",
  "/dr.sanjay background2.jpeg",
];

const STATS = [
  { label: "Experience", value: "30+ Years" },
  { label: "Procedures Performed", value: "40,000+" },
  { label: "Regulated By", value: "DHA Licensed" },
];

const CREDENTIALS = [
  "International Visiting Professor, American Society of Plastic Surgeons (ASPS)",
  "Chairman Scientific, Emirates Plastic Surgery Society (EPSS)",
  "National Secretary, International Society of Aesthetic Plastic Surgery (ISAPS UAE)",
  "Diplomate, American Board of Regenerative Medicine",
  "President, FUE Asia",
  "International Adjunct Faculty, DMIHER, India",
  "Founder, Cocoona Centre for Aesthetic Transformation (est. 2005)",
];

export function Surgeon() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % SURGEON_IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="surgeon" ariaLabelledBy="surgeon-heading">
      <SectionHeading id="surgeon-heading">Your Surgeon</SectionHeading>
      <Rule />

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-12 items-center">
        <figure className="m-0 overflow-hidden rounded-xl border border-border bg-ink shadow-lg relative group aspect-[4/5] w-full min-h-[420px]">
          {SURGEON_IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Portrait of Dr. Sanjay"
              width={900}
              height={1100}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-700 ease-in-out ${
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </figure>

        <div className="space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider mb-1.5">
              <Award className="size-4 shrink-0 text-accent" />
              <span>Voted No.1 Plastic Surgeon in UAE (Arabian Business)</span>
            </div>
            <h3 className="text-primary font-serif text-2xl sm:text-3xl">Dr. Sanjay</h3>
            <p className="text-muted-foreground mt-0.5 text-sm tracking-wide">
              MBBS, MS (General Surgery), DNB
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2.5 bg-secondary/50 border border-border/80 p-3 rounded-lg text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-primary font-serif font-bold text-sm sm:text-base">{stat.value}</p>
                <p className="text-muted-foreground text-[10px] uppercase font-semibold tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
              Key Academic & Professional Appointments
            </h4>
            <div className="grid gap-2">
              {CREDENTIALS.map((item) => (
                <div
                  key={item}
                  className="bg-card border border-border/70 p-2.5 rounded-md flex items-start gap-2.5 text-xs text-foreground"
                >
                  <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Highlighted Author Note */}
            <div className="border-l-3 border-accent bg-accent/10 px-3.5 py-2.5 rounded-r-md mt-3">
              <p className="text-sm font-medium text-primary">
                Author of five books on aesthetic surgery and contributor to medical textbooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


