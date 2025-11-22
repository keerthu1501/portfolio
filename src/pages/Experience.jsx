import { motion } from "framer-motion";
import { useState } from "react";
import experience, { calculateDuration, formatDate, calculateTotalExperience } from "../data/experience";

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <main style={{ padding: "3rem 1rem", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            color: "#a855f7",
            fontSize: "0.875rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}
        >
          Career Journey
        </motion.span>
        
        <h1 className="neon-text" style={{
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          margin: "1rem 0",
          lineHeight: 1.2
        }}>
          My Experience
        </h1>
        
        <p style={{
          color: "#d1d5db",
          fontSize: "1.125rem",
          maxWidth: "700px",
          margin: "0 auto 2rem"
        }}>
          {calculateTotalExperience()} of professional experience in web development
        </p>

        {/* Total Experience Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="glass"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            borderRadius: "1rem"
          }}
        >
          <div style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            {experience.length}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            Org Work Experience
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline and Details Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        gap: "3rem",
        alignItems: "start"
      }}
      className="experience-grid"
      >
        {/* Left Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="timeline-container"
          style={{
            position: "sticky",
            top: "100px"
          }}
        >
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              onClick={() => setSelectedJob(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ x: 10 }}
              style={{
                padding: "1.5rem",
                marginBottom: "1rem",
                borderRadius: "1rem",
                cursor: "pointer",
                position: "relative",
                background: selectedJob === index 
                  ? "rgba(168, 85, 247, 0.15)" 
                  : "rgba(255, 255, 255, 0.05)",
                border: `2px solid ${selectedJob === index ? job.color : "rgba(255, 255, 255, 0.1)"}`,
                transition: "all 0.3s ease"
              }}
            >
              {/* Timeline Dot */}
              <motion.div
                animate={{
                  scale: selectedJob === index ? 1.2 : 1,
                  backgroundColor: selectedJob === index ? job.color : "rgba(255, 255, 255, 0.3)"
                }}
                style={{
                  position: "absolute",
                  left: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "3px solid #0f172a"
                }}
              />

              {/* Company Logo */}
              <div style={{
                fontSize: "2rem",
                marginBottom: "0.5rem"
              }}>
                {job.logo}
              </div>

              <h3 style={{
                color: selectedJob === index ? "#22d3ee" : "#f3f4f6",
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: "0.25rem"
              }}>
                {job.company}
              </h3>

              <p style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                marginBottom: "0.5rem"
              }}>
                {job.role}
              </p>

              <div style={{
                color: job.color,
                fontSize: "0.75rem",
                fontWeight: 600
              }}>
                {calculateDuration(job.startDate, job.endDate)}
              </div>
            </motion.div>
          ))}

          {/* Vertical Line */}
          <div style={{
            position: "absolute",
            left: "0",
            top: "2rem",
            bottom: "2rem",
            width: "2px",
            background: "linear-gradient(180deg, #22d3ee 0%, #a855f7 100%)",
            opacity: 0.3
          }} />
        </motion.div>

        {/* Right Details Panel */}
        <motion.div
          key={selectedJob}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            minHeight: "500px"
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem"
            }}>
              <span style={{ fontSize: "3rem" }}>
                {experience[selectedJob].logo}
              </span>
              <div>
                <h2 style={{
                  color: "#22d3ee",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  marginBottom: "0.25rem"
                }}>
                  {experience[selectedJob].role}
                </h2>
                <p style={{
                  color: "#a855f7",
                  fontSize: "1.125rem",
                  fontWeight: 600
                }}>
                  {experience[selectedJob].company}
                </p>
              </div>
            </div>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1rem"
            }}>
              <span className="glass" style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "#22d3ee"
              }}>
                📅 {formatDate(experience[selectedJob].startDate)} - {formatDate(experience[selectedJob].endDate)}
              </span>
              <span className="glass" style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "#10b981"
              }}>
                ⏱️ {calculateDuration(experience[selectedJob].startDate, experience[selectedJob].endDate)}
              </span>
              <span className="glass" style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "#f59e0b"
              }}>
                📍 {experience[selectedJob].location}
              </span>
              <span className="glass" style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                color: "#a855f7"
              }}>
                💼 {experience[selectedJob].type}
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            color: "#d1d5db",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            marginBottom: "2rem"
          }}>
            {experience[selectedJob].description}
          </p>

          {/* Responsibilities */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{
              color: "#22d3ee",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "1rem"
            }}>
              Key Responsibilities
            </h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}>
              {experience[selectedJob].responsibilities.map((resp, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    color: "#9ca3af",
                    fontSize: "0.9375rem",
                    paddingLeft: "1.5rem",
                    position: "relative"
                  }}
                >
                  <span style={{
                    position: "absolute",
                    left: 0,
                    color: experience[selectedJob].color
                  }}>
                    ✓
                  </span>
                  {resp}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{
              color: "#22d3ee",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "1rem"
            }}>
              Technologies Used
            </h3>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem"
            }}>
              {experience[selectedJob].technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    padding: "0.5rem 1rem",
                    background: `${experience[selectedJob].color}20`,
                    border: `1px solid ${experience[selectedJob].color}`,
                    borderRadius: "0.5rem",
                    color: experience[selectedJob].color,
                    fontSize: "0.875rem",
                    fontWeight: 600
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 style={{
              color: "#22d3ee",
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "1rem"
            }}>
              Key Achievements
            </h3>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              {experience[selectedJob].achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass"
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    borderLeft: `3px solid ${experience[selectedJob].color}`
                  }}
                >
                  <span style={{
                    color: "#f3f4f6",
                    fontSize: "0.9375rem"
                  }}>
                    🏆 {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* Responsive Design */
        @media (max-width: 1024px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .timeline-container {
            position: relative !important;
            top: 0 !important;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          }

          .timeline-container > div {
            margin-bottom: 0 !important;
          }
        }

        @media (max-width: 768px) {
          main {
            padding: 2rem 1rem !important;
          }

          .glass {
            padding: 1.5rem !important;
          }

          .timeline-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}