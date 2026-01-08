import React from "react";
import { useNavigate } from "react-router-dom";
import "./Trust.css";

/* ================= IMAGES ================= */
import heroImg from "../../assets/Trust/TrustHero.jpg";
import Certification from "../../assets/Trust/Certified.jpg";
import Quality from "../../assets/Trust/Quality.jpg";
import Partnership from "../../assets/Trust/Partnership.jpg";
import MediaGallery from "../../assets/Trust/Media&Gallery.jpg";
import Sustainable from "../../assets/Trust/Sustainable.jpg";
import CaseStudies from "../../assets/Trust/CaseStudy.jpg";

const trustCards = [
  {
    title: "Certifications",
    desc: "Internationally recognized certifications ensuring compliance and quality excellence.",
    image: Certification,
    path: "/trust/certification",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality control systems delivering consistent and reliable glass solutions.",
    image: Quality,
    path: "/trust/quality",
  },
  {
    title: "Strategic Partnerships",
    desc: "Strong global partnerships enhancing innovation and operational excellence.",
    image: Partnership,
    path: "/trust/partnership",
  },
  {
    title: "Media & Gallery",
    desc: "Explore our facilities, processes, and achievements through visual media.",
    image: MediaGallery,
    path: "/trust/mediagallery",
  },
  {
    title: "Sustainability",
    desc: "Responsible manufacturing focused on energy efficiency and sustainability.",
    image: Sustainable,
    path: "/trust/enivornmentalcompilance",
  },
  {
    title: "Case Studies",
    desc: "Real-world projects demonstrating our expertise and trusted solutions.",
    image: CaseStudies,
    path: "/trust/casestudies",
  },
];

const Trust = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="trust-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="trust-hero-overlay">
          <h1>Trust & Compliance</h1>
          <p>
            Certified quality, sustainable practices, and trusted partnerships
            across global markets.
          </p>
        </div>
      </section>

      {/* ================= TRUST CARDS ================= */}
      <section className="trust-cards-section">
        <h2 className="trust-cards-title">Our Trust Framework</h2>

        <div className="trust-cards-grid">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="trust-glaston-card"
              onClick={() => navigate(card.path)}
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
              />

              <div className="trust-glaston-overlay">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="trust-read-more">READ MORE →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trust;
