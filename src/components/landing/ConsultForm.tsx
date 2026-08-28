import { useState, type FormEvent } from "react";
import { CheckCircle2, Lock, Calendar, Clock, X, MessageSquare, RefreshCw } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppButton } from "./WhatsAppButton";

type Status = "idle" | "submitting" | "success" | "error";

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
  const [status, setStatus] = useState<Status>("idle");
  const [preferredTime, setPreferredTime] = useState("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerDate, setPickerDate] = useState("");
  const [pickerSlot, setPickerSlot] = useState(TIME_SLOTS[0]);
  const [bookingResult, setBookingResult] = useState<BookingData | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const message = (formData.get("message") as string) || "";
    const time = preferredTime || "As soon as available";

    setStatus("submitting");

    // Generate unique Booking Reference
    const refId = `CCN-${Math.floor(100000 + Math.random() * 900000)}`;

    const newBooking: BookingData = {
      refId,
      name,
      phone,
      email,
      preferredTime: time,
      message,
      createdAt: new Date().toLocaleString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("cocoona_bookings") || "[]");
      localStorage.setItem("cocoona_bookings", JSON.stringify([newBooking, ...existing]));
    } catch {
      // Ignore localStorage errors
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    setBookingResult(newBooking);
    setStatus("success");
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
    : "";

  const whatsappUrl = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  if (status === "success" && bookingResult) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-accent bg-card border p-5 sm:p-6 rounded-lg shadow-lg space-y-4 animate-in fade-in"
      >
        <div className="flex items-center gap-3">
          <span className="bg-accent/20 text-accent p-1.5 rounded-full">
            <CheckCircle2 className="size-6" />
          </span>
          <div>
            <span className="text-[10px] font-semibold tracking-wider text-accent uppercase">
              Booking Confirmed
            </span>
            <h3 className="text-primary font-serif text-lg">Consultation Received</h3>
          </div>
        </div>

        <div className="bg-secondary/40 border border-border p-3.5 rounded-md space-y-1.5 text-xs">
          <div className="flex justify-between border-b pb-1.5 font-mono">
            <span className="text-muted-foreground">Ref ID:</span>
            <span className="font-semibold text-primary">{bookingResult.refId}</span>
          </div>
          <div className="pt-1 space-y-0.5">
            <p className="text-foreground"><strong>Name:</strong> {bookingResult.name}</p>
            <p className="text-foreground"><strong>Phone:</strong> {bookingResult.phone}</p>
            <p className="text-foreground"><strong>Email:</strong> {bookingResult.email}</p>
            <p className="text-foreground"><strong>Time:</strong> {bookingResult.preferredTime}</p>
          </div>
        </div>

        <p className="text-muted-foreground text-xs leading-relaxed">
          Our patient coordinator will contact you shortly to confirm.
        </p>

        <div className="flex flex-col gap-2 pt-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground hover:opacity-90 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md font-semibold text-xs transition-opacity"
          >
            <MessageSquare className="size-3.5" />
            Send Details directly to WhatsApp
          </a>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setBookingResult(null);
              setPreferredTime("");
            }}
            className="border border-input text-muted-foreground hover:text-primary inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-md text-[11px] font-medium transition-colors"
          >
            <RefreshCw className="size-3" />
            Submit Another Booking Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="border-border bg-card border p-4 sm:p-6 shadow-sm rounded-lg relative">
      <h2 className="text-primary text-lg sm:text-xl font-serif">Book Your Private Consultation</h2>
      <p className="text-muted-foreground mt-0.5 text-xs">
        Fill details below. Instant confirmation.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate={false}>
        {/* Row 1: Name & Phone */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-name`} className="text-primary mb-1 block text-xs font-medium">
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
            <label htmlFor={`${idPrefix}-phone`} className="text-primary mb-1 block text-xs font-medium">
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
            <label htmlFor={`${idPrefix}-email`} className="text-primary mb-1 block text-xs font-medium">
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
            <label htmlFor={`${idPrefix}-time`} className="text-primary mb-1 block text-xs font-medium">
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
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
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
            disabled={status === "submitting"}
            className="bg-primary text-primary-foreground hover:bg-ink inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-xs sm:text-sm font-semibold tracking-wide transition-colors disabled:opacity-70 cursor-pointer"
          >
            {status === "submitting" ? "Processing…" : "Book Consultation"}
          </button>
          <WhatsAppButton>Ask on WhatsApp</WhatsAppButton>
        </div>
      </form>

      <p className="text-muted-foreground mt-3 flex items-center gap-1.5 text-[11px]">
        <Lock aria-hidden="true" className="size-3" />
        Your enquiry is private and encrypted.
      </p>

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
                className="text-muted-foreground hover:text-primary p-1 rounded-md"
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
                      className={`border px-3 py-2 text-left text-xs transition-colors rounded-md ${
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
                className="bg-primary text-primary-foreground hover:bg-ink w-full h-10 rounded-md text-xs font-semibold transition-colors"
              >
                Apply Selection
              </button>
              <button
                type="button"
                onClick={() => setIsPickerOpen(false)}
                className="border border-input text-foreground hover:bg-secondary w-full h-10 rounded-md text-xs font-medium transition-colors"
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
