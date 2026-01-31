import React from "react";
import "./AutoClaveCapacity.css";
import heroImg from "../../../../assets/Autoclave/Hero.png";
import tempIcon from "../../../../assets/PVBLamination/PVBhero.jpg";
import pressureIcon from "../../../../assets/PVBLamination/PVBhero.jpg";
import clarityIcon from "../../../../assets/PVBLamination/PVBhero.jpg";
import { FaWind, FaLink, FaEye } from "react-icons/fa";

const AutoClaveCapacity = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="autoclave-hero">
        <img src={heroImg} alt="Autoclave Process" />
        <div className="hero-overlay">
          <h1>Autoclave Capacity</h1>
          <p>Advanced lamination technology for strength and clarity</p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="autoclave-section">
        <div className="autoclave-container">
          <h2 className="autoclave-title">
            Autoclave Process & Specifications
          </h2>
          <p className="autoclave-intro">
            The laminated glass manufacturing process uses autoclaves to ensure
            perfect bonding and long-term durability.
          </p>

          <div className="autoclave-cards">
            <div className="card">
              <div className="card-image">
                <img src={tempIcon} alt="Temperature" />
              </div>
              <h3>Precisely regulated temperature</h3>
            </div>

            <div className="card">
              <div className="card-image">
                <img src={pressureIcon} alt="Pressure" />
              </div>
              <h3>Controlled pressure cycles</h3>
            </div>

            <div className="card">
              <div className="card-image">
                <img src={clarityIcon} alt="Clarity" />
              </div>
              <h3>Uniform heating for consistent lamination</h3>
            </div>
          </div>
          <div className="autoclave-benefits">
            <h3 className="benefits-title">Key Process Outcomes</h3>

            <div className="benefits-grid">
              <div className="benefit-card">
                <FaWind className="benefit-icon" />
                <h4>Complete Air Removal</h4>
                <p>
                  Advanced vacuum and pressure control remove trapped air,
                  ensuring defect-free lamination.
                </p>
              </div>

              <div className="benefit-card">
                <FaLink className="benefit-icon" />
                <h4>Strong Interlayer Bonding</h4>
                <p>
                  Optimized heat and pressure cycles deliver exceptional
                  adhesion and durability.
                </p>
              </div>

              <div className="benefit-card">
                <FaEye className="benefit-icon" />
                <h4>High Optical Clarity</h4>
                <p>
                  Precise temperature regulation maintains crystal-clear
                  transparency across all layers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AutoClaveCapacity;
