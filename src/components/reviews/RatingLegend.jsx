import { RATING_LABELS } from "../../data/reviews";

export default function RatingLegend() {
  return (
    <ul className="review-legend" aria-label="Star rating meanings">
      {[1, 2, 3, 4, 5].map((star) => {
        const item = RATING_LABELS[star];
        return (
          <li key={star} className="review-legend-item" style={{ "--tone": item.color }}>
            <span className="review-legend-stars" aria-hidden="true">
              {"★".repeat(star)}
            </span>
            <span className="review-legend-copy">
              <strong>{item.label}</strong>
              <small>{item.hint}</small>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
