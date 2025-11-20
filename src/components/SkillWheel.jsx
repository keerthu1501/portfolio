import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import skill from "../data/skill";
import "../common/css/skillwheel.css";

export default function SkillWheel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const wheelSkills = skill.map(item => item.name);

  // Responsive window width detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % skill.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Ultra-responsive sizing
  const getResponsiveValues = () => {
    if (windowWidth < 480) {
      return { wheelSize: 180, translateDist: 70, fontSize: '0.7rem' };
    } else if (windowWidth < 768) {
      return { wheelSize: 200, translateDist: 75, fontSize: '0.75rem' };
    } else if (windowWidth < 1024) {
      return { wheelSize: 220, translateDist: 85, fontSize: '0.85rem' };
    } else {
      return { wheelSize: 240, translateDist: 95, fontSize: '0.875rem' };
    }
  };

  const { wheelSize, translateDist, fontSize } = getResponsiveValues();
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section className="skillwheel-section">
      <div className="container">
        {/* Section Title */}
        <h2 className="neon-text skillwheel-title">Skills</h2>

        <div className="skillwheel-layout">
          {/* Left Panel - Desktop & Tablet */}
          {!isMobile && (
            <motion.div
              key={`left-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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

          {/* Center Wheel */}
          <div className="skillwheel-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="wheel-container"
              style={{
                width: `${wheelSize}px`,
                height: `${wheelSize}px`,
              }}
            >
              {/* Center Dot */}
              <div className="wheel-center-dot" />
              
              {wheelSkills.map((name, i) => {
                const isActive = i === activeIndex;
                const angle = (360 / wheelSkills.length) * i;
                
                return (
                  <div
                    key={i}
                    className="skill-orbit"
                    style={{
                      transform: `rotate(${angle}deg) translate(${translateDist}px)`,
                    }}
                  >
                    <motion.button
                      onClick={() => setActiveIndex(i)}
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`skill-badge ${isActive ? 'active' : ''}`}
                      style={{
                        transform: `rotate(-${angle}deg)`,
                        fontSize: fontSize,
                      }}
                      aria-label={`Select ${name}`}
                    >
                      {name}
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Panel - Desktop & Tablet */}
          {!isMobile && (
            <motion.div
              key={`right-${activeIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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

        {/* Mobile Card - Below Wheel */}
        {isMobile && (
          <motion.div
            key={`mobile-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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

        {/* Progress Indicators */}
        <div className="skillwheel-progress">
          {skill.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`progress-dot ${i === activeIndex ? 'active' : ''}`}
              aria-label={`View ${skill[i].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}