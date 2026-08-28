import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/clinic";

export function WhatsAppButton({
  children = "Ask on WhatsApp",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-[#25D366] text-white hover:bg-[#20bd5a] border border-[#25D366] inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-4 text-xs sm:text-sm font-semibold tracking-wide shadow-sm transition-colors",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4 fill-white text-[#25D366]" />
      {children}
    </a>
  );
}
