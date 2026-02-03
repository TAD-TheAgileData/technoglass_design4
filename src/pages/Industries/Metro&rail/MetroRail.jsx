import React from "react";
import { motion } from "framer-motion";
import {
  FaTrain,
  FaShieldAlt,
  FaFireExtinguisher,
  FaCheckCircle,
  FaCity
} from "react-icons/fa";
import "./MetroRail.css";

import railImg from "../../../assets/Metro_Rail/RailHero.png";
import railImg1 from "../../../assets/Metro_Rail/Railimage.png";
/* ================= ANIMATIONS ================= */
const heroText = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeCard = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function MetroRail() {
  return (
    <div className="mr-root">

      {/* ================= HERO ================= */}
     {/* ================= HERO ================= */}
<section className="mr-hero">

  {/* HERO IMAGE */}
  <motion.div
    className="mr-hero-image"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2.2, ease: "easeOut" }}
    style={{ backgroundImage: `url(${railImg})` }}
  />

  {/* DARK GRADIENT OVERLAY */}
  <div className="mr-hero-overlay" />

  {/* HERO CONTENT */}
  <motion.div
    className="mr-hero-content"
    initial="hidden"
    animate="visible"
  >
    <motion.span variants={heroText} className="mr-eyebrow">
      METRO & RAIL SOLUTIONS
    </motion.span>

    <motion.h1 variants={heroText}>
      Engineering Glass for
      <span> Next-Generation Rail</span>
    </motion.h1>

    <motion.p variants={heroText}>
      High-performance rail glazing systems designed for
      safety-critical environments, long-term durability,
      and global certification standards.
    </motion.p>

    <motion.div
      variants={heroText}
      className="mr-scroll-indicator"
    >
      ⟱ Explore Capabilities
    </motion.div>
  </motion.div>
</section>

      {/* ================= OVERVIEW ================= */}
      <section className="mr-overview">
        <motion.div
          className="mr-overview-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeCard} className="mr-overview-text">
            <h2>Built for Urban Mobility</h2>
            <div className="mr-line" />
            <p>
              Our Metro & Rail glass solutions meet the most demanding
              operational requirements of public transportation systems.
            </p>
            <p>
              From laminated safety glazing to structural bonded assemblies,
              each solution is engineered to ensure passenger protection,
              fire compliance, and optical precision.
            </p>
          </motion.div>

          <motion.div variants={fadeCard} className="mr-overview-image">
            <img src={railImg1} alt="Rail Glass Systems" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="mr-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Applications
        </motion.h2>

        <div className="mr-cards">
          {[
            {
              icon: <FaTrain />,
              title: "Rail-Certified Laminated Glass",
              desc: "Impact-resistant laminated glazing engineered for passenger safety and structural strength."
            },
            {
              icon: <FaShieldAlt />,
              title: "Double Glazing Systems",
              desc: "Thermal and acoustic insulation enhancing ride comfort and energy efficiency."
            },
            {
              icon: <FaCheckCircle />,
              title: "Structural Bonded Assemblies",
              desc: "Advanced bonding technology enabling modern rail vehicle architecture."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mr-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeCard}
              transition={{ delay: i * 0.15 }}
            >
              <div className="mr-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STRENGTHS ================= */}
      <section className="mr-strengths">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Core Strengths
        </motion.h2>

        <div className="mr-strength-grid">
          {[
            {
              icon: <FaFireExtinguisher />,
              title: "Fire & Smoke Compliance",
              desc: "Certified glass solutions meeting stringent rail fire-safety standards."
            },
            {
              icon: <FaShieldAlt />,
              title: "Operational Reliability",
              desc: "Engineered for vibration, weather extremes, and long service life."
            },
            {
              icon: <FaCheckCircle />,
              title: "Global Certifications",
              desc: "Fully compliant with international rail and transit regulations."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mr-strength-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeCard}
              transition={{ delay: i * 0.15 }}
            >
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MARKETS ================= */}
      <section className="mr-markets">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Markets Served
        </motion.h2>

        <div className="mr-market-list">
          {[
            "Metro Trains",
            "Light Rail Transit (LRT)",
            "Monorail Systems",
            "Urban & Intercity Rail Networks"
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mr-market-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <FaCity />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}