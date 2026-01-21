import React from "react";
import { ArrowRight, Flame, GitCompare, Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";
import "./TemperedglassManufacturing.css";

/* IMAGES */
import heroImg from "../../../assets/PVBLamination/PVBhero.jpg";
import furnaceImg from "../../../assets/PVBLamination/PVBhero.jpg";
import bendingImg from "../../../assets/PVBLamination/PVBhero.jpg";
import fragmentImg from "../../../assets/PVBLamination/PVBhero.jpg";

export default function TemperedglassManufacturing() {
  return (
    <div className="tg-page">

      {/* ================= HERO ================= */}
      <section
        className="tg-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="tg-hero-overlay">
          <h1>Tempered Glass Manufacturing</h1>
          <p>Strength. Safety. Precision Engineering.</p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="tg-intro">
        <p>
          Tempered glass is a high-strength safety glass manufactured through
          controlled thermal processing. Using advanced convection furnaces,
          glass is heated and rapidly cooled to improve mechanical strength,
          thermal resistance, and safety performance for automotive
          applications.
        </p>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="tg-section">
        <div className="tg-grid">

          {/* Furnace */}
          <div className="tg-img-card">
            <img src={furnaceImg} alt="Furnace Type" />
            <div className="tg-overlay">
              <div className="tg-icon"><Flame /></div>
              <h3>Furnace Type</h3>
              <p>
                Convection furnaces supporting flat and bent tempering with
                precise heat distribution.
              </p>
              <Link to="/services/tempered-glass/furnaces" className="tg-explore">
                Explore <ArrowRight />
              </Link>
            </div>
          </div>

          {/* Bending */}
          <div className="tg-img-card">
            <img src={bendingImg} alt="Bending Capabilities" />
            <div className="tg-overlay">
              <div className="tg-icon"><GitCompare /></div>
              <h3>Bending Capabilities</h3>
              <p>
                Accurate bending for car, truck, and bus glass with optical
                consistency.
              </p>
              <Link to="/services/tempered-glass/bending" className="tg-explore">
                Explore <ArrowRight />
              </Link>
            </div>
          </div>

          {/* Fragmentation */}
          <div className="tg-img-card">
            <img src={fragmentImg} alt="Fragmentation Standards" />
            <div className="tg-overlay">
              <div className="tg-icon"><Grid3X3 /></div>
              <h3>Fragmentation Standards</h3>
              <p>
                Certified fragmentation patterns ensuring safety compliance
                and controlled breakage.
              </p>
              <Link to="/services/tempered-glass/fragmentation" className="tg-explore">
                Explore <ArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}