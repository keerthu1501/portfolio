import { motion } from "framer-motion";
import { useState } from "react";

// Path to resume in assets folder
import resumeFile from "../common/assets/keerthana_N-Resume.pdf";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React.js", icon: "⚛️", level: 90, color: "#61dafb" },
    { name: "React Native", icon: "📱", level: 85, color: "#61dafb" },
    { name: "JavaScript", icon: "⚡", level: 88, color: "#f7df1e" },
    { name: "Figma", icon: "🎨", level: 92, color: "#f24e1e" },
    { name: "UI/UX Design", icon: "✨", level: 90, color: "#a855f7" },
    { name: "API Integration", icon: "🔗", level: 85, color: "#10b981" },
    { name: "AWS", icon: "☁️", level: 75, color: "#ff9900" },
    { name: "Git", icon: "🔀", level: 80, color: "#f05032" }
  ];

  const interests = [
    { icon: "🎨", title: "Design Trends", desc: "Exploring modern UI/UX patterns" },
    { icon: "🌐", title: "Open Source", desc: "Contributing to community projects" },
    { icon: "🚀", title: "New Tech", desc: "Learning cutting-edge frameworks" },
    { icon: "📚", title: "Continuous Learning", desc: "Always expanding my skillset" }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: "☁️" },
    { name: "React Development", issuer: "Coursera", icon: "⚛️" }
  ];

  return (
    <main style={{ 
      padding: "3rem 1rem", 
      maxWidth: "1400px", 
      margin: "0 auto",
      minHeight: "100vh"
    }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          marginBottom: "4rem"
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          style={{
            display: "inline-block",
            marginBottom: "2rem"
          }}
        >
          <div style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22d3ee 0%, #a855f7 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "5rem",
            boxShadow: "0 20px 60px rgba(168, 85, 247, 0.4)",
            position: "relative",
            overflow: "hidden"
          }}>
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)",
                pointerEvents: "none"
              }}
            />
            👩‍💻
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="neon-text"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            marginBottom: "1rem",
            lineHeight: 1.2
          }}
        >
          Hi, I'm Keerthana 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
            color: "#22d3ee",
            fontWeight: 600,
            marginBottom: "1rem"
          }}
        >
          React.js Developer & UI/UX Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#d1d5db",
            fontSize: "1.0625rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6
          }}
        >
          📍 Based in Chennai | 🌏 Tamil, English
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="glass"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            gridColumn: "span 2",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <h2 style={{
            color: "#22d3ee",
            fontSize: "1.75rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>📖</span> About Me
          </h2>
          
          <p style={{
            color: "#e0e8f0",
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem"
          }}>
            React.js Developer, UI/UX Designer, and technology enthusiast with over <strong style={{ color: "#22d3ee" }}>1 year of professional experience</strong> building interactive web and mobile applications. Passionate about responsive design, performance optimization, and crafting user-centric experiences.
          </p>
          
          <p style={{
            color: "#e0e8f0",
            fontSize: "1.0625rem",
            lineHeight: 1.8,
            marginBottom: "1.5rem"
          }}>
            Skilled in <strong style={{ color: "#a855f7" }}>React.js, React Native, JavaScript, Figma</strong>, and API integrations. Previously contributed to successful projects for startups and agencies in Chennai and beyond. <strong style={{ color: "#10b981" }}>AWS Cloud Practitioner & Coursera certified</strong>.
          </p>
          
          <p style={{
            color: "#e0e8f0",
            fontSize: "1.0625rem",
            lineHeight: 1.8
          }}>
            Beyond development, I love exploring new design trends, contributing to open-source projects, and learning cutting-edge web technologies.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="glass"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <h3 style={{
            color: "#22d3ee",
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>📊</span> Quick Stats
          </h3>
          
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}>
            {[
              { label: "Experience", value: "1+ Years", icon: "💼", color: "#22d3ee" },
              { label: "Projects", value: "10+", icon: "🚀", color: "#a855f7" },
              { label: "Technologies", value: "15+", icon: "⚡", color: "#10b981" },
              { label: "Certifications", value: "2", icon: "🎓", color: "#f59e0b" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  background: `${stat.color}10`,
                  borderRadius: "0.75rem",
                  border: `1px solid ${stat.color}30`
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ fontSize: "1.5rem" }}>{stat.icon}</span>
                  <span style={{ color: "#d1d5db", fontSize: "0.9375rem" }}>
                    {stat.label}
                  </span>
                </div>
                <span style={{
                  color: stat.color,
                  fontSize: "1.25rem",
                  fontWeight: 700
                }}>
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass"
        style={{
          padding: "2.5rem",
          borderRadius: "1.5rem",
          marginBottom: "3rem",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <h2 style={{
          color: "#22d3ee",
          fontSize: "1.75rem",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span>💪</span> Skills & Expertise
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.05 }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
              style={{
                padding: "1.5rem",
                background: hoveredSkill === index 
                  ? `${skill.color}15` 
                  : "rgba(255, 255, 255, 0.03)",
                borderRadius: "1rem",
                border: `2px solid ${hoveredSkill === index ? skill.color : "rgba(255, 255, 255, 0.1)"}`,
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ fontSize: "1.75rem" }}>{skill.icon}</span>
                  <span style={{
                    color: "#f3f4f6",
                    fontSize: "1rem",
                    fontWeight: 600
                  }}>
                    {skill.name}
                  </span>
                </div>
                <span style={{
                  color: skill.color,
                  fontSize: "0.875rem",
                  fontWeight: 700
                }}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div style={{
                width: "100%",
                height: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                overflow: "hidden"
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 1 + index * 0.05, duration: 1, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    borderRadius: "10px"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interests & Certifications Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="glass"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <h3 style={{
            color: "#22d3ee",
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>❤️</span> Interests
          </h3>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "2rem" }}>{interest.icon}</span>
                <div>
                  <div style={{
                    color: "#f3f4f6",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "0.25rem"
                  }}>
                    {interest.title}
                  </div>
                  <div style={{
                    color: "#9ca3af",
                    fontSize: "0.875rem"
                  }}>
                    {interest.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="glass"
          style={{
            padding: "2.5rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <h3 style={{
            color: "#22d3ee",
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span>🎓</span> Certifications
          </h3>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  padding: "1.5rem",
                  background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "0.5rem"
                }}>
                  <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                  <div>
                    <div style={{
                      color: "#f3f4f6",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      marginBottom: "0.25rem"
                    }}>
                      {cert.name}
                    </div>
                    <div style={{
                      color: "#a855f7",
                      fontSize: "0.875rem",
                      fontWeight: 500
                    }}>
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Portfolio Links */}
          <div style={{ marginTop: "2rem" }}>
            <h4 style={{
              color: "#22d3ee",
              fontSize: "1.125rem",
              marginBottom: "1rem"
            }}>
              🔗 Connect With Me
            </h4>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem"
            }}>
              <motion.a
                href="https://github.com/keerthu1501"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💻</span>
                <div>
                  <div style={{ color: "#22d3ee", fontSize: "0.875rem", fontWeight: 600 }}>
                    GitHub
                  </div>
                  <div style={{ color: "#9ca3af", fontSize: "0.75rem" }}>
                    github.com/keerthu1501
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/keerthana-nainiyappan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💼</span>
                <div>
                  <div style={{ color: "#0ea5e9", fontSize: "0.875rem", fontWeight: 600 }}>
                    LinkedIn
                  </div>
                  <div style={{ color: "#9ca3af", fontSize: "0.75rem" }}>
                    linkedin.com/in/keerthana-nainiyappan
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="glass"
        style={{
          padding: "3rem 2rem",
          borderRadius: "1.5rem",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
          border: "1px solid rgba(168, 85, 247, 0.3)"
        }}
      >
        <h2 style={{
          color: "#f3f4f6",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          marginBottom: "1rem"
        }}>
          Let's Work Together! 🚀
        </h2>
        
        <p style={{
          color: "#d1d5db",
          fontSize: "1.0625rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          margin: "0 auto 2rem"
        }}>
          Interested in collaborating or have a project in mind? I'm always open to new opportunities!
        </p>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <motion.a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)",
              color: "#fff",
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(34, 211, 238, 0.3)",
              border: "none",
              cursor: "pointer"
            }}
          >
            <span>👁️</span>
            View Resume
          </motion.a>

          <motion.a
            href={resumeFile}
            download="Keerthana_N-Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
              color: "#fff",
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
              border: "none",
              cursor: "pointer"
            }}
          >
            <span>⬇️</span>
            Download Resume
          </motion.a>

          <motion.a
            href="mailto:keerthananainiyappan1525@gmail.com?subject=Hiring%20Keerthana%20Nainiappan"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2rem",
              background: "linear-gradient(90deg, #a855f7 0%, #9333ea 100%)",
              color: "#fff",
              borderRadius: "0.75rem",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3)",
              border: "none",
              cursor: "pointer"
            }}
          >
            <span>💼</span>
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1024px) {
          main > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
          
          .glass[style*="grid-column: span 2"] {
            grid-column: span 1 !important;
          }
        }

        @media (max-width: 768px) {
          main {
            padding: 2rem 1rem !important;
          }

          .glass {
            padding: 1.5rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }

          h3 {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          main > div:last-of-type {
            padding: 2rem 1.5rem !important;
          }

          main > div:last-of-type > div {
            flex-direction: column;
            width: 100%;
          }

          main > div:last-of-type a {
            width: 100%;
            justify-content: center;
          }
        }

        a:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </main>
  );
}