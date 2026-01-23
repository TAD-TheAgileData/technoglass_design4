import React from "react";
import "./Sunroof.css";
import { motion } from "framer-motion";
import {
  FiSun,
  FiShield,
  FiLayers,
  FiWind,
  FiZap
} from "react-icons/fi";

import heroImg from "../../../assets/Sunroof/Hero.jpg";
import processImg from "../../../assets/Sunroof/Process.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function Sunroofs() {
  return (
    <div className="sunroof-root">

      {/* ================= HERO ================= */}
      <section
        className="sunroof-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="sunroof-hero-overlay">
          <motion.div
            className="sunroof-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1.2 }}
          >
            <span className="sunroof-chip">ADVANCED ROOF SYSTEMS</span>
            <h1>Sunroofs & Moonroofs</h1>
            <p>
              Precision-engineered automotive glass delivering thermal comfort,
              structural strength, and elevated driving experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="sunroof-highlights">
        <div className="highlight-grid">

          {[
            {
              icon: <FiSun />,
              title: "Tinted & Solar-Control Glass",
              text: "Advanced coatings reduce heat and glare while enhancing cabin comfort."
            },
            {
              icon: <FiLayers />,
              title: "Laminated or Tempered",
              text: "Flexible configurations for safety, acoustics, and durability."
            },
            {
              icon: <FiShield />,
              title: "UV & IR Protection",
              text: "High-performance filtering protects passengers and interiors."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="highlight-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.2, duration: 0.9 }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= FEATURE SPLIT ================= */}
      <section className="sunroof-features">
        <motion.div
          className="features-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <h2>Engineered for Structural Excellence</h2>

          <ul className="sunroof-list">
            <li>
              <span className="icon"><FiWind /></span>
              Curved & bent glass for panoramic roof designs
            </li>
            <li>
              <span className="icon"><FiZap /></span>
              High-strength bonding compatibility
            </li>
            <li>
              <span className="icon"><FiShield /></span>
              OEM-approved impact & safety standards
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="features-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={processImg} alt="Sunroof Manufacturing" />
        </motion.div>
      </section>

    </div>
  );
}