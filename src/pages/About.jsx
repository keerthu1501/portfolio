import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import resumeFile from "../common/assets/Keerthana_N_Resume-Developer.pdf";
import education from "../data/education";
import myPhoto from "../common/assets/my-photo.jpeg";

export default function About() {
  const [shielded, setShielded] = useState(false);

  useEffect(() => {
    const block = (event) => event.preventDefault();

    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const blocked =
        (event.ctrlKey || event.metaKey) && ["s", "p", "u"].includes(key);
      if (blocked || key === "printscreen") {
        event.preventDefault();
        setShielded(true);
        window.setTimeout(() => setShielded(false), 1200);
      }
    };

    const shield = () => setShielded(true);
    const unshield = () => setShielded(false);
    const onVisibility = () => {
      document.hidden ? shield() : unshield();
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
  }, []);
  const skillGroups = [
    {
      title: "React & Web",
      icon: "⚛️",
      color: "#22d3ee",
      items: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React Hooks",
        "Redux Toolkit",
        "RTK Query",
        "Axios",
        "REST APIs",
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      color: "#61dafb",
      items: [
        "React Native",
        "React Native CLI",
        "Expo",
        "React Navigation",
        "Android",
        "AsyncStorage",
        "MMKV",
        "Firebase",
        "FCM",
        "Notifee",
      ],
    },
    {
      title: "Real-time & Maps",
      icon: "📍",
      color: "#10b981",
      items: [
        "WebSocket",
        "Google Maps",
        "Geolocation",
        "Real-time Tracking",
        "Push Notifications",
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      color: "#a855f7",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Swagger",
        "Android Studio",
        "VS Code",
        "ADB",
      ],
    },
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
      {/* Hero with protected photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          userSelect: "none",
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="about-photo-wrap">
          <div
            className="about-photo"
            style={{ backgroundImage: `url(${myPhoto})` }}
            role="img"
            aria-label="Keerthana"
          />
          <div className="about-photo-watermark" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i}>Keerthana N · View Only</span>
            ))}
          </div>
          <div className="about-photo-shield" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="neon-text"
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            margin: "1.1rem 0 0.5rem",
            lineHeight: 1.2
          }}
        >
          Hi, I'm Keerthana
        </motion.h1>

        <p style={{
          fontSize: "clamp(1.05rem, 3vw, 1.35rem)",
          color: "#22d3ee",
          fontWeight: 600,
          marginBottom: "0.5rem"
        }}>
          React.js Developer & UI/UX Designer
        </p>

        <p style={{
          color: "#d1d5db",
          fontSize: "1rem"
        }}>
          📍 Based in Chennai | 🌏 Tamil, English
        </p>
        <p className="about-photo-note">View only · download disabled</p>
      </motion.div>

      {shielded && (
        <div className="about-privacy-shield">
          <p>Protected view</p>
        </div>
      )}

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
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem"
        }}>
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.06 }}
              style={{
                padding: "1.25rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "1rem",
                border: `1px solid ${group.color}40`
              }}
            >
              <h3 style={{
                color: group.color,
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <span>{group.icon}</span>
                {group.title}
              </h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem"
              }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "0.4rem 0.7rem",
                      borderRadius: "999px",
                      background: `${group.color}14`,
                      border: `1px solid ${group.color}33`,
                      color: "#e5e7eb",
                      fontSize: "0.8rem",
                      fontWeight: 600
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05 }}
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
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span>🎓</span> Education
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem"
        }}>
          {education.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.03)",
                border: `1px solid ${item.color}40`
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{item.icon}</div>
              <h3 style={{ color: "#f3f4f6", fontSize: "1.05rem", marginBottom: "0.2rem" }}>
                {item.title}
              </h3>
              <p style={{ color: "#9ca3af", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                {item.subtitle} · {item.year}
              </p>
              <div style={{ color: item.color, fontSize: "1.35rem", fontWeight: 700 }}>
                {item.score}
              </div>
              <div style={{ color: "#9ca3af", fontSize: "0.75rem", marginTop: "0.15rem" }}>
                {item.scoreLabel}
              </div>

              {item.years && (
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  marginTop: "0.9rem"
                }}>
                  {item.years.map((year) => (
                    <div
                      key={year.label}
                      style={{
                        padding: "0.55rem 0.65rem",
                        borderRadius: "0.6rem",
                        background: "rgba(168, 85, 247, 0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "0.4rem",
                        fontSize: "0.78rem"
                      }}
                    >
                      <span style={{ color: "#d1d5db" }}>{year.label}</span>
                      <span style={{ color: item.color, fontWeight: 700 }}>{year.score}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
        .about-photo-wrap {
          position: relative;
          width: min(180px, 42vw);
          aspect-ratio: 1;
          margin: 0 auto 0.35rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(168, 85, 247, 0.45);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.28);
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .about-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 18%;
          pointer-events: none;
        }

        .about-photo-watermark {
          position: absolute;
          inset: -40%;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.2rem 0.8rem;
          transform: rotate(-24deg);
          opacity: 0.18;
          pointer-events: none;
          color: #fff;
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .about-photo-shield {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: transparent;
        }

        .about-photo-note {
          margin-top: 0.65rem;
          color: #9ca3af;
          font-size: 0.75rem;
        }

        .about-privacy-shield {
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
          .about-photo-wrap,
          .about-privacy-shield {
            display: none !important;
          }
        }

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