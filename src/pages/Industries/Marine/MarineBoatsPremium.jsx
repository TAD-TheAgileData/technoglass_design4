import React from "react";
import { motion } from "framer-motion";
import {
  FaShip,
  FaWater,
  FaSun,
  FaShieldAlt,
  FaAnchor
} from "react-icons/fa";
import "./MarineBoats.css";

import marineImg from "../../../assets/MarineBoats/Hero.png";

/* ================= MOTION ================= */
/* ================= MOTION ================= */
const reveal = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatCard = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9 }
  }
};


export default function MarineBoatsPremium() {
 return (
    <div className="mbp-root">

      {/* ================= HERO ================= */}
      <section className="mbp-hero">
        <motion.div
          className="mbp-hero-image"
          style={{ backgroundImage: `url(${marineImg})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5 }}
        />

        <div className="mbp-hero-overlay" />

        <motion.div
          className="mbp-hero-content"
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={reveal} className="mbp-eyebrow">
            MARINE & BOAT TECHNOLOGY
          </motion.span>

          <motion.h1 variants={reveal}>
            Premium Glass Systems for
            <span> Marine Engineering</span>
          </motion.h1>

          <motion.p variants={reveal}>
            Advanced glazing technologies crafted for saltwater endurance,
            optical clarity, and structural excellence across marine platforms.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="mbp-section">
        <motion.div
          className="mbp-section-header"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Applications</h2>
          <p>Engineered glass solutions designed for demanding marine conditions.</p>
        </motion.div>

        <div className="mbp-card-grid">
          {[
            {
              icon: <FaShip />,
              title: "Marine-Grade Glass",
              desc: "High-performance glazing resistant to corrosion, moisture, and pressure variations."
            },
            {
              icon: <FaWater />,
              title: "Curved Marine Glass",
              desc: "Precision curved panels delivering aerodynamic efficiency and luxury aesthetics."
            },
            {
              icon: <FaAnchor />,
              title: "Structural Bonding Systems",
              desc: "Advanced bonding technology ensuring strength, sealing, and longevity."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mbp-glass-card"
              variants={floatCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.18 }}
            >
              <div className="mbp-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STRENGTHS ================= */}
      <section className="mbp-strengths">
        <motion.div
          className="mbp-strength-header"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Core Strengths</h2>
        </motion.div>

        <div className="mbp-strength-grid">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Saltwater Resistance",
              desc: "Proven durability against corrosion and aggressive marine exposure."
            },
            {
              icon: <FaSun />,
              title: "UV Stability",
              desc: "Maintains clarity and performance under prolonged UV exposure."
            },
            {
              icon: <FaShip />,
              title: "Structural Integrity",
              desc: "Designed for vibration, impact loads, and long service life."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mbp-strength-card"
              variants={floatCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.16 }}
            >
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MARKETS ================= */}
      <section className="mbp-markets">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Markets Served
        </motion.h2>

        <div className="mbp-market-row">
          {[
            "Passenger Ferries",
            "Leisure & Luxury Boats",
            "Commercial Marine Vessels"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mbp-market-pill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}