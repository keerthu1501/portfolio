import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import skill from "../data/skill";
import "../common/css/skillwheel.css";

export default function SkillWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  const wheelSkills = skill.map((item) => item.name);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const tick = () => setActiveIndex((prev) => (prev + 1) % skill.length);
    let timer = window.setInterval(tick, 2800);

    const onVisibility = () => {
      window.clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(tick, 2800);
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <section className="skillwheel-section">
      <div className="container">
        <h2 className="neon-text skillwheel-title">Skills</h2>

        <div className="skillwheel-layout">
          {!isMobile && (
            <motion.div
              key={`left-${activeIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="skillwheel-panel skillwheel-panel-left"
            >
              <h3 className="panel-title">{skill[activeIndex].name}</h3>
              <div className="panel-content">
                <div className="panel-row">
                  <span className="label">Experience:</span>
                  <span className="value">{skill[activeIndex].exp}</span>
                </div>
                <p className="description">{skill[activeIndex].desc}</p>
                <div className="panel-row">
                  <span className="label">Tools:</span>
                  <span className="value-muted">{skill[activeIndex].tools}</span>
                </div>
              </div>
            </motion.div>
          )}

          <div className="skillwheel-center">
            <div className="wheel-container">
              <div className="wheel-center-dot" />
              {wheelSkills.map((name, i) => {
                const isActive = i === activeIndex;
                const angle = (360 / wheelSkills.length) * i;

                return (
                  <div
                    key={name}
                    className="skill-orbit"
                    style={{ "--angle": `${angle}deg` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`skill-badge ${isActive ? "active" : ""}`}
                      aria-label={`Select ${name}`}
                    >
                      {name}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {!isMobile && (
            <motion.div
              key={`right-${activeIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="skillwheel-panel skillwheel-panel-right"
            >
              <h3 className="panel-title panel-title-alt">
                Why I use {skill[activeIndex].name}
              </h3>
              <p className="description">
                {skill[activeIndex].name} helps me build modern, fast, scalable UI
                experiences with excellent developer experience and performance.
              </p>
            </motion.div>
          )}
        </div>

        {isMobile && (
          <motion.div
            key={`mobile-${activeIndex}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="skillwheel-mobile-card"
          >
            <h4 className="mobile-title">{skill[activeIndex].name}</h4>
            <div className="mobile-content">
              <div className="panel-row">
                <span className="label">Experience:</span>
                <span className="value">{skill[activeIndex].exp}</span>
              </div>
              <p className="description">{skill[activeIndex].desc}</p>
              <div className="panel-row">
                <span className="label">Tools:</span>
                <span className="value-muted">{skill[activeIndex].tools}</span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="skillwheel-progress">
          {skill.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`progress-dot ${i === activeIndex ? "active" : ""}`}
              aria-label={`View ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
