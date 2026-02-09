import React, { useState } from "react";
import "./Certifications.css";

import heroImg from "../../../assets/Certificate/Hero1.png";
import iso9001 from "../../../assets/Certificate/Iso9001.jpg";
import iso14001 from "../../../assets/Certificate/ISO14001Certificate.jpeg";
import iso45001 from "../../../assets/Certificate/ISO45001.jpeg";
import cop from "../../../assets/Certificate/Copcertificate.jpeg";
import MorrocoCertificate from "../../../assets/Certificate/MorrocoCertificate.png";
import ECER from "../../../assets/Certificate/ECE43Rcertificate.png";
const certificates = [
  {
    title: "IATF 16949:2016(IN PROGRESS)",
    subtitle: "Automotive Quality Management System",
    image: iso9001,
    desc: "Ensures defect prevention, customer satisfaction, and continuous improvement across automotive supply chains.",
  },
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    image: iso9001,
    desc: "Provides a structured framework for consistent product and service quality.",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    image: iso14001,
    desc: "Supports sustainability, pollution prevention, and regulatory compliance.",
  },
  {
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
    image: iso45001,
    desc: "Improves workplace safety and reduces occupational health risks.",
  },
  {
    title: "CoP Certification",
    subtitle: "Conformity of Production",
    image: cop,
    desc: "Ensures mass production consistency and regulatory compliance.",
  },
  {
    title: "ECE R-43– Automotive Safety Glazing",
    subtitle: <strong>UN regulation for automotive glazing materials.</strong>,
    image: ECER,
    desc: "Prevents dangerous glass fragmentation, ensures optical clarity, and withstands mechanical stress.",
  },
  {
      title: "NM 22.0.010– Morocco Automotive Standard",
      subtitle: "Mandatory Moroccan automotive compliance.",
      image: MorrocoCertificate,
      desc:"Meets national safety regulations, mandatory for exporters, and confirms product conformity.",
    },
];

export default function Certifications() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="Ccert-root">
      {/* HERO */}
      <section
        className="Ccert-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* <div className="Ccert-hero-overlay"> */}
          {/* <h1>Certifications & Compliance</h1> */}
          {/* <p>International standards ensuring quality, safety, and trust.</p> */}
        {/* </div> */}
      </section>

      {/* CONTENT */}
      <section className="Ccert-section">
        <div className="Ccert-grid">
          {certificates.map((item, index) => (
            <div className="cert-card" key={index}>
              <div
                className="Ccert-image"
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => setActiveImage(item.image)}
              />

              <div className="Ccert-content">
                <h3>{item.title}</h3>
                <span>{item.subtitle}</span>
                <p>{item.desc}</p>

                <button onClick={() => setActiveImage(item.image)}>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeImage && (
        <div className="Ccert-modal" onClick={() => setActiveImage(null)}>
          <div
            className="Ccert-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
}
