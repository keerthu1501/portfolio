import { motion } from "framer-motion";
import { useState } from "react";
import {
  RATING_LABELS,
  loadReviewState,
  submitReview,
} from "../../data/reviews";
import "../../common/css/reviews.css";
import RatingLegend from "./RatingLegend";
import RatingSummary from "./RatingSummary";
import StarRating from "./StarRating";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
};

export default function ReviewsSection() {
  const [counts, setCounts] = useState(() => loadReviewState().counts);
  const [myVote, setMyVote] = useState(() => loadReviewState().myVote);
  const [hoverRating, setHoverRating] = useState(0);
  const [justPosted, setJustPosted] = useState(false);

  const preview = myVote?.stars || hoverRating;
  const previewMeta = preview ? RATING_LABELS[preview] : null;
  const locked = Boolean(myVote);

  const handleSelect = (stars) => {
    if (locked) return;
    const result = submitReview(stars);
    setCounts(result.counts);
    setMyVote(result.myVote);
    setHoverRating(0);
    if (result.ok) setJustPosted(true);
  };

  return (
    <section className="home-section reviews-section" aria-labelledby="reviews-title">
      <motion.div {...fadeUp} className="section-header">
        <div className="premium-badge" style={{ margin: "0 auto" }}>
          <span className="badge-icon">★</span>
          <span className="badge-text">VISITOR REVIEWS</span>
        </div>
        <h2 id="reviews-title" className="section-title">
          <span className="gradient-text">Rate this Portfolio</span>
        </h2>
        <p className="section-description">
          Drop a star rating for freelance work or this site.
        </p>
      </motion.div>

      <motion.div {...fadeUp} className="reviews-shell">
        <RatingSummary counts={counts} />

        <div className="review-composer">
          <div className="review-composer-glow" aria-hidden="true" />

          <p className="review-kicker">
            {locked ? "Your review is in" : "Tap a star to post"}
          </p>
          <h3 className="review-composer-title">
            {locked ? "Thanks for rating" : "How was your experience?"}
          </h3>

          <div className="review-picker">
            <StarRating
              value={myVote?.stars || 0}
              readOnly={locked}
              onSelect={handleSelect}
              onPreviewChange={setHoverRating}
              size="lg"
            />
          </div>

          <p
            className={`review-live-label${previewMeta ? " is-active" : ""}`}
            style={previewMeta ? { color: previewMeta.color } : undefined}
          >
            {previewMeta ? (
              <>
                <span className="review-live-stars">
                  {"★".repeat(preview)}
                </span>
                {previewMeta.label}
              </>
            ) : (
              "Choose 1 to 5 stars"
            )}
          </p>

          {locked ? (
            <p className={`review-status${justPosted ? " is-success" : ""}`}>
              You posted <strong>{RATING_LABELS[myVote.stars].label}</strong>.
              One review per visitor is allowed.
            </p>
          ) : (
            <p className="review-status">
              No comments — just a star. You can post only once.
            </p>
          )}

          <RatingLegend />
        </div>
      </motion.div>
    </section>
  );
}
