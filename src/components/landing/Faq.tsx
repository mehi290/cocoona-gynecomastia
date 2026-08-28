import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading, Rule, Placeholder } from "./primitives";

const FAQS = [
  { q: "Where exactly are you located?", key: "LOCATION" },
  { q: "Is it glandular or fat in my case?", key: "TISSUE_TYPE" },
  { q: "Will it come back?", key: "RECURRENCE" },
  { q: "Will there be a visible scar?", key: "SCARRING" },
  { q: "How long before I can return to work?", key: "RETURN_TO_WORK" },
  { q: "How long before I can train again?", key: "RETURN_TO_TRAINING" },
  { q: "What aftercare do I get, and for how long?", key: "AFTERCARE" },
  { q: "Is my consultation private?", key: "PRIVACY" },
  { q: "Does insurance cover it?", key: "INSURANCE" },
  { q: "What if I am not a candidate?", key: "NOT_A_CANDIDATE" },
];

export function Faq() {
  return (
    <Section id="faq" tone="muted" ariaLabelledBy="faq-heading">
      <SectionHeading id="faq-heading">FAQs</SectionHeading>
      <Rule />

      <Accordion type="single" collapsible className="w-full">
        {FAQS.map((item, index) => (
          <AccordionItem key={item.key} value={`faq-${index}`}>
            <AccordionTrigger className="text-primary text-left font-serif text-base">
              {item.q}
            </AccordionTrigger>
            <AccordionContent>
              <Placeholder>[FAQ_ANSWER_{item.key}_PLACEHOLDER — clinician-approved copy]</Placeholder>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
