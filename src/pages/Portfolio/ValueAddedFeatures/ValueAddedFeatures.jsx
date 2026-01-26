import React from "react";
import { motion } from "framer-motion";
import {
  FiSettings,
  FiPrinter,
  FiEdit3,
  FiTrendingUp,
  FiEye,
  FiCrop,
  FiHash
} from "react-icons/fi";
import "./ValueAddedFeatures.css";

import heroImg from "../../../assets/ValueAddedFeatures/Hero.jpg";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 70, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function ValueAddedFeatures() {
  return (
    <div className="vaf-root">

      {/* ================= HERO ================= */}
      <section
        className="vaf-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="vaf-hero-overlay">
          <motion.div
            className="vaf-hero-content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="vaf-chip">ADVANCED MANUFACTURING</span>
            <h1>Value-Added Features</h1>
            <p>
              High-precision glass processing technologies delivering superior
              performance, traceability, and optical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="vaf-section">
        <motion.div
          className="vaf-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.div className="vaf-card" variants={cardAnim}>
            <FiSettings />
            <h3>AG3 Glass Processing</h3>
            <p>
              Advanced AG3 processing ensures superior surface quality,
              durability, and dimensional accuracy.
            </p>
          </motion.div>

          <motion.div className="vaf-card" variants={cardAnim}>
            <FiPrinter />
            <h3>Screen Ceramic Printing</h3>
            <p>
              High-temperature ceramic printing for UV resistance,
              encapsulation, and premium aesthetics.
            </p>
          </motion.div>

          <motion.div className="vaf-card highlight" variants={cardAnim}>
            <FiEdit3 />
            <h3>Face 2 Printing</h3>
            <p>
              Precision backside printing enhances design depth,
              durability, and functional integration.
            </p>
          </motion.div>

          <motion.div className="vaf-card" variants={cardAnim}>
            <FiTrendingUp />
            <h3>High-Precision Bending</h3>
            <p>
              Complex curved and bent glass manufactured with tight
              tolerances and repeatability.
            </p>
          </motion.div>

          <motion.div className="vaf-card" variants={cardAnim}>
            <FiEye />
            <h3>Optical Distortion Control</h3>
            <p>
              Advanced inspection and forming processes ensure minimal
              distortion and clear visibility.
            </p>
          </motion.div>

          <motion.div className="vaf-card" variants={cardAnim}>
            <FiCrop />
            <h3>Edge Polishing & Finishing</h3>
            <p>
              CNC-polished edges improve safety, bonding performance,
              and visual quality.
            </p>
          </motion.div>

          <motion.div className="vaf-card wide" variants={cardAnim}>
            <FiHash />
            <h3>Barcode Traceability</h3>
            <p>
              End-to-end barcode tracking enables full production
              traceability, quality control, and compliance.
            </p>
          </motion.div>

        </motion.div>
      </section>

    </div>
  );
}