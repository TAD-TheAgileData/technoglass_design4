import React from "react";
import "./CommercialVehicleGlass.css";
import { motion } from "framer-motion";
import {
  FiTruck,
  FiShield,
  FiLayers,
  FiTool,
  FiActivity,
} from "react-icons/fi";

import heroImg from "../../../assets/commercialglass/Hero2.jpg";
import fleetImg from "../../../assets/commercialglass/Hero1.jpg";

/* ================= ANIMATIONS ================= */
const fadeSlide = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};
const Commercial_Vehicles = () => {
  return (
    <div className="cv-root">
      {/* ================= HERO ================= */}
      <section
        className="cv-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="cv-hero-overlay">
          <motion.div
            className="cv-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeSlide}
            transition={{ duration: 1.2 }}
          >
            <span className="cv-badge">FLEET & COMMERCIAL SOLUTIONS</span>
            <h1>Commercial Vehicle Glass</h1>
            <p>
              Engineered glazing systems for trucks, pickups, and delivery vans
              — built to endure heavy-duty operations and long-haul performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEGMENTS ================= */}
      <section className="cvx-flow">
        <h2 className="cvx-section-title">
          Designed for Heavy-Duty Performance
        </h2>

        <div className="cvx-flow-line"></div>

        <motion.div
          className="cvx-flow-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.9 }}
        >
          <div className="cvx-icon">
            <FiTruck />
          </div>
          <div>
            <h3>Trucks & Long-Haul Vehicles</h3>
            <p>
              High-impact laminated windshields engineered to withstand
              vibration, debris impact, and extreme weather.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cvx-flow-item reverse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
          transition={{ duration: 0.9 }}
        >
          <div className="cvx-icon">
            <FiTool />
          </div>
          <div>
            <h3>Pickups & Utility Vehicles</h3>
            <p>
              Rugged glass systems optimized for construction, agriculture, and
              off-road commercial use.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cvx-flow-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          transition={{ duration: 0.9 }}
        >
          <div className="cvx-icon">
            <FiShield />
          </div>
          <div>
            <h3>Delivery & Fleet Vans</h3>
            <p>
              Lightweight, safety-compliant glazing designed for urban logistics
              and high-frequency usage.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="cv-features">
        <motion.div
          className="cv-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeSlide}
          transition={{ duration: 1 }}
        >
          <h2>Built for Commercial Reliability</h2>

          <ul className="cv-list">
            <li>
              <FiShield /> Laminated & tempered safety glass
            </li>
            <li>
              <FiLayers /> Acoustic and solar-control options
            </li>
            <li>
              <FiActivity /> Enhanced impact & vibration resistance
            </li>
            <li>
              <FiTool /> OEM & aftermarket fitment compatibility
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="cv-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={fleetImg} alt="Commercial Fleet Glass" />
        </motion.div>
      </section>
    </div>
  );
};

export default Commercial_Vehicles;
