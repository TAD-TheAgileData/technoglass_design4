import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* ================= IMAGES ================= */
import hero1 from "../../assets/Hero/hero1.jpg";
import hero2 from "../../assets/Hero/hero2.jpg";
import hero3 from "../../assets/Hero/hero3.jpg";
import hero4 from "../../assets/Hero/hero4.jpg";
import hero5 from "../../assets/Hero/hero5.jpg";
import hero6 from "../../assets/Hero/hero6.jpg";
import logo1 from "../../assets/Logo/logo1.gif";
import logo2 from "../../assets/Logo/logo2.jpg";
import logo3 from "../../assets/Logo/logo3.png";
import logo4 from "../../assets/Logo/logo4.jpg";
import logo5 from "../../assets/Logo/logo5.png";
import logo6 from "../../assets/Logo/logo7.jpg";
import logo7 from "../../assets/Logo/logo6.png";
import logo8 from "../../assets/Logo/logo8.png";


export default function Home() {
  const navigate = useNavigate();

  const slides = [
    {
      image: hero1,
      title: "Global Glass Processing Excellence",
      text: "Precision-engineered solutions delivering quality and compliance worldwide.",
    },
    {
      image: hero2,
      title: "High Performance Glass",
      text: "OEM & safety-critical solutions.",
    },
    {
      image: hero3,
      title: "Sustainable Solutions",
      text: "Reducing environmental impact.",
    },
    {
      image: hero4,
      title: "Architectural Excellence",
      text: "Advanced glazing technologies.",
    },
    {
      image: hero5,
      title: "Automation & Innovation",
      text: "Optimized glass processing.",
    },
    {
      image: hero6,
      title: "Global Expertise",
      text: "Serving customers worldwide.",
    },
  ];

  const certifications = [
    { code: "IATF 16949:2016", desc: "Quality Management System" },
    { code: "ISO 9001:2015 ", desc: "QUALITY MANAGEMENT SYSTEM, " },
    { code: "ISO14001:2015 ", desc: "ENVIRONMENT MANAGEMENT SYSTEM" },
    { code: "ISO45001:2018", desc: "OCCUPATIONAL HEALTH & SAFETY MANAGEMENT SYSTEM" },
    { code: " ECE R-43 STANDARD", desc: "Automotive glass for safety, impact resistance, and light transmission." },
    {code:"COP CERTIFICATION" , desc:"Ensures compliance with quality, safety, and regulatory standards."},
    {code:"MOROCCO STANDARD" ,desc:"Ensures products meet Morocco’s quality and safety standards"},
    {code:"GLOBAL TIER1 PARTNERSHIP FOR STRATEGIC MATERIALS" ,desc:"Certified as a global Tier-1 partner for strategic materials"}
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5,logo6, logo7,logo8];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ===== SCROLL REVEAL (FIXED – unobserve after reveal) ===== */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target); // ✅ performance fix
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-container">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="home-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].text}</p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* {Success story} */}
      <section className="success-story-modern reveal">
        <div className="success-overlay" />

        <div className="success-content">
          <span className="success-tag">Our Journey</span>

          <h2>
            Building <span>Excellence</span> Since 1993
          </h2>

          <p>
            Technoglass has been shaping the future of architectural and
            automotive glass solutions for over three decades — delivering
            precision, innovation, and global trust.
          </p>

          <button
            className="success-cta"
            onClick={() => navigate("/about/milestones")}
          >
            View Our Story →
          </button>
        </div>
      </section>

      <section className="section-wrapper reveal">
        <h2 className="section-title">Our Products And Services</h2>

        <div className="card-row">
          {[
            {
              img: hero1,
              title: "Architectural Glass",
              desc: "High-performance glazing systems for modern buildings.",
            },
            {
              img: hero2,
              title: "Automotive Glass",
              desc: "OEM & safety-critical glass solutions.",
            },
            {
              img: hero3,
              title: "OEM Solutions",
              desc: "Custom engineered manufacturing solutions.",
            },
          ].map((p, i) => (
            <div
              className="image-card"
              key={i}
              style={{ backgroundImage: `url(${p.img})` }}
            >
              <div className="image-card-overlay">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="read-more">READ MORE →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper light reveal">
        <h2 className="section-title">Our Customers</h2>
        <div className="industrial-marquee">
          <div className="industrial-track">
            {[...logos, ...logos].map((logo, i) => (
              <div className="industrial-logo-card" key={i}>
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="cert-section reveal">
  <h2 className="cert-title">Certifications & Compliance</h2>

  <div className="cert-slider">
    <div className="cert-track">
      {[...certifications, ...certifications].map((c, i) => (
        <div className="cert-card" key={i}>
          <div className="cert-icon">★★★★★</div>
          <h3>{c.code}</h3>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  </div>

  <button
    className="success-btn"
    onClick={() => navigate("/trust/certification")}
  >
    Know More
  </button>
</section>


      <section className="global-reach-section reveal">
        <h2 className="global-reach-title">Global Reach</h2>
        <p className="global-reach-text">
          Supplying automotive glass solutions worldwide.
        </p>
        <button
          className="success-btn"
          onClick={() => navigate("/GlobalReach")}
        >
          Read More
        </button>
      </section>

      <section className="value-section reveal">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="value-grid">
          <div className="value-card">
            <FaCheckCircle className="value-icon" />
            <h3>Uncompromised Quality</h3>
          </div>
          <div className="value-card">
            <FaShieldAlt className="value-icon" />
            <h3>Global Compliance</h3>
          </div>
          <div className="value-card">
            <FaCogs className="value-icon" />
            <h3>Advanced Capability</h3>
          </div>
        </div>
      </section>

      {/* ================= GET QUOTE CTA ================= */}
      <section className="get-quote-section reveal">
        <div className="get-quote-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Talk to our experts for customized glass solutions tailored to your
            requirements.
          </p>

          <button
            className="get-quote-btn"
            onClick={() => navigate("/contact")}
          >
            Get a Quote →
          </button>
        </div>
      </section>
    </main>
  );
}
