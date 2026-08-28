# Dubai Chest Care

BEFORE YOU BUILD WHAT INFORMATION U NEED FROM ME AND ALSO DONOT INCLUDE PRICE PART Build a conversion-focused landing page for a Dubai plastic surgery clinic. 

This is a paid-traffic landing page for Google Search ads — not a general website page.

=== CONTEXT ===

Client: Cocoona Centre for Aesthetic Transformation, Al Wasl Road, Dubai

Procedure: Gynecomastia surgery (male breast reduction)

Surgeon: Dr. Sanjay Parashar, consultant plastic surgeon and founder

Goal: One action — book a free private consultation

Traffic source: Google Search ads from men searching "gynecomastia in dubai",

"gynecomastia clinic in dubai", "gynecomastia doctors near me"

=== THE READER (this drives every design decision) ===

A man, 22–45, in Dubai. He has had this since his teens or since weight gain.

He wears a vest under his shirt in 45-degree heat. He does not swim.

He has been searching this privately, late at night, on his phone, for years,

and has never said the word out loud to another person.

He is embarrassed, sceptical, and wants to be handled — not comforted.

He already knows he wants surgery. He is choosing WHO and WHERE.

=== DESIGN DIRECTION ===

Serious, clinical, masculine, discreet. This must NOT look like a beauty

or aesthetics clinic page.

- Palette: deep navy or charcoal, warm off-white, one restrained accent

  (muted gold or steel blue). NO pink, NO pastels, NO rose gold.

- Typography: a confident serif for headings, clean sans for body.

  Generous line height. Nothing decorative or scripty.

- Imagery: clinic interiors, the surgeon, medical diagrams. 

  NO stock photos of smiling women. NO abstract "wellness" imagery.

  NO shirtless male torsos anywhere.

- Tone of the whole page: a serious surgeon's office, not a spa.

- Mobile-first. Most traffic is mobile, at night. Test at 375px width.

=== TECH REQUIREMENTS ===

- React + Tailwind, single page, fully responsive

- Fast: lazy-load images below the fold, no heavy libraries, no autoplay video

- Every section needs an id for anchor deep-linking (listed below)

- Sticky bottom bar on mobile: [Book Consultation] [WhatsApp] side by side

- WhatsApp buttons open wa.me/[PLACEHOLDER_NUMBER] with prefilled text:

  "Hi, I'd like to ask about gynecomastia surgery."

- Form posts to a placeholder endpoint; show a clear success state

- Semantic HTML, proper heading hierarchy, WCAG AA contrast

=== PAGE STRUCTURE ===

Build these 11 sections in this exact order.

--- SECTION 1: HERO (id="top") ---

Two-column on desktop (form left, content right), stacked on mobile with 

form directly below the sub-headline.

H1: Gynecomastia Surgery in Dubai

Sub: Performed by Dr. Sanjay Parashar, consultant plastic surgeon and founder 

of Cocoona, at our accredited day surgery centre on Al Wasl Road. Assessment, 

procedure and follow-up under one roof — you see the surgeon, not a coordinator.

Four bullets with subtle check icons:

- Free private consultation — you'll be told your grade and what's realistic

- Message on WhatsApp — no phone call needed

- Day surgery on Al Wasl Road — in and out the same day

- Follow-up scheduled before you leave — no chasing

Trust bar below: [GOOGLE_RATING_PLACEHOLDER] · Al Wasl Road, Dubai · Founded 2008

FORM — exactly four fields, no more:

Heading: "Book Your Private Consultation"

Fields: Name · Phone · Preferred time · Message (optional)

Button: "Book Private Consultation"

Directly beside/below the button, at EQUAL visual weight, a WhatsApp button:

"Ask on WhatsApp instead"

Small line under form: "Your enquiry is private."

--- SECTION 2: YOUR SURGEON (id="surgeon") ---

Heading: "Your Surgeon"

Photo of Dr. Sanjay on one side, credentials on the other.

Dr. Sanjay Parashar

Consultant Plastic Surgeon · Founder, Cocoona

Credentials as a clean list:

- International Visiting Professor, American Society of Plastic Surgeons

- Chairman Scientific, Emirates Plastic Surgery Society

- National Secretary, ISAPS UAE

- Diplomate, American Board of Regenerative Medicine

- [YEARS_IN_PRACTICE_PLACEHOLDER]

Pull-quote styled line: "Every case assessed and performed personally. 

You are not passed to a junior or handled by a sales coordinator."

--- SECTION 3: THE CLINIC (id="clinic") ---

Heading: "Where You'll Be Treated"

Body: Cocoona Centre for Aesthetic Transformation, Al Wasl Road, Dubai. 

An accredited day surgery facility — your procedure happens here, 

not at a third-party hospital.

Include: embedded Google Map, full address, opening hours, parking note, 

nearest landmark, and a "Get Directions" button.

Space for 2–3 facility photos.

