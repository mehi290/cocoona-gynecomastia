export const CLINIC = {
  name: "Cocoona Centre for Aesthetic Transformation",
  addressLine1: "Villa 898, Raaji Street, Al Wasl Road",
  addressLine2: "Dubai, United Arab Emirates",
  hours: "Open daily, 11:00 to 22:00",
  founded: "Founded 2008",
  rating: "4.3",
  reviewCount: "475",
  phoneNumber: "+971 56 865 5598",
  phoneHref: "tel:+971568655598",
  whatsappNumber: "971568655598",
  formEndpoint: "[FORM_ENDPOINT_PLACEHOLDER]",
  mapsQuery: "Cocoona Centre for Aesthetic Transformation, Al Wasl Road, Dubai",
} as const;

export const WHATSAPP_MESSAGE = "Hi, I'd like to ask about gynecomastia surgery.";

export const WHATSAPP_URL = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  CLINIC.mapsQuery,
)}`;

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  CLINIC.mapsQuery,
)}&output=embed`;
