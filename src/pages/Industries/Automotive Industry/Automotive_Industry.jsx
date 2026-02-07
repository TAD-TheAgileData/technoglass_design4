import React from "react";
import { motion } from "framer-motion";
import {
  MdPrecisionManufacturing,
  MdVerifiedUser,
  MdLayers,
} from "react-icons/md";
import "./Automotive_Industry.css";

import heroImg from "../../../assets/AutomotiveIndustry_industries/glass.jpg";
import OEM from "../../../assets/AutomotiveIndustry_industries/AftermarketSolutions.png";
import glass1 from "../../../assets/AutomotiveIndustry_industries/Application.png";
import glass2 from "../../../assets/AutomotiveIndustry_industries/Capablities.png";
import glass3 from "../../../assets/AutomotiveIndustry_industries/GlobalCompliance.png";

/* ================= ANIMATIONS ================= */
/* ================= ANIMATIONS ================= */

const heroReveal = {
  hidden: { opacity: 0, scale: 1.12 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const textUp = {
  hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const floatCard = {
  hidden: { opacity: 0, y: 120 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function Automotive_Industry() {
   return (
    <div className="auto-root">
      {/* ===== BACKGROUND LIGHT EFFECT ===== */}
      <div className="bg-light-layer">
        <span className="light-orb orb-a" />
        <span className="light-orb orb-b" />
        <span className="light-orb orb-c" />
      </div>

      {/* ================= HERO ================= */}
      <section className="auto-hero">
        <motion.div
          className="auto-hero-bg"
          style={{ backgroundImage: `url(${heroImg})` }}
          variants={heroReveal}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          className="auto-hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={textUp} className="auto-chip">
            INDUSTRIES
          </motion.span>

          <motion.h1 variants={textUp}>Automotive Glass Engineering</motion.h1>

          <motion.p variants={textUp}>
            Precision-engineered glazing systems enabling safety, performance,
            and next-generation mobility platforms.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= STORY ================= */}
      <section className="auto-story">
        <motion.div
          className="auto-story-image"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <img src={OEM} alt="OEM Automotive Glass" />
        </motion.div>

        <motion.div
          className="auto-story-text"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2>OEM & Aftermarket Solutions</h2>
          <p>
            From mass-production OEM programs to precision aftermarket glazing,
            our solutions deliver durability, optical clarity, and regulatory
            compliance.
          </p>

          <ul>
            <li>Windshields</li>
            <li>Sidelites & Backlites</li>
            <li>Sunroofs</li>
            <li>Quarter Glass</li>
          </ul>
        </motion.div>
      </section>

      {/* ================= FLOATING CARDS ================= */}
      <section className="auto-cards">
        <motion.div
          className="auto-card"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass2} alt="Capabilities" />
          <MdPrecisionManufacturing />
          <h3>Advanced Capabilities</h3>
          <p>
            Ceramic printing, lamination, bending, tempering, ADAS cut-outs, and
            sensor integration.
          </p>
        </motion.div>

        <motion.div
          className="auto-card glass"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass3} alt="Compliance" />
          <MdVerifiedUser />
          <h3>Global Compliance</h3>
          <p>
            ECE R43, DOT, ISO & IATF 16949 certified automotive quality systems.
          </p>
        </motion.div>

        <motion.div
          className="auto-card"
          variants={floatCard}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={glass1} alt="Applications" />
          <MdLayers />
          <h3 className="Application_head">Applications</h3>
          <ul className="auto-card-list">
            <li>
              <MdLayers /> Passenger Vehicles
            </li>
            <li>
              <MdLayers /> Commercial Fleets
            </li>
            <li>
              <MdLayers /> Buses
            </li>
            <li>
              <MdLayers /> Marine
            </li>
             <li>
              <MdLayers /> Rail & Metro
            </li>
            <li>
              <MdLayers /> Specialty Platforms
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}