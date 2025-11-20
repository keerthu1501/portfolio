export default function Footer() {
  return (
    <footer style={{ 
      textAlign: "center", 
      padding: "2rem 1rem", 
      marginTop: "4rem",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <p style={{ 
        color: "#9ca3af",
        fontSize: "0.875rem"
      }}>
        © {new Date().getFullYear()} Keerthana N — All rights reserved.
      </p>
      
      <div style={{ 
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap"
      }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:hello@keerthana.dev">Email</a>
      </div>
    </footer>
  );
}