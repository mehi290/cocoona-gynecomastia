import { useState } from "react";
import { Phone, MessageCircle, Menu, X, CalendarCheck } from "lucide-react";
import { CLINIC, WHATSAPP_URL } from "@/lib/clinic";

const NAV_LINKS = [
  { label: "Surgeon", href: "#surgeon" },
  { label: "Results", href: "#results" },
  { label: "Procedure", href: "#procedure" },
  { label: "Cost", href: "#cost" },
  { label: "FAQs", href: "#faq" },
  { label: "Location", href: "#clinic" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-border/70 bg-ink/90 backdrop-blur-md text-ink-foreground transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="rounded-md bg-white/95 p-1.5 border border-white/20 shadow-sm transition-transform group-hover:scale-105">
            <img
              src="/drsanjay logo.png"
              alt="Dr. Sanjay - Cocoona"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ink-foreground hover:text-[#B5894B] transition-colors py-1 font-bold text-xs sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-ink-foreground hover:text-[#B5894B] transition-colors px-2 py-1.5 font-bold"
          >
            <Phone className="size-4 text-[#B5894B]" />
            <span className="font-mono text-xs sm:text-sm font-bold text-ink-foreground">{CLINIC.phoneNumber}</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
          >
            <MessageCircle className="size-4 fill-[#25D366]" />
            <span className="font-bold text-xs sm:text-sm">WhatsApp</span>
          </a>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#B5894B] text-white px-3.5 py-1.5 text-xs sm:text-sm font-bold hover:bg-[#9C733B] transition-colors shadow-sm"
          >
            <CalendarCheck className="size-4" />
            <span className="font-bold text-xs sm:text-sm">Book Your Consultation</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink-muted hover:text-ink-foreground rounded-md"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-ink-border bg-ink/95 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink-foreground hover:text-[#B5894B] py-2 text-sm font-bold border-b border-ink-border/40"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#top"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-md bg-[#B5894B] text-white py-2.5 text-xs font-semibold hover:bg-[#9C733B]"
            >
              <CalendarCheck className="size-4" />
              Book Your Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-md bg-[#25D366] text-white py-2 text-xs font-semibold"
            >
              <MessageCircle className="size-4 fill-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
