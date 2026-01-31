import React from "react";
import "./Passenger_vehicles.css";
import { motion } from "framer-motion";
import { FiShield, FiTruck, FiLayers, FiWind } from "react-icons/fi";

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
          <span className="bcx-tag">BUS & COACH</span>
          <h1>Bus & Coach Glass Solutions</h1>
          <p>
            High-performance glazing solutions for modern buses and coaches,
            engineered for safety, durability, and advanced vehicle integration.
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
          <h2>Engineered for Passenger Transport</h2>
          <p>
            Large-format safety glass solutions supporting complex vehicle
            designs, structural bonding, and long service life across demanding
            applications.
          </p>
        </motion.div>
      </section>

      {/* ================= HORIZONTAL FEATURE RAIL ================= */}
      <section className="bcx-rail">
        {[
          {
            icon: <FiLayers />,
            title: "Applications",
            text: "Large-format laminated & tempered glass, double glazing, adhesive bonding, and precision fitment solutions.",
          },
          {
            icon: <FiShield />,
            title: "Strengths",
            text: "Custom sizes, rapid design & development cycles, high durability, and consistent optical quality.",
          },
          {
            icon: <FiTruck />,
            title: "Markets",
            text: "Electric buses, intercity coaches, school buses, and next-generation passenger transport systems.",
          },
          {
            icon: <FiWind />,
            title: "Performance Focus",
            text: "Optimized for noise reduction, thermal comfort, and long-distance passenger comfort.",
          },
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
          <h2>Built for Reliability, Safety & Scalability</h2>
          <ul>
            <li>Large-format laminated and tempered safety glass</li>
            <li>Compatible with adhesive bonding & modern fitment systems</li>
            <li>Designed for electric and high-duty passenger vehicles</li>
            <li>Durable performance across diverse operating conditions</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
