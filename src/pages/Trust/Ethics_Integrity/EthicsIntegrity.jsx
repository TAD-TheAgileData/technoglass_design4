import React from "react";
import { motion } from "framer-motion";
import "./EthicsIntegrity.css";

const items = [
  {
    title: "Honest Pricing",
    text: "Transparent pricing structures with no hidden costs or ambiguity."
  },
  {
    title: "Ethical Sourcing",
    text: "Responsibly sourced materials and compliant manufacturing practices."
  },
  {
    title: "Anti-Fraud Policies",
    text: "Strict controls against counterfeiting, fraud, and misuse."
  },
  {
    title: "Customer Confidentiality",
    text: "Absolute protection of customer data, designs, and IP."
  }
];

export default function EthicsIntegrity() {
  return (
    <section className="ei2-root">

      {/* HEADER */}
      <motion.div
        className="ei2-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="ei2-chip">ETHICS & INTEGRITY</span>
        <h2>Principles That Govern Every Decision</h2>
        <p>
          Integrity is not a policy — it is embedded in our culture,
          systems, and long-term partnerships.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="ei2-timeline">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="ei2-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.9 }}
          >
            <span className="ei2-index">0{i + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}