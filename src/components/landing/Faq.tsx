import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading, Rule } from "./primitives";

const FAQS = [
  {
    q: "Where exactly are you located?",
    key: "LOCATION",
    a: "Cocoona Centre for Aesthetic Transformation is located at Villa 898, Raaji Street, Al Wasl Road, Jumeirah 2, Dubai, UAE. We feature a dedicated private entrance and complimentary valet parking to ensure complete discretion for all patients.",
  },
  {
    q: "Is it glandular or fat in my case?",
    key: "TISSUE_TYPE",
    a: "True gynecomastia involves firm glandular breast tissue, often combined with excess adipose (fatty) tissue. Pseudogynecomastia consists primarily of fat. During your private consultation, Dr. Sanjay conducts a physical examination to identify your exact tissue composition and design a custom treatment plan (excision, liposuction, or a combined procedure).",
  },
  {
    q: "Will it come back?",
    key: "RECURRENCE",
    a: "Surgically removed glandular tissue cannot grow back because the gland cells are permanently excised. Results are long-lasting provided you maintain a stable weight and avoid anabolic steroids or medications that alter hormone levels.",
  },
  {
    q: "Will there be a visible scar?",
    key: "SCARRING",
    a: "Dr. Sanjay utilizes discreet micro-incisions strategically positioned along the natural perimeter of the lower areola (periareolar incision) and hidden within natural contour folds. Over time, these incisions heal into barely noticeable fine lines.",
  },
  {
    q: "How long before I can return to work?",
    key: "RETURN_TO_WORK",
    a: "Most patients return to light desk work within 3 to 5 days following surgery. If your line of work involves manual labor or strenuous physical exertion, we advise taking 7 to 10 days of rest.",
  },
  {
    q: "How long before I can train again?",
    key: "RETURN_TO_TRAINING",
    a: "Light walking is encouraged immediately after surgery. Light cardio can be resumed after 2 weeks, while chest weightlifting, heavy training, and high-impact sports can typically resume after 4 to 6 weeks with surgeon clearance.",
  },
  {
    q: "What aftercare do I get, and for how long?",
    key: "AFTERCARE",
    a: "Comprehensive post-op care is included in your surgical fee. You will be fitted with a custom medical compression garment to wear for 4 to 6 weeks to support healing and skin retraction. Scheduled follow-up appointments take place at 1 week, 1 month, 3 months, and 6 months.",
  },
  {
    q: "Is my consultation private?",
    key: "PRIVACY",
    a: "Yes, 100% private and confidential. Our clinic features private consultation suites, confidential medical records handling, and a discrete private entrance to ensure your anonymity throughout your visit.",
  },
  {
    q: "Does insurance cover it?",
    key: "INSURANCE",
    a: "Gynecomastia surgery is generally classified as an aesthetic or elective procedure by UAE insurance providers. Our patient care specialists offer flexible payment options and zero-interest monthly installment plans.",
  },
  {
    q: "What if I am not a candidate?",
    key: "NOT_A_CANDIDATE",
    a: "If surgery is not recommended (for instance, if symptoms stem from temporary hormonal fluctuations or medical factors), Dr. Sanjay will provide candid advice on non-surgical alternatives, lifestyle adjustments, or referral to appropriate medical specialists.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" tone="muted" ariaLabelledBy="faq-heading">
      <SectionHeading id="faq-heading">FAQs</SectionHeading>
      <Rule />

      <div className="w-full space-y-3">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.key}
              className="border-border bg-card rounded-lg border overflow-hidden transition-colors"
            >
              <button
                type="button"
                className="faq-trigger flex w-full items-center justify-between p-4 sm:p-5 text-left font-serif text-base text-primary font-medium transition-colors hover:text-accent focus:outline-none cursor-pointer"
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls={`faq-answer-${index}`}
                data-state={isOpen ? "open" : "closed"}
                onClick={() => toggleFaq(index)}
              >
                <span className="pr-4">{item.q}</span>
                <ChevronDown
                  className={`size-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  data-state={isOpen ? "open" : "closed"}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40"
                hidden={!isOpen}
                data-state={isOpen ? "open" : "closed"}
              >
                <p className="pt-3">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

