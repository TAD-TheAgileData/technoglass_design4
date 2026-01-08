import "./Aboutus.css";
import { Link } from "react-router-dom";

/* ===== IMAGES ===== */
import Hero from "../../../assets/About_us/Hero.jpg";
import CompanyOverview from "../../../assets/About_us/CompanyOverview.jpg";
import VMV from "../../../assets/About_us/VMV.jpg";
import Leadership from "../../../assets/About_us/Leadership.jpg";

import Sustainable from "../../../assets/About_us/sustainable&ESG.webp";
import Milestone from "../../../assets/About_us/Milestone.jpg";

/* ===== ABOUT US CARD DATA ===== */
const aboutCards = [
  {
    title: "Company Overview",
    description:
      "Learn about our company, heritage, expertise, and commitment to high-performance glass solutions.",
    image: CompanyOverview,
    path: "/about/company-overview",
  },
  {
    title: "Vision, Mission & Values",
    description:
      "Discover our guiding principles, long-term vision, and values that drive everything we do.",
    image: VMV,
    path: "/about/vision_mission",
  },
  {
    title: "Leadership Message",
    description:
      "A message from our leadership team sharing insights, direction, and commitment to excellence.",
    image: Leadership,
    path: "/about/leadership",
  },
  {
    title: "Sustainability & ESG",
    description:
      "Our commitment to sustainability, responsible practices, and environmental stewardship.",
    image: Sustainable,
    path: "/about/sustainability",
  },
  {
    title: "Corporate Milestones",
    description:
      "Key milestones that define our journey, innovation, and growth over the years.",
    image: Milestone,
    path: "/about/milestones",
  },
];

const AboutUs = () => {
  return (
    <main className="about-main">
      {/* ===== HERO ===== */}
      <section className="about-hero">
        <img
          src={Hero}
          alt="About Us"
          className="about-hero-image"
          loading="eager"
        />
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>
            Building excellence through innovation, leadership, and sustainable
            glass solutions.
          </p>
        </div>
      </section>

      {/* ===== CARDS ===== */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-card-grid">
            {aboutCards.map((card, index) => (
              <Link
                key={index}
                to={card.path}
                className="about-card-link"
                aria-label={`Read more about ${card.title}`}
              >
                <article className="about-card">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="about-card-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="240"
                  />
                  <div className="about-card-overlay">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <span className="read-more">READ MORE →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
