import React from "react";
import "./Backlites.css";
import { FiWifi, FiWind, FiPenTool, FiCheckCircle } from "react-icons/fi";

import heroImg from "../../../assets/Backlites/Backliteshero.jpg";
import processImg from "../../../assets/Backlites/BacklitesProcess.jpg";

const Backlites = () => {
   return (
    <div className="backlite-root">

      {/* ================= HERO ================= */}
      <section
        className="backlite-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="backlite-hero-overlay">
          <div className="backlite-hero-content">
            <span className="hero-chip">Automotive Glass</span>
            <h1>Backlites (Rear Windshields)</h1>
            <p>
              Premium rear windshield solutions engineered for safety,
              connectivity, and seamless vehicle integration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="backlite-overview">
        <div className="overview-grid">

          <div className="overview-card">
            <h3>Tempered & Laminated Backlites</h3>
            <p>
              Engineered for impact resistance, acoustic comfort, and compliance
              with global automotive safety standards.
            </p>
          </div>

          <div className="overview-card">
            <h3>Integrated Defogger Lines</h3>
            <p>
              Embedded heating elements ensure fast defogging and clear rear
              visibility in all climates.
            </p>
          </div>

          <div className="overview-card">
            <h3>High-Precision Ceramic Printing</h3>
            <p>
              Advanced ceramic frit printing improves encapsulation, UV
              protection, and long-term durability.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="backlite-features">
        <div className="features-text">
          <h2>Functional Integration</h2>

          <ul className="feature-list">
            <li>
              <span className="icon"><FiWifi /></span>
              <span>Antenna integration for AM / FM / GPS systems</span>
            </li>

            <li>
              <span className="icon"><FiWind /></span>
              <span>Optimized defogger layout for uniform heating</span>
            </li>

            <li>
              <span className="icon"><FiPenTool /></span>
              <span>Precision drilling for rubber grommet & wiper fitment</span>
            </li>

            <li>
              <span className="icon"><FiCheckCircle /></span>
              <span>Consistent quality for high-volume OEM production</span>
            </li>
          </ul>
        </div>

        <div className="features-image">
          <img src={processImg} alt="Backlite Manufacturing Process" />
        </div>
      </section>

    </div>
  );
};

export default Backlites;