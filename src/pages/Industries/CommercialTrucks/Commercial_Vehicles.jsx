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

import heroImg from "../../../assets/commercialglass/Hero1.jpg";
import fleetImg from "../../../assets/commercialglass/Hero2.png";

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
            <span className="cv-badge">COMMERCIAL TRUCKS</span>
            <h1>Commercial Truck Glass</h1>
            <p>
              Heavy-duty glazing solutions engineered for commercial trucks,
              delivering high impact resistance and long-life performance in
              demanding operating conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SEGMENTS ================= */}
      <section className="cvx-flow">
        <h2 className="cvx-section-title">
          Designed for Commercial & Fleet Applications
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
            <h3>Applications</h3>
            <p>
              Heavy-duty windshields, cabin glass, bonding primers, and
              precision fitment solutions for commercial truck platforms.
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
            <h3>Strengths</h3>
            <p>
              High impact resistance, superior structural strength, and reliable
              long-life performance under heavy-duty usage.
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
            <h3>Customers</h3>
            <p>
              Trusted by truck OEMs, fleet body builders, and authorized dealer
              networks across commercial vehicle segments.
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
          <h2>Built for Heavy-Duty Commercial Performance</h2>

          <ul className="cv-list">
            <li>
              <FiShield /> Heavy-duty laminated & tempered safety glass
            </li>
            <li>
              <FiLayers /> Structural bonding & primer compatibility
            </li>
            <li>
              <FiActivity /> High impact resistance & vibration durability
            </li>
            <li>
              <FiTool /> OEM, fleet body builder & dealer fitment support
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
