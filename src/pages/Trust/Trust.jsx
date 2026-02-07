import React from "react";
import { useNavigate } from "react-router-dom";
import "./Trust.css";

/* ================= IMAGES ================= */
import heroImg from "../../assets/Trust/TrustHero.jpg";
import Certification from "../../assets/Trust/Certified.png";
import ManufacturingExcecellence from "../../assets/Trust/ManufacturingExcecellence.png";
import Partnership from "../../assets/Trust/Partnership.jpg";
import TrustedbyBrands from "../../assets/Trust/TrustedHero.png";
import Sustainable from "../../assets/Trust/SustainableHero.jpg";
import Continouosimprovement from "../../assets/Trust/Continouosimprovementhero.png";
import Commitment from "../../assets/Trust/Commitment.jpeg";
import DeliveryReliablity from "../../assets/Trust/DeliveryRealiablity01.jpg";
import CustomerHero from "../../assets/Trust/CustomerHero.png";
import safetyimg from "../../assets/Trust/HeroSafety.jpg";
import Ethics from "../../assets/Trust/Ethics.jpg"
import { desc, image, path, title } from "framer-motion/client";
const trustCards = [
  {
    title: "OUR COMMITMENT TO QUALITY",
    desc: "Quality driven by standardized processes, validated parameters, and continuous monitoring.",
    image: Commitment,
    path: "/trust/qualitycommitment",
  },
  {
    title: "CERTIFICATIONS & GLOBALLY COMPLIANT",
    desc: "Internationally recognized certifications ensuring compliance and quality excellence.",
    image: Certification,
    path: "/trust/certifications-Globally-Compliant",
  },
  {
    title: "PROVEN MANUFACTURING EXCELLENCE",
    desc: "Validated processes delivering consistent performance, precision, and reliability.",
    image: ManufacturingExcecellence,
    path: "/trust/proven-manufacturing-excellence",
  },
  {
    title: "DELIVERY RELIABILITY & LOGISTICS EXCELLENCE",
    desc: "Ensuring on-time delivery through robust logistics and reliable planning.",
    image: DeliveryReliablity,
    path: "/trust/DeliveryReliability_LogisticsExcellence",
  },
  {
    title:"CUSTOMER FIRST APPROACH",
    desc:"Customer requirements integrated into design, process, and delivery.",
    image:CustomerHero,
    path:"/trust/customer_first_approach",
  },
  {
    title:"SAFETY AS A CORE VALUE",
    desc:"Proactive safety practices embedded across all operations.",
    image:safetyimg,
    path:"/trust/safety",
  },
  {
    title:"ETHICS & INTEGRITY",
    desc:"Integrity-driven operations aligned with regulatory and corporate standards.",
    image:Ethics,
    path:"/trust/ethics_integrity"
  }, 
  {
    title: "SUSTAINABLITY & RESPONSIBLITY",
    desc: "Responsible manufacturing focused on energy efficiency and sustainability.",
    image: Sustainable,
    path: "/trust/sustainability_responsibility",
  },
  {
    title: "TRUSTED BY LEADING BRANDS",
    desc: "Preferred by leading brands for quality and reliability.",
    image: TrustedbyBrands,
    path: "/trust/trusted_by_leading_companies",
  },
  
  {
    title: "CONTINUOUS IMPROVEMENT",
    desc: "A disciplined system combining Kaizen, data intelligence, and innovation to drive sustainable excellence.",
    image: Continouosimprovement,
    path: "/trust/continuousimprovement",
  },
];

const Trust = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="trust-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="trust-hero-overlay">
          <h1>Trust & Compliance</h1>
          <p>
            Certified quality, sustainable practices, and trusted partnerships
            across global markets.
          </p>
        </div>
      </section>

      {/* ================= TRUST CARDS ================= */}
      <section className="trust-cards-section">
        <h2 className="trust-cards-title">Our Trust Framework</h2>

        <div className="trust-cards-grid">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="trust-glaston-card"
              onClick={() => navigate(card.path)}
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
              />

              <div className="trust-glaston-overlay">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <span className="trust-read-more">READ MORE →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trust;
