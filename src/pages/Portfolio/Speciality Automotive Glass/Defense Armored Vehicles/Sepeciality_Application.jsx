import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiLayers,
  FiEye,
  FiTarget
} from "react-icons/fi";
import "./Sepeciality_Application.css";

import heroImg from "../../../../assets/OFF_Highway/Hero.jpg";
import structureImg from "../../../../assets/OFF_Highway/Hero.jpg";

const fade = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function Sepeciality_Application() {
  return (
    <div className="defx-root">

      {/* ================= HERO ================= */}
      <section
        className="defx-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="defx-hero-overlay">
          <motion.div
            className="defx-hero-text"
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ duration: 1.3 }}
          >
            <span className="defx-label">DEFENSE SYSTEMS</span>
            <h1>Defense & Armored Vehicles</h1>
            <p>
              Advanced multi-layer laminated ballistic glass engineered for
              extreme threat environments and mission-critical protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="defx-stack">

        <motion.div
          className="defx-slab left"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 1 }}
        >
          <FiLayers />
          <h3>Multi-Layer Architecture</h3>
          <p>
            Engineered glass stacks with polycarbonate interlayers to absorb,
            disperse, and neutralize ballistic energy.
          </p>
        </motion.div>

        <motion.div
          className="defx-slab right"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <FiShield />
          <h3>Ballistic Protection</h3>
          <p>
            Designed to withstand high-velocity impacts and small-arms fire
            while maintaining structural integrity.
          </p>
        </motion.div>

        <motion.div
          className="defx-slab left"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <FiEye />
          <h3>Optical Clarity</h3>
          <p>
            Distortion-free visibility with precision-controlled lamination
            and surface flatness.
          </p>
        </motion.div>

        <motion.div
          className="defx-slab right"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <FiTarget />
          <h3>Mission Reliability</h3>
          <p>
            Qualified for armored transports, tactical vehicles, and defense
            mobility platforms.
          </p>
        </motion.div>

      </section>

      {/* ================= STRUCTURAL ================= */}
      <section className="defx-structure">
        <motion.div
          className="defx-structure-text"
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={fade}
          transition={{ duration: 1 }}
        >
          <h2>Armored Glass Integration</h2>
          <p>
            Designed for seamless integration with armored frames, ensuring
            long-term durability, reduced spall risk, and operational safety
            in extreme environments.
          </p>
        </motion.div>

        <motion.div
          className="defx-structure-image"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={structureImg} alt="Ballistic Glass Structure" />
        </motion.div>
      </section>

    </div>
  );
}