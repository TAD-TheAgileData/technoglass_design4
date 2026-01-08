import React from "react";
import "./StrategicDrivers.css";
import {
  FaLeaf,
  FaChartLine,
  FaUsers,
  FaSmile
} from "react-icons/fa";

const StrategicDrivers = () => {
  const drivers = [
    {
      title: "Sustainability",
      icon: <FaLeaf />,
      desc:
        "Technoglass is committed to sustainable practices that reduce environmental impact and promote responsible use of resources for long-term growth."
    },
    {
      title: "Profitability & Competitiveness",
      icon: <FaChartLine />,
      desc:
        "We focus on improving efficiency, innovation, and cost management to remain competitive while achieving strong financial performance."
    },
    {
      title: "People Development",
      icon: <FaUsers />,
      desc:
        "Our people are our strength. We invest in continuous learning, collaboration, and skill development to build a high-performing workforce."
    },
    {
      title: "Customer Satisfaction",
      icon: <FaSmile />,
      desc:
        "Customer satisfaction is at the heart of our strategy. We consistently deliver quality products and reliable service to build lasting trust."
    }
  ];

  return (
    <div className="strategic-container">
      {/* Hero Section */}
      <section className="strategic-hero">
        <div className="strategic-hero-overlay">
          <h1>Technoglass Strategic Drivers</h1>
          <p>
            The key pillars guiding our growth, innovation, and commitment to
            excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="strategic-drivers-section">
        <h2>Our Strategic Focus Areas</h2>

        <div className="strategic-drivers-grid">
          {drivers.map((item, index) => (
            <div className="strategic-driver-card" key={index}>
              <div className="strategic-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StrategicDrivers;
