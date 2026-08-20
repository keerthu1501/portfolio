import { useState } from "react";
import { RATING_LABELS } from "../../data/reviews";

function StarIcon({ filled, color }) {
  return (
    <svg
      className="review-star-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={filled ? { color } : undefined}
    >
      <path
        d="M12 2.4l2.62 6.28 6.88.64-5.2 4.56 1.56 6.72L12 16.9l-5.86 3.7 1.56-6.72-5.2-4.56 6.88-.64L12 2.4z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StarRating({
  value = 0,
  onSelect,
  onPreviewChange,
  readOnly = false,
  size = "md",
}) {
  const [hovered, setHovered] = useState(0);
  const preview = hovered || value;
  const tone = RATING_LABELS[preview];

  const setPreview = (next) => {
    setHovered(next);
    onPreviewChange?.(next);
  };

  return (
    <div
      className={`review-stars review-stars-${size}${readOnly ? " is-locked" : ""}`}
      role={readOnly ? "img" : "radiogroup"}
      aria-label={readOnly ? `${value} star rating` : "Choose a star rating from 1 to 5"}
      onMouseLeave={() => setPreview(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= preview;
        const selected = star === value;
        const label = RATING_LABELS[star].label;

        return (
          <button
            key={star}
            type="button"
            className={`review-star${active ? " is-on" : ""}${selected ? " is-selected" : ""}`}
            style={active && tone ? { color: tone.color } : undefined}
            role={readOnly ? undefined : "radio"}
            aria-checked={readOnly ? undefined : star === value}
            aria-label={`${star} star, ${label}`}
            disabled={readOnly}
            onMouseEnter={() => {
              if (!readOnly) setPreview(star);
            }}
            onFocus={() => {
              if (!readOnly) setPreview(star);
            }}
            onClick={() => {
              if (!readOnly && onSelect) onSelect(star);
            }}
          >
            <StarIcon filled={active} color={tone?.color} />
          </button>
        );
      })}
    </div>
  );
}
