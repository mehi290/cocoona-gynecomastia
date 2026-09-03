import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Cocoona Centre for Aesthetic Transformation" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cocoona Centre for Aesthetic Transformation" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/drsanjay logo.png", type: "image/png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const PORTABLE_JS = `
(function() {
  // CONFIGURABLE ENDPOINT CONSTANT
  var FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycbzadbFo2P7AZbkONTe5tqbFAA1I31k5urMdUf6bt3u5wIAPjrffjlt7D_653fMKYESX8w/exec";

  function isReactActive() {
    return !!(window.__REACT_HYDRATED__ || document.documentElement.hasAttribute("data-react-hydrated"));
  }

  function generateRefId() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var res = "";
    for (var i = 0; i < 6; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return "COC-" + res;
  }

  function handleFormSubmit(e) {
    if (isReactActive()) return;

    var form = e.target.closest("form#cq-form, form");
    if (!form) return;

    var isTarget = form.id === "cq-form" || form.querySelector('input[name="name"]');
    if (!isTarget) return;

    e.preventDefault();

    var formData = new FormData(form);
    var name = formData.get("name") || "";
    var phone = formData.get("phone") || "";
    var email = formData.get("email") || "";
    var message = formData.get("message") || "";
    var timeInput = form.querySelector('input[name="preferredTime"]');
    var preferredTime = (timeInput && timeInput.value) ? timeInput.value : "As soon as available";

    var refId = generateRefId();

    var booking = {
      refId: refId,
      name: name,
      phone: phone,
      email: email,
      preferredTime: preferredTime,
      message: message,
      createdAt: new Date().toLocaleString()
    };

    try {
      var existing = JSON.parse(localStorage.getItem("cocoona_bookings") || "[]");
      localStorage.setItem("cocoona_bookings", JSON.stringify([booking].concat(existing)));
      localStorage.setItem("cocoona_last_booking", JSON.stringify(booking));
    } catch (err) {}

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lp_form_submit" });

    try {
      fetch(FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ref: refId,
          name: name,
          phone: phone,
          email: email,
          preferredTime: preferredTime,
          message: message,
          page: window.location.href
        })
      }).catch(function() {});
    } catch (err) {}

    var refEl = document.getElementById("cq-summary-ref");
    if (refEl) refEl.textContent = refId;

    var nameEl = document.getElementById("cq-summary-name");
    if (nameEl) nameEl.textContent = name;

    var phoneEl = document.getElementById("cq-summary-phone");
    if (phoneEl) phoneEl.textContent = phone;

    var emailEl = document.getElementById("cq-summary-email");
    if (emailEl) emailEl.textContent = email;

    var slotEl = document.getElementById("cq-summary-slot");
    if (slotEl) slotEl.textContent = preferredTime;

    var waBtn = document.getElementById("cq-whatsapp-btn");
    if (waBtn) {
      var msg = "Hi Cocoona Clinic, I booked a consultation (Ref: " + refId + ").\\nName: " + name + "\\nPhone: " + phone + "\\nEmail: " + email + "\\nTime: " + preferredTime;
      waBtn.href = "https://wa.me/971568655598?text=" + encodeURIComponent(msg);
    }

    var formContainer = document.getElementById("cq-form-container");
    if (formContainer) {
      formContainer.setAttribute("hidden", "");
      formContainer.classList.add("hidden");
    }

    var formEl = document.getElementById("cq-form") || form;
    if (formEl) {
      formEl.setAttribute("hidden", "");
      formEl.classList.add("hidden");
      formEl.style.display = "none";
    }

    var tyEl = document.getElementById("cq-thankyou");
    if (tyEl) {
      tyEl.removeAttribute("hidden");
      tyEl.classList.remove("hidden");
      tyEl.style.display = "block";
    }
  }

  function handleFaqClick(e) {
    if (isReactActive()) return;

    var btn = e.target.closest(".faq-trigger, [aria-controls^='faq-answer-']");
    if (!btn) return;

    var targetId = btn.getAttribute("aria-controls");
    if (!targetId) return;

    var panel = document.getElementById(targetId);
    if (!panel) return;

    var isExpanded = btn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("data-state", "closed");
      panel.setAttribute("hidden", "");
      panel.setAttribute("data-state", "closed");
      var svg = btn.querySelector("svg");
      if (svg) svg.setAttribute("data-state", "closed");
    } else {
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("data-state", "open");
      panel.removeAttribute("hidden");
      panel.setAttribute("data-state", "open");
      var svg = btn.querySelector("svg");
      if (svg) svg.setAttribute("data-state", "open");
    }
  }

  document.addEventListener("submit", handleFormSubmit);
  document.addEventListener("click", handleFaqClick);
})();
`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script
          id="lp-portable"
          dangerouslySetInnerHTML={{ __html: PORTABLE_JS }}
        />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__REACT_HYDRATED__ = true;
      document.documentElement.setAttribute("data-react-hydrated", "true");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

