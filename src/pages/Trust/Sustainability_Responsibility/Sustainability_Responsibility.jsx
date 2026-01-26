import React from "react";
import { motion } from "framer-motion";
import "./Sustainability_Responsibility.css";

/* HERO IMAGE */
import heroImage from "../../../assets/EnivornmentalCompilance/Hero.jpg";

const Sustainability_Responsibility = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="Susenvironment-hero">
        <img src={heroImage} alt="Sustainability & Responsibility" />

        <div className="Sushero-overlay">
          <motion.div
            className="Sushero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sustainability & Responsibility</h1>
            <p>
              Driving sustainable manufacturing through energy efficiency,
              responsible resource management, and environmentally compliant
              practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL SECTION */}
      <section className="Suseditorial-section">
        <motion.div
          className="Suseditorial-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="Suseditorial-intro">
            Sustainability is deeply embedded in our operational philosophy. We
            focus on reducing environmental impact through efficient processes,
            responsible resource utilization, and compliance with environmental
            standards.
          </p>

          <div className="Suseditorial-block">
            <h3>Energy-Efficient Operations</h3>
            <p>
              High-performance, energy-efficient systems and optimized workflows
              help reduce energy consumption, lower emissions, and maintain
              consistent production quality.
            </p>
          </div>

          <div className="Suseditorial-block">
            <h3>Waste Reduction & Recycling</h3>
            <p>
              Structured waste-management systems minimize waste at the source,
              promote reuse, and ensure responsible recycling to reduce landfill
              impact.
            </p>
          </div>

          <div className="Suseditorial-block">
            <h3>Water Conservation & Reuse</h3>
            <p>
              Advanced water-treatment facilities enable safe treatment and
              reuse of water, helping conserve freshwater resources and support
              environmental compliance.
            </p>
          </div>
          <div className="Suseditorial-block editorial-final">
            <h3>Green Building Commitment</h3>
            <p>
              Our infrastructure aligns with green-building principles,
              incorporating sustainable materials, energy-efficient systems, and
              environmentally responsible design.
            </p>
            <div className="Suseditorial-divider"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Sustainability_Responsibility;
