import React from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaProjectDiagram,
  FaWarehouse,
  FaGlobe
} from "react-icons/fa";
import "./DeliveryReliability_LogisticsExcellence.css";

/* IMAGES */
import heroImg from "../../../assets/DeliveryRealiablity/DeliveryRealiablity.jpg";
import deliveryImg from "../../../assets/DeliveryRealiablity/DeliveryRealiablity.jpg";
import supplyChainImg from "../../../assets/DeliveryRealiablity/DeliveryRealiablity.jpg";
import planningImg from "../../../assets/DeliveryRealiablity/DeliveryRealiablity.jpg";
import exportImg from "../../../assets/DeliveryRealiablity/DeliveryRealiablity.jpg";

// Large industrial manufacturing + logistics image
// Glass factory, export yard, or port shipment
//Dispatch or logistics execution visuals
//Quality & inspection focused
//Organized factory or warehouse environments
//Export and packaging focused visuals

/* ICON FLOAT ANIMATION */
const iconFloat = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }
  }
};

const DeliveryReliability_LogisticsExcellence = () => {
  return (
    <div className="reliability-page">

      {/* HERO */}
      <section
        className="reliability-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Reliability in Every Delivery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Precision manufacturing, disciplined planning, and global logistics
            excellence.
          </motion.p>
        </div>
      </section>

      {/* SECTION 1 */}
      <motion.section
        className="reliability-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={deliveryImg} alt="On-time delivery performance" />
        <div className="content">
          <motion.div className="icon-box" {...iconFloat}>
            <FaTruckMoving />
          </motion.div>
          <h2>On-Time Delivery Performance</h2>
          <p>
            Structured production planning and coordinated logistics ensure
            consistent on-time deliveries across domestic and international
            markets.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2 */}
      <motion.section
        className="reliability-section reverse"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={supplyChainImg} alt="Strong supply chain" />
        <div className="content">
          <motion.div className="icon-box" {...iconFloat}>
            <FaProjectDiagram />
          </motion.div>
          <h2>Strong Supply Chain & Vendor Qualification</h2>
          <p>
            Carefully qualified vendors meet strict quality and compliance
            standards, ensuring material reliability and continuity.
          </p>
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        className="reliability-section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={planningImg} alt="Inventory planning" />
        <div className="content">
          <motion.div className="icon-box" {...iconFloat}>
            <FaWarehouse />
          </motion.div>
          <h2>Inventory Planning & Production Discipline</h2>
          <p>
            Advanced inventory systems and disciplined scheduling balance demand
            with capacity while minimizing lead times.
          </p>
        </div>
      </motion.section>

      {/* SECTION 4 */}
      <motion.section
        className="reliability-section reverse"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={exportImg} alt="Export-ready logistics" />
        <div className="content">
          <motion.div className="icon-box" {...iconFloat}>
            <FaGlobe />
          </motion.div>
          <h2>Export-Ready Packaging & Logistics Support</h2>
          <p>
            Export-compliant packaging and global logistics expertise ensure safe,
            compliant, and reliable worldwide deliveries.
          </p>
        </div>
      </motion.section>

    </div>
  );
};

export default DeliveryReliability_LogisticsExcellence;