import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="neon-text"
      >
        Hi, I'm Keerthana
      </motion.h1>

      <p className="hero-subtitle">
        React.js Developer • UI/UX Designer • Creative Frontend Engineer
      </p>

      <Link to="/contact" className="btn">
        Hire Me
      </Link>
    </section>
  );
}
