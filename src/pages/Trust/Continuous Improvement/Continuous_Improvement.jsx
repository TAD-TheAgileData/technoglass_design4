import React from "react";
import { motion } from "framer-motion";
import {
  MdTrendingUp,
  MdAssessment,
  MdPrecisionManufacturing,
  MdAutoGraph,
} from "react-icons/md";
import "./ContinuousImprovement.css";

import heroImg from "../../../assets/Continousimprovement/Herobanner.jpg";

/* ANIMATION */
const fade = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const nodeAnim = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.9 },
  }),
};

export default function Continuous_Improvement() {
  return (
    <div className="cip-root">

      {/* ================= HERO ================= */}
      <section
        className="cip-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="cip-hero-glass">
          <motion.div
            className="cip-hero-content"
            variants={fade}
            initial="hidden"
            animate="visible"
          >
            <span className="cip-chip">CONTINUOUS IMPROVEMENT</span>
            <h1>Built to Improve. Designed to Evolve.</h1>
            <p>
              A disciplined system combining Kaizen, data intelligence,
              and innovation to drive sustainable excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STRATEGIC SYSTEM ================= */}
      <section className="cip-system">

        <motion.div
          className="cip-system-head"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>A Closed-Loop Improvement System</h2>
          <p>
            Continuous improvement is embedded as a structured,
            measurable, and repeatable operating system.
          </p>
        </motion.div>

        <div className="cip-nodes">

          <motion.div
            className="cip-node"
            custom={0}
            variants={nodeAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdTrendingUp />
            <h3>Kaizen, Lean & Six Sigma</h3>
            <p>
              Proven methodologies systematically eliminate waste,
              reduce variation, and stabilize processes.
            </p>
          </motion.div>

          <motion.div
            className="cip-node"
            custom={1}
            variants={nodeAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdAssessment />
            <h3>Performance Reviews & Audits</h3>
            <p>
              KPI governance, structured audits, and root-cause
              analysis ensure accountability and progress.
            </p>
          </motion.div>

          <motion.div
            className="cip-node highlight"
            custom={2}
            variants={nodeAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdPrecisionManufacturing />
            <h3>Technology & Capability Investment</h3>
            <p>
              Investment in automation, analytics, and workforce
              skills strengthens long-term competitiveness.
            </p>
          </motion.div>

          <motion.div
            className="cip-node"
            custom={3}
            variants={nodeAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MdAutoGraph />
            <h3>Culture of Innovation & Learning</h3>
            <p>
              Empowered teams, idea systems, and knowledge sharing
              sustain innovation across the organization.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}