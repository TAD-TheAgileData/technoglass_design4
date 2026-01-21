import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Volume2,
  Layers,
  Factory,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import "./LaminatedGlass.css";

/* ===== IMAGES ===== */
import heroImg from "../../../assets/PVBLamination/PVBhero.jpg";
import pvbImg from "../../../assets/PVBLamination/PVBhero.jpg";
import laminateImg from "../../../assets/PVBLamination/PVBhero.jpg";
import capabilityImg from "../../../assets/PVBLamination/PVBhero.jpg";
import autoclaveImg from "../../../assets/PVBLamination/PVBhero.jpg";
import qualityImg from "../../../assets/PVBLamination/PVBhero.jpg";

export default function LaminatedGlassManufacturing() {
  return (
    <div className="laminated-page">

      {/* ===== HERO ===== */}
      <section
        className="laminated-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <h1>Laminated Glass Manufacturing</h1>
      </section>

      {/* ===== INTRO ===== */}
      <section className="laminated-intro">
        <p>
          Laminated glass is a high-performance safety glass designed to provide
          enhanced protection, acoustic comfort, and optical clarity. It is
          manufactured by bonding multiple layers of glass with a polyvinyl
          butyral (PVB) interlayer under controlled heat and pressure conditions.
        </p>
      </section>

      {/* ===== PVB ===== */}
      <section className="laminated-section">
        <h2>PVB Interlayer Types</h2>

        <div className="section-grid">
          <div className="section-content">

            <div className="icon-block">
              <ShieldCheck />
              <div>
                <h3>Normal PVB</h3>
                <p>
                  Normal PVB is designed primarily for safety and structural integrity.
                </p>
                <ul className="icon-list">
                  <li><CheckCircle /> High adhesion strength</li>
                  <li><CheckCircle /> Excellent impact resistance</li>
                  <li><CheckCircle /> Reliable automotive performance</li>
                </ul>
              </div>
            </div>

            <div className="icon-block">
              <Volume2 />
              <div>
                <h3>Acoustic PVB</h3>
                <p>
                  Acoustic PVB reduces noise while maintaining safety.
                </p>
                <ul className="icon-list">
                  <li><CheckCircle /> Sound insulation</li>
                  <li><CheckCircle /> Noise reduction</li>
                  <li><CheckCircle /> Passenger comfort</li>
                </ul>
              </div>
            </div>

            <Link to="/services/laminated-glass/pvb-lamination" className="explore-link">
              Explore <ArrowRight />
            </Link>
          </div>

          <div className="section-image">
            <img src={pvbImg} alt="PVB Interlayer" />
          </div>
        </div>
      </section>

      {/* ===== TYPES ===== */}
      <section className="laminated-section alt">
        <h2>Types of Laminated Glass</h2>

        <div className="section-grid">
          <div className="section-content">

            <div className="icon-block">
              <Layers />
              <div>
                <h3>PVB Color Options</h3>
                <ul className="icon-list">
                  <li><CheckCircle /> Clear</li>
                  <li><CheckCircle /> Green</li>
                  <li><CheckCircle /> Grey</li>
                </ul>
              </div>
            </div>

            <div className="icon-block">
              <Layers />
              <div>
                <h3>Shaded Band Laminates</h3>
                <p>Reduces glare and improves comfort.</p>
                <ul className="icon-list">
                  <li><CheckCircle /> Green</li>
                  <li><CheckCircle /> Blue</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="section-image">
            <img src={laminateImg} alt="Laminated Glass Types" />
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section className="laminated-section">
        <h2>Manufacturing Capabilities</h2>

        <div className="section-grid">
          <div className="section-content">

            <div className="icon-block">
              <Factory />
              <div>
                <h3>Applications</h3>
                <ul className="icon-list">
                  <li><CheckCircle /> Passenger cars</li>
                  <li><CheckCircle /> Trucks</li>
                  <li><CheckCircle /> Buses</li>
                </ul>
              </div>
            </div>

            <div className="icon-block">
              <Layers />
              <div>
                <h3>Thickness Range</h3>
                <ul className="icon-list">
                  <li><CheckCircle /> 2.1 mm – 4 mm</li>
                  <li><CheckCircle /> Multi-layer support</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="section-image">
            <img src={capabilityImg} alt="Capabilities" />
          </div>
        </div>
      </section>

      {/* ===== AUTOCLAVE ===== */}
      <section className="laminated-section alt">
        <h2>Autoclave Process</h2>

        <div className="section-grid">
          <div className="section-content">

            <div className="icon-block">
              <Settings />
              <div>
                <p>
                  Controlled heat and pressure ensure durability and clarity.
                </p>
                <ul className="icon-list">
                  <li><CheckCircle /> Precise temperature</li>
                  <li><CheckCircle /> Uniform pressure</li>
                  <li><CheckCircle /> Air-free bonding</li>
                </ul>
              </div>
            </div>

            <Link to="/services/laminated-glass/autoclave-capacity" className="explore-link">
              Explore <ArrowRight />
            </Link>
          </div>

          <div className="section-image">
            <img src={autoclaveImg} alt="Autoclave" />
          </div>
        </div>
      </section>

      {/* ===== QUALITY ===== */}
      <section className="laminated-section">
        <h2>Quality Control & Testing</h2>

        <div className="section-grid">
          <div className="section-content">

            <div className="icon-block">
              <CheckCircle />
              <div>
                <h3>Adhesion Testing</h3>
                <p>Strong glass–PVB bonding verification.</p>
              </div>
            </div>

            <div className="icon-block">
              <ShieldCheck />
              <div>
                <h3>Delamination Control</h3>
                <p>Durability under heat & humidity.</p>
              </div>
            </div>

            <div className="icon-block">
              <Layers />
              <div>
                <h3>Optical Inspection</h3>
                <p>Clear and distortion-free vision.</p>
              </div>
            </div>

            <Link to="/services/laminated-glass/optical-quality-control" className="explore-link">
              Explore <ArrowRight />
            </Link>

          </div>

          <div className="section-image">
            <img src={qualityImg} alt="Quality Control" />
          </div>
        </div>
      </section>

    </div>
  );
}