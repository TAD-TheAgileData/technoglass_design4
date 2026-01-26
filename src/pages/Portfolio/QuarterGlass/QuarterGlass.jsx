import React from "react";
import { motion } from "framer-motion";
import { FiGrid, FiTool, FiLayers, FiShield } from "react-icons/fi";
import "./QuarterGlass.css";
import glassImg from "../../../assets/Quarterglass/QuarterHero.jpg";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function QuarterGlass() {
  return (
    <div className="qg-root">

      {/* ================= HERO IMAGE ================= */}
      <section className="qg-hero-image">
        <motion.div
          className="qg-hero-overlay"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="qg-chip">ADVANCED GLAZING</span>
          <h1>Quarter Glass</h1>
          <p>
            Fixed precision quarter glass engineered with CNC accuracy,
            ceramic printing, and premium laminated safety performance.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="qg-content">

        {/* IMAGE + FEATURES */}
        <div className="qg-showcase">

          <motion.div
            className="qg-image-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={glassImg} alt="Quarter Glass Detail" />
            <span className="qg-orb" />
          </motion.div>

          <motion.div
            className="qg-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="qg-card" variants={cardAnim}>
              <FiGrid />
              <h3>Fixed Quarter Glass</h3>
              <p>
                Non-operable quarter glass providing structural stability,
                aerodynamic flow, and seamless vehicle integration.
              </p>
            </motion.div>

            <motion.div className="qg-card" variants={cardAnim}>
              <FiTool />
              <h3>CNC Precision Shapes</h3>
              <p>
                Complex contours and cutouts achieved with micron-level CNC
                accuracy for OEM-grade fitment.
              </p>
            </motion.div>

            <motion.div className="qg-card" variants={cardAnim}>
              <FiLayers />
              <h3>Ceramic Printed Borders</h3>
              <p>
                High-temperature ceramic frit improves UV protection,
                adhesion strength, and visual refinement.
              </p>
            </motion.div>

            <motion.div className="qg-card highlight" variants={cardAnim}>
              <FiShield />
              <h3>Laminated / Tempered Safety</h3>
              <p>
                Engineered laminated or tempered options meeting global
                safety, acoustic, and impact standards.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>

  )
}

