import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, MessageSquare, MapPin, Navigation, ArrowLeft } from "lucide-react";
import { CLINIC, DIRECTIONS_URL } from "@/lib/clinic";
import { Header } from "@/components/landing/Header";

interface BookingData {
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
  message?: string;
}

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Cocoona Gynecomastia Clinic Dubai" },
      { name: "description", content: "Thank you for booking a consultation at Cocoona Clinic Dubai." },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      window.parent.postMessage({ type: "cocoona_lead" }, "*");
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cocoona_last_booking");
      if (stored) {
        const parsed = JSON.parse(stored);
        setBooking(parsed);

        // Fire GTM event on mount if valid booking exists
        if (typeof window !== "undefined") {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: "lp_form_submit" });
        }
      }
    } catch (err) {
      console.error("Error reading booking from localStorage:", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const whatsappMessage = booking
    ? `Hi Cocoona Clinic, I booked a consultation.\nName: ${booking.name}\nPhone: ${booking.phone}\nEmail: ${booking.email}\nTime: ${booking.preferredTime}`
    : "Hi Cocoona Clinic, I'd like to ask about my gynecomastia consultation.";

  const whatsappUrl = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 py-10 sm:py-16">
        <div className="max-w-lg w-full border border-border bg-card p-6 sm:p-8 rounded-xl shadow-xl space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            <ArrowLeft className="size-3.5" /> Back to Home Page
          </Link>

          {!booking ? (
            <div className="text-center py-6 space-y-4">
              <h1 className="text-primary font-serif text-2xl font-bold">No Active Booking Found</h1>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                We couldn't find a recent booking in your session. Please return to the main page to book your consultation.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md bg-[#B5894B] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#9C733B] transition-colors"
              >
                Book Your Consultation Now
              </Link>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-border/80 pb-4">
                <div className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 p-2.5 rounded-full shrink-0">
                  <CheckCircle2 className="size-7 sm:size-8" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                    Booking Confirmed
                  </span>
                  <h1 className="text-primary font-serif text-xl sm:text-2xl font-bold">Consultation Received</h1>
                </div>
              </div>

              {/* Summary Details */}
              <div className="bg-background/80 border border-border/70 p-4 rounded-lg text-xs sm:text-sm space-y-2">
                <h2 className="font-semibold text-primary text-xs sm:text-sm border-b border-border/40 pb-2">
                  Summary Details
                </h2>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-muted-foreground font-medium">Name:</span>
                  <span className="col-span-2 font-semibold text-foreground">{booking.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-muted-foreground font-medium">Phone:</span>
                  <span className="col-span-2 text-foreground font-mono">{booking.phone}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-muted-foreground font-medium">Email:</span>
                  <span className="col-span-2 text-foreground truncate">{booking.email}</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <span className="text-muted-foreground font-medium">Time Slot:</span>
                  <span className="col-span-2 text-[#B5894B] font-medium">{booking.preferredTime}</span>
                </div>
              </div>

              {/* What To Expect Next */}
              <div className="space-y-2 pt-1">
                <h2 className="text-xs font-semibold text-primary uppercase tracking-wider">
                  What to Expect Next
                </h2>
                <div className="grid gap-2 text-xs">
                  <div className="flex gap-2.5 items-start bg-secondary/30 p-2.5 rounded-md border border-border/40">
                    <span className="bg-[#B5894B] text-white size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-xs">Request Received</p>
                      <p className="text-muted-foreground text-[11px]">Logged in our clinic system.</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start bg-secondary/30 p-2.5 rounded-md border border-border/40">
                    <span className="bg-[#B5894B] text-white size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-xs">Coordinator Contact</p>
                      <p className="text-muted-foreground text-[11px]">We'll call to confirm your appointment time.</p>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-start bg-secondary/30 p-2.5 rounded-md border border-border/40">
                    <span className="bg-[#B5894B] text-white size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-xs">Discreet Consultation</p>
                      <p className="text-muted-foreground text-[11px]">Meet Dr. Sanjay at Al Wasl Road.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 h-11 w-full rounded-md font-semibold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <MessageSquare className="size-4 fill-white" />
                Send Details directly to WhatsApp
              </a>

              {/* Location & Directions */}
              <div className="border-t border-border/60 pt-3 text-xs text-muted-foreground space-y-1.5">
                <p className="font-medium text-foreground flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#B5894B] shrink-0" />
                  Villa 898, Raaji Street, Al Wasl Road, Dubai
                </p>
                <div className="pl-5 pt-0.5">
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B5894B] hover:underline font-semibold inline-flex items-center gap-1 text-xs"
                  >
                    <Navigation className="size-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
