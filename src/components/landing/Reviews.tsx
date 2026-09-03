import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { Section, SectionHeading, Rule } from "./primitives";

interface Review {
  id: number;
  name: string;
  role?: string;
  timeAgo: string;
  rating: number;
  avatarLetter: string;
  avatarBg: string;
  quote: string;
  isArabic?: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Choki Dukpa",
    timeAgo: "1 year ago",
    rating: 5,
    avatarLetter: "C",
    avatarBg: "#E65100",
    quote:
      "The best clinic I have been to and the people here are most welcoming and very generous with what they are doing. From my initial private consultation to post-op care, everything was handled with utmost professionalism.",
  },
  {
    id: 2,
    name: "Aliona Zaleskaya",
    role: "Video Creator",
    timeAgo: "1 year ago",
    rating: 5,
    avatarLetter: "A",
    avatarBg: "#1E88E5",
    quote:
      "Today I visited Cocoona clinic and was so pleased by the professionalism, discreet care, and incredible attention to detail! Highly recommend Dr. Sanjay and his expert team.",
  },
  {
    id: 3,
    name: "Yasmin Sabbagh",
    timeAgo: "1 year ago",
    rating: 5,
    avatarLetter: "Y",
    avatarBg: "#D81B60",
    quote:
      "تعامل راقي الكادر كله متعاون ومبتسم خاصة شيماء وسمرين وجنى والدكتورة ما شاء الله عليها ايدها خفيفة ونتيجة العملية ممتازة جداً.",
    isArabic: true,
  },
  {
    id: 4,
    name: "Marcus Vance",
    timeAgo: "6 months ago",
    rating: 5,
    avatarLetter: "M",
    avatarBg: "#2E7D32",
    quote:
      "Dr. Sanjay performed my gynecomastia surgery. The results exceeded my expectations. Recovery was smooth and all follow-ups were scheduled before I left the clinic.",
  },
  {
    id: 5,
    name: "Ahmad Al-Maktoum",
    timeAgo: "8 months ago",
    rating: 5,
    avatarLetter: "A",
    avatarBg: "#6A1B9A",
    quote:
      "Discreet and private day surgery facility on Al Wasl Road. Outstanding care, no pressure, and genuine consultant expertise. You see the surgeon himself.",
  },
  {
    id: 6,
    name: "David Miller",
    timeAgo: "4 months ago",
    rating: 5,
    avatarLetter: "D",
    avatarBg: "#00838F",
    quote:
      "Life changing experience. The staff made me feel completely comfortable. The procedure was done on Al Wasl Road and I was home the same day.",
  },
];

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  function nextSlide() {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  }

  function prevSlide() {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }

  const review = REVIEWS[activeIndex];

  return (
    <Section id="reviews" ariaLabelledBy="reviews-heading">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
        <div>
          <SectionHeading id="reviews-heading">Testimonials</SectionHeading>
          <Rule />
        </div>

        {/* Rating Summary Badge */}
        <div className="mb-4 flex items-center gap-3 bg-secondary/50 border border-border px-4 py-2 rounded-full w-fit">
          <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
            <span>{CLINIC.rating}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>
          <span className="text-muted-foreground text-xs border-l border-border pl-3 font-semibold">
            {CLINIC.reviewCount}+ Google reviews
          </span>
        </div>
      </div>

      {/* Main Grid: Video on Left, Single-Card Auto-Slider on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Transformation Video Container */}
        <div className="lg:col-span-5 flex flex-col h-[380px] sm:h-[400px]">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-ink shadow-md flex-1 w-full">
            <video
              src="/Dr. Sanjay Parashar _ High Definition Liposuction for Men.mp4"
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover rounded-2xl"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2 font-medium shrink-0">
            HD Liposuction & Surgical Chest Contouring Transformation
          </p>
        </div>

        {/* Right Side: Single Review Card Auto-Slider */}
        <div
          className="lg:col-span-7 relative group h-[380px] sm:h-[400px] flex flex-col justify-between px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-md transition-all duration-200 hover:scale-110 hover:bg-secondary"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-md transition-all duration-200 hover:scale-110 hover:bg-secondary"
          >
            <ChevronRight className="size-4" />
          </button>

          {/* Single Card Container */}
          <div className="relative w-full h-[330px] overflow-hidden rounded-2xl bg-card text-card-foreground border border-border/80 shadow-md p-6 flex flex-col items-center justify-between text-center mx-auto transition-all duration-500">
            {/* Avatar with Google Badge */}
            <div className="relative mb-2">
              <div
                className="flex size-14 items-center justify-center rounded-full text-white font-bold text-lg shadow-inner"
                style={{ backgroundColor: review.avatarBg }}
              >
                {review.avatarLetter}
              </div>
              <div
                className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200"
                title="Verified Google Review"
              >
                <svg className="size-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
            </div>

            {/* Author & Date */}
            <div>
              <h3 className="text-primary font-bold text-sm tracking-tight">
                {review.name}{" "}
                {review.role && (
                  <span className="font-normal text-muted-foreground text-xs">
                    {review.role}
                  </span>
                )}
              </h3>
              <span className="text-muted-foreground text-xs mt-0.5 block">{review.timeAgo}</span>
            </div>

            {/* VERIFIED REVIEW & 5 Gold Stars */}
            <div className="my-2 flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                <span>VERIFIED REVIEW</span>
                <CheckCircle2 className="size-3.5 fill-blue-500 text-white" />
              </div>
              <div className="flex gap-0.5 mt-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <p
              className={`text-muted-foreground text-xs leading-relaxed max-w-lg ${
                review.isArabic ? "font-serif text-right" : "text-center"
              }`}
            >
              "{review.quote}"
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
