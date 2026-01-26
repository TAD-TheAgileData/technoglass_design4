import React from "react";
import { motion } from "framer-motion";
import "./Customer_First_Approach.css";

/* IMAGES */
import heroImg from "../../../assets/CustomerFirstApproach/CustomerApproachhero.jpg";
import img1 from "../../../assets/CustomerFirstApproach/module1.jpg";
import img2 from "../../../assets/CustomerFirstApproach/module2.jpg";
import img3 from "../../../assets/CustomerFirstApproach/module3.jpg";
import img4 from "../../../assets/CustomerFirstApproach/CustomerApproachhero.jpg";

/* ANIMATIONS */
const fade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

export default function Customer_First_Approach() {
  return (
    <div className="cf-root">

      {/* ================= HERO ================= */}
      <section
        className="cf-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="cf-hero-overlay" />
        <motion.div
          className="cf-hero-content"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <span className="cf-chip">CUSTOMER FIRST</span>
          <h1>Relationships Before Transactions</h1>
          <p>
            A customer-centric philosophy built on responsiveness,
            transparency, and long-term collaboration.
          </p>
        </motion.div>
      </section>

      {/* ================= MODULE 1 ================= */}
      <section className="cf-module">
        <motion.div
          className="cf-module-text"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>01</span>
          <h2>Dedicated Technical & Commercial Support</h2>
          <p>
            Cross-functional teams engage early with customers to provide
            engineering clarity, commercial alignment, and proactive guidance.
          </p>
        </motion.div>

        <motion.div
          className="cf-module-visual"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={img1} alt="Technical Support" className="cf-module-image" />
        </motion.div>
      </section>

      {/* ================= MODULE 2 ================= */}
      <section className="cf-module reverse">
        <motion.div
          className="cf-module-text"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>02</span>
          <h2>Fast Response & Transparent Communication</h2>
          <p>
            Agile response systems and clear communication channels ensure
            rapid resolution and real-time visibility.
          </p>
        </motion.div>

        <motion.div
          className="cf-module-visual"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={img2} alt="Fast Response" className="cf-module-image" />
        </motion.div>
      </section>

      {/* ================= MODULE 3 ================= */}
      <section className="cf-module">
        <motion.div
          className="cf-module-text"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>03</span>
          <h2>Custom OEM & Project-Specific Solutions</h2>
          <p>
            Flexible tooling, process adaptation, and engineering customization
            allow us to meet complex OEM requirements.
          </p>
        </motion.div>

        <motion.div
          className="cf-module-visual"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={img3} alt="OEM Solutions" className="cf-module-image" />
        </motion.div>
      </section>

      {/* ================= MODULE 4 ================= */}
      <section className="cf-module reverse">
        <motion.div
          className="cf-module-text"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>04</span>
          <h2>Long-Term Partnership Mindset</h2>
          <p>
            We focus on sustainable partnerships, supporting customer growth
            with consistency, reliability, and continuous improvement.
          </p>
        </motion.div>

        <motion.div
          className="cf-module-visual"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={img4} alt="Long-Term Partnership" className="cf-module-image" />
        </motion.div>
      </section>

    </div>
  );
}