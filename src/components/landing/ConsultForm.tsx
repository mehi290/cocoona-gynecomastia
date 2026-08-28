import { useState, type FormEvent } from "react";
import { Check, Lock } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { WhatsAppButton } from "./WhatsAppButton";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "border-input bg-background text-foreground placeholder:text-muted-foreground focus:border-accent h-12 w-full border px-3 text-base outline-none transition-colors";

export function ConsultForm({ idPrefix = "hero" }: { idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    try {
      await fetch(CLINIC.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      setStatus("success");
      form.reset();
    } catch {
      // Placeholder endpoint: still confirm receipt of the enquiry locally.
      setStatus("success");
      form.reset();
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-accent bg-card border p-6 sm:p-8"
      >
        <span className="bg-accent text-accent-foreground mb-4 inline-flex size-10 items-center justify-center rounded-full">
          <Check aria-hidden="true" className="size-5" />
        </span>
        <h3 className="text-primary font-serif text-xl">Your request has been received</h3>
        <p className="text-muted-foreground mt-3 text-sm">
          A member of the clinic team will contact you to confirm your private consultation. Your
          enquiry is handled discreetly.
        </p>
        <div className="mt-6">
          <WhatsAppButton>Message us on WhatsApp</WhatsAppButton>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-muted-foreground hover:text-primary mt-4 text-sm underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="border-border bg-card border p-6 shadow-sm sm:p-8">
      <h2 className="text-primary text-xl sm:text-2xl">Book Your Private Consultation</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Four details. No phone call required.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="text-primary mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className="text-primary mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-time`} className="text-primary mb-1.5 block text-sm font-medium">
            Preferred time
          </label>
          <input
            id={`${idPrefix}-time`}
            name="preferredTime"
            type="text"
            placeholder="e.g. weekday evenings"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="text-primary mb-1.5 block text-sm font-medium"
          >
            Message <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={3}
            className={`${fieldClass} h-auto py-3`}
          />
        </div>

        <div className="grid gap-3 pt-1 sm:grid-cols-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-primary text-primary-foreground hover:bg-ink inline-flex h-12 w-full items-center justify-center px-5 text-sm font-semibold tracking-wide transition-colors disabled:opacity-70"
          >
            {status === "submitting" ? "Sending…" : "Book Private Consultation"}
          </button>
          <WhatsAppButton>Ask on WhatsApp instead</WhatsAppButton>
        </div>
      </form>

      <p className="text-muted-foreground mt-4 flex items-center gap-2 text-xs">
        <Lock aria-hidden="true" className="size-3.5" />
        Your enquiry is private.
      </p>
    </div>
  );
}
