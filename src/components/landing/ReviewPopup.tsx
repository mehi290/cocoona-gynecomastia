import { useState, useEffect } from "react";
import { Star, X, CheckCircle2 } from "lucide-react";

interface PopupReview {
  name: string;
  timeAgo: string;
  rating: number;
  quote: string;
  avatarBg: string;
  avatarLetter: string;
}

const POPUP_REVIEWS: PopupReview[] = [
  {
    name: "Marcus Vance",
    timeAgo: "Recently Verified",
    rating: 5,
    quote: "Dr. Sanjay performed my gynecomastia surgery. The results exceeded my expectations!",
    avatarBg: "#2E7D32",
    avatarLetter: "M",
  },
  {
    name: "Choki Dukpa",
    timeAgo: "Recently Verified",
    rating: 5,
    quote: "Utmost professionalism from consultation to post-op care. Best clinic on Al Wasl Road.",
    avatarBg: "#E65100",
    avatarLetter: "C",
  },
  {
    name: "David Miller",
    timeAgo: "Recently Verified",
    rating: 5,
    quote: "Life changing experience! The procedure was done on Al Wasl Road and I was home same day.",
    avatarBg: "#00838F",
    avatarLetter: "D",
  },
  {
    name: "Ahmad Al-Maktoum",
    timeAgo: "Recently Verified",
    rating: 5,
    quote: "Discreet and private day surgery facility. You see Dr. Sanjay himself.",
    avatarBg: "#6A1B9A",
    avatarLetter: "A",
  },
];

export function ReviewPopup() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 2500);

    const intervalTimer = setInterval(() => {
      if (isDismissed) return;
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % POPUP_REVIEWS.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [isDismissed]);

  const current = POPUP_REVIEWS[index] || POPUP_REVIEWS[0];

  if (isDismissed || !current) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-xs sm:max-w-sm rounded-xl bg-card/95 border border-border p-3.5 shadow-xl backdrop-blur-md transition-all duration-500 ease-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground p-1 rounded-full"
        aria-label="Close review pop-up"
      >
        <X className="size-3.5" />
      </button>

      <div className="flex items-start gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm shadow-sm"
          style={{ backgroundColor: current.avatarBg }}
        >
          {current.avatarLetter}
        </div>

        <div className="space-y-1 pr-4">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-xs text-primary tracking-tight">{current.name}</span>
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 text-[10px]">
            <CheckCircle2 className="size-3 text-blue-500 fill-blue-500/20" />
            <span className="font-semibold text-blue-600">5-Star Verified Patient Review</span>
          </div>

          <p className="text-[11px] text-foreground leading-snug italic line-clamp-2">
            "{current.quote}"
          </p>
        </div>
      </div>
    </div>
  );
}
