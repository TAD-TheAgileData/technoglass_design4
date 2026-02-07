import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AutomotiveApplicationGalley.css";

/* ================= IMAGES ================= */
import carImg from "../../../assets/AutomotiveapplicationGallery/interiorwindshield.jpg";
import busImg from "../../../assets/AutomotiveapplicationGallery/Laminatedbuswindshield.png";
import truckImg from "../../../assets/AutomotiveapplicationGallery/truckwindshield.jpg";
import evImg from "../../../assets/AutomotiveapplicationGallery/Evwindshield.png";

/* ================= VIDEOS ================= */
import cuttingVideo from "../../../assets/AutomotiveapplicationGallery/Video.mp4";
import printingVideo from "../../../assets/AutomotiveapplicationGallery/Video.mp4";
import bendingVideo from "../../../assets/AutomotiveapplicationGallery/Video.mp4";
import laminationVideo from "../../../assets/AutomotiveapplicationGallery/Video.mp4";


/* ================= DATA ================= */
const vehicleData = [
  {
    title: "Passenger Cars",
    img: carImg,
    desc: "High-clarity windshields and sidelites engineered for safety, comfort, and advanced driver assistance systems."
  },
  {
    title: "Buses & Coaches",
    img: busImg,
    desc: "Large-format laminated glazing designed for passenger safety, visibility, and long-distance durability."
  },
  {
    title: "Commercial Trucks",
    img: truckImg,
    desc: "Robust automotive glass solutions built to withstand heavy-duty usage and extreme operating conditions."
  },
  {
    title: "Electric Vehicles",
    img: evImg,
    desc: "Lightweight, acoustic, and solar-control glazing optimized for next-generation electric mobility platforms."
  }
];


const processVideos = [
  {
    title: "Glass Cutting",
    src: cuttingVideo,
    desc: "High-precision CNC cutting ensures exact dimensions and flawless edge quality."
  },
    {
    title: "Ceramic Printing",
    src: printingVideo,
    desc: "Advanced ceramic frit printing improves UV protection, aesthetics, and durability."
  },
  {
    title: "Glass Bending",
    src: bendingVideo,
    desc: "Controlled thermal bending delivers perfect curvature for automotive applications."
  },
  {
    title: "Lamination Process",
    src: laminationVideo,
    desc: "Multi-layer lamination enhances safety, strength, and acoustic performance."
  },

];

export default function AutomotiveApplicationsGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="aag-root">

      {/* ================= CINEMATIC HERO ================= */}
      <section className="aag-hero">
        <motion.div
          className="aag-hero-bg"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="aag-hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          <span className="aag-eyebrow">AUTOMOTIVE APPLICATIONS</span>
          <h1>
            Engineered Glass<br />
            <span>for Every Vehicle Platform</span>
          </h1>
          <p>
            Precision-driven automotive glazing solutions across
            passenger, commercial, and electric mobility segments.
          </p>
        </motion.div>
      </section>

      {/* ================= VEHICLE SHOWCASE ================= */}
      <section className="aag-vehicles">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vehicle-Type Applications
        </motion.h2>

        <div className="aag-vehicle-strip">
          {vehicleData.map((item, i) => (
            <motion.div
              key={i}
              className="aag-vehicle-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06 }}
            >
              <img src={item.img} alt={item.title} loading="lazy"/>
              <div className="aag-vehicle-text">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS VIDEOS ================= */}
      <section className="aag-process">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Manufacturing Processes
        </motion.h2>

        <div className="aag-process-grid">
  {processVideos.map((video, i) => (
    <motion.div
      key={i}
      className="aag-process-tile"
      whileHover={{ y: -12 }}
      onClick={() => setActiveVideo(video)}
    >
      <h4>{video.title}</h4>
      <p>{video.desc}</p>
      <span className="aag-play">▶</span>
    </motion.div>
  ))}
</div>

      </section>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="aag-video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="aag-video-box"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{activeVideo.title}</h3>
              <video controls autoPlay>
                <source src={activeVideo.src} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}