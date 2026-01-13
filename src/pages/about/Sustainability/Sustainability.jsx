import React from "react";
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
          <div className="commitment-text">
            <ul>
              <li> <strong>Zero work-related accidents</strong></li>
              <li><strong>Zero occupational illness</strong></li>
              <li>
                <strong>Zero non-recovered waste!</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;