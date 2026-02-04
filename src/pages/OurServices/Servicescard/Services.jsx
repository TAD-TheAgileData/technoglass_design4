import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

/* ================= IMAGES ================= */
import heroImg from "../../../assets/Services/ManufHero.jpg";
import Pvblamination from "../../../assets/Services/PVBlaminationhero.png";
import Autoclave from "../../../assets/Services/Autoclave.png";
import Opticalquality from "../../../assets/Services/Opticalquality.png";
import AdvancedTemperingfurnances from "../../../assets/Services/Temperingfurnances.png";
import Bending from "../../../assets/Services/Bending.png";
import Ceramic from "../../../assets/Services/Ceramic.png";
import CNC from "../../../assets/Services/CNC.png";
import Coating from "../../../assets/Services/Fragmentation.png";
import Quality from "../../../assets/Services/QualityControl.png";
import Automotive from "../../../assets/Services/Automotive.png";
import Sustainablity from "../../../assets/Services/Sustainablityhero.png"
/* ================= DATA ================= */
const services = [
  {
    title: "PVB LAMINATION",
    desc: "Advanced laminated glass solutions for safety and acoustic comfort.",
    img: Pvblamination,
    link: "/services/laminated-glass/pvb-lamination",
  },
  {
    title: "AUTOCLAVE CAPACITY",
    desc: "High-strength tempered glass meeting global safety standards.",
    img: Autoclave,
    link: "/services/laminated-glass/autoclave-capacity",
  },
  {
    title: "OPTICAL QUALITY CONTROL",
    desc: "Precision-driven technologies for complex glass solutions.",
    img: Opticalquality,
    link: "/services/laminated-glass/optical-quality-control",
  },
  {
    title: "ADVANCED TEMPERING FURNACES",
    desc: "High-durability ceramic printed glass for OEM applications.",
    img: AdvancedTemperingfurnances,
    link: "/services/tempered-glass/furnaces",
  },
  {
    title: "BENDING CAPABILITIES",
    desc: "Precision-controlled bending for complex geometries.",
    img: Bending,
    link: "/services/tempered-glass/bending",
  },
   {
    title: "FRAGMENTATION STANDARDS",
    desc: "Manufactured in accordance with international fragmentation standards to ensure safe break patterns and occupant protection.",
    img: Coating,
    link: "/services/tempered-glass/fragmentation",
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
    title: "QUALITY ASSURANCE & TESTING LABORATORY",
    desc: "Precision testing to guarantee safety, durability, and consistent quality.",
    img: Quality,
    link: "/services/quality-assurance",
  },
  {
    title: "AUTOMATION DIGITAL MANUFACTURING",
    desc: "Advanced automation and digital manufacturing systems ensure precision, consistency, and efficient high-quality glass production.",
    img: Automotive,
    link: "/services/technical-resources",
  },
  {
    title:"SUSTAINABILITY & ENVIRONMENTAL RESPONSIBILITY",
    desc:"We are committed to sustainable manufacturing practices that reduce environmental impact while delivering high-performance glass solutions.",
    img:Sustainablity,
    link:"/services/enivornmentalcompilance",
  }
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
        {/* <div className="services-hero-overlay">
          <h1>Manufacturing Capablities</h1>
          <p>
            Advanced glass manufacturing technologies engineered for safety,
            precision, and global OEM standards.
          </p>
        </div> */}
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