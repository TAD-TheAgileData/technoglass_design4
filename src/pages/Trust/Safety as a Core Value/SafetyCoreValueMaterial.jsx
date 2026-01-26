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

      {/* ================= ARCHITECTURE SECTION ================= */}
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
            <p>
              Ownership-driven safety culture reinforced at every
              organizational level.
            </p>
          </motion.div>

          <motion.div className="scm-module" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <GraduationCap />
            <h3>Training & Competency</h3>
            <p>
              Continuous training, certification, and awareness
              programs reduce risk proactively.
            </p>
          </motion.div>

          <motion.div className="scm-module highlight" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ClipboardList />
            <h3>Audits & Risk Control</h3>
            <p>
              Regular audits, hazard analysis, and preventive
              actions ensure compliance and control.
            </p>
          </motion.div>

          <motion.div className="scm-module" variants={iconFloat}
            initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Target />
            <h3>Zero-Incident Mindset</h3>
            <p>
              Clear reporting, accountability, and learning loops
              drive incident-free operations.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}