import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaBalanceScale,
  FaMicroscope
} from "react-icons/fa";
import "./FragmentationStandards.css";

import fragImg from "../../../../assets/Fragmentationstandars/Fragmentationimage.jpeg";

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
  visible: { transition: { staggerChildren: 0.18 } }
};

export default function FragmentationStandards() {
  return (
    <div className="fs-root">

      {/* ================= HERO ================= */}
      <section className="fs-hero">
        <div className="fs-hero-glow" />

        <motion.div
          className="fs-hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="fs-eyebrow">
            SAFETY ENGINEERING
          </motion.span>

          <motion.h1 variants={fadeUp}>
            Fragmentation <span>Standards</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Certified fragmentation patterns engineered to ensure occupant
            safety, regulatory compliance, and controlled breakage behavior
            in automotive glass applications.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="fs-overview">
        <motion.div
          className="fs-overview-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="fs-text">
            <h2>Regulation Compilance</h2>
            <p>
              Fragmentation standards define how tempered automotive glass
              breaks under impact. Instead of sharp shards, glass must
              fragment into small, blunt-edged pieces to reduce injury risk.
            </p>
            <p>
              Our processes are validated through rigorous testing protocols,
              ensuring uniform fragment size distribution and compliance with
              global automotive safety regulations.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="fs-image">
            <img src={fragImg} alt="Fragmentation Testing" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="fs-standards">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Compliance & Certification
        </motion.h2>

        <div className="fs-cards">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="fs-card">
            <FaBalanceScale />
            <h3>Global Regulations</h3>
            <p>
              Tested and certified to comply with ECE R43, AIS, IS, and other
              international automotive safety standards.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="fs-card">
            <FaMicroscope />
            <h3>Fragment Size Analysis</h3>
            <p>
              Controlled fragmentation patterns with statistically verified
              fragment counts and size uniformity.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="fs-card">
            <FaShieldAlt />
            <h3>Occupant Safety</h3>
            <p>
              Engineered breakage behavior minimizes laceration risk and
              enhances post-impact safety.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="fs-card">
            <FaCheckCircle />
            <h3>Batch Certification</h3>
            <p>
              Every production batch undergoes fragmentation testing with
              documented traceability and compliance records.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}