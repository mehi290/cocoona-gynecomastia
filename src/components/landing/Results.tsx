import { Section, SectionHeading, Rule } from "./primitives";
import { ShieldCheck, CalendarCheck } from "lucide-react";

const CASES = [
  {
    id: "case-1",
    title: "Case Study 1: Grade 2 Glandular & Fatty Reduction",
    image: "/gynecmastia before and aft!.jpg.jpg",
    grade: "Grade 2 Gynecomastia",
    technique: "Periareolar Excision + VASER Liposuction",
    recovery: "4 Days Return to Work",
    highlights: [
      "Full removal of dense subareolar gland",
      "Periareolar micro-incision hidden along areolar border",
      "Symmetrical athletic chest contour achieved",
    ],
  },
  {
    id: "case-2",
    title: "Case Study 2: Grade 3 Moderate Glandular Expansion",
    image: "/gynecoma bfeor3.jpg",
    grade: "Grade 3 Gynecomastia",
    technique: "High-Definition Chest Sculpting & Excision",
    recovery: "5 Days Return to Work",
    highlights: [
      "Simultaneous fat suction & firm glandular resection",
      "Tightened skin retraction without extensive scarring",
      "Discreet natural nipple-areola position preserved",
    ],
  },
  {
    id: "case-3",
    title: "Case Study 3: Grade 1 Targeted Puffy Nipple Excision",
    image: "/gyne before and after 1.jpeg",
    grade: "Grade 1 Gynecomastia",
    technique: "Targeted Periareolar Micro-Excision",
    recovery: "3 Days Return to Work",
    highlights: [
      "Direct removal of retro-areolar glandular bud",
      "Restored flat, firm pectoral profile",
      "Concealed incision edge along natural areola rim",
    ],
  },
  {
    id: "case-4",
    title: "Case Study 4: Grade 2 Bilateral Chest Sculpting",
    image: "/gyne before and after 2.jpeg",
    grade: "Grade 2 Gynecomastia",
    technique: "Subareolar Excision & HD VASER Contouring",
    recovery: "4 Days Return to Work",
    highlights: [
      "Targeted reduction of glandular mass & pectoral fat",
      "Smooth masculine chest flat contours",
      "In-and-out day surgery under local anesthesia",
    ],
  },
  {
    id: "case-5",
    title: "Case Study 5: Grade 3 Advanced Gland Removal",
    image: "/gyne before and after 4.jpeg",
    grade: "Grade 3 Gynecomastia",
    technique: "Gland Resection & Pectoral Definition",
    recovery: "5 Days Return to Work",
    highlights: [
      "Complete excision of enlarged fibrous gland tissue",
      "Harmonious chest wall flattening and skin retraction",
      "Follow-up care and garment aftercare provided",
    ],
  },
];

export function Results() {
  return (
    <Section id="results" ariaLabelledBy="results-heading">
      <SectionHeading id="results-heading">Clinical Results & Case Studies</SectionHeading>
      <Rule />

      <p className="text-muted-foreground -mt-3 mb-8 max-w-2xl text-sm leading-relaxed">
        Real surgical outcomes performed personally by Dr. Sanjay at our accredited day
        surgery centre on Al Wasl Road, Dubai.
      </p>

      {/* Results Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((item) => (
          <div
            key={item.id}
            className="border-border bg-card overflow-hidden rounded-xl border shadow-md transition-all hover:shadow-lg flex flex-col"
          >
            {/* Case Header Badge */}
            <div className="bg-secondary/60 border-b border-border px-4 py-3 flex items-center justify-between">
              <span className="text-primary font-serif font-semibold text-sm">{item.title}</span>
              <span className="bg-accent/15 text-accent text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-accent/20">
                {item.grade}
              </span>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Discretion Note & Call to Action */}
      <div className="mt-8 border-border bg-secondary/40 border rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-5 text-accent shrink-0" />
          <p className="text-xs font-semibold text-primary leading-relaxed">
            100% Patient Privacy Guaranteed.
          </p>
        </div>
        <a
          href="#top"
          className="bg-accent text-accent-foreground hover:opacity-90 inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 text-xs font-semibold tracking-wide shrink-0 transition-opacity"
        >
          <CalendarCheck className="size-4" />
          Book Your Private Consultation
        </a>
      </div>
    </Section>
  );
}
