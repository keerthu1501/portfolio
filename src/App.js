import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import ScrollToTop from "./pages/ScrollToTop";


// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Experience = lazy(() => import("./pages/Experience"));


export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              marginTop: "80px",
              fontSize: "20px",
              fontWeight: "500"
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}
