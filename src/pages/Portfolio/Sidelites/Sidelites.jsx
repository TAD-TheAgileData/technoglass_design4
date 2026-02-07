import React from 'react'
import "./SidelitesDoorGlass.css";
import { FiTarget, FiTool, FiCheckCircle } from "react-icons/fi";

import heroImg from "../../../assets/PVBLamination/PVBhero.jpg";
import processImg from "../../../assets/PVBLamination/PVBhero.jpg";

const Sidelites = () => {
   return (
      <div className="sidelite-root">

      {/* ================= HERO ================= */}
      <section
        className="sidelite-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="sidelite-hero-overlay">
          <div className="sidelite-hero-content">
            <span className="hero-chip">Automotive Glass</span>
            <h1>Sidelites (Door Glass)</h1>
            <p>
              High-precision automotive sidelites engineered for durability,
              safety, and seamless integration into modern vehicle designs.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="sidelite-overview">
        <div className="overview-grid">

          <div className="overview-card">
            <h3>Tempered & Laminated Options</h3>
            <p>
              Available in both tempered and laminated configurations to meet
              varying safety, acoustic, and regulatory requirements.
            </p>
          </div>

          <div className="overview-card">
            <h3>Fixed & Movable Glass</h3>
            <p>
              Designed for fixed quarter glasses as well as movable door glass
              systems with smooth and reliable operation.
            </p>
          </div>

          <div className="overview-card">
            <h3>Ceramic Encapsulation</h3>
            <p>
              Black ceramic printing ensures effective encapsulation, UV
              protection, and enhanced aesthetic integration.
            </p>
          </div>

        </div>
      </section>

      {/* ================= PRECISION ================= */}
      {/* ================= PRECISION ================= */}
<section className="sidelite-precision">
  <div className="precision-text">
    <h2>Precision Manufacturing</h2>

    <ul className="precision-list">
      <li>
        <span className="icon">
          <FiTarget />
        </span>
        <span>Tight tolerance CNC shaping for exact fitment</span>
      </li>

      <li>
        <span className="icon">
          <FiTool />
        </span>
        <span>High-accuracy drilling for holder & clip assembly</span>
      </li>

      <li>
        <span className="icon">
          <FiCheckCircle />
        </span>
        <span>Consistent edge quality for smooth window movement</span>
      </li>
    </ul>
  </div>

  <div className="precision-image">
    <img src={processImg} alt="Sidelite Manufacturing Precision" />
  </div>
</section>


    </div>
  )
}

export default Sidelites;