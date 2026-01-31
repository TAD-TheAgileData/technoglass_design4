import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  GraduationCap,
  ClipboardList,
  Target
} from "lucide-react";
import "./SafetyCoreValue.css";

import heroImg from "../../../assets/safetycorevalue/HeroSafety.jpg";
import safetyRulesImg from "../../../assets/safetycorevalue/Image2.jpeg";

/* MOTION */
const fadeSlide = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const iconFloat = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 }
  }
};

export default function SafetyCoreValueMaterial() {
  return (
    <div className="scm-root">

      {/* ================= HERO ================= */}
      <section
        className="scm-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="scm-hero-glass">
          <motion.div
            className="scm-hero-text"
            variants={fadeSlide}
            initial="hidden"
            animate="visible"
          >
            <span className="scm-chip">CORE VALUE</span>
            <h1>Safety as a Core Value</h1>
            <p>
              Safety is not a policy — it is an operating principle
              embedded into every process, decision, and action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="scm-architecture">

        <motion.div
          className="scm-left"
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Built into the Foundation</h2>
          <p>
            From shop-floor execution to leadership governance,
            safety drives behavior, accountability, and continuous improvement.
          </p>

          <div className="scm-metrics">
            <div>
              <strong>100%</strong>
              <span>Safety Training Coverage</span>
            </div>
            <div>
              <strong>Zero</strong>
              <span>Incident Target</span>
            </div>
          </div>
        </motion.div>

        <div className="scm-right">

          <motion.div className="scm-module" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Shield />
            <h3>Safety-First Culture</h3>
            <p>Ownership-driven safety culture reinforced at every level.</p>
          </motion.div>

          <motion.div className="scm-module" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <GraduationCap />
            <h3>Training & Competency</h3>
            <p>Continuous training and awareness programs reduce risk.</p>
          </motion.div>

          <motion.div className="scm-module highlight" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ClipboardList />
            <h3>Audits & Risk Control</h3>
            <p>Audits and preventive actions ensure compliance.</p>
          </motion.div>

          <motion.div className="scm-module" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Target />
            <h3>Zero-Incident Mindset</h3>
            <p>Accountability and learning loops drive safe operations.</p>
          </motion.div>

        </div>
      </section>

      {/* ================= PLANT SAFETY RULES ================= */}
      <section className="scm-safety-rules">

        <motion.div
          className="scm-safety-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="scm-chip">PLANT SAFETY</span>
          <h2>Mandatory Safety Rules</h2>
          <p>
            Strictly enforced rules ensuring a safe, controlled,
            and incident-free manufacturing environment.
          </p>
        </motion.div>

        <div className="scm-safety-grid">

          {/* IMAGE */}
          <motion.div
            className="scm-safety-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={safetyRulesImg} alt="Plant Safety Rules" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="scm-safety-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <ul>
              <li>Safety shoes are mandatory inside the premises</li>
              <li>Photography is strictly prohibited</li>
              <li>Restricted movement within the production floor</li>
              <li>Follow escort instructions during plant visits</li>
              <li>Do not touch equipment or unknown materials</li>
              <li>Mobile phone usage is prohibited on the shop floor</li>
              <li>Avoid loose clothing inside the plant</li>
              <li>Use only marked pedestrian pathways</li>
              <li>Observe all safety signs and warnings</li>
            </ul>
          </motion.div>

        </div>
      </section>

    </div>
  );
}