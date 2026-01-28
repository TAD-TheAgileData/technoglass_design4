import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";


import "./MediaGallery.css";


import Company1 from "../../../assets/media_gallery/Application.png";
import Company2 from "../../../assets/media_gallery/Application.png";
import Company3 from "../../../assets/media_gallery/Application.png";
import factory1 from "../../../assets/media_gallery/Application.png";
import machine1 from "../../../assets/media_gallery/Application.png";
import product1 from "../../../assets/media_gallery/Application.png";
import factory2 from "../../../assets/media_gallery/Application.png";
import machine2 from "../../../assets/media_gallery/Application.png";
import product2 from "../../../assets/media_gallery/Application.png";
import factory3 from "../../../assets/media_gallery/Application.png";
import machine3 from "../../../assets/media_gallery/Application.png";
import product4 from "../../../assets/media_gallery/Application.png";
import factory4 from "../../../assets/media_gallery/Application.png";
import machine4 from "../../../assets/media_gallery/Application.png";
import product3 from "../../../assets/media_gallery/Application.png";
import product5 from "../../../assets/media_gallery/Application.png";
import video from "../../../assets/media_gallery/Video.mp4"
const allMedia = [
  // ===== FACTORY =====
  {
    src: factory1,
    category: "Factory",
    title: "Factory Tour",
    desc: "A glimpse into our world-class manufacturing facility"
  },
  {
    src: factory2,
    category: "Factory",
    title: "Production Floor",
    desc: "High-volume production with strict quality control"
  },
  {
    src: factory3,
    category: "Factory",
    title: "Glass Processing Unit",
    desc: "Advanced bending, tempering, and lamination lines"
  },
  {
    src: factory4,
    category: "Factory",
    title: "Quality Inspection Area",
    desc: "Every product inspected for optical & structural accuracy"
  },

  // ===== MACHINERY =====
  {
    src: machine1,
    category: "Machinery",
    title: "High-Precision Cutting",
    desc: "Automated CNC cutting for exact dimensions"
  },
  {
    src: machine2,
    category: "Machinery",
    title: "Tempering Furnace",
    desc: "Uniform heating for superior strength & safety"
  },
  {
    src: machine3,
    category: "Machinery",
    title: "Lamination Line",
    desc: "Multi-layer safety glass manufacturing process"
  },
  {
    src: machine4,
    category: "Machinery",
    title: "Ceramic Printing",
    desc: "Precision printing for automotive & architectural glass"
  },

  // ===== PRODUCT =====
  {
    src: product1,
    category: "Product",
    title: "Automotive Windshields",
    desc: "OEM-grade laminated windshields with ADAS readiness"
  },
  {
    src: product2,
    category: "Product",
    title: "Side & Back Lites",
    desc: "Tempered glass engineered for safety and durability"
  },
  {
    src: product3,
    category: "Product",
    title: "Sunroofs & Roof Glass",
    desc: "UV-protected glass with enhanced optical clarity"
  },
  {
    src: product4,
    category: "Product",
    title: "Architectural Glass",
    desc: "Design-driven glass solutions for modern buildings"
  },

  // ===== CASE STUDIES =====
  {
    src: factory1,
    category: "Case Study",
    title: "OEM Partnership",
    desc: "Supplying high-volume automotive glass to global OEMs"
  },
  {
    src: product2,
    category: "Case Study",
    title: "Commercial Vehicle Project",
    desc: "Customized glazing for buses and transport fleets"
  },
  {
    src: machine3,
    category: "Case Study",
    title: "Process Optimization",
    desc: "Automation improving yield and production efficiency"
  },
  {
    src: factory3,
    category: "Case Study",
    title: "Quality Excellence Program",
    desc: "Zero-defect manufacturing through continuous audits"
  },

  // ===== EXTRA PREMIUM ITEMS =====
  {
    src: product5,
    category: "Product",
    title: "Specialty Glass",
    desc: "Custom solutions for high-performance applications"
  },
  {
    src: factory2,
    category: "Factory",
    title: "Sustainability Initiative",
    desc: "Energy-efficient processes and reduced carbon footprint"
  }
];




const categories = ["All", "Factory", "Machinery", "Product", "Case Study"];

export default function  MediaGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // ✅ FIXED: video state INSIDE component
  const [videoOpen, setVideoOpen] = useState(false);

  const filtered = allMedia.filter(
    (item) => filter === "All" || item.category === filter
  );

  const images = filtered.map((i) => i.src);

  return (
    <div className="mgp-page-bg">
  <div className="mgp-root">
   

      {/* HERO */}
      <section className="mgp-hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mgp-hero-content"
        >
          <span>MEDIA & GALLERY</span>
          <h1>Explore Visuals from Our Operations</h1>
          <p>A visual journey through our manufacturing excellence, advanced technology, and trusted partnerships.</p>
        </motion.div>
      </section>

      {/* MEDIA OVERVIEW */}
      <section className="mgp-overview">
        {[
          {
            title: "Factory Tour",
            desc: "A behind-the-scenes look at our advanced manufacturing facilities.",
            action: () => setVideoOpen(true)
          },
          {
            title: "Machinery & Process Visuals",
            desc: "High-precision equipment, automation, and quality-driven processes."
          },
          {
            title: "Product Gallery",
            desc: "Explore our wide range of engineered glass solutions."
          },
          {
            title: "Case Studies",
            desc: "Real-world applications and success stories from global clients."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="mgp-overview-card"
            onClick={item.action}
            style={{ cursor: item.action ? "pointer" : "default" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: item.action ? 1.03 : 1 }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.action && <span className="mgp-play">▶ Watch Video</span>}
          </motion.div>
        ))}
      </section>
{/* MEDIA STATS */}
<section className="mgp-stats">
  {[
    { value: "30+", label: "Years Experience" },
    { value: "120+", label: "Machines Installed" },
    { value: "2", label: "Manufacturing Plants" },
    { value: "15+", label: "Countries Served" }
  ].map((stat, i) => (
    <motion.div
      key={i}
      className="mgp-stat"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15 }}
      viewport={{ once: true }}
    >
      <h3>{stat.value}</h3>
      <p>{stat.label}</p>
    </motion.div>
  ))}
</section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <motion.div
          className="mgp-video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            className="mgp-video-modal"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mgp-video-close"
              onClick={() => setVideoOpen(false)}
            >
              ✕
            </button>

            <video controls autoPlay>
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      )}

      {/* EXPERIENCE TITLE */}
      <div className="mgp-exp-title">
        <span>OUR LEGACY</span>
        <h2>Three Decades of Manufacturing Excellence</h2>
        <p>Delivering precision glass solutions for over 30 years</p>
      </div>

      {/* EXPERIENCE IMAGE GRID */}
      <div className="mgp-exp-image-grid">
        <motion.img src={Company1} alt="Company Building" loading="lazy" />
        <motion.img src={Company2} alt="Team" loading="lazy" />
        <motion.img src={Company3} alt="Factory" loading="lazy" />

        <div className="mgp-exp-badge">
          <span>30+</span>
          <p>Years of Experience</p>
        </div>
      </div>

      {/* FILTER */}
      <div className="mgp-filter">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.1 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <section className="mgp-grid">
        {filtered.map((item, idx) => (
          <motion.div
            key={idx}
            className="mgp-card"
            onClick={() => {
              setPhotoIndex(idx);
              setLightboxOpen(true);
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.src} alt={item.title} />
            <div className="mgp-overlay">
              <span className="mgp-tag">{item.category}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
      </div>

  );
}