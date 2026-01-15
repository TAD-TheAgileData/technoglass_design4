import React from "react";
import { motion } from "framer-motion";
import "./Sustainability.css";

/* ===== IMAGES ===== */
import heroImg from "../../../assets/About_us/Sustainability/Hero.jpg";
import sustainImg from "../../../assets/About_us/Sustainability/Hero2.jpg";

const Sustainability = () => {
  return (
    <div className="sustainability-page">
      {/* ================= HERO SECTION ================= */}
      <section
        className="sustainability-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Sustainability</h1>
          <p>
            Building a greener future through responsible innovation and
            eco-friendly practices.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}

      {/* ===== TITLE ===== */}
      <div className="commitment-header">
        <h2>SUSTAINABILITY: MANAGEMENT COMMITMENT</h2>
      </div>

      <section className="sustainability-content">
        <div className="content-wrapper">
          {/* Image */}
          <div className="content-image">
            <img src={sustainImg} alt="Sustainability Practices" />
          </div>

          {/* Right side cards */}
          <div className="commitment-cards">
            <div className="commitment-card">
              <strong>Zero work-related accidents</strong>
            </div>

            <div className="commitment-card">
              <strong>Zero occupational illness</strong>
            </div>

            <div className="commitment-card">
              <strong>Zero non-recovered waste!</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
