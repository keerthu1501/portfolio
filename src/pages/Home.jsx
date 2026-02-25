import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import Hero from "../components/Hero";
import SkillWheel from "../components/SkillWheel";
import myImage from "../common/assets/my-photo.jpg";

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Advanced mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x: x * 30, y: y * 30 });
      mouseX.set(x * 50);
      mouseY.set(y * 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth parallax scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Multi-layer parallax
  const y1 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, 150]);
  const y4 = useTransform(smoothProgress, [0, 1], [0, 300]);
  const scale1 = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity1 = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 0.5, 0]);
  const opacity2 = useTransform(smoothProgress, [0.3, 0.5, 0.8], [0, 1, 1]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} style={{ position: "relative", background: "#0a0a0f" }}>
      {/* Ultra-Modern Animated Background */}
      <div className="cosmic-background">
        <motion.div 
          className="gradient-orb orb-1"
          style={{ x: mouseX, y: mouseY }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          style={{ x: useTransform(mouseX, x => -x * 0.5), y: useTransform(mouseY, y => -y * 0.5) }}
        />
        <motion.div 
          className="gradient-orb orb-3"
          style={{ x: useTransform(mouseX, x => x * 0.3), y: useTransform(mouseY, y => -y * 0.7) }}
        />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="mesh-gradient" />

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${(i * 3.3) % 100}%`,
              top: `${(i * 7) % 100}%`
            }}
          />
        ))}
      </div>

      <Hero />

      {/* About Section with Ultra-Modern Design */}
      <section 
        ref={aboutRef}
        style={{
          padding: "min(10vh, 120px) 5vw",
          maxWidth: "1600px",
          margin: "0 auto",
          position: "relative"
        }}
      >
        {/* Background Image Layers with Parallax */}
        <motion.div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "120%",
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            y: y1,
            scale: scale1,
            filter: "blur(2px)",
            zIndex: -1
          }}
        />

        {/* <motion.div
          style={{
            position: "absolute",
            top: "10%",
            right: "-20%",
            width: "min(800px, 80vw)",
            height: "min(800px, 80vw)",
            background Image: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50%",
            opacity: 0.15,
            y: y2,
            scale: scale1,
            filter: "blur(40px)",
            zIndex: -1,
            x: mousePosition.x,
            mixBlendMode: "screen"
          }}
        /> */}

        <div className="container-grid">
          {/* Left Side - 3D Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="profile-container"
          >
            <motion.div 
              className="profile-card"
              style={{
                rotateY: useTransform(mouseX, [-50, 50], [-8, 8]),
                rotateX: useTransform(mouseY, [-50, 50], [8, -8])
              }}
            >
              {/* Holographic Background */}
              <div className="holographic-bg" />
              
              {/* Profile Image Area */}
              <div className="profile-image-container">
                {/* Multiple overlapping layers for depth */}
                <motion.div
                  className="image-layer layer-1"
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    backgroundImage: `url(${myImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
                
                <motion.div
                  className="image-layer layer-2"
                  animate={{ scale: [1.05, 1, 1.05], rotate: [2, -2, 2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Geometric Overlay Pattern */}
                <div className="geometric-pattern">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="geo-line"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      style={{
                        top: `${8 + i * 8}%`,
                        background: i % 2 === 0 ? 
                          "linear-gradient(90deg, transparent, #22d3ee, transparent)" :
                          "linear-gradient(90deg, transparent, #a855f7, transparent)"
                      }}
                    />
                  ))}
                </div>

                {/* Orbiting Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="orbit-ring"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      width: `${100 + i * 20}%`,
                      height: `${100 + i * 20}%`,
                      border: `2px solid ${i % 2 === 0 ? "#22d3ee" : "#a855f7"}`,
                      opacity: 0.3 - i * 0.1
                    }}
                  />
                ))}

                {/* Central Icon/Avatar */}
                {/* <motion.div
                  className="avatar-icon"
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👩‍💻
                </motion.div> */}

                {/* Particle System */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="floating-particle"
                    animate={{
                      y: [0, -60, -120],
                      x: [0, Math.sin(i) * 40, Math.sin(i) * 80],
                      opacity: [1, 0.5, 0],
                      scale: [0.5, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                    style={{
                      left: `${50 + Math.cos(i * (Math.PI / 10)) * 40}%`,
                      top: `${50 + Math.sin(i * (Math.PI / 10)) * 40}%`,
                      background: i % 2 === 0 ? "#22d3ee" : "#a855f7"
                    }}
                  />
                ))}
              </div>

              {/* Info Badge */}
              <motion.div
                className="info-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="status-dot"
                />
                <span>Available for Projects</span>
              </motion.div>

              {/* Glass Card Footer */}
              <div className="card-footer">
                <motion.div 
                  className="skill-badge"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="badge-icon">⚡</span>
                  <span>React Expert</span>
                </motion.div>
                <motion.div 
                  className="skill-badge"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="badge-icon">🎨</span>
                  <span>UI/UX Master</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            <div className="floating-tech-icons">
              {[
                { icon: "⚛️", color: "#22d3ee", delay: 0 },
                { icon: "🎨", color: "#a855f7", delay: 0.2 },
                { icon: "💻", color: "#10b981", delay: 0.4 },
                { icon: "🚀", color: "#ec4899", delay: 0.6 }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="tech-icon-float"
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                  style={{
                    boxShadow: `0 0 30px ${item.color}`,
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="content-container"
          >
            {/* Premium Badge */}
            <motion.div
              className="premium-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="badge-shine"
              />
              <span className="badge-icon">✨</span>
              <span className="badge-text">ABOUT ME</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="main-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Building Digital
              </motion.span>
              <br />
              <motion.span
                className="gradient-text-alt"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Experiences
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.div
              className="description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p>
                Hi! I'm <span className="highlight-cyan">Keerthana</span>, a passionate Software developer and UI/UX designer 
                with over <span className="highlight-purple">1 years</span> of experience building modern web applications. 
                I specialize in React.js and love creating beautiful, intuitive user 
                interfaces that provide excellent user experiences...
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="stats-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { 
                  number: "1+", 
                  label: "Years Experience", 
                  icon: "⚡",
                  gradient: "linear-gradient(135deg, #22d3ee, #0ea5e9)",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80"
                },
                { 
                  number: "10+", 
                  label: "Projects Done", 
                  icon: "🚀",
                  gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card-3d"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="stat-bg-image"
                    style={{ backgroundImage: `url('${stat.image}')` }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="stat-gradient-overlay"
                    style={{ background: stat.gradient }}
                  />

                  {/* Content */}
                  <div className="stat-content">
                    <motion.div
                      className="stat-icon"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="stat-number"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="stat-label">{stat.label}</div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="stat-shine"
                    animate={{
                      x: ["-200%", "200%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="cta-button-3d"
              onClick={() => navigate('/about')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-content">
                <span className="button-text">Explore More About Me</span>
                <motion.span
                  className="button-arrow"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="button-glow" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.div
        style={{
          y: y3,
          opacity: opacity2
        }}
      >
        <SkillWheel />
      </motion.div>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        style={{
          padding: "min(10vh, 120px) 5vw",
          maxWidth: "1600px",
          margin: "0 auto",
          position: "relative"
        }}
      >
        {/* Background Parallax Layer */}
        <motion.div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "100%",
            backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
            y: y4,
            filter: "blur(3px)",
            zIndex: -1
          }}
        />

        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="premium-badge"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="badge-shine"
            />
            <span className="badge-icon">💼</span>
            <span className="badge-text">PORTFOLIO</span>
          </motion.div>

          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          
          <p className="section-description">
            Check out some of my recent work and creative projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {[
            {
              emoji: "🚀",
              title: "E-Commerce Platform",
              desc: "A full-stack e-commerce platform with cart functionality...",
              image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
              gradient: "linear-gradient(135deg, #22d3ee, #0ea5e9)",
              tags: ["React", "Node.js", "MongoDB"]
            },
            {
              emoji: "💻",
              title: "Task Management App",
              desc: "Collaborative task management tool with real-time updates...",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
              gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
              tags: ["React", "Firebase", "Tailwind"]
            },
            {
              emoji: "🎨",
              title: "Weather Dashboard",
              desc: "Real-time weather dashboard with forecasts and maps...",
              image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
              gradient: "linear-gradient(135deg, #10b981, #22d3ee)",
              tags: ["React", "API", "Charts"]
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="project-card-modern"
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Background Image */}
              <div 
                className="project-bg-image"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Gradient Overlay */}
              <div 
                className="project-gradient-overlay"
                style={{ background: project.gradient }}
              />

              {/* Animated Border */}
              <motion.div
                className="project-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ background: project.gradient }}
              />

              {/* Project Icon */}
              <motion.div
                className="project-icon-container"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="project-emoji">{project.emoji}</span>
              </motion.div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>

                {/* Tech Stack */}
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="project-tag"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* View Button */}
                <motion.button
                  className="project-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="view-all-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="view-all-button"
            onClick={() => navigate('/projects')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </section>

      <style>{`
        /* ==================== BASE STYLES ==================== */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }

        /* ==================== COSMIC BACKGROUND ==================== */
        .cosmic-background {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          will-change: transform;
        }

        .orb-1 {
          width: min(800px, 50vw);
          height: min(800px, 50vw);
          background: radial-gradient(circle, #22d3ee 0%, transparent 70%);
          top: 10%;
          left: 20%;
        }

        .orb-2 {
          width: min(600px, 40vw);
          height: min(600px, 40vw);
          background: radial-gradient(circle, #a855f7 0%, transparent 70%);
          bottom: 20%;
          right: 15%;
        }

        .orb-3 {
          width: min(500px, 35vw);
          height: min(500px, 35vw);
          background: radial-gradient(circle, #ec4899 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .mesh-gradient {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        /* ==================== PARTICLES ==================== */
        .particles-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: -1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        /* ==================== CONTAINER GRID ==================== */
        .container-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
          gap: clamp(3rem, 5vw, 6rem);
          align-items: center;
        }

        /* ==================== PROFILE CARD ==================== */
        .profile-container {
          perspective: 2000px;
          position: relative;
        }

        .profile-card {
          position: relative;
          aspect-ratio: 1;
          max-width: 550px;
          margin: 0 auto;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .holographic-bg {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #22d3ee, #a855f7, #ec4899);
          border-radius: 2rem;
          opacity: 0.3;
          filter: blur(20px);
        }

        .profile-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          overflow: hidden;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            inset 0 0 100px rgba(34, 211, 238, 0.1);
        }

        .image-layer {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          filter: blur(2px);
          mix-blend-mode: screen;
        }

        .layer-2 {
          background: linear-gradient(135deg, #22d3ee30, #a855f730);
          opacity: 0.2;
        }

        .geometric-pattern {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .geo-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0.3;
          transform-origin: left;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        .avatar-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(6rem, 12vw, 10rem);
          filter: drop-shadow(0 0 40px rgba(34, 211, 238, 0.6));
          z-index: 2;
        }

        .floating-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 20px currentColor;
        }

        .info-badge {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 2rem;
          backdrop-filter: blur(10px);
          color: #10b981;
          font-size: 0.875rem;
          font-weight: 600;
          z-index: 3;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 15px #10b981;
        }

        .card-footer {
          position: absolute;
          bottom: -3rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 1rem;
          z-index: 3;
        }

        .skill-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .skill-badge:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }

        .badge-icon {
          font-size: 1.25rem;
        }

        .floating-tech-icons {
          position: absolute;
          inset: -10%;
          pointer-events: none;
        }

        .tech-icon-float {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .tech-icon-float:nth-child(1) { top: 10%; left: -5%; }
        .tech-icon-float:nth-child(2) { top: 25%; right: -5%; }
        .tech-icon-float:nth-child(3) { bottom: 30%; left: -8%; }
        .tech-icon-float:nth-child(4) { bottom: 15%; right: -8%; }

        /* ==================== CONTENT CONTAINER ==================== */
        .content-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 650px;
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 2rem;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          width: fit-content;
        }

        .badge-shine {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .badge-text {
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 2px;
          position: relative;
          z-index: 1;
        }

        .main-heading {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
        }

        .gradient-text {
          display: inline-block;
          background: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 80px rgba(34, 211, 238, 0.3);
        }

        .gradient-text-alt {
          display: inline-block;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #22d3ee 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-size: clamp(1.0625rem, 2vw, 1.25rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
        }

        .highlight-cyan {
          color: #22d3ee;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }

        .highlight-purple {
          color: #a855f7;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
        }

        /* ==================== STATS GRID ==================== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-card-3d {
          position: relative;
          aspect-ratio: 1.5;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stat-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          filter: blur(2px);
        }

        .stat-gradient-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.8;
        }

        .stat-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem;
          z-index: 2;
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
        }

        .stat-number {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          color: white;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
        }

        .stat-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-200%);
        }

        /* ==================== CTA BUTTON ==================== */
        .cta-button-3d {
          position: relative;
          padding: 1.5rem 3rem;
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          border: none;
          border-radius: 1.25rem;
          color: white;
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(168, 85, 247, 0.4),
            inset 0 0 60px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .button-content {
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 2;
        }

        .button-arrow {
          font-size: 1.5rem;
        }

        .button-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .cta-button-3d:hover .button-glow {
          opacity: 0.6;
        }

        /* ==================== PROJECTS SECTION ==================== */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          margin: 1.5rem 0;
        }

        .section-description {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
          perspective: 2000px;
        }

        .project-card-modern {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          transition: opacity 0.4s ease;
        }

        .project-card-modern:hover .project-bg-image {
          opacity: 0.25;
        }

        .project-gradient-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
        }

        .project-border {
          position: absolute;
          inset: -2px;
          border-radius: 2rem;
          opacity: 0;
          filter: blur(15px);
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .project-card-modern:hover .project-border {
          opacity: 0.6;
        }

        .project-icon-container {
          position: relative;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .project-emoji {
          font-size: 6rem;
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
        }

        .project-content {
          position: relative;
          padding: 2rem;
          z-index: 2;
        }

        .project-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.5rem;
        }

        .project-tags {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .project-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .project-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        .project-button {
          padding: 0.875rem 1.75rem;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(34, 211, 238, 0.3);
          border-radius: 0.75rem;
          color: #22d3ee;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .project-button:hover {
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2));
          transform: translateX(5px);
        }

        /* ==================== VIEW ALL BUTTON ==================== */
        .view-all-container {
          text-align: center;
        }

        .view-all-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 3rem;
          background: transparent;
          border: 2px solid rgba(168, 85, 247, 0.5);
          border-radius: 1.25rem;
          color: #a855f7;
          font-size: 1.125rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .view-all-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #22d3ee10, #a855f710);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .view-all-button:hover {
          border-color: #a855f7;
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
        }

        .view-all-button:hover::before {
          opacity: 1;
        }

        /* ==================== SCROLLBAR ==================== */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(10, 10, 15, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #22d3ee, #a855f7);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #0ea5e9, #ec4899);
        }

        /* ==================== RESPONSIVE DESIGN ==================== */
        @media (max-width: 1200px) {
          .floating-tech-icons {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .container-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .card-footer {
            position: relative;
            bottom: 0;
            margin-top: 2rem;
            flex-direction: column;
          }

          .cta-button-3d,
          .view-all-button {
            width: 100%;
            justify-content: center;
          }

          .main-heading {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .profile-card {
            max-width: 100%;
          }

          .tech-icon-float {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .premium-badge {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
          }

          .badge-icon {
            font-size: 1rem;
          }

          .stat-card-3d {
            aspect-ratio: 1.2;
          }

          .project-icon-container {
            height: 200px;
          }

          .project-emoji {
            font-size: 4rem;
          }

          section {
            padding: min(8vh, 80px) 1rem !important;
          }
        }

        /* ==================== REDUCED MOTION ==================== */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* ==================== SELECTION ==================== */
        ::selection {
          background: rgba(168, 85, 247, 0.3);
          color: white;
        }
      `}</style>
    </div>
  );
}