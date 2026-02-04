import React from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaWaveSquare,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";
import "./ProvenManufacturing.css";

import heroImg from "../../../assets/ProvenManufacturing/ManufacturingExcecellence.png";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProvenManufacturingExcellence() {
  return (
    <div className="me-root">

      {/* ================= HERO ================= */}
      <section
        className="me-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="me-hero-glass">
          <motion.div
            className="me-hero-text"
            initial="hidden"
            animate="visible"
            variants={fade}
          >
            <span className="me-chip">PROVEN EXCELLENCE</span>
            <h1>Manufacturing Excellence</h1>
            <p>
              Advanced automation, disciplined processes, and skilled expertise
              delivering precision glass solutions at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PANELS ================= */}
      <section className="me-panels">
        <motion.div
          className="me-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >

          <motion.div className="me-card" variants={fade}>
            <div className="me-icon">
              <FaIndustry />
            </div>
            <h3>Advanced Machinery</h3>
            <p>
              CNC cutting, bending, and processing lines integrated with
              automation and digital monitoring.
            </p>
          </motion.div>

          <motion.div className="me-card accent" variants={fade}>
            <div className="me-icon">
              <FaWaveSquare />
            </div>
            <h3>Tight Tolerances</h3>
            <p>
              Stable processes deliver repeatability, dimensional accuracy,
              and optical consistency.
            </p>
          </motion.div>

          <motion.div className="me-card" variants={fade}>
            <div className="me-icon">
              <FaTools />
            </div>
            <h3>Preventive Maintenance</h3>
            <p>
              Predictive maintenance, calibration systems, and TPM programs
              ensure equipment reliability.
            </p>
          </motion.div>

          <motion.div className="me-card wide" variants={fade}>
            <div className="me-icon">
              <FaUserCheck />
            </div>
            <h3>Skilled Workforce</h3>
            <p>
              Certified teams trained in global best practices, safety standards,
              and continuous improvement methodologies.
            </p>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}