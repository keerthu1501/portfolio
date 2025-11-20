import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="container" style={{ 
      padding: "3rem 1rem",
      maxWidth: "900px"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="neon-text" style={{ 
          marginBottom: "2rem",
          textAlign: "center"
        }}>
          About Me
        </h1>
        
        <div className="glass" style={{ 
          padding: "2rem",
          borderRadius: "1rem",
          lineHeight: 1.8
        }}>
          <p style={{ marginBottom: "1.5rem", color: "#d1d5db" }}>
            Hi! I'm Keerthana, a passionate frontend developer and UI/UX designer 
            with over 3 years of experience building modern web applications.
          </p>
          
          <p style={{ marginBottom: "1.5rem", color: "#d1d5db" }}>
            I specialize in React.js and love creating beautiful, intuitive user 
            interfaces that provide excellent user experiences. My approach combines 
            technical expertise with creative design thinking.
          </p>
          
          <p style={{ marginBottom: "1.5rem", color: "#d1d5db" }}>
            When I'm not coding, you can find me exploring new design trends, 
            contributing to open-source projects, or learning about the latest 
            web technologies.
          </p>
          
          <h3 style={{ 
            color: "#22d3ee",
            marginTop: "2rem",
            marginBottom: "1rem"
          }}>
            My Journey
          </h3>
          
          <p style={{ color: "#d1d5db" }}>
            Started as a self-taught developer, I've worked with various startups 
            and agencies, helping them build scalable and maintainable web applications. 
            I'm constantly learning and evolving my skills to stay current with 
            industry best practices.
          </p>
        </div>
      </motion.div>
    </main>
  );
}