--- SECTION 4: WHAT PATIENTS SAY (id="reviews") ---

Heading: "What Patients Say"

Google reviews embed placeholder showing live rating and review count.

Below it, 2–3 written patient accounts in card format.

[CONSENTED_TESTIMONIALS_PLACEHOLDER — leave clearly marked, do not invent]

--- SECTION 5: WHY TRAINING NEVER FIXED IT (id="glandular") ---

Heading: "Why Training Never Fixed It"

Gynecomastia is enlarged glandular breast tissue, not fat. It is driven by 

hormones, not calories. That is why chest training, cardio and cutting weight 

change everything except the thing you wanted them to change.

It does not resolve on its own once established. Surgical removal is the only 

method that removes glandular tissue.

Include a simple, tasteful anatomical diagram comparing glandular and fatty 

tissue. Clinical illustration style. No photography.

--- SECTION 6: THE PROCEDURE (id="procedure") ---

Heading: "The Procedure"

Four cards or an accordion:

ASSESSMENT — Grading your case · Glandular, fatty or mixed · Whether surgery 

is the right route · What is realistically achievable

TECHNIQUE — Gland excision · Liposuction where appropriate · Combined approach 

depending on grade · Incision placement and expected scarring

ON THE DAY — Al Wasl day surgery centre · Anaesthesia explained in advance · 

Typical duration · Same-day discharge in most cases

RECOVERY — Compression garment period · Time before desk work · Time before 

training · Week-by-week swelling · When the final result settles

--- SECTION 7: WHAT HAPPENS AFTER (id="aftercare") ---

Heading: "What Happens After"

Make this visually prominent — it is a key differentiator.

Your follow-up appointments are scheduled before you leave, not arranged 

afterwards. [FOLLOWUP_INTERVALS_PLACEHOLDER]

You get a direct contact route for questions during recovery, and a named 

person to reach — not a general reception line.

--- SECTION 8: WHAT IT COSTS (id="cost") ---

Heading: "What It Costs"

Gynecomastia surgery at Cocoona ranges from [PRICE_RANGE_PLACEHOLDER]. 

The final figure depends on grade, technique, and whether excision, 

liposuction or both are needed. Your exact cost is confirmed at consultation, 

in writing, before you commit to anything.

Include a small "what your fee covers" list: surgeon, facility, anaesthesia, 

compression garment, follow-up visits.

--- SECTION 9: IS THIS YOU? (id="suitability") ---

Heading: "Is This You?"

Two columns.

LEFT — "This may be for you if:"

- Your chest has not changed despite consistent training

- Puffiness is concentrated around the nipple area

- It has been there since your teens, or arrived with weight change and stayed

- You dress around it, and you have stopped swimming

RIGHT — "This may not be for you if:"

- Your case may be medication-related or hormone-driven and needs 

  investigation first

- You have had recent significant weight change and things may still settle

- Your expectations exceed what surgery can achieve

Closing line: "The consultation exists to find that out. Some men are advised 

not to proceed."

--- SECTION 10: FAQS (id="faq") ---

Accordion, closed by default:

1. Where exactly are you located?

2. Is it glandular or fat in my case?

3. Will it come back?

4. Will there be a visible scar?

5. How long before I can return to work?

6. How long before I can train again?

7. What aftercare do I get, and for how long?

8. Is my consultation private?

9. Does insurance cover it?

10. What if I am not a candidate?

[Leave answers as clearly marked placeholders — do not invent medical content]

--- SECTION 11: FINAL CTA (id="book") ---

Heading: "Ready to stop dressing around it?"

Sub: Free private consultation at our Al Wasl Road clinic. 

You will know exactly where you stand.

Buttons: [Book Private Consultation] [Chat on WhatsApp] [Call Cocoona] 

[Get Directions]

=== COMPLIANCE — CRITICAL, DO NOT VIOLATE ===

This is regulated medical advertising in Dubai (DHA/MOHAP rules).

NEVER include anywhere on the page:

- Any guaranteed or implied outcome ("guaranteed results", "we'll work until 

  you're happy", "permanent solution")

- Any risk-free or "no complications" claim

- "Best", "leading", "number one", "top" — any superlative without evidence

- Prescription drug brand names

- Before/after imagery of any kind (consent not yet confirmed — leave a clearly 

  marked placeholder section only if you add one)

- Invented statistics, patient counts, years of practice, or testimonials

- Countdown timers, fake scarcity, "only 3 slots left"

Use PLACEHOLDERS in square brackets for every unverified fact. 

Do not fill them with plausible-sounding numbers.

=== SEO ===

Title tag: Gynecomastia Clinic Dubai | Dr Sanjay Parashar | Cocoona

Meta description: Gynecomastia surgery in Dubai with a consultant plastic 

surgeon. Al Wasl Road day surgery centre. Free private consultation, 

discreet care.

Add LocalBusiness + Physician schema markup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/79ab5297-db29-4f5b-b912-ee6fc0c3e155).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
