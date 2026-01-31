import React from "react";
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaTruck,
  FaBus,
  FaDraftingCompass,
  FaEye
} from "react-icons/fa";
import "./BendingCapabilities.css";

import bendImg from "../../../../assets/BendingCapablities/Hero.png";
import probendImg from "../../../../assets/BendingCapablities/Hero2.png";
/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function BendingCapabilities() {
  return (
    <div className="bc-root">

      {/* ================= HERO ================= */}
     {/* ================= HERO ================= */}
<section className="bc-hero-light">
  <div className="bc-hero-bg-glow" />

  <motion.div
    className="bc-hero-grid"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    {/* LEFT CONTENT */}
    <motion.div
      className="bc-hero-text"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <span className="bc-eyebrow">BENDING CAPABILITIES</span>

      <h1>
        Precision Glass <span>Bending</span><br />
        for Modern Mobility
      </h1>

      <p>
        Accurate bending for car, truck, and bus glass engineered with
        exceptional optical consistency, curvature precision, and
        OEM-grade quality standards.
      </p>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="bc-hero-image"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <img src={probendImg} alt="Automotive Glass Bending" />
    </motion.div>
  </motion.div>
</section>


      {/* ================= OVERVIEW ================= */}
      <section className="bc-overview">
        <motion.div
          className="bc-overview-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="bc-text">
            <h2>Advanced Glass Bending Technology</h2>
            <p>
              Our glass bending process combines precision-controlled heating,
              gravity and press bending techniques to achieve complex curvatures
              required in modern automotive glazing.
            </p>
            <p>
              Each bent glass undergoes strict optical inspection to ensure
              distortion-free visibility, uniform thickness distribution, and
              compliance with global automotive standards.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bc-image">
            <img src={bendImg} alt="Glass Bending Process" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="bc-applications">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Vehicle-Specific Bending Capabilities
        </motion.h2>

        <div className="bc-cards">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bc-card">
            <FaCarSide />
            <h3>Passenger Cars</h3>
            <p>
              High-precision curved windshields and side glass
              with superior optical clarity and aerodynamic accuracy.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bc-card">
            <FaTruck />
            <h3>Commercial Trucks</h3>
            <p>
              Robust bending for large-format truck glass ensuring
              durability, vibration resistance, and visual comfort.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bc-card">
            <FaBus />
            <h3>Buses & Coaches</h3>
            <p>
              Large curved panoramic windshields and side glazing
              with uniform curvature and minimal optical distortion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= QUALITY ================= */}
      <section className="bc-quality">
        <motion.div
          className="bc-quality-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="bc-quality-card">
            <FaDraftingCompass />
            <h4>Dimensional Accuracy</h4>
            <p>
              Tight tolerance control ensures perfect fitment
              with vehicle body structures.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bc-quality-card">
            <FaEye />
            <h4>Optical Consistency</h4>
            <p>
              Advanced inspection systems guarantee distortion-free
              driver visibility and comfort.
            </p>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}