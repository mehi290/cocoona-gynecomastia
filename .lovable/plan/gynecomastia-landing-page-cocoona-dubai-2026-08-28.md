# Gynecomastia Landing Page — Cocoona Dubai

A single conversion-focused page for Google Search traffic. One goal: book a free private consultation. Serious, clinical, masculine — not a beauty clinic.

## Confirmed facts to use

- Clinic: Cocoona Centre for Aesthetic Transformation, Villa 898, Raaji Street – Al Wasl Road, Dubai
- Hours: 11:00–22:00
- Rating: 4.3 from 475 Google reviews
- Founded 2008
- Phone, WhatsApp number, form endpoint: bracketed placeholders
- Years in practice, follow-up intervals, testimonials, FAQ answers: bracketed placeholders (not invented)

## Design

- Palette: deep charcoal-navy, warm off-white, single muted-gold accent. No pink, no pastels.
- Type: confident serif headings (e.g. Fraunces/Spectral) + clean sans body, generous line height.
- Mobile-first, verified at 375px. Sticky bottom bar on mobile: Book Consultation + WhatsApp, equal weight.
- All colors as semantic tokens in `src/styles.css` — no hardcoded color classes.

## Sections (10, in order)

1. `#top` Hero — H1, sub, four check bullets, trust bar (4.3 · 475 reviews · Al Wasl Road · Founded 2008), 4-field form (Name, Phone, Preferred time, Message) + equal-weight "Ask on WhatsApp instead", privacy line. Two-column desktop, form directly under sub-headline on mobile.
2. `#surgeon` Your Surgeon — photo, credential list, pull-quote.
3. `#clinic` Where You'll Be Treated — embedded map, address, hours, parking note, landmark, Get Directions, 2–3 facility photos.
4. `#reviews` What Patients Say — 4.3/475 rating block, reviews embed placeholder, marked consented-testimonial cards.
5. `#glandular` Why Training Never Fixed It — copy as supplied + clinical anatomical diagram.
6. `#procedure` The Procedure — four cards: Assessment, Technique, On The Day, Recovery.
7. `#aftercare` What Happens After — visually prominent panel, follow-up intervals placeholder.
8. `#cost` What It Costs — no price figures at all. Keeps "your exact cost is confirmed at consultation, in writing" plus the "what your fee covers" list (surgeon, facility, anaesthesia, compression garment, follow-up visits).
9. `#suitability` Is This You? — two columns + closing line.
10. `#faq` FAQs — accordion, closed by default, 10 questions, answers as marked placeholders.
11. `#book` Final CTA — four buttons: Book, WhatsApp, Call, Directions.

## Compliance

No superlatives, no guarantees, no risk-free claims, no before/after imagery, no invented stats or testimonials, no drug brand names, no countdowns or fake scarcity. Every unverified fact stays in square brackets.

## Imagery

Generated neutral assets: clinic interior/day-surgery room stills, a clinical glandular-vs-fatty tissue illustration, and a neutral portrait placeholder for the surgeon (to be swapped for the real photo). No torsos, no smiling stock models, no wellness abstracts.

## Technical

- Rewrite `src/routes/index.tsx` as the landing page; extract each section into `src/components/landing/*`.
- `head()` on the index route: title "Gynecomastia Clinic Dubai | Dr Sanjay Parashar | Cocoona", the supplied meta description, og/twitter tags, canonical, plus LocalBusiness + Physician JSON-LD.
- WhatsApp links: `wa.me/[PLACEHOLDER_NUMBER]?text=Hi%2C%20I'd%20like%20to%20ask%20about%20gynecomastia%20surgery.`
- Form posts to a placeholder endpoint with client-side validation and a clear inline success state; no external form library.
- Accordion via existing shadcn primitives; lazy `loading="lazy"` on below-fold images; map iframe lazy-loaded. No heavy libraries, no video.
- Semantic HTML, single H1, WCAG AA contrast checked against the tokens.
