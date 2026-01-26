import React from "react";
import { motion } from "framer-motion";
import {
  MdVerified,
  MdHandshake,
  MdBusinessCenter,
} from "react-icons/md";
import "./Trusted_Partners.css";

import heroImg from "../../../assets/TrustedBrands/HeroTrusted.jpg";

/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Trusted_Partners() {
  return (
    <div className="tb-root">

      {/* ================= HERO ================= */}
      <section
        className="tb-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="tb-hero-overlay">
          <motion.div
            className="tb-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="tb-chip">GLOBAL TRUST</span>
            <h1>Trusted by Leading Brands</h1>
            <p>
              Long-term partnerships built on reliability, performance,
              and uncompromised quality across industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST METRICS ================= */}
      <section className="tb-metrics">
        <motion.div
          className="tb-metric"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MdVerified />
          <h3>OEM Approved</h3>
          <p>Trusted supplier to global automotive and defense OEMs.</p>
        </motion.div>

        <motion.div
          className="tb-metric"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MdHandshake />
          <h3>Long-Term Partnerships</h3>
          <p>Decade-long relationships built on consistency and trust.</p>
        </motion.div>

        <motion.div
          className="tb-metric"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MdBusinessCenter />
          <h3>Multi-Industry Reach</h3>
          <p>Serving automotive, architecture, defense, and infrastructure.</p>
        </motion.div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="tb-testimonials">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          What Our Partners Say
        </motion.h2>

        <div className="tb-testimonial-grid">
          {[
            "Consistent quality and on-time delivery make them a trusted partner.",
            "Their engineering support and customization capabilities stand out.",
            "A reliable supplier with world-class manufacturing discipline.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="tb-testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <p>“{text}”</p>
              <span>— Industry Partner</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="tb-case">
        <motion.div
          className="tb-case-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3>Case Highlight</h3>
          <p>
            Partnered with a global OEM to deliver high-precision laminated
            safety glass across multiple vehicle platforms, achieving
            zero-defect performance and sustained supply continuity.
          </p>
        </motion.div>
      </section>

    </div>
  );
}