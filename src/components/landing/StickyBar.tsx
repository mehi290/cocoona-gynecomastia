import { MessageCircle, CalendarCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/clinic";

export function StickyBar() {
  return (
    <div className="border-ink-border bg-ink fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t p-2 md:hidden">
      <a
        href="#top"
        className="bg-accent text-accent-foreground inline-flex h-12 items-center justify-center gap-2 px-2 text-xs font-semibold whitespace-nowrap sm:text-sm"
      >
        <CalendarCheck aria-hidden="true" className="size-4" />
        Book Consultation
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="border-ink-muted text-ink-foreground inline-flex h-12 items-center justify-center gap-2 border px-3 text-sm font-semibold"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        WhatsApp
      </a>
    </div>
  );
}
