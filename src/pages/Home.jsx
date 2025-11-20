import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SkillWheel from "../components/SkillWheel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      {/* About Preview Section */}
      <section style={{
        padding: "4rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "center"
        }}>
          {/* Left Side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{
              width: "100%",
              maxWidth: "400px",
              aspectRatio: "1",
              background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
              borderRadius: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              {/* Animated Background Circles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
                  borderRadius: "50%",
                  opacity: 0.1,
                  filter: "blur(40px)"
                }}
              />
              
              {/* Profile Placeholder */}
              <div style={{
                fontSize: "8rem",
                filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))"
              }}>
                👩‍💻
              </div>
            </div>
          </motion.div>

          {/* Right Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                color: "#a855f7",
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                display: "inline-block",
                marginBottom: "0.5rem"
              }}
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="neon-text"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.2
              }}
            >
              Building Digital Experiences
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{
                color: "#d1d5db",
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                marginBottom: "2rem"
              }}
            >
              Hi! I'm Keerthana, a passionate frontend developer and UI/UX designer 
              with over 1 years of experience building modern web applications. 
              I specialize in React.js and love creating beautiful, intuitive user 
              interfaces that provide excellent user experiences...
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                marginBottom: "2rem"
              }}
            >
              {[
                { number: "1+", label: "Years Experience" },
                { number: "10+", label: "Projects Done" },
                // { number: "15+", label: "Happy Clients" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass"
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    textAlign: "center"
                  }}
                >
                  <div style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.25rem"
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: "0.75rem",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Explore More Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              onClick={() => navigate('/about')}
              className="explore-btn"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
                border: "none",
                borderRadius: "0.75rem",
                color: "white",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
            >
              <span>Explore More About Me</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillWheel />

      {/* Projects Preview Section */}
      <section style={{
        padding: "4rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span style={{
            color: "#a855f7",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px",
            display: "inline-block",
            marginBottom: "0.5rem"
          }}>
            Portfolio
          </span>
          <h2 className="neon-text" style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            marginBottom: "1rem"
          }}>
            Featured Projects
          </h2>
          <p style={{
            color: "#d1d5db",
            fontSize: "1.0625rem",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Check out some of my recent work and creative projects
          </p>
        </motion.div>

        {/* Project Cards Grid - Show First 3 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass project-preview-card"
              style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div style={{
                width: "100%",
                height: "200px",
                background: "linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
                borderRadius: "0.75rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem"
              }}>
                {["🚀", "💻", "🎨"][index]}
              </div>
              <h3 style={{
                color: "#22d3ee",
                fontSize: "1.25rem",
                marginBottom: "0.5rem"
              }}>
                {["E-Commerce Platform", "Task Management App", "Weather Dashboard"][index]}
              </h3>
              <p style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                lineHeight: 1.6
              }}>
                {[
                  "A full-stack e-commerce platform with cart functionality...",
                  "Collaborative task management tool with real-time updates...",
                  "Real-time weather dashboard with forecasts and maps..."
                ][index]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: "center" }}
        >
          <motion.button
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "1rem 2.5rem",
              background: "transparent",
              border: "2px solid #a855f7",
              borderRadius: "0.75rem",
              color: "#a855f7",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(168, 85, 247, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
          >
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </section>

      <style>{`
        /* Explore Button Hover Effect */
        .explore-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .explore-btn:hover::before {
          left: 100%;
        }

        /* Project Card Hover Effect */
        .project-preview-card:hover {
          border-color: rgba(168, 85, 247, 0.3);
          box-shadow: 0 12px 30px rgba(168, 85, 247, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          section {
            padding: 3rem 1rem !important;
          }

          .explore-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .project-preview-card > div:first-child {
            height: 160px !important;
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}