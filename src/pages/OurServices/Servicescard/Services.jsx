import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

/* ================= IMAGES ================= */
import heroImg from "../../../assets/Services/Hero.jpg";
import Pvblamination from "../../../assets/Services/Pvblamination.jpg";
import Autoclave from "../../../assets/Services/Autoclave.jpg";
import Opticalquality from "../../../assets/Services/Opticalquality.webp";
import AdvancedTemperingfurnances from "../../../assets/Services/Temperingfurnances.webp";
import Bending from "../../../assets/Services/Bending.jpg";
import Ceramic from "../../../assets/Services/Ceramicglass.webp";
import CNC from "../../../assets/Services/CNCShapingavif.avif";
import Coating from "../../../assets/Services/CoatingTechnologies.jpg";
import Edge from "../../../assets/Services/Edgefinishingpng.png";
import Temperingfurnances from "../../../assets/Services/Temperingfurnances.webp";

/* ================= DATA ================= */
const services = [
  {
    title: "PVB LAMINATION",
    desc: "Advanced laminated glass solutions for safety and acoustic comfort.",
    img: Pvblamination,
    link: "/services/laminated",
  },
  {
    title: "AUTOCLAVE CAPACITY",
    desc: "High-strength tempered glass meeting global safety standards.",
    img: Autoclave,
    link: "/services/tempered",
  },
  {
    title: "OPTICAL QUALITY CONTROL",
    desc: "Precision-driven technologies for complex glass solutions.",
    img: Opticalquality,
    link: "/services/advanced",
  },
  {
    title: "ADVANCED TEMPERING FURNACES",
    desc: "High-durability ceramic printed glass for OEM applications.",
    img: AdvancedTemperingfurnances,
    link: "/services/ceramic-printing",
  },
  {
    title: "BENDING CAPABILITIES",
    desc: "Precision-controlled bending for complex geometries.",
    img: Bending,
    link: "/services/bending",
  },
  {
    title: "CERAMIC PRINTING",
    desc: "High-durability ceramic printed glass for OEM applications.",
    img: Ceramic,
    link: "/services/ceramic-printing",
  },
  {
    title: "CNC SHAPING",
    desc: "Precision CNC shaping for complex geometries.",
    img: CNC,
    link: "/services/cnc-shaping",
  },
  {
    title: "COATING TECHNOLOGIES",
    desc: "Advanced coating solutions for performance enhancement.",
    img: Coating,
    link: "/services/coating",
  },
  {
    title: "EDGE FINISHING",
    desc: "Precision edge finishing for durability and safety.",
    img: Edge,
    link: "/services/edge-finishing",
  },
  {
    title: "TECHNICAL RESOURCES",
    desc: "Testing, validation, and engineering support services.",
    img: Temperingfurnances,
    link: "/services/technical-resources",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* ================= HERO ================= */}
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="services-hero-overlay">
          <h1>Services</h1>
          <p>
            Advanced glass manufacturing technologies engineered for safety,
            precision, and global OEM standards.
          </p>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="services-container">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${item.img})` }}
            onClick={() => navigate(item.link)}
          >
            <div className="service-card-overlay">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="read-more">READ MORE →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

