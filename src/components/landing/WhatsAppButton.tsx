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
        "border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex h-12 w-full items-center justify-center gap-2 border px-5 text-sm font-semibold tracking-wide transition-colors",
        className,
      )}
    >
      <MessageCircle aria-hidden="true" className="size-4" />
      {children}
    </a>
  );
}
