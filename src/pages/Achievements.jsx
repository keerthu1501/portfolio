import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import achievements from "../data/achievements";

const WATERMARK = "Keerthana N • View Only • Portfolio";

function WatermarkLayer() {
  return (
    <div className="protect-watermark" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span key={i}>{WATERMARK}</span>
      ))}
    </div>
  );
}

function CertificateVisual({ item }) {
  if (item.image) {
    return (
      <div
        className="cert-photo"
        style={{ backgroundImage: `url(${item.image})` }}
      />
    );
  }

  return (
    <div className="cert-frame" style={{ borderColor: `${item.color}55` }}>
      <div
        className="cert-frame-glow"
        style={{ background: `linear-gradient(135deg, ${item.color}33, transparent)` }}
      />
      <div className="cert-seal" style={{ background: `${item.color}22`, color: item.color }}>
        {item.icon}
      </div>
      <p className="cert-kicker">{item.type}</p>
      <h3 className="cert-title">{item.title}</h3>
      <p className="cert-issuer">{item.issuer}</p>
      <div className="cert-footer">
        <span>{item.date}</span>
        <span>{item.credential}</span>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [shielded, setShielded] = useState(false);
  const active = activeIndex !== null ? achievements[activeIndex] : null;

  useEffect(() => {
    const block = (event) => event.preventDefault();

    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
        const blockedCombo =
          (event.ctrlKey || event.metaKey) && ["s", "p", "u"].includes(key);

        if (blockedCombo || key === "printscreen") {
          event.preventDefault();
          setShielded(true);
          window.setTimeout(() => setShielded(false), 1200);
          return;
        }

      if (activeIndex === null) return;

      if (key === "escape") setActiveIndex(null);
      if (key === "arrowright") {
        setActiveIndex((i) => (i + 1) % achievements.length);
      }
      if (key === "arrowleft") {
        setActiveIndex((i) => (i - 1 + achievements.length) % achievements.length);
      }
    };

    const shield = () => setShielded(true);
    const unshield = () => setShielded(false);

    const onVisibility = () => {
      document.hidden ? setShielded(true) : setShielded(false);
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("copy", block);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("blur", shield);
    window.addEventListener("focus", unshield);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("copy", block);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("blur", shield);
      window.removeEventListener("focus", unshield);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  return (
    <main
      className="achievements-page"
      onContextMenu={(e) => e.preventDefault()}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="achievements-header"
      >
        <span className="achievements-kicker">Credentials</span>
        <h1 className="neon-text achievements-title">Achievements</h1>
        <p className="achievements-subtitle">
          Certifications, awards, and publications — view only. Saving and downloading are disabled.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {achievements.map((item, index) => (
          <motion.button
            type="button"
            key={item.id}
            className={`gallery-card glass ${item.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="gallery-visual">
              <CertificateVisual item={item} />
              <WatermarkLayer />
              <div className="protect-overlay" />
            </div>
            <div className="gallery-meta">
              <span className="gallery-type" style={{ color: item.color }}>
                {item.icon} {item.type}
              </span>
              <h2>{item.title}</h2>
              <p>{item.issuer} · {item.date}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="lightbox-stage"
              initial={{ scale: 0.92, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-visual">
                <CertificateVisual item={active} />
                <WatermarkLayer />
                <div className="protect-overlay" />
              </div>
              <div className="lightbox-copy">
                <span style={{ color: active.color }}>
                  {active.icon} {active.type}
                </span>
                <h2>{active.title}</h2>
                <p className="lightbox-issuer">
                  {active.issuer} · {active.date}
                </p>
                <p className="lightbox-desc">{active.description}</p>
                <p className="lightbox-note">View only · download disabled</p>
              </div>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setActiveIndex(null)}
                aria-label="Close gallery"
              >
                ✕
              </button>
            </motion.div>

            {achievements.length > 1 && (
              <>
                <button
                  type="button"
                  className="lightbox-nav prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i - 1 + achievements.length) % achievements.length);
                  }}
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="lightbox-nav next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((i) => (i + 1) % achievements.length);
                  }}
                  aria-label="Next"
                >
                  →
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {shielded && (
        <div className="privacy-shield">
          <p>Protected view</p>
        </div>
      )}

      <style>{`
        .achievements-page {
          padding: 3rem 1rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .achievements-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .achievements-kicker {
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .achievements-title {
          font-size: clamp(2rem, 6vw, 4rem);
          margin: 0.75rem 0;
        }

        .achievements-subtitle {
          color: #d1d5db;
          max-width: 640px;
          margin: 0 auto;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .gallery-card {
          display: flex;
          flex-direction: column;
          text-align: left;
          padding: 0;
          overflow: hidden;
          border-radius: 1.25rem;
          cursor: zoom-in;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .gallery-card.featured {
          grid-column: span 2;
        }

        .gallery-visual {
          position: relative;
          height: 260px;
          overflow: hidden;
          background: #0b1224;
        }

        .featured .gallery-visual {
          height: 320px;
        }

        .gallery-meta {
          padding: 1.15rem 1.25rem 1.35rem;
        }

        .gallery-type {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .gallery-meta h2 {
          color: #f3f4f6;
          font-size: 1.15rem;
          margin: 0.4rem 0 0.25rem;
        }

        .gallery-meta p {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .cert-photo,
        .cert-frame {
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .cert-photo {
          background-size: cover;
          background-position: center;
          transform: scale(1.02);
        }

        .cert-frame {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 55%),
            linear-gradient(180deg, #10182d 0%, #0a1020 100%);
        }

        .cert-frame-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cert-seal {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 1.6rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 1;
        }

        .cert-kicker,
        .cert-issuer,
        .cert-footer {
          z-index: 1;
        }

        .cert-kicker {
          color: #a855f7;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .cert-title {
          z-index: 1;
          color: #fff;
          font-size: clamp(1.05rem, 2vw, 1.4rem);
          text-align: center;
          line-height: 1.3;
          max-width: 90%;
        }

        .cert-issuer {
          color: #d1d5db;
          font-size: 0.9rem;
        }

        .cert-footer {
          display: flex;
          gap: 1rem;
          color: #9ca3af;
          font-size: 0.75rem;
          margin-top: 0.4rem;
        }

        .protect-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: transparent;
        }

        .protect-watermark {
          position: absolute;
          inset: -40%;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem 1.5rem;
          transform: rotate(-22deg);
          opacity: 0.16;
          pointer-events: none;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(5, 8, 18, 0.86);
          backdrop-filter: blur(16px);
          display: grid;
          place-items: center;
          padding: 1.25rem;
        }

        .lightbox-stage {
          width: min(980px, 100%);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          background: rgba(12, 18, 36, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.25rem;
          overflow: hidden;
          position: relative;
        }

        .lightbox-visual {
          position: relative;
          min-height: 420px;
          background: #0b1224;
        }

        .lightbox-copy {
          padding: 1.75rem;
        }

        .lightbox-copy h2 {
          color: #fff;
          font-size: 1.6rem;
          margin: 0.6rem 0 0.35rem;
        }

        .lightbox-issuer {
          color: #a855f7;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .lightbox-desc {
          color: #d1d5db;
          line-height: 1.7;
        }

        .lightbox-note {
          margin-top: 1.5rem;
          color: #9ca3af;
          font-size: 0.8rem;
        }

        .lightbox-close,
        .lightbox-nav {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          cursor: pointer;
        }

        .lightbox-close {
          position: absolute;
          top: 0.85rem;
          right: 0.85rem;
          width: 40px;
          height: 40px;
          border-radius: 999px;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 999px;
          font-size: 1.25rem;
        }

        .lightbox-nav.prev { left: 1rem; }
        .lightbox-nav.next { right: 1rem; }

        .privacy-shield {
          position: fixed;
          inset: 0;
          z-index: 4000;
          background: #080f1f;
          display: grid;
          place-items: center;
          color: #a855f7;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @media print {
          .achievements-page,
          .lightbox,
          .privacy-shield {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gallery-card.featured {
            grid-column: span 2;
          }

          .lightbox-stage {
            grid-template-columns: 1fr;
            max-height: 90dvh;
            overflow: auto;
          }

          .lightbox-visual {
            min-height: 280px;
          }
        }

        @media (max-width: 768px) {
          .achievements-page {
            padding: 1.5rem 1rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .gallery-card.featured,
          .gallery-card {
            grid-column: span 1;
          }

          .gallery-visual,
          .featured .gallery-visual {
            height: 220px;
          }

          .lightbox {
            padding: 0.75rem;
          }

          .lightbox-nav {
            width: 38px;
            height: 38px;
            top: auto;
            bottom: 1rem;
            transform: none;
          }

          .lightbox-nav.prev { left: 1rem; }
          .lightbox-nav.next { right: 1rem; }
        }

        @media (max-width: 480px) {
          .achievements-title {
            font-size: 2rem;
          }

          .gallery-meta {
            padding: 1rem;
          }

          .lightbox-copy {
            padding: 1.15rem 1.15rem 4.5rem;
          }

          .lightbox-copy h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </main>
  );
}
