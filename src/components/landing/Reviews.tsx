import { useRef, useState } from "react";
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
      "Dr. Sanjay Parashar performed my gynecomastia surgery. The results exceeded my expectations. Recovery was smooth and all follow-ups were scheduled before I left the clinic.",
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function checkScroll() {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -340 : 340;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  }

  return (
    <Section id="reviews" ariaLabelledBy="reviews-heading">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-2">
        <div>
          <SectionHeading id="reviews-heading">Testimonials</SectionHeading>
          <Rule />
        </div>

        {/* Rating Summary Badge */}
        <div className="mb-6 flex items-center gap-3 bg-secondary/50 border border-border px-4 py-2 rounded-full w-fit">
          <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
            <span>{CLINIC.rating}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>
          <span className="text-muted-foreground text-xs border-l border-border pl-3">
            {CLINIC.reviewCount} Google reviews
          </span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative group px-1">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left testimonials"
          className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-md transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:pointer-events-none`}
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right testimonials"
          className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex size-10 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-md transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:pointer-events-none`}
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto scrollbar-none py-4 px-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-card text-card-foreground border border-border/80 shadow-sm hover:shadow-md transition-shadow rounded-2xl p-6 flex flex-col items-center text-center min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0"
            >
              {/* Avatar with Google Badge */}
              <div className="relative mb-3">
                <div
                  className="flex size-14 items-center justify-center rounded-full text-white font-bold text-lg shadow-inner"
                  style={{ backgroundColor: review.avatarBg }}
                >
                  {review.avatarLetter}
                </div>
                <div
                  className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-white shadow-sm border border-slate-200"
                  title="Verified Google Review"
                >
                  <svg className="size-3.5" viewBox="0 0 24 24">
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
              <h3 className="text-primary font-bold text-sm tracking-tight">
                {review.name}{" "}
                {review.role && (
                  <span className="font-normal text-muted-foreground text-xs">
                    {review.role}
                  </span>
                )}
              </h3>
              <span className="text-muted-foreground text-xs mt-0.5">{review.timeAgo}</span>

              {/* Rating Stars & Blue Verified Checkmark */}
              <div className="my-3 flex items-center justify-center gap-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CheckCircle2 className="size-4 fill-blue-500 text-white ml-0.5" />
              </div>

              {/* Testimonial Quote */}
              <p
                className={`text-muted-foreground text-xs leading-relaxed ${
                  review.isArabic ? "font-serif text-right" : "text-center"
                }`}
              >
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
