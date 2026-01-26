import React from "react";
import "./Passenger_vehicles.css";
import { motion } from "framer-motion";
import {
  FiShield,
  FiTruck,
  FiLayers,
  FiWind
} from "react-icons/fi";

import heroImg from "../../../../assets/Passenger vehicle/Hero1.jpg";
import glassImg from "../../../../assets/Passenger vehicle/BusGlass.jpg";

export default function Passenger_vehicles() {
  return (
    <div className="bcx-root">

      {/* ================= SPLIT HERO ================= */}
      <section className="bcx-hero">
        <motion.div
          className="bcx-hero-text"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="bcx-tag">PREMIUM PASSENGER GLAZING</span>
          <h1>Bus & Coach Glass</h1>
          <p>
            Advanced curved glass systems engineered for large passenger
            vehicles, delivering safety, visibility, and long-term durability.
          </p>
        </motion.div>

        <motion.div
          className="bcx-hero-image"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <img src={heroImg} alt="Bus Glass Hero" />
        </motion.div>
      </section>

      {/* ================= FLOATING GLASS STRIP ================= */}
      <section className="bcx-float">
        <motion.div
          className="bcx-float-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Designed for Scale & Strength</h2>
          <p>
            Our bus and coach glazing solutions are optimized for large surface
            areas, complex curvature, and structural bonding requirements.
          </p>
        </motion.div>
      </section>

      {/* ================= HORIZONTAL FEATURE RAIL ================= */}
      <section className="bcx-rail">
        {[
          {
            icon: <FiTruck />,
            title: "Large Curved Windshields",
            text: "Panoramic, distortion-free windshields with precision curvature control."
          },
          {
            icon: <FiLayers />,
            title: "Side & Quarter Glass",
            text: "Consistent thickness and optical clarity across extended glass panels."
          },
          {
            icon: <FiShield />,
            title: "Laminated Safety Panels",
            text: "Impact-resistant laminated glazing for enhanced passenger protection."
          },
          {
            icon: <FiWind />,
            title: "Comfort Optimized",
            text: "Noise reduction and thermal insulation for long-distance travel comfort."
          }
        ].map((item, i) => (
          <motion.div
            className="bcx-rail-item"
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -14 }}
          >
            <div className="bcx-rail-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= DIAGONAL IMAGE SECTION ================= */}
      <section className="bcx-diagonal">
        <motion.img
          src={glassImg}
          alt="Coach Glass"
          initial={{ opacity: 0, scale: 1.12 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
      </section>

      {/* ================= SAFETY STATEMENT ================= */}
      <section className="bcx-statement">
        <motion.div
          className="bcx-statement-box"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Built for Regulatory Compliance & Long Service Life</h2>
          <ul>
            <li>ECE R43 and global safety standards</li>
            <li>Structural bonding compatibility</li>
            <li>High optical quality over large areas</li>
            <li>Proven durability in high-duty cycles</li>
          </ul>
        </motion.div>
      </section>

    </div>
  );
}