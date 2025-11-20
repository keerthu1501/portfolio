import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass project-card"
      style={{
        padding: "1.5rem",
        borderRadius: "1rem",
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 12px 30px rgba(168, 85, 247, 0.3)"
      }}
    >
      {project.image && (
        <img 
          src={project.image} 
          alt={project.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "0.5rem",
            marginBottom: "1rem"
          }}
        />
      )}
      
      <h3 style={{ 
        color: "#22d3ee",
        fontSize: "1.25rem",
        marginBottom: "0.5rem"
      }}>
        {project.title}
      </h3>
      
      <p style={{ 
        color: "#d1d5db",
        fontSize: "0.875rem",
        marginBottom: "1rem",
        flex: 1
      }}>
        {project.description}
      </p>
      
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem"
      }}>
        {project.tech?.map((tech, i) => (
          <span 
            key={i}
            style={{
              padding: "0.25rem 0.75rem",
              background: "rgba(168, 85, 247, 0.2)",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
              color: "#a855f7"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div style={{ display: "flex", gap: "1rem" }}>
        {project.github && (
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: "0.875rem" }}
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: "0.875rem" }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}