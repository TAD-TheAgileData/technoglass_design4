import React from "react";
import "./CNCShaping.css";
import heroImg from "../../assets/CNCShaping/CNC1.png";
import machineImg from "../../assets/CNCShaping/CNC2.png";

const CNCShaping = () => {
    return (
    <div className="cnc-container">

      {/* ================= HERO ================= */}
      <section className="cnc-hero premium-hero">
        <div className="hero-bg-animate"></div>

        <div className="cnc-hero-content">
          <span className="hero-tag">Precision Manufacturing</span>
          <h1>CNC Shaping & Processing</h1>
          <p>
            High-precision CNC shaping and processing solutions designed to
            meet advanced automotive glass manufacturing requirements with
            exceptional accuracy, consistency, and flexibility.
          </p>
        </div>

        <div className="cnc-hero-image">
          <img src={heroImg} alt="CNC Shaping & Processing" />

          {/* Floating UI badges */}
          <div className="hero-badge top">
            <span>±0.2mm</span>
            <small>Tolerance</small>
          </div>

          <div className="hero-badge bottom">
            <span>CNC</span>
            <small>Automation</small>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="cnc-capabilities">
        <h2>Machinery & Capabilities</h2>

        <div className="capability-grid">
          <div className="cap-card">
            <h3>Bando</h3>
            <p>
              CNC cutting, breaking, and grinding capabilities engineered for
              precision shaping and smooth edge finishes in automotive glass.
            </p>
          </div>

          <div className="cap-card">
            <h3>Jumbo</h3>
            <p>
              CNC cutting and edge deletion capabilities enabling efficient
              processing of complex automotive glass geometries.
            </p>
          </div>

          <div className="cap-card">
            <h3>Bystronic</h3>
            <p>
              Advanced CNC cutting capabilities ensuring high-speed, accurate,
              and repeatable processing for demanding production environments.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRECISION ================= */}
      <section className="cnc-precision">
        <div className="precision-content">
          <h2>Precision & Complexity</h2>
          <ul>
            <li>Tolerances achievable up to <strong>0.2 mm</strong></li>
            <li>All complex shapes can be performed</li>
            <li>Machine specifications support maximum-size automotive glass</li>
          </ul>
        </div>

        <div className="precision-image">
          <img src={machineImg} alt="CNC Machine Precision" />
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="cnc-applications">
        <h2>Applications</h2>
        <div className="application-tags">
          <span>Automotive Windshields</span>
          <span>Backlite</span>
          <span>Side Lite</span>
          <span>Sunroof</span>
          <span>Rear glass</span>
          <span>Door glass</span>
          <span>Quarter glass</span>
          <span>Bus & Truck windshield</span>
          <span>Marine Industries</span>
          <span>Custom Shapes</span>
        </div>
      </section>

    </div>
  );
};

export default CNCShaping;