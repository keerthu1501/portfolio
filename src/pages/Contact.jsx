import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   alert("Thank you! I'll get back to you soon.");
  //   setFormData({ name: "", email: "", message: "" });
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_5cjggxa",
      "template_ifkfmxi",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "VhaSSAJ0GKO7cRNy0"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully! I will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Something went wrong. Please try again!");
      }
    );
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    // {
    //   icon: "📱",
    //   label: "Phone",
    //   value: "+91 8939316597",
    //   link: "tel:+918939316597"
    // },
    {
      icon: "✉️",
      label: "Email",
      value: "keerthananainiyappan1525@gmail.com",
      link: "mailto:keerthananainiyappan1525@gmail.com"
    },
    {
      icon: "💼",
      label: "GitHub",
      value: "github.com/keerthu1501",
      link: "https://github.com/keerthu1501"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/keerthana-nainiyappan",
      link: "https://linkedin.com/in/keerthana-nainiyappan"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chennai, India",
      link: "https://maps.google.com/?q=Velachery+Chennai"
    }
  ];

  return (
    <main style={{ 
      padding: "3rem 1rem",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="neon-text" style={{ 
          marginBottom: "1rem",
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 3rem)"
        }}>
          Get In Touch
        </h1>

        <p style={{
          textAlign: "center",
          color: "#d1d5db",
          marginBottom: "3rem",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)"
        }}>
          Have a project in mind? Let's work together!
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          alignItems: "start"
        }}>
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <h2 style={{
              color: "#22d3ee",
              fontSize: "1.5rem",
              marginBottom: "0.5rem"
            }}>
              Contact Information
            </h2>

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel={item.link.startsWith('http') ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="glass contact-card"
                style={{
                  padding: "1.25rem",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 24px rgba(168, 85, 247, 0.2)"
                }}
              >
                <span style={{
                  fontSize: "2rem",
                  minWidth: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(168, 85, 247, 0.1)",
                  borderRadius: "0.5rem"
                }}>
                  {item.icon}
                </span>
                <div>
                  <div style={{
                    fontSize: "0.875rem",
                    color: "#a855f7",
                    fontWeight: 600,
                    marginBottom: "0.25rem"
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontSize: "0.9375rem",
                    color: "#f3f4f6",
                    wordBreak: "break-word"
                  }}>
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass" 
            style={{ 
              padding: "2rem",
              borderRadius: "1rem"
            }}
          >
            <h2 style={{
              color: "#22d3ee",
              fontSize: "1.5rem",
              marginBottom: "1.5rem"
            }}>
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              <div>
                <label style={{ 
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#a855f7",
                  fontWeight: 600,
                  fontSize: "0.875rem"
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#f3f4f6",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#a855f7"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#a855f7",
                  fontWeight: 600,
                  fontSize: "0.875rem"
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#f3f4f6",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#a855f7"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block",
                  marginBottom: "0.5rem",
                  color: "#a855f7",
                  fontWeight: 600,
                  fontSize: "0.875rem"
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    color: "#f3f4f6",
                    fontSize: "1rem",
                    resize: "vertical",
                    transition: "all 0.3s ease",
                    outline: "none",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#a855f7"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="btn"
                style={{ width: "100%" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message 📨
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        /* Input Focus Effects */
        input:focus,
        textarea:focus {
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Contact Card Hover Effect */
        .contact-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(168, 85, 247, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          main {
            padding: 2rem 1rem !important;
          }

          .glass {
            padding: 1.5rem !important;
          }

          .contact-card {
            padding: 1rem !important;
          }

          .contact-card span {
            font-size: 1.5rem !important;
            min-width: 40px !important;
            height: 40px !important;
          }
        }

        @media (max-width: 480px) {
          input,
          textarea {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </main>
  );
}