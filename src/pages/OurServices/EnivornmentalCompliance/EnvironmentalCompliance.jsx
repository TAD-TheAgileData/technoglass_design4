import React from "react";
import { motion } from "framer-motion";
import {
  FaFireAlt,
  FaProjectDiagram,
  FaRecycle,
  FaWater,
  FaSmog,
  FaBuilding,
} from "react-icons/fa";
import "./EnvironmentalCompliance.css";

/* HERO IMAGE */
import heroImage from "../../../assets/EnivornmentalCompilance/Hero.jpg";

const complianceData = [
  {
    icon: <FaFireAlt />,
    title: "Energy-Efficient Furnaces",
    description:
      "High-performance energy-efficient furnaces are used to optimize heat utilization, reduce energy consumption, and lower carbon emissions without compromising production quality.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "SMART Projects",
    description:
      "SMART projects integrate automation and data-driven monitoring to enhance efficiency, reduce material wastage, and support sustainable manufacturing practices.",
  },
  {
    icon: <FaRecycle />,
    title: "Waste Reduction & Recycling",
    description:
      "Structured waste management systems focus on reducing waste at the source, encouraging reuse, and ensuring responsible recycling to minimize landfill impact.",
  },
  {
    icon: <FaWater />,
    title: "Water Treatment & Reuse",
    description:
      "Advanced water treatment facilities enable safe treatment and reuse of process water, helping conserve freshwater resources and maintain environmental compliance.",
  },
  {
    icon: <FaSmog />,
    title: "Low-Emission Processes",
    description:
      "Low-emission production methods and modern equipment are implemented to control pollutants and meet stringent environmental regulations.",
  },
  {
    icon: <FaBuilding />,
    title: "Green Building Compliance",
    description:
      "Our infrastructure follows green building standards, incorporating energy-efficient systems, sustainable materials, and environmentally responsible design.",
  },
];

const EnvironmentalCompliance = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="environment-hero">
        <img src={heroImage} alt="Environmental Compliance" />

        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Sustainability & Environmental Responsibility</h1>
            <p>
              Driving sustainable manufacturing through energy efficiency,
              responsible resource management, and environmentally compliant
              processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CARD SECTION ================= */}
      <section className="environment-section">
        <div className="environment-grid">
          {complianceData.map((item, index) => (
            <motion.div
              key={index}
              className="environment-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="environment-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EnvironmentalCompliance;
