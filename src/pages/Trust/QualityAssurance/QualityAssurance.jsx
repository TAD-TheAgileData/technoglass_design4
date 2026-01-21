import React from "react";
import "./QualityAssurance.css";

import heroImg from "../../../assets/PVBLamination/PVBhero.jpg";
import labImg from "../../../assets/PVBLamination/PVBhero.jpg";

const QualityAssurance = () => {
  return (
    <div className="qa-container">

      {/* ================= HERO ================= */}
      <section
  className="qa-hero premium-hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="hero-noise"></div>
  <div className="hero-glass"></div>

  <div className="qa-hero-content">
    <span className="qa-tag">Quality Assurance Division</span>
    <h1>Testing & Validation Laboratory</h1>
    <p>
      Advanced in-house testing infrastructure ensuring compliance,
      safety, optical clarity, and long-term durability of automotive glass.
    </p>
  </div>
</section>


      {/* ================= TESTING FACILITIES ================= */}
      <section className="qa-tests">
        <h2>In-house Testing Facilities</h2>

        <div className="qa-test-grid">
          {[
            "Impact test",
            "Head form test",
            "Fragmentation test",
            "Optical distortion test",
            "Haze (Light transmission) test",
            "Bake test",
            "Pummel test",
            "Boil test",
            "Thickness test",
          ].map((item, index) => (
            <div className="qa-test-card" key={index}>
              <span className="test-dot"></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="qa-standards">
        <div className="qa-standards-content">
          <h2>Compliance with Global Standards</h2>
          <p>
            All testing procedures are conducted in accordance with recognized
            international standards to ensure consistent quality and regulatory
            compliance.
          </p>

          <div className="qa-badges">
            <span>ISO</span>
            <span>ECE R43</span>
          </div>
        </div>

        <div className="qa-standards-image">
          <img src={labImg} alt="Testing Laboratory" />
        </div>
      </section>

      {/* ================= TRACEABILITY ================= */}
      <section className="qa-traceability">
        <h2>Traceability & Batch Control</h2>

        <div className="trace-grid">
          <div className="trace-card">
            <h3>Job Order Sheet</h3>
            <p>
              Structured documentation ensuring full traceability from raw
              material to finished glass products.
            </p>
          </div>

          <div className="trace-card">
            <h3>Batch Control System</h3>
            <p>
              Controlled batch identification and monitoring to maintain
              consistent quality across production cycles.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QualityAssurance;