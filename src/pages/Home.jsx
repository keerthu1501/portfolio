import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SkillWheel from "../components/SkillWheel";
import myImage from "../common/assets/my-photo.jpeg";
import projects from "../data/projects";
import "../common/css/home.css";

const STATS = [
  {
    number: "1+",
    label: "Years Experience",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #22d3ee, #0ea5e9)",
  },
  {
    number: "10+",
    label: "Projects Done",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
};

function useDesktopHover() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 992px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
}

export default function Home() {
  const navigate = useNavigate();
  const desktopHover = useDesktopHover();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb2X = useTransform(mouseX, (x) => -x * 0.5);
  const orb2Y = useTransform(mouseY, (y) => -y * 0.5);
  const orb3X = useTransform(mouseX, (x) => x * 0.3);
  const orb3Y = useTransform(mouseY, (y) => -y * 0.7);
  const cardRotateY = useTransform(mouseX, [-40, 40], [-6, 6]);
  const cardRotateX = useTransform(mouseY, [-40, 40], [6, -6]);

  useEffect(() => {
    if (!desktopHover) {
      mouseX.set(0);
      mouseY.set(0);
      return undefined;
    }

    let frame = 0;
    const onMove = (event) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        mouseX.set(x * 40);
        mouseY.set(y * 40);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [desktopHover, mouseX, mouseY]);

  return (
    <div className="home-page">
      <div className="cosmic-background" aria-hidden="true">
        <motion.div
          className="gradient-orb orb-1"
          style={{ x: mouseX, y: mouseY }}
        />
        <motion.div
          className="gradient-orb orb-2"
          style={{ x: orb2X, y: orb2Y }}
        />
        <motion.div
          className="gradient-orb orb-3"
          style={{ x: orb3X, y: orb3Y }}
        />
      </div>
      <div className="mesh-gradient" aria-hidden="true" />
      <div className="particles-container" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <Hero />

      <section className="home-section home-about">
        <div className="container-grid">
          <motion.div {...fadeUp} className="profile-container">
            <motion.div
              className="profile-card"
              style={
                desktopHover
                  ? { rotateY: cardRotateY, rotateX: cardRotateX }
                  : undefined
              }
            >
              <div className="holographic-bg" />
              <div className="profile-image-container">
                <img
                  // src={myImage}
                  alt="Keerthana"
                  className="profile-photo"
                  width="220"
                  height="220"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="orbit-ring ring-a" />
                <div className="orbit-ring ring-b" />
              </div>

              {/* <div className="info-badge">
                <span className="status-dot" />
                <span>Available for Projects</span>
              </div> */}

              <div className="card-footer">
                <span className="skill-badge">⚡ React Expert</span>
                <span className="skill-badge">🎨 UI/UX Master</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} className="content-container">
            <div className="premium-badge">
              <span className="badge-icon">✨</span>
              <span className="badge-text">ABOUT ME</span>
            </div>

            <h2 className="main-heading">
              <span className="gradient-text">Building Digital</span>
              <br />
              <span className="gradient-text-alt">Experiences</span>
            </h2>

            <div className="description">
              <p>
                Hi! I'm <span className="highlight-cyan">Keerthana</span>, a
                passionate Software developer and UI/UX designer with over{" "}
                <span className="highlight-purple">1 year</span> of experience
                building modern web applications. I specialize in React.js and
                love creating beautiful, intuitive user interfaces that provide
                excellent user experiences.
              </p>
            </div>

            <div className="stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-card-3d">
                  <div
                    className="stat-gradient-overlay"
                    style={{ background: stat.gradient }}
                  />
                  <div className="stat-content">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <motion.button
              className="cta-button-3d"
              onClick={() => navigate("/about")}
              whileTap={{ scale: 0.97 }}
            >
              <span className="button-content">
                <span>Explore More About Me</span>
                <span className="button-arrow">→</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <SkillWheel />

      <section className="home-section">
        <motion.div {...fadeUp} className="section-header">
          <div className="premium-badge" style={{ margin: "0 auto" }}>
            <span className="badge-icon">💼</span>
            <span className="badge-text">PORTFOLIO</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="section-description">
            Check out some of my recent work and creative projects
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                className="project-card-modern"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                onClick={() => navigate("/projects")}
              >
                <div className="project-icon-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-thumb"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tech.slice(0, 3).map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button type="button" className="project-button">
                    View Project →
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="view-all-container">
          <motion.button
            className="view-all-button"
            onClick={() => navigate("/projects")}
            whileTap={{ scale: 0.97 }}
          >
            <span>View All Projects</span>
            <span className="button-arrow">→</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
