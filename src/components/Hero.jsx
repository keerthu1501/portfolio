import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="container" style={{ marginTop: "60px", textAlign:"center" }}>
      <motion.h1
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        className="neon-text"
        style={{ fontSize:"48px" }}
      >
        Hi, I'm Keerthana 👋
      </motion.h1>

      <p style={{ color:"#ccc", marginTop:"10px" }}>
        React.js Developer • UI/UX Designer • Creative Frontend Engineer
      </p>

<Link to="/contact">
  <button className="btn" style={{ marginTop:"20px" }}>Hire Me</button>
</Link>
    </section>
  );
}
