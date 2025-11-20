import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  // Detect scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className="glass navbar-header" 
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none"
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="neon-text" style={{ 
            fontSize: "clamp(1.25rem, 4vw, 1.5rem)", 
            margin: 0 
          }}>
            Keerthana.dev
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ 
          display: "flex", 
          gap: "clamp(1rem, 3vw, 2rem)",
          alignItems: "center",
          textDecoration: "none",
        }}>
          <Link className={path === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={path === "/projects" ? "active" : ""} to="/projects">Projects</Link>
          <Link className={path === "/about" ? "active" : ""} to="/about">About</Link>
          <Link className={path === "/experience" ? "active" : ""} to="/experience">Experience</Link>
          <Link className={path === "/contact" ? "active" : ""} to="/contact">Contact</Link>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            zIndex: 1001
          }}
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <Link className={path === "/" ? "active" : ""} to="/">
          <span className="nav-icon">🏠</span>
          Home
        </Link>
        <Link className={path === "/projects" ? "active" : ""} to="/projects">
          <span className="nav-icon">💼</span>
          Projects
        </Link>
        <Link className={path === "/about" ? "active" : ""} to="/about">
          <span className="nav-icon">👤</span>
          About
        </Link>
        <Link className={path === "/experience" ? "active" : ""} to="/experience">
    <span className="nav-icon">💼</span>
    Experience
  </Link>
        <Link className={path === "/contact" ? "active" : ""} to="/contact">
          <span className="nav-icon">✉️</span>
          Contact
        </Link>
      </nav>

      {/* Styles */}
      <style>{`
        /* Desktop Navigation - Default */
        .desktop-nav {
          display: flex;
        }
        
        .hamburger-btn {
          display: none;
        }
        
        .mobile-nav,
        .mobile-overlay {
          display: none;
        }

        /* Hamburger Icon */
        .hamburger {
          width: 28px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #22d3ee 0%, #a855f7 100%);
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(8.5px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-8.5px) rotate(-45deg);
        }

        /* Mobile Responsive - Tablet and Below */
        @media (max-width: 768px) {
          .navbar-header {
            padding: 12px 20px !important;
          }

          /* Hide Desktop Nav */
          .desktop-nav {
            display: none !important;
          }

          /* Show Hamburger */
          .hamburger-btn {
            display: block !important;
          }

          /* Mobile Overlay */
          .mobile-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 998;
          }

          .mobile-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          /* Mobile Navigation */
          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            max-width: 85vw;
            height: 100vh;
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 5rem 2rem 2rem;
            gap: 0.5rem;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 999;
            overflow-y: auto;
          }

          .mobile-nav.open {
            right: 0;
          }

          .mobile-nav a {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.25rem;
            font-size: 1.125rem;
            font-weight: 500;
            border-radius: 0.75rem;
            transition: all 0.3s ease;
            position: relative;
          }

          .mobile-nav a:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(-4px);
          }

          .mobile-nav a.active {
            background: rgba(168, 85, 247, 0.15);
            border-left: 3px solid #a855f7;
          }

          .mobile-nav a.active::before {
            display: none;
          }

          .nav-icon {
            font-size: 1.25rem;
            width: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 480px) {
          .navbar-header {
            padding: 10px 16px !important;
          }

          .mobile-nav {
            width: 260px;
            padding: 4.5rem 1.5rem 1.5rem;
          }

          .mobile-nav a {
            font-size: 1rem;
            padding: 0.875rem 1rem;
          }

          .nav-icon {
            font-size: 1.125rem;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 600px) and (orientation: landscape) {
          .mobile-nav {
            padding: 4rem 1.5rem 1rem;
            gap: 0.25rem;
          }

          .mobile-nav a {
            padding: 0.75rem 1rem;
            font-size: 1rem;
          }
        }

        /* Tablet Landscape */
        @media (min-width: 769px) and (max-width: 1024px) {
          .navbar-header {
            padding: 15px 24px !important;
          }

          .desktop-nav {
            gap: 1.25rem !important;
          }

          .desktop-nav a {
            font-size: 0.9375rem;
          }
        }
      `}</style>
    </>
  );
}