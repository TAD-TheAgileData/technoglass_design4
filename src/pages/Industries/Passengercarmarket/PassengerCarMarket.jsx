import React from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaCogs,
  FaShieldAlt,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";
import "./PassengerCarMarket.css";

import carImg from "../../../assets/Passengercarmarket/Hero.png";
import autoGlassImg from "../../../assets/Passengercarmarket/Hero.png";
import bondingImg from "../../../assets/Passengercarmarket/Hero.png";
import fitmentImg from "../../../assets/Passengercarmarket/Hero.png";
/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9 }
  }
};

export default function PassengerCarMarket() {
  return (
    <div className="pcm-root">

      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
<section className="pcm-hero">

  {/* BACKGROUND IMAGE */}
  <div
    className="pcm-hero-bg"
    style={{ backgroundImage: `url(${carImg})` }}
  />

  {/* DARK / GLASS OVERLAY */}
  <div className="pcm-hero-overlay" />

  {/* CONTENT */}
  <motion.div
    className="pcm-hero-content"
    initial="hidden"
    animate="visible"
  >
    <motion.span variants={fadeUp} className="pcm-eyebrow">
      PASSENGER CAR MARKET
    </motion.span>

    <motion.h1 variants={fadeUp}>
      Advanced Automotive Glass
      <span> for Passenger Vehicles</span>
    </motion.h1>

    <motion.p variants={fadeUp}>
      OEM-grade automotive glazing solutions engineered for safety,
      precision, high-volume production, and global regulatory compliance.
    </motion.p>
  </motion.div>

</section>


       {/* ================= APPLICATIONS ================= */}
<section className="pcm-section pcm-zigzag">
<motion.h2
  className="pcm-zigzag-title pcm-zigzag-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  Applications
</motion.h2>



  {[
  {
    title: "Automotive Glazing",
    desc:
      "High-performance windshields, sidelites, and backlites engineered for superior optical clarity, impact resistance, and long-term durability. Manufactured in compliance with OEM specifications and global automotive safety standards, ensuring consistent quality across high-volume passenger vehicle programs.",
    img: autoGlassImg,
  },
  {
    title: "Primer & Bonding Solutions",
    desc:
      "Advanced primer application and bonding technologies designed to enhance adhesion strength, structural integrity, and environmental resistance. Optimized for automated and manual assembly lines, these solutions ensure reliable glass-to-body bonding and long-lasting performance under extreme operating conditions.",
    img: bondingImg,
  },
  {
    title: "Fitment Applications",
    desc:
      "Precision-engineered fitment solutions supporting seamless integration of automotive glass across diverse vehicle platforms. Designed to meet tight dimensional tolerances, enabling efficient installation, reduced assembly time, and consistent fit quality for both OEM manufacturing and aftermarket service operations.",
    img: fitmentImg,
  },
]
.map((item, i) => (
    <motion.div
      key={i}
      className={`pcm-zigzag-row ${i % 2 !== 0 ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* IMAGE */}
      <motion.div
        className="pcm-zigzag-image"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={item.img} alt={item.title} />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="pcm-zigzag-content"
        initial={{ x: i % 2 === 0 ? 40 : -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </motion.div>
    </motion.div>
  ))}
</section>


      {/* ================= KEY STRENGTHS ================= */}
<section className="pcm-strengths">

  <motion.div
    className="pcm-strengths-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="pcm-eyebrow">WHY CHOOSE US</span>
    <h2>Key Strengths</h2>
    <p>
      Engineered excellence backed by certified processes, scalable
      manufacturing, and OEM-approved quality systems.
    </p>
  </motion.div>

  <div className="pcm-strength-grid">
    {[
      {
        icon: <FaShieldAlt />,
        title: "High-Volume Capability",
        desc: "Scalable production systems delivering consistent quality for mass-market automotive programs."
      },
      {
        icon: <FaCheckCircle />,
        title: "QMS & ECE R43 Compliance",
        desc: "Fully aligned with OEM quality management systems and ECE R43 regulatory standards."
      },
      {
        icon: <FaCogs />,
        title: "OEM-Approved Processes",
        desc: "Manufacturing, inspection, and validation methods approved by global automotive OEMs."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        className="pcm-strength-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.7 }}
      >
        <div className="pcm-strength-icon">
          {item.icon}
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>

</section>


<section className="pcm-markets-premium">

  {/* HEADER */}
  <motion.div
    className="pcm-markets-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <span className="pcm-eyebrow">GLOBAL PRESENCE</span>
    <h2>Markets & Customers</h2>
    <p className="pcm-markets-sub">
      Supporting global automotive ecosystems with certified glass
      solutions across OEM, aftermarket, and international export markets.
    </p>
  </motion.div>

  {/* GRID */}
  <motion.div
    className="pcm-market-premium-grid"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.12 }
      }
    }}
  >
    {[
      {
        title: "Automotive OEMs",
        desc: "Supplying OEM-certified glass systems for global vehicle manufacturers."
      },
      {
        title: "After Sales Market",
        desc: "Reliable replacement and service solutions for aftermarket networks."
      },
      {
        title: "Authorized Dealers",
        desc: "OEM-aligned products delivered through certified dealer channels."
      },
      {
        title: "Export Market – GCC",
        desc: "Meeting regional standards across Gulf Cooperation Council markets."
      },
      {
        title: "Europe, Asia & USA",
        desc: "Export-compliant solutions meeting global regulatory requirements."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        className="pcm-market-card"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="pcm-market-accent" />

        <div className="pcm-market-icon">
          <FaGlobe />
        </div>

        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>

</section>


    </div>
  );
}