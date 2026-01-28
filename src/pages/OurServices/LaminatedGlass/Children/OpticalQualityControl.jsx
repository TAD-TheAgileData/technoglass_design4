import React, { useEffect } from "react";
import { ShieldCheck, Layers, Eye, CheckCircle } from "lucide-react";
import "./OpticalQualityControl.css";
import heroImg from "../../../../assets/Qualitycontrol/HeroQuality.png";

export default function OpticalQualityControl() {

  useEffect(() => {
    const cards = document.querySelectorAll(".qc-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="qc-page">

      {/* HERO */}
      <section
        className="qc-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="qc-hero-overlay">
          <h1>Quality Control & Testing</h1>
          <p>Precision. Safety. Optical Excellence.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="qc-intro">
        <p>
          Every laminated glass product undergoes rigorous quality control
          and testing procedures to ensure safety, durability, and flawless
          optical performance in demanding environments.
        </p>
      </section>

      {/* CARDS */}
      <section className="qc-section">
        <div className="qc-grid">

          <div className="qc-card">
            <div className="qc-icon"><ShieldCheck /></div>
            <h3>Adhesion Testing</h3>
            <p>
              Strong glass–PVB bonding verification to ensure layers remain
              intact under impact and long-term use.
            </p>
            <ul>
              <li><CheckCircle /> Uniform interlayer bonding</li>
              <li><CheckCircle /> Impact resistance validation</li>
              <li><CheckCircle /> Long-term structural stability</li>
            </ul>
          </div>

          <div className="qc-card">
            <div className="qc-icon"><Layers /></div>
            <h3>Delamination Control</h3>
            <p>
              Ensures durability under extreme heat, humidity, and
              environmental stress conditions.
            </p>
            <ul>
              <li><CheckCircle /> Heat resistance testing</li>
              <li><CheckCircle /> Humidity aging cycles</li>
              <li><CheckCircle /> Environmental endurance</li>
            </ul>
          </div>

          <div className="qc-card">
            <div className="qc-icon"><Eye /></div>
            <h3>Optical Inspection</h3>
            <p>
              Guarantees clear, distortion-free vision and high optical
              performance across the entire glass surface.
            </p>
            <ul>
              <li><CheckCircle /> Distortion analysis</li>
              <li><CheckCircle /> Light transmission checks</li>
              <li><CheckCircle /> Visual clarity assurance</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}