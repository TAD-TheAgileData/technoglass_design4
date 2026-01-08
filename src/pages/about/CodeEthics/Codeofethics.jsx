import React from "react";
import "./Codeofethics.css";

export default function CodeOfEthics() {
  return (
    <div className="ethics-page">
      {/* ================= HERO ================= */}
      <section className="ethics-hero">
        <div className="hero-content">
          <h1>Code of Ethics</h1>
          <p>
            At Technoglass, our Code of Ethics defines the values, principles,
            and standards that guide our decisions, behavior, and relationships
            with employees, customers, and society.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="ethics-sections">
        <div className="ethics-grid">
          {/* Business Ethics */}
          <div className="ethics-card">
            <h2>Business Ethics</h2>
            <ul>
              <li>Commitment to Professional Excellence</li>
              <li>Mutual Respect</li>
              <li>Integrity in All Actions</li>
              <li>Loyalty and Solidarity</li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div className="ethics-card">
            <h2>Code of Conduct</h2>
            <ul>
              <li>Compliance with Laws and Regulations</li>
              <li>Environmental Responsibility</li>
              <li>Health and Safety of Employees</li>
              <li>Protection of Employee Rights</li>
              <li>Building Strong Customer Relationships</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
