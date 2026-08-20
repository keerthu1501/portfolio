import { RATING_LABELS, RATING_LEVELS, getReviewStats } from "../../data/reviews";
import StarRating from "./StarRating";

export default function RatingSummary({ counts }) {
  const { total, average, averageLabel } = getReviewStats(counts);
  const percent = Math.max(0, Math.min(100, (average / 5) * 100));
  const maxCount = Math.max(1, ...RATING_LEVELS.map((star) => counts[star] || 0));

  return (
    <div className="review-summary">
      <div
        className="review-score-ring"
        style={{ "--pct": percent }}
        aria-label={`Average rating ${averageLabel} out of 5`}
      >
        <div className="review-score-core">
          <strong>{averageLabel}</strong>
          <span>out of 5</span>
        </div>
      </div>

      <div className="review-summary-meta">
        <StarRating value={Math.round(average)} readOnly size="sm" />
        <p>
          {total} visitor {total === 1 ? "review" : "reviews"}
        </p>
      </div>

      <ul className="review-bars">
        {RATING_LEVELS.map((star) => {
          const count = counts[star] || 0;
          const width = total ? Math.round((count / maxCount) * 100) : 0;
          const item = RATING_LABELS[star];

          return (
            <li key={star} className="review-bar-row">
              <span className="review-bar-label">
                {star} · {item.label}
              </span>
              <span className="review-bar-track" aria-hidden="true">
                <span
                  className="review-bar-fill"
                  style={{ width: `${width}%`, background: item.color }}
                />
              </span>
              <span className="review-bar-count">{count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
