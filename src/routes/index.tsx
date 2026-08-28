import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/landing/Hero";
import { Surgeon } from "@/components/landing/Surgeon";
import { Clinic } from "@/components/landing/Clinic";
import { Reviews } from "@/components/landing/Reviews";
import { Glandular } from "@/components/landing/Glandular";
import { Procedure } from "@/components/landing/Procedure";
import { Aftercare } from "@/components/landing/Aftercare";
import { Cost } from "@/components/landing/Cost";
import { Suitability } from "@/components/landing/Suitability";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { StickyBar } from "@/components/landing/StickyBar";

const TITLE = "Gynecomastia Clinic Dubai | Dr Sanjay Parashar | Cocoona";
const DESCRIPTION =
  "Gynecomastia surgery in Dubai with a consultant plastic surgeon. Al Wasl Road day surgery centre. Free private consultation, discreet care.";

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "#clinic",
      name: "Cocoona Centre for Aesthetic Transformation",
      description: DESCRIPTION,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Villa 898, Raaji Street, Al Wasl Road",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "11:00",
          closes: "22:00",
        },
      ],
      foundingDate: "2008",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.3",
        reviewCount: "475",
      },
      medicalSpecialty: "PlasticSurgery",
    },
    {
      "@type": "Physician",
      "@id": "#physician",
      name: "Dr. Sanjay Parashar",
      jobTitle: "Consultant Plastic Surgeon",
      medicalSpecialty: "PlasticSurgery",
      worksFor: { "@id": "#clinic" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Villa 898, Raaji Street, Al Wasl Road",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(SCHEMA),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <main>
      <Hero />
      <Surgeon />
      <Clinic />
      <Reviews />
      <Glandular />
      <Procedure />
      <Aftercare />
      <Cost />
      <Suitability />
      <Faq />
      <FinalCta />
      <StickyBar />
    </main>
  );
}
