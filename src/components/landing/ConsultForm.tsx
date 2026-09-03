import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Lock,
  Calendar,
  Clock,
  X,
  MessageSquare,
  RefreshCw,
  MapPin,
  Navigation,
} from "lucide-react";
import { CLINIC, DIRECTIONS_URL } from "@/lib/clinic";
import { WhatsAppButton } from "./WhatsAppButton";

interface BookingData {
  refId: string;
  name: string;
  phone: string;
  email: string;
  preferredTime: string;
  message: string;
  createdAt: string;
}

const TIME_SLOTS = [
  "Morning (11:00 AM - 2:00 PM)",
  "Afternoon (2:00 PM - 6:00 PM)",
  "Evening (6:00 PM - 10:00 PM)",
];

const fieldClass =
  "border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-accent h-10 w-full border px-3 text-sm outline-none transition-colors rounded-md";

export function ConsultForm({ idPrefix = "hero" }: { idPrefix?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferredTime, setPreferredTime] = useState("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerDate, setPickerDate] = useState("");
  const [pickerSlot, setPickerSlot] = useState(TIME_SLOTS[0]);
  const [bookingResult, setBookingResult] = useState<BookingData | null>(null);

  // Generate Ref ID: COC- plus 6 uppercase alphanumerics
  function generateRefId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `COC-${result}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";
    const time = preferredTime || "As soon as available";

    setIsSubmitting(true);

    const refId = generateRefId();

    const newBooking: BookingData = {
      refId,
      name,
      phone,
      email,
      preferredTime: time,
      message,
      createdAt: new Date().toLocaleString(),
    };

    // Store in localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("cocoona_bookings") || "[]");
      localStorage.setItem("cocoona_bookings", JSON.stringify([newBooking, ...existing]));
      localStorage.setItem("cocoona_last_booking", JSON.stringify(newBooking));
    } catch {
      // Ignore localStorage errors
    }

    // Push GTM event to dataLayer
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "lp_form_submit" });
    }

    // POST endpoint to Google Apps Script
    const FORM_ENDPOINT = CLINIC.formEndpoint;
    try {
      fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ref: refId,
          name,
          phone,
          email,
          preferredTime: time,
          message,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      }).catch(() => {});
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 300));

    setBookingResult(newBooking);
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  function handleConfirmPicker() {
    const formattedDate = pickerDate
      ? new Date(pickerDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      : "Preferred date";
    setPreferredTime(`${formattedDate} · ${pickerSlot.split(" ")[0]}`);
    setIsPickerOpen(false);
  }

  const whatsappMessage = bookingResult
    ? `Hi Cocoona Clinic, I booked a consultation (Ref: ${bookingResult.refId}).\nName: ${bookingResult.name}\nPhone: ${bookingResult.phone}\nEmail: ${bookingResult.email}\nTime: ${bookingResult.preferredTime}`
    : "Hi Cocoona Clinic, I'd like to ask about gynecomastia consultation.";

  const whatsappUrl = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="border-border bg-card border p-4 sm:p-6 shadow-sm rounded-lg relative">
      {/* Consultation Form Panel */}
      <div id="cq-form-container" className={isSubmitted ? "hidden" : ""}>
        <h2 className="text-primary text-lg sm:text-xl font-serif">
          Book Your Private Consultation
        </h2>
        <p className="text-muted-foreground mt-0.5 text-xs">
          Fill details below. Instant confirmation.
        </p>

        <form
          id="cq-form"
          onSubmit={handleSubmit}
          className="mt-4 space-y-3"
          hidden={isSubmitted}
        >
          {/* Row 1: Name & Phone */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-name`}
                className="text-primary mb-1 block text-xs font-medium"
              >
                Name
              </label>
              <input
                id={`${idPrefix}-name`}
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your Name"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-phone`}
                className="text-primary mb-1 block text-xs font-medium"
              >
                Phone
              </label>
              <input
                id={`${idPrefix}-phone`}
                name="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="+971 56 865 5598"
                className={fieldClass}
              />
            </div>
          </div>

          {/* Row 2: Email & Preferred Time */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`${idPrefix}-email`}
                className="text-primary mb-1 block text-xs font-medium"
              >
                Email
              </label>
              <input
                id={`${idPrefix}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor={`${idPrefix}-time`}
                className="text-primary mb-1 block text-xs font-medium"
              >
                Preferred date & time
              </label>
              <div className="relative">
                <input
                  id={`${idPrefix}-time`}
                  name="preferredTime"
                  type="text"
                  readOnly
                  value={preferredTime}
                  placeholder="Click to pick date"
                  onClick={() => setIsPickerOpen(true)}
                  className={`${fieldClass} cursor-pointer pr-9 truncate text-xs`}
                />
                <button
                  type="button"
                  onClick={() => setIsPickerOpen(true)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary cursor-pointer"
                  aria-label="Open date and time picker"
                >
                  <Calendar className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Row 3: Message */}
          <div>
            <label
              htmlFor={`${idPrefix}-message`}
              className="text-primary mb-1 block text-xs font-medium"
            >
              Message <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              rows={2}
              placeholder="Any specific questions or details..."
              className={`${fieldClass} h-auto py-2 text-xs`}
            />
          </div>

          {/* Row 4: Submit buttons */}
          <div className="grid gap-2.5 pt-1 sm:grid-cols-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-ink inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-xs sm:text-sm font-semibold tracking-wide transition-colors disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? "Processing…" : "Book Consultation"}
            </button>
            <WhatsAppButton>Ask on WhatsApp</WhatsAppButton>
          </div>
        </form>

        <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-[11px]">
          <Lock aria-hidden="true" className="size-3" />
          Your enquiry is private and encrypted.
        </p>
      </div>

      {/* Thank You Panel (In-Page State inside same Hero Card) */}
      <div
        id="cq-thankyou"
        hidden={!isSubmitted}
        className={`${!isSubmitted ? "hidden" : ""} border-accent/40 bg-card p-4 sm:p-5 rounded-lg space-y-4 text-foreground animate-in fade-in duration-300`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border/80 pb-3">
          <div className="bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 p-2 rounded-full shrink-0">
            <CheckCircle2 className="size-6 sm:size-7" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              Booking Confirmed
            </span>
            <h3 className="text-primary font-serif text-lg sm:text-xl">Consultation Received</h3>
          </div>
        </div>

        {/* Ref ID Banner */}
        <div className="bg-secondary/70 border border-border/80 p-3 rounded-md flex items-center justify-between">
          <div>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Booking Reference
            </p>
            <p id="cq-summary-ref" className="font-mono text-base font-bold text-primary">
              {bookingResult?.refId || "COC-XXXXXX"}
            </p>
          </div>
          <span className="bg-accent/15 text-accent text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-accent/20">
            Request Logged
          </span>
        </div>

        {/* Booking Summary */}
        <div className="bg-background/80 border border-border/70 p-3 rounded-md text-xs space-y-1.5">
          <h4 className="font-semibold text-primary text-xs border-b border-border/40 pb-1">
            Summary Details
          </h4>
          <div className="grid grid-cols-3 gap-1">
            <span className="text-muted-foreground font-medium">Name:</span>
            <span id="cq-summary-name" className="col-span-2 font-semibold text-foreground">
              {bookingResult?.name || "-"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <span className="text-muted-foreground font-medium">Phone:</span>
            <span id="cq-summary-phone" className="col-span-2 text-foreground font-mono">
              {bookingResult?.phone || "-"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <span className="text-muted-foreground font-medium">Email:</span>
            <span id="cq-summary-email" className="col-span-2 text-foreground truncate">
              {bookingResult?.email || "-"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <span className="text-muted-foreground font-medium">Time Slot:</span>
            <span id="cq-summary-slot" className="col-span-2 text-accent font-medium">
              {bookingResult?.preferredTime || "-"}
            </span>
          </div>
        </div>

        {/* 3-Step Timeline */}
        <div className="space-y-1.5 pt-1">
          <h4 className="text-[11px] font-semibold text-primary uppercase tracking-wider">
            What to Expect Next
          </h4>
          <div className="grid gap-1.5 text-xs">
            <div className="flex gap-2 items-start bg-secondary/30 p-2 rounded-md border border-border/40">
              <span className="bg-accent text-accent-foreground size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                1
              </span>
              <div>
                <p className="font-semibold text-foreground text-[11px]">Request Received</p>
                <p className="text-muted-foreground text-[10px]">Logged in our clinic system.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start bg-secondary/30 p-2 rounded-md border border-border/40">
              <span className="bg-accent text-accent-foreground size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                2
              </span>
              <div>
                <p className="font-semibold text-foreground text-[11px]">Coordinator Contact</p>
                <p className="text-muted-foreground text-[10px]">We'll call to confirm your appointment time.</p>
              </div>
            </div>
            <div className="flex gap-2 items-start bg-secondary/30 p-2 rounded-md border border-border/40">
              <span className="bg-accent text-accent-foreground size-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                3
              </span>
              <div>
                <p className="font-semibold text-foreground text-[11px]">Discreet Consultation</p>
                <p className="text-muted-foreground text-[10px]">Meet Dr. Sanjay Parashar at Al Wasl Road.</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="pt-1">
          <a
            id="cq-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 h-10 w-full rounded-md font-semibold text-xs transition-colors"
          >
            <MessageSquare className="size-4 fill-white" />
            Send Details directly to WhatsApp
          </a>
        </div>

        {/* Clinic Location & Parking Details */}
        <div className="border-t border-border/60 pt-3 text-[11px] text-muted-foreground space-y-1">
          <p className="font-medium text-foreground flex items-center gap-1.5">
            <MapPin className="size-3.5 text-accent shrink-0" />
            Villa 898, Raaji Street, Al Wasl Road, Dubai
          </p>
          <p className="pl-5 text-[10px] text-muted-foreground">
            Discreet private entrance & free valet parking available.
          </p>
          <div className="pl-5 pt-0.5">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold inline-flex items-center gap-1 text-[11px]"
            >
              <Navigation className="size-3" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Re-submit Button */}
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setBookingResult(null);
            setPreferredTime("");
          }}
          className="border border-input text-muted-foreground hover:text-primary w-full h-8 rounded-md text-[11px] font-medium transition-colors flex items-center justify-center gap-1 cursor-pointer"
        >
          <RefreshCw className="size-3" />
          Submit Another Booking Request
        </button>
      </div>

      {/* Date & Time Picker Popup Modal */}
      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-200">
          <div className="bg-background text-foreground border-border w-full max-w-sm rounded-lg border p-5 shadow-xl space-y-4 relative">
            <div className="flex items-center justify-between border-b pb-2.5">
              <div className="flex items-center gap-2">
                <Calendar className="text-accent size-4" />
                <h3 className="text-primary font-semibold text-base">Choose Date & Time</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPickerOpen(false)}
                className="text-muted-foreground hover:text-primary p-1 rounded-md cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-primary block font-medium mb-1">
                  Select Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={pickerDate}
                  onChange={(e) => setPickerDate(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className="text-primary block font-medium mb-1 flex items-center gap-1">
                  <Clock className="size-3.5 text-accent" />
                  Select Preferred Time Slot
                </label>
                <div className="grid gap-1.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setPickerSlot(slot)}
                      className={`border px-3 py-2 text-left text-xs transition-colors rounded-md cursor-pointer ${
                        pickerSlot === slot
                          ? "border-accent bg-accent/10 text-primary font-semibold"
                          : "border-input bg-card text-foreground hover:bg-accent/5"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={handleConfirmPicker}
                className="bg-primary text-primary-foreground hover:bg-ink w-full h-10 rounded-md text-xs font-semibold transition-colors cursor-pointer"
              >
                Apply Selection
              </button>
              <button
                type="button"
                onClick={() => setIsPickerOpen(false)}
                className="border border-input text-foreground hover:bg-secondary w-full h-10 rounded-md text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
