import React from "react";
import { motion } from "framer-motion";
import "./AutoClaveCapacity.css";

import heroImg from "../../../../assets/Autoclave/Hero.png";
import autoclaveImg from "../../../../assets/Autoclave/Process.png";

import { FaWind, FaLink, FaEye } from "react-icons/fa";

/* ================= ANIMATION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

export default function AutoClaveCapacity() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      {/* ===== HERO SECTION ===== */}
<section className="autoclave-hero">
  <motion.img
    src={heroImg}
    alt="Autoclave Process"
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2.5, ease: "easeOut" }}
  />

  <div className="hero-overlay">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Autoclave Capacity
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
    >
      Advanced lamination technology for strength and clarity
    </motion.p>
  </div>
</section>


      {/* ===== MAIN CONTENT ===== */}
      <section className="autoclave-section">
        <div className="autoclave-container">

          <motion.h2
            className="autoclave-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Autoclave Process & Specifications
          </motion.h2>

          <motion.p
            className="autoclave-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            High-capacity autoclaves ensure flawless lamination,
            long-term durability, and superior optical performance.
          </motion.p>

          {/* ===== IMAGE + CONTENT ===== */}
          <div className="autoclave-merged">

            <motion.div
              className="autoclave-merged-image"
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={autoclaveImg} alt="Autoclave Lamination" />
            </motion.div>

            <motion.div
              className="autoclave-merged-content"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp}>
                Autoclave Lamination Process Control
              </motion.h2>

              <motion.div className="autoclave-topic" variants={fadeUp}>
                <h3>Precisely Regulated Temperature</h3>
                <p>
                  Uniform temperature profiles ensure distortion-free
                  bonding and optimal interlayer fusion.
                </p>
              </motion.div>

              <motion.div className="autoclave-topic" variants={fadeUp}>
                <h3>Controlled Pressure Cycles</h3>
                <p>
                  Managed pressure eliminates air pockets and guarantees
                  structural integrity.
                </p>
              </motion.div>

              <motion.div className="autoclave-topic" variants={fadeUp}>
                <h3>Uniform Heating & Optical Consistency</h3>
                <p>
                  Even heat penetration ensures premium clarity and
                  compliance with global safety standards.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* ===== BENEFITS ===== */}
          <motion.div
            className="autoclave-benefits"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="benefits-title" variants={fadeUp}>
              Key Process Outcomes
            </motion.h3>

            <div className="benefits-grid">
              {[
                {
                  icon: <FaWind />,
                  title: "Complete Air Removal",
                  desc: "Vacuum and pressure systems eliminate air entrapment."
                },
                {
                  icon: <FaLink />,
                  title: "Strong Interlayer Bonding",
                  desc: "Durable adhesion for long-term performance."
                },
                {
                  icon: <FaEye />,
                  title: "High Optical Clarity",
                  desc: "Crystal-clear transparency across all layers."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="benefit-card"
                  variants={fadeUp}
                >
                  <span className="benefit-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}