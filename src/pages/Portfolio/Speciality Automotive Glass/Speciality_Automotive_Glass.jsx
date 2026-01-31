import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBus,
  FaTruckMoving,
  FaTractor,
  FaShieldAlt
} from "react-icons/fa";
import "./SpecialtyAutomotiveGlass.css";

import busImg from "../../../assets/SpecialityAutomotiveglass/bus.png";
import truckImg from "../../../assets/SpecialityAutomotiveglass/truck.png";
import offroadImg from "../../../assets/SpecialityAutomotiveglass/Glass.jpg";
import defenseImg from "../../../assets/SpecialityAutomotiveglass/Defence.jpg";

/* ================= MOTION ================= */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};

const cardAnim = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Speciality_Automotive_Glass() {
  const navigate = useNavigate();

  const data = [
    {
      title: "Bus & Coach Glass",
      desc: "Large curved windshields, panoramic side glass and laminated safety panels.",
      icon: <FaBus />,
      img: busImg,
      link: "/specialty/bus-coach"
    },
    {
      title: "Commercial Vehicle Glass",
      desc: "Heavy-duty glazing for trucks, pickups and delivery vehicles.",
      icon: <FaTruckMoving />,
      img: truckImg,
      link: "/specialty/commercial"
    },
    {
      title: "Off-Highway & Industrial",
      desc: "Impact-resistant glass for tractors and construction machinery.",
      icon: <FaTractor />,
      img: offroadImg,
      link: "/specialty/off-highway"
    },
    {
      title: "Defense & Armored Vehicles",
      desc: "Multi-layer laminated ballistic glass for extreme protection.",
      icon: <FaShieldAlt />,
      img: defenseImg,
      link: "/specialty/defense"
    }
  ];

  return (
    <div className="sag-root">

      {/* ================= HERO ================= */}
      <section className="sag-hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="sag-hero-content"
        >
          <span className="sag-eyebrow">SPECIALTY AUTOMOTIVE</span>
          <h1>
            Advanced <span>Specialty</span><br />
            Automotive Glass
          </h1>
          <p>
            Engineered glazing systems for commercial, industrial,
            off-highway and defense vehicles operating in extreme conditions.
          </p>
        </motion.div>
      </section>

      {/* ================= NEW LAYOUT GRID ================= */}
      <section className="sag-layout">
        <motion.div
          className="sag-layout-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="sag-layout-card"
              onClick={() => navigate(item.link)}
            >
              <div className="sag-bg">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="sag-content">
                <div className="sag-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="sag-link">
                  Explore Application →
                </span>
              </div>

              <div className="sag-glow" />
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}