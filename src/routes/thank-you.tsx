import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, MessageSquare, MapPin, Navigation, ArrowLeft } from "lucide-react";
import { CLINIC, DIRECTIONS_URL } from "@/lib/clinic";

interface BookingData {
  refId: string;
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

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cocoona_last_booking");
      if (stored) {
        setBooking(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const whatsappMessage = booking
    ? `Hi Cocoona Clinic, I booked a consultation (Ref: ${booking.refId}).\nName: ${booking.name}\nPhone: ${booking.phone}\nEmail: ${booking.email}\nTime: ${booking.preferredTime}`
    : "Hi Cocoona Clinic, I'd like to ask about my gynecomastia consultation.";

  const whatsappUrl = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 py-12">
      <div className="max-w-xl w-full border border-border bg-card p-6 sm:p-8 rounded-xl shadow-xl space-y-6">
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="size-3.5" /> Back to Home Page
        </Link>

        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 p-3 rounded-full shrink-0">
            <CheckCircle2 className="size-8" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Booking Confirmed
            </span>
            <h1 className="text-primary font-serif text-2xl sm:text-3xl">Consultation Received</h1>
          </div>
        </div>

        {booking && (
          <>
            <div className="bg-secondary/70 border border-border p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  Booking Reference
                </p>
                <p className="font-mono text-lg font-bold text-primary">{booking.refId}</p>
              </div>
              <span className="bg-accent/15 text-accent text-xs font-semibold px-3 py-1 rounded-full border border-accent/20">
                Request Logged
              </span>
            </div>

            <div className="bg-background border border-border/70 p-4 rounded-lg text-xs sm:text-sm space-y-2">
              <h2 className="font-semibold text-primary border-b border-border/40 pb-2">
                Summary Details
              </h2>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Time Slot:</strong> {booking.preferredTime}</p>
            </div>
          </>
        )}

        <div className="space-y-3">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-wider">
            What Happens Next
          </h2>
          <div className="grid gap-2 text-xs">
            <div className="p-3 bg-secondary/30 rounded-md border border-border/40">
              <p className="font-semibold">1. Request Received</p>
              <p className="text-muted-foreground text-xs">Logged into our patient coordinator system.</p>
            </div>
            <div className="p-3 bg-secondary/30 rounded-md border border-border/40">
              <p className="font-semibold">2. Patient Coordinator Call</p>
              <p className="text-muted-foreground text-xs">We will contact you shortly to confirm your appointment time.</p>
            </div>
            <div className="p-3 bg-secondary/30 rounded-md border border-border/40">
              <p className="font-semibold">3. Discreet Consultation</p>
              <p className="text-muted-foreground text-xs">Meet Dr. Sanjay for your private assessment.</p>
            </div>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 h-11 w-full rounded-md font-semibold text-sm transition-colors"
        >
          <MessageSquare className="size-4 fill-white" />
          Send Details directly to WhatsApp
        </a>

        <div className="border-t border-border pt-4 text-xs text-muted-foreground space-y-1">
          <p className="font-medium text-foreground flex items-center gap-1.5">
            <MapPin className="size-4 text-accent shrink-0" />
            Villa 898, Raaji Street, Al Wasl Road, Dubai
          </p>
          <p className="pl-5 text-muted-foreground">
            Discreet private entrance & complimentary valet parking available.
          </p>
          <div className="pl-5 pt-1">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold inline-flex items-center gap-1"
            >
              <Navigation className="size-3" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
