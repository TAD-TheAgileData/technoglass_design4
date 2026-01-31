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
      { threshold: 0.25 },
    );

    cards.forEach((card) => observer.observe(card));

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
          Every laminated glass product undergoes rigorous quality control and
          testing procedures to ensure safety, durability, and flawless optical
          performance in demanding environments.
        </p>
      </section>

      {/* CARDS */}
      <section className="qc-section">
        <div className="qc-grid">
          <div className="qc-card">
            <div className="qc-icon">
              <ShieldCheck />
            </div>
            <h3>Adhesion Testing</h3>
            <p>
              Assesses the bonding strength between glass layers and the
              interlayer using impact-based head form testing. This ensures
              that, upon impact, the interlayer remains intact, preventing
              dangerous fragmentation and maintaining occupant safety in
              compliance with ECE R43 requirements.
            </p>
            <ul>
              <li>
                <CheckCircle /> Glass–interlayer bonding validation
              </li>
              <li>
                <CheckCircle /> Impact performance assessment
              </li>
              <li>
                <CheckCircle /> Fragment retention after breakage
              </li>
            </ul>
          </div>

          <div className="qc-card">
            <div className="qc-icon">
              <Layers />
            </div>
            <h3>Delamination Control</h3>
            <p>
              Verifies the resistance of laminated glass to interlayer
              separation under controlled temperature and humidity conditions.
              The testing ensures long-term durability, allowing only
              permissible interlayer deformation while preventing excessive
              delamination as specified by regulatory standards.
            </p>
            <ul>
              <li>
                <CheckCircle />
                Resistance to heat and moisture aging
              </li>
              <li>
                <CheckCircle /> Interlayer stability under extreme conditions
              </li>
              <li>
                <CheckCircle />
                Long-term performance assurance
              </li>
            </ul>
          </div>

          <div className="qc-card">
            <div className="qc-icon">
              <Eye />
            </div>
            <h3>Optical Inspection</h3>
            <p>
              Evaluates the optical quality of laminated glass through light
              transmittance testing to ensure clear, distortion-free visibility.
              Testing is performed as per ECE R43 and DOT standards, confirming
              that light transmission values exceed the required limits for
              driver visibility and safety.
            </p>
            <ul>
              <li>
                <CheckCircle /> Light transmittance verification
              </li>
              <li>
                <CheckCircle /> Distortion and visual clarity checks
              </li>
              <li>
                <CheckCircle />
                Driver visibility zone compliance
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
