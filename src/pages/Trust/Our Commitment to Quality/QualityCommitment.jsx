import React from "react";
import { motion } from "framer-motion";
import "./QualityCommitment.css";
import heroImg from "../../../assets/QualityCommitment/QualityHero.png";

import imgSafety from "../../../assets/QualityCommitment/QualityHero.jpg";
import imgQuality from "../../../assets/QualityCommitment/imgQuality.jpg";
import imgPerformance from "../../../assets/QualityCommitment/Performance.jpg";

/* CARD ANIMATION */
const cardAnim = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function QualityCommitment() {
  return (
    <div className="qc-root">

      {/* ================= HERO ================= */}
     {/* ================= HERO ================= */}
<section
  className="qc-hero"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="qc-hero-overlay" />

  <motion.div
    className="qc-hero-content"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  >
    <span className="qc-chip">ZERO COMPROMISE</span>
    <h1>Our Commitment to Quality</h1>
    <p>
      A zero-tolerance approach to safety, performance, and
      precision-engineered glass solutions.
    </p>
  </motion.div>
</section>


      {/* ================= IMAGE CARDS ================= */}
      <section className="qc-section">
        <div className="qc-card-grid">

          {[imgSafety, imgQuality, imgPerformance].map((img, i) => (
            <motion.div
              key={i}
              className="qc-img-card"
              custom={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="qc-border-glow" />
              <img src={img} alt="Quality" />
              <div className="qc-overlay-card" />

              <div className="qc-card-text">
                <h3>
                  {i === 0 && "Uncompromised Safety"}
                  {i === 1 && "Certified Quality"}
                  {i === 2 && "Performance Assured"}
                </h3>
                <p>
                  Precision controlled processes ensuring absolute
                  reliability and consistency.
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= QUALITY FRAMEWORK ================= */}
      <section className="qc-framework">
        <motion.div
          className="qc-framework-head"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="qc-chip">QUALITY ASSURANCE</span>
          <h2>Built on Discipline. Driven by Precision.</h2>
          <p>
            Every stage follows a structured, validated framework to ensure
            uncompromised compliance and performance.
          </p>
        </motion.div>

        <div className="qc-framework-grid">
          {[
            "Design Validation",
            "Process Control",
            "Performance Testing",
            "Traceability & Audit",
          ].map((title, i) => (
            <motion.div
              key={i}
              className="qc-framework-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.9 }}
            >
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>
                Controlled systems, real-time monitoring, and documentation
                ensure zero deviation from standards.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}