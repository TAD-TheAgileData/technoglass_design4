import React from "react";
import "./AutomationDigitalManufacturing.css";
import heroImg from "../../assets/AutomationDigitalManufacturing/glass.jpg";
import automationImg from "../../assets/AutomationDigitalManufacturing/Hero.jpg";

const AutomationDigitalManufacturing = () => {
   return (
    <div className="adm-root">

      {/* ================= HERO ================= */}
      <section
        className="adm-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <div className="adm-hero-inner">
            <span className="hero-chip">Industry 4.0</span>
            <h1>Automation & Digital Manufacturing</h1>
            <p>
              Advanced automation and digital systems enabling real-time
              visibility, precision control, and intelligent manufacturing
              operations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="adm-features">
        <div className="feature-grid">

          <div className="adm-card">
            <h3>ERP / MES Integration</h3>
            <p>
              Seamless integration of ERP and MES platforms for unified
              production planning, execution, and reporting.
            </p>
          </div>

          <div className="adm-card">
            <h3>Barcode-Based Tracking</h3>
            <p>
              Digital traceability of products and batches using barcode-based
              systems (implementation in progress).
            </p>
          </div>

          <div className="adm-card">
            <h3>Conveyorized Handling</h3>
            <p>
              Automated conveyorized handling systems ensuring safe, efficient,
              and consistent material movement.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MONITORING ================= */}
      <section className="adm-monitor">
        <div className="monitor-content">
          <h2>Monitoring & Intelligence</h2>
          <ul>
            <li>Control Charts Monitoring</li>
            <li>Predictive Maintenance Systems</li>
            <li>LOTO (Lock-Out Tag-Out) Monitoring</li>
          </ul>
        </div>

        <div className="monitor-image">
          <img src={automationImg} alt="Digital Manufacturing" />
        </div>
      </section>

    </div>
  );
};

export default AutomationDigitalManufacturing;