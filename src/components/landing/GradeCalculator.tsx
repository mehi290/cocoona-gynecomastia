import { useState } from "react";
import { Section, SectionHeading, Rule } from "./primitives";
import { CheckCircle, ArrowRight, Activity, CalendarCheck } from "lucide-react";

const GRADES = [
  {
    grade: "Grade 1",
    subtitle: "Minor Subareolar Enlargement",
    desc: "Localized firm glandular tissue directly behind the nipple with no excess chest skin.",
    features: [
      "Puffy or pointed nipple appearance",
      "Noticeable through thin shirts",
      "No skin ptosis or sagging",
    ],
    recommended: "Targeted Periareolar Excision",
    duration: "45 to 60 minutes",
    recovery: "2 to 3 Days",
  },
  {
    grade: "Grade 2",
    subtitle: "Moderate Chest Enlargement",
    desc: "Combination of subareolar glandular tissue and localized adipose (fatty) tissue spread across the lower chest.",
    features: [
      "Chest enlargement resembling mild male breasts",
      "Firm gland tissue mixed with fatty volume",
      "Firm pectoral base with good skin elasticity",
    ],
    recommended: "Excision + VASER Liposuction",
    duration: "60 to 90 minutes",
    recovery: "3 to 5 Days",
  },
  {
    grade: "Grade 3",
    subtitle: "Substantial Enlargement with Mild Skin Excess",
    desc: "Significant glandular and fatty tissue buildup causing chest droop and early skin laxity.",
    features: [
      "Pronounced chest volume across pectorals",
      "Visible skin fold along inframammary line",
      "Requires sculpting to avoid post-op skin sag",
    ],
    recommended: "HD Liposuction + Surgical Resection",
    duration: "90 to 120 minutes",
    recovery: "5 to 7 Days",
  },
  {
    grade: "Grade 4",
    subtitle: "Severe Enlargement with Skin Sagging",
    desc: "Extensive glandular tissue and fat with marked skin ptosis, requiring tissue resection and skin contouring.",
    features: [
      "Distinct hanging chest tissue profile",
      "Stretched skin requires custom tightening",
      "Significant physical discomfort & postural strain",
    ],
    recommended: "Excision + Skin Redrape & Contour",
    duration: "2 to 2.5 Hours",
    recovery: "7 to 10 Days",
  },
];

export function GradeCalculator() {
  const [selectedGradeIndex, setSelectedGradeIndex] = useState(1); // Default Grade 2

  const activeGrade = GRADES[selectedGradeIndex];

  return (
    <Section id="grade-assessment" tone="muted" ariaLabelledBy="grade-heading">
      <SectionHeading id="grade-heading">Understanding the Grades</SectionHeading>
      <Rule />

      <p className="text-muted-foreground -mt-3 mb-8 max-w-2xl text-sm leading-relaxed">
        Gynecomastia is medically classified into 4 grades based on tissue density and skin elasticity.
        Select a grade below to view its characteristics and recommended surgical technique.
      </p>

      {/* Grade Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {GRADES.map((item, index) => {
          const isSelected = selectedGradeIndex === index;
          return (
            <button
              key={item.grade}
              type="button"
              onClick={() => setSelectedGradeIndex(index)}
              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                isSelected
                  ? "border-accent bg-accent/15 text-primary font-bold shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-base">{item.grade}</span>
                {isSelected && <CheckCircle className="size-4 text-accent" />}
              </div>
              <span className="text-[11px] block mt-1 line-clamp-1 opacity-80 font-normal">
                {item.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Grade Details Box */}
      <div className="border-border bg-card border rounded-xl p-5 sm:p-7 shadow-sm space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-1">
              <Activity className="size-3.5" />
              <span>Grade Analysis</span>
            </div>
            <h3 className="text-primary font-serif text-xl sm:text-2xl">
              {activeGrade.grade}: {activeGrade.subtitle}
            </h3>
          </div>
          <a
            href="#top"
            className="bg-[#B5894B] text-white hover:bg-[#9C733B] inline-flex h-9 items-center justify-center gap-1.5 rounded-md px-4 text-xs font-semibold transition-colors shrink-0 shadow-sm"
          >
            <span>Discuss Grade at Consult</span>
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">{activeGrade.desc}</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Symptoms Checklist */}
          <div className="bg-secondary/40 border border-border/60 p-4 rounded-lg space-y-2.5">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
              Typical Characteristics
            </h4>
            <ul className="space-y-2 text-xs text-foreground">
              {activeGrade.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="size-3.5 text-[#B5894B] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technique Box */}
          <div className="bg-secondary/40 border border-border/60 p-4 rounded-lg space-y-2.5 flex flex-col justify-center">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
              Recommended Surgical Technique
            </h4>
            <div className="p-3.5 bg-card border border-border/80 rounded-md">
              <span className="font-serif font-semibold text-sm sm:text-base text-primary block">
                {activeGrade.recommended}
              </span>
              <p className="text-xs text-muted-foreground mt-1">
                Customized by Dr. Sanjay based on individual tissue composition.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/60">
          <p>
            *Grade is officially confirmed during physical examination.
          </p>
          <a
            href="#top"
            className="text-accent hover:underline font-semibold inline-flex items-center gap-1 shrink-0"
          >
            <CalendarCheck className="size-3.5" />
            Book Consultation →
          </a>
        </div>
      </div>
    </Section>
  );
}
