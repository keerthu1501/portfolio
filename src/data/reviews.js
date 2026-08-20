export const RATING_LABELS = {
  1: { label: "Bad", hint: "Needs work", color: "#f87171" },
  2: { label: "Not good", hint: "Below average", color: "#fb923c" },
  3: { label: "Okay", hint: "Average", color: "#fbbf24" },
  4: { label: "Good", hint: "Solid experience", color: "#4ade80" },
  5: { label: "Better", hint: "Loved it", color: "#22d3ee" },
};

export const RATING_LEVELS = [5, 4, 3, 2, 1];

const KEY_COUNTS = "kn-portfolio-review-counts-v2";
const KEY_VOTE = "kn-portfolio-review-vote-v2";
const LEGACY_KEYS = [
  "kn-portfolio-review-counts-v1",
  "kn-portfolio-review-vote-v1",
];

export const DEFAULT_COUNTS = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
};

function emptyCounts() {
  return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
}

function clearLegacyStorage() {
  try {
    LEGACY_KEYS.forEach((key) => window.localStorage.removeItem(key));
  } catch {
    // ignore
  }
}

function normalizeCounts(raw) {
  const next = emptyCounts();
  [1, 2, 3, 4, 5].forEach((star) => {
    const value = Number(raw?.[star]);
    next[star] = Number.isFinite(value) && value >= 0 ? Math.floor(value) : 0;
  });
  return next;
}

export function getReviewStats(counts) {
  const total = [1, 2, 3, 4, 5].reduce((sum, star) => sum + (counts[star] || 0), 0);
  const scoreSum = [1, 2, 3, 4, 5].reduce(
    (sum, star) => sum + star * (counts[star] || 0),
    0,
  );
  const average = total ? scoreSum / total : 0;

  return {
    total,
    average,
    averageLabel: average ? average.toFixed(1) : "—",
  };
}

export function loadReviewState() {
  if (typeof window === "undefined") {
    return { counts: emptyCounts(), myVote: null };
  }

  clearLegacyStorage();

  let counts = emptyCounts();
  try {
    const raw = window.localStorage.getItem(KEY_COUNTS);
    if (raw) {
      counts = normalizeCounts(JSON.parse(raw));
    }
  } catch {
    counts = emptyCounts();
  }

  let myVote = null;
  try {
    const voteRaw = window.localStorage.getItem(KEY_VOTE);
    if (voteRaw) {
      const parsed = JSON.parse(voteRaw);
      const stars = Number(parsed?.stars);
      if (stars >= 1 && stars <= 5) {
        myVote = { stars, at: parsed.at || Date.now() };
      }
    }
  } catch {
    myVote = null;
  }

  return { counts, myVote };
}

export function submitReview(stars) {
  const rating = Number(stars);
  if (rating < 1 || rating > 5) {
    return { ok: false, counts: DEFAULT_COUNTS, myVote: null };
  }

  const current = loadReviewState();
  if (current.myVote) {
    return { ok: false, ...current };
  }

  const counts = {
    ...current.counts,
    [rating]: (current.counts[rating] || 0) + 1,
  };
  const myVote = { stars: rating, at: Date.now() };

  try {
    window.localStorage.setItem(KEY_COUNTS, JSON.stringify(counts));
    window.localStorage.setItem(KEY_VOTE, JSON.stringify(myVote));
  } catch {
    return { ok: false, ...current };
  }

  return { ok: true, counts, myVote };
}
