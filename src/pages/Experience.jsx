import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import experience, { calculateDuration, formatDate } from "../data/experience";

const TRACKS = [
  { id: "professional", label: "Professional Work" },
  { id: "internship", label: "Internship" },
  { id: "trainee", label: "Trainee & Certi" },
];

const jobs = [...experience].sort((a, b) => {
  const aEnd = a.endDate || "9999-12-31";
  const bEnd = b.endDate || "9999-12-31";
  if (bEnd !== aEnd) return bEnd.localeCompare(aEnd);
  return b.startDate.localeCompare(a.startDate);
});

export default function Experience() {
  const [activeTrack, setActiveTrack] = useState("professional");
  const [selectedJob, setSelectedJob] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const detailsRef = useRef(null);

  const filteredJobs = jobs.filter((job) => job.track === activeTrack);
  const current = filteredJobs[selectedJob] || filteredJobs[0];
  const activeTab = TRACKS.find((tab) => tab.id === activeTrack);

  useEffect(() => {
    document.documentElement.classList.add("experience-lock");
    document.body.classList.add("experience-lock");
    return () => {
      document.documentElement.classList.remove("experience-lock");
      document.body.classList.remove("experience-lock");
    };
  }, []);

  useEffect(() => {
    setSelectedJob(0);
    setHeaderHidden(false);
    detailsRef.current?.scrollTo({ top: 0 });
  }, [activeTrack]);

  useEffect(() => {
    detailsRef.current?.scrollTo({ top: 0 });
    setHeaderHidden(false);
  }, [selectedJob]);

  const onDetailsScroll = (event) => {
    setHeaderHidden(event.currentTarget.scrollTop > 16);
  };

  const switchTrack = (trackId) => {
    setActiveTrack(trackId);
  };

  return (
    <main className={`experience-page ${headerHidden ? "header-collapsed" : ""}`}>
      <header className={`experience-header ${headerHidden ? "is-hidden" : ""}`}>
        <h1 className="neon-text experience-title">My Experience</h1>
        <p className="experience-meta-line">
          <span>{filteredJobs.length} {activeTab?.label}</span>
        </p>
      </header>

      <div className="experience-tabs" role="tablist" aria-label="Experience type">
        {TRACKS.map((tab) => {
          const count = jobs.filter((job) => job.track === tab.id).length;
          const isActive = activeTrack === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`experience-tab ${isActive ? "active" : ""}`}
              onClick={() => switchTrack(tab.id)}
            >
              {tab.label}
              <span className="experience-tab-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="experience-grid">
        {/* Left Timeline — stays in place */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="timeline-container"
        >
          <div className="timeline-line" />

          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              onClick={() => setSelectedJob(index)}
              whileHover={{ x: 6 }}
              className={`timeline-item ${selectedJob === index ? "active" : ""}`}
              style={{
                background: selectedJob === index
                  ? "rgba(168, 85, 247, 0.15)"
                  : "rgba(255, 255, 255, 0.05)",
                border: `2px solid ${selectedJob === index ? job.color : "rgba(255, 255, 255, 0.1)"}`,
              }}
            >
              <motion.div
                className="timeline-dot"
                animate={{
                  scale: selectedJob === index ? 1.2 : 1,
                  backgroundColor: selectedJob === index ? job.color : "rgba(255, 255, 255, 0.3)"
                }}
              />

              <div className="timeline-logo">{job.logo}</div>

              <h3
                className="timeline-company"
                style={{ color: selectedJob === index ? "#22d3ee" : "#f3f4f6" }}
              >
                {job.company}
              </h3>

              <p className="timeline-role">{job.role}</p>

              <div className="timeline-duration" style={{ color: job.color }}>
                {formatDate(job.startDate)} – {job.endDate ? formatDate(job.endDate) : "Present"}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Details — independent scroll */}
        <div className="details-scroll" ref={detailsRef} onScroll={onDetailsScroll}>
          {!current ? (
            <div className="glass details-panel">
              <p className="details-description">No entries in this track yet.</p>
            </div>
          ) : (
          <motion.div
            key={`${activeTrack}-${current.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass details-panel"
          >
            <div className="details-heading">
              <div className="details-heading-row">
                <span className="details-logo">{current.logo}</span>
                <div>
                  <h2 className="details-role">{current.role}</h2>
                  <p className="details-company">{current.company}</p>
                </div>
              </div>

              <div className="details-meta">
                <span className="glass details-chip" style={{ color: "#22d3ee" }}>
                  📅 {formatDate(current.startDate)} - {formatDate(current.endDate)}
                </span>
                <span className="glass details-chip" style={{ color: "#10b981" }}>
                  ⏱️ {calculateDuration(current.startDate, current.endDate)}
                </span>
                <span className="glass details-chip" style={{ color: "#f59e0b" }}>
                  📍 {current.location}
                </span>
                <span className="glass details-chip" style={{ color: "#a855f7" }}>
                  💼 {current.type}
                </span>
              </div>
            </div>

            <p className="details-description">{current.description}</p>

            <div className="details-block">
              <h3 className="details-section-title">Key Responsibilities</h3>
              <ul className="details-list">
                {current.responsibilities.map((resp, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="details-list-item"
                  >
                    <span className="details-check" style={{ color: current.color }}>✓</span>
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="details-block">
              <h3 className="details-section-title">Technologies Used</h3>
              <div className="details-tech">
                {current.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="details-tech-tag"
                    style={{
                      background: `${current.color}20`,
                      border: `1px solid ${current.color}`,
                      color: current.color,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="details-section-title">Key Achievements</h3>
              <div className="details-achievements">
                {current.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass details-achievement"
                    style={{ borderLeft: `3px solid ${current.color}` }}
                  >
                    <span className="details-achievement-text">
                      🏆 {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </div>

      <style>{`
        html.experience-lock,
        body.experience-lock {
          overflow: hidden !important;
          height: 100%;
        }

        .experience-page {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          height: calc(100dvh - 64px);
          max-height: calc(100dvh - 64px);
          overflow: hidden;
          padding: 0.65rem 1rem 0.75rem;
        }

        .experience-header {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          min-height: 0;
          max-height: 3.25rem;
          margin-bottom: 0.65rem;
          overflow: hidden;
          opacity: 1;
          transform: translateY(0);
          transition: max-height 0.28s ease, opacity 0.22s ease, margin 0.28s ease, transform 0.28s ease;
        }

        .experience-header.is-hidden {
          max-height: 0;
          opacity: 0;
          margin-bottom: 0;
          transform: translateY(-8px);
          pointer-events: none;
        }

        .experience-title {
          font-size: clamp(1.15rem, 3vw, 1.6rem);
          margin: 0;
          line-height: 1.2;
          white-space: nowrap;
        }

        .experience-meta-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #9ca3af;
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .experience-tabs {
          display: flex;
          gap: 0.45rem;
          flex-shrink: 0;
          margin-bottom: 0.7rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .experience-tabs::-webkit-scrollbar {
          display: none;
        }

        .experience-tab {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: #d1d5db;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          min-height: 36px;
        }

        .experience-tab.active {
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.18), rgba(168, 85, 247, 0.22));
          border-color: rgba(168, 85, 247, 0.55);
          color: #fff;
        }

        .experience-tab-count {
          min-width: 1.2rem;
          height: 1.2rem;
          padding: 0 0.3rem;
          border-radius: 999px;
          display: inline-grid;
          place-items: center;
          font-size: 0.68rem;
          background: rgba(255, 255, 255, 0.1);
        }

        .experience-tab.active .experience-tab-count {
          background: rgba(168, 85, 247, 0.35);
          color: #fff;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: minmax(220px, 280px) minmax(0, 1fr);
          gap: 1.25rem;
          align-items: stretch;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .timeline-container {
          position: relative;
          padding-left: 12px;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 1.5rem;
          bottom: 1.5rem;
          width: 2px;
          background: linear-gradient(180deg, #22d3ee 0%, #a855f7 100%);
          opacity: 0.3;
          pointer-events: none;
        }

        .timeline-item {
          padding: 0.9rem 1rem;
          margin-bottom: 0.75rem;
          border-radius: 0.9rem;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-item:last-of-type {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid #0f172a;
        }

        .timeline-logo {
          font-size: 1.35rem;
          margin-bottom: 0.3rem;
          line-height: 1;
        }

        .timeline-company {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }

        .timeline-role {
          color: #9ca3af;
          font-size: 0.78rem;
          margin-bottom: 0.3rem;
        }

        .timeline-duration {
          font-size: 0.7rem;
          font-weight: 600;
        }

        .details-scroll {
          min-width: 0;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: #a855f7 rgba(255, 255, 255, 0.08);
        }

        .details-scroll::-webkit-scrollbar,
        .timeline-container::-webkit-scrollbar {
          width: 8px;
          height: 6px;
        }

        .details-scroll::-webkit-scrollbar-track,
        .timeline-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .details-scroll::-webkit-scrollbar-thumb,
        .timeline-container::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          border-radius: 8px;
        }

        .details-panel {
          padding: 1.5rem 1.75rem 2rem;
          border-radius: 1.25rem;
          min-height: 100%;
        }

        .details-heading {
          margin-bottom: 1.35rem;
        }

        .details-heading-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 0.75rem;
        }

        .details-logo {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          flex-shrink: 0;
        }

        .details-role {
          color: #22d3ee;
          font-size: clamp(1.15rem, 2.6vw, 1.55rem);
          font-weight: 700;
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }

        .details-company {
          color: #a855f7;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 600;
        }

        .details-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-top: 0.75rem;
        }

        .details-chip {
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
        }

        .details-description {
          color: #d1d5db;
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .details-block {
          margin-bottom: 1.5rem;
        }

        .details-section-title {
          color: #22d3ee;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .details-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .details-list-item {
          color: #9ca3af;
          font-size: 0.9rem;
          padding-left: 1.4rem;
          position: relative;
        }

        .details-check {
          position: absolute;
          left: 0;
        }

        .details-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }

        .details-tech-tag {
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .details-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .details-achievement {
          padding: 0.85rem;
          border-radius: 0.75rem;
        }

        .details-achievement-text {
          color: #f3f4f6;
          font-size: 0.9rem;
        }

        @media (max-width: 991px) {
          .experience-page {
            height: calc(100dvh - 58px);
            max-height: calc(100dvh - 58px);
            padding: 0.5rem 0.85rem 0.65rem;
          }

          .experience-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.2rem;
            max-height: 3.6rem;
          }

          .experience-tab {
            padding: 0.4rem 0.7rem;
            font-size: 0.75rem;
          }

          .experience-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto minmax(0, 1fr);
            gap: 0.75rem;
          }

          .timeline-container {
            position: relative;
            top: 0;
            height: auto;
            max-height: none;
            display: flex;
            flex-direction: row;
            gap: 0.65rem;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0.15rem 0.1rem 0.55rem;
            background: #080f1f;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            flex-shrink: 0;
          }

          .timeline-line,
          .timeline-dot {
            display: none;
          }

          .timeline-item {
            flex: 0 0 min(200px, 76vw);
            margin-bottom: 0;
            padding: 0.7rem 0.85rem;
            scroll-snap-align: start;
          }

          .timeline-logo {
            font-size: 1.15rem;
            margin-bottom: 0.2rem;
          }

          .timeline-company,
          .timeline-role {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .timeline-role {
            font-size: 0.72rem;
            margin-bottom: 0.2rem;
          }

          .details-scroll {
            height: auto;
            min-height: 0;
            overflow-y: auto;
          }

          .details-panel {
            min-height: auto;
            padding: 1.15rem 1.1rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .experience-page {
            padding: 0.4rem 0.7rem 0.55rem;
            height: calc(100dvh - 54px);
            max-height: calc(100dvh - 54px);
          }

          .experience-title {
            font-size: 1.1rem;
          }

          .experience-meta-line {
            font-size: 0.72rem;
          }

          .timeline-item {
            flex-basis: min(178px, 80vw);
            padding: 0.6rem 0.75rem;
          }

          .details-heading-row {
            gap: 0.55rem;
          }

          .details-chip,
          .details-tech-tag {
            font-size: 0.72rem;
            padding: 0.35rem 0.65rem;
          }

          .details-list-item {
            font-size: 0.84rem;
          }
        }

        @media (max-width: 360px) {
          .experience-header {
            max-height: 3.4rem;
          }

          .timeline-item {
            flex-basis: min(160px, 84vw);
          }
        }

        @media (max-height: 500px) and (orientation: landscape) {
          .experience-header {
            max-height: 2.4rem;
          }

          .timeline-logo {
            display: none;
          }

          .timeline-item {
            padding: 0.45rem 0.7rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-header,
          .timeline-item,
          .details-panel {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
