import React from "react";
import "./OffHighwayGlass.css";
import { motion } from "framer-motion";
import {
  FiTool,
  FiShield,
  FiTruck,
  FiHardDrive
} from "react-icons/fi";

import heroImg from "../../../../assets/OFF_Highway/Hero.jpg";
import machineImg from "../../../../assets/OFF_Highway/Glass.jpg";

export default function Off_highway_Equipment() {
  return (
    <div className="ohv-root">

      {/* ================= HERO ================= */}
      <section
        className="ohv-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="ohv-overlay">
          <motion.div
            className="ohv-hero-content"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="ohv-label">HEAVY-DUTY GLAZING</span>
            <h1>Off-Highway & Industrial Vehicles</h1>
            <p>
              High-performance glass solutions engineered for extreme operating
              conditions in agriculture, construction, and material handling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="ohv-intro">
        <motion.div
          className="ohv-intro-text"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Built to Withstand Harsh Environments</h2>
          <p>
            Off-highway vehicles demand glazing systems that can endure vibration,
            dust, debris, and continuous heavy operation without compromising
            operator safety or visibility.
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURES – STACKED ================= */}
      <section className="ohv-features">

        {[
          {
            icon: <FiShield />,
            title: "Impact-Resistant Safety Glass",
            text: "Tempered and laminated glass engineered to resist debris impact and accidental collisions."
          },
          {
            icon: <FiTool />,
            title: "Construction-Grade Durability",
            text: "Designed for loaders, excavators, cranes, and earth-moving machinery."
          },
          {
            icon: <FiTruck />,
            title: "Agricultural Applications",
            text: "Optimized glazing for tractors, harvesters, and farming equipment cabins."
          },
          {
            icon: <FiHardDrive />,
            title: "Industrial Equipment Compatibility",
            text: "Perfect fit for forklifts, warehouse vehicles, and material handling systems."
          }
        ].map((item, i) => (
          <motion.div
            className="ohv-feature-row"
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="ohv-feature-icon">{item.icon}</div>
            <div className="ohv-feature-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}

      </section>

      {/* ================= IMAGE BAND ================= */}
      <section className="ohv-band">
        <motion.img
          src={machineImg}
          alt="Industrial Vehicle Glass"
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
      </section>

      {/* ================= TECH PANEL ================= */}
      <section className="ohv-tech">
        <motion.div
          className="ohv-tech-box"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Engineered for Reliability</h2>
          <ul>
            <li>High vibration resistance</li>
            <li>Scratch & abrasion protection</li>
            <li>UV & thermal performance</li>
            <li>Structural bonding compatibility</li>
            <li>Compliance with global safety norms</li>
          </ul>
        </motion.div>
      </section>

    </div>
  );
}