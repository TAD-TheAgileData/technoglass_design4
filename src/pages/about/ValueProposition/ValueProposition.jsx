import React from "react";
import "./ValueProposition.css";
import hero from "../../../assets/About_us/ValuePropsition/HeroValue.jpg";

const ValueProposition = () => {
  return (
    <div className="value-proposition">

      {/* HERO SECTION */}
      <section
        className="vp-hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="vp-hero-overlay">
          <h1>Our Value Proposition</h1>
          <p>
            Precision-driven glass solutions engineered for performance,
            reliability, and global compliance.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="vp-content">
        <div className="vp-container">

          <ValueCard
            title="Core Business Strengths"
            points={[
              "Advanced specialty glass processing including bending, lamination, printing, and tempering",
              "Precision manufacturing with strict quality control systems",
              "Automated production lines with robotics and conveyorized workflows",
              "End-to-end solutions from design engineering to final delivery",
            ]}
          />

          <ValueCard
            title="Technical Excellence"
            points={[
              "State-of-the-art machinery and automation technologies",
              "Consistent thickness, clarity, and superior optical performance",
              "High repeatability with low rejection rates",
              "In-house engineering capabilities for custom solutions",
              "Compliance with global standards including ISO, IATF, and ECE R43",
            ]}
          />

          <ValueCard
            title="Quality & Reliability"
            points={[
              "100% traceability across all production stages",
              "Robust SOPs, checklists, and process controls",
              "Zero-compromise approach to safety and durability",
              "Proven performance across automotive, architectural, and industrial sectors",
            ]}
          />

          <ValueCard
            title="Innovation & Technology Leadership"
            points={[
              "Integration of smart manufacturing practices",
              "Data-driven decision-making across operations",
              "Scalable production to meet evolving OEM requirements",
            ]}
          />

          <ValueCard
            title="Customer-Centric Approach"
            points={[
              "Fast response times with transparent communication",
              "Custom-engineered solutions aligned to customer needs",
              "Strong after-sales support and technical guidance",
              "Long-term partnership-driven mindset",
            ]}
          />

          <ValueCard
            title="Compliance & Global Standards"
            points={[
              "Adherence to international safety, quality, and environmental norms",
              "Export-ready documentation and regulatory compliance",
              "Extensive experience with global OEM audits and approvals",
            ]}
          />

          <ValueCard
            title="Commercial Value"
            points={[
              "Competitive pricing without compromising quality",
              "Optimized production efficiency for cost savings",
              "Reliable lead times and predictable supply chains",
              "Flexible order quantities for small and high-volume customers",
            ]}
          />

          <ValueCard
            title="Key Differentiators"
            points={[
              "Unique blend of automation and craftsmanship",
              "Deep expertise in specialty glass for automotive and industrial applications",
              "Strong engineering backbone supported by SOP-driven operations",
              "Proven track record with demanding global customers",
              "Consistent quality delivery across high-volume production",
            ]}
          />

        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ title, points }) => (
  <div className="vp-card">
    <h3>{title}</h3>
    <ul>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default ValueProposition;
