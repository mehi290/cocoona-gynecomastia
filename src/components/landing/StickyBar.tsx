import { Phone, MessageCircle } from "lucide-react";
import { CLINIC, WHATSAPP_URL } from "@/lib/clinic";

export function StickyBar() {
  return (
    <>
      {/* Floating Call Button - Bottom Left */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-50">
        <a
          href={CLINIC.phoneHref}
          aria-label="Call Clinic"
          title="Call Clinic"
          className="flex size-13 sm:size-14 items-center justify-center rounded-full bg-[#008000] text-white shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-2xl active:scale-95"
        >
          <Phone className="size-6 sm:size-7 fill-white text-white" />
        </a>
      </div>

      {/* Floating WhatsApp Button - Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="flex size-13 sm:size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-200 hover:scale-110 hover:shadow-2xl active:scale-95"
        >
          <MessageCircle className="size-7 sm:size-8 fill-white text-[#25D366]" />
        </a>
      </div>
    </>
  );
}
