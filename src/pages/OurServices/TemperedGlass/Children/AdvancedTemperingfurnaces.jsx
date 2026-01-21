import React from "react";
import furnaceHero from "../../../../assets/Tempering/Temperingfurnance.jpg";
import "./AdvancedTempering.css";
import convectionImg from "../../../../assets/Tempering/Temperingfurnance.jpg";
import bentImg from "../../../../assets/Tempering/Temperingfurnance.jpg";

import {  FaRulerCombined, FaShieldAlt, FaCar } from "react-icons/fa";

const AdvancedTemperingfurnaces = () => {
  return (
    <div>
      <section className="furnace-hero">
        <img src={furnaceHero} alt="Glass Tempering Furnace" />
        <div className="furnace-hero-overlay">
          <h1>Furnace Capacity</h1>
          <p>Advanced tempering solutions for automotive safety glass</p>
        </div>
      </section>
      <section className="furnace-content">
        <div className="furnace-container">
          <h2 className="section-title">
            Furnace Capacity & Tempering Capabilities
          </h2>
          <div className="section-divider"></div>
          <p>
            Our tempering furnace is equipped with advanced convection
            technology, supporting both flat and bent glass tempering processes.
            This ensures uniform heat distribution and precise thermal control,
            delivering consistent strength and optical quality across every
            glass panel.
          </p>

          <p>
            The furnace processes glass thicknesses ranging from{" "}
            <strong>3 mm to 6 mm</strong>
            and accommodates large-format sizes used in automotive applications
            such as car, truck, and bus glazing. Complex curved profiles are
            tempered with accuracy while maintaining dimensional stability.
          </p>
        </div>
      </section>
      <section className="furnace-types">
        <div className="furnace-types-container">
          <h2 className="furnace-types-title section-title">Furnace Types</h2>
          <div className="section-divider"></div>

          <div className="furnace-types-grid">
            {/* Convection Furnace */}
            <div className="furnace-type-card">
              <div className="furnace-type-image">
                <img src={convectionImg} alt="Convection Furnace" />
              </div>
              <div className="furnace-type-content">
                <h4>Convection Tempering Furnace</h4>
                <p>
                  Equipped with advanced convection heating technology, this
                  furnace ensures uniform temperature distribution across the
                  glass surface, resulting in consistent strength, improved
                  optical quality, and reduced distortion.
                </p>
              </div>
            </div>

            {/* Flat / Bent Tempering */}
            <div className="furnace-type-card">
              <div className="furnace-type-image">
                <img src={bentImg} alt="Flat and Bent Tempering Furnace" />
              </div>
              <div className="furnace-type-content">
                <h4>Flat & Bent Glass Tempering</h4>
                <p>
                  Designed to handle both flat and complex bent glass profiles,
                  this tempering system delivers precise curvature control while
                  maintaining high safety and durability standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="furnace-features">
        <div className="features-grid">
          <div className="feature-card">
            <FaRulerCombined className="feature-icon" />
            <h4>Glass Thickness Range</h4>
            <p>
              Supports glass thickness from 3 mm to 6 mm, including large
              automotive glass sizes.
            </p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h4>Stress & Fragmentation Control</h4>
            <p>
              Integrated stress profile monitoring and compliance with
              international fragmentation test standards.
            </p>
          </div>

          <div className="feature-card">
            <FaCar className="feature-icon" />
            <h4>Automotive Applications</h4>
            <p>
              Designed for car, truck, bus, and commercial vehicle safety glass
              applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedTemperingfurnaces;
