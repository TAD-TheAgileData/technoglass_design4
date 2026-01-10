import { motion } from "framer-motion";
import "./CompanyOverview.css";
import { FaCheckCircle } from "react-icons/fa";

// Using placeholder images
import heroImage from "../../../assets/Hero/CompanyOverview.jpg";

/* ✅ ADDED: content images */
import overviewImg1 from "../../../assets/Companyoverview/Whoweare.jpg";
import overviewImg2 from "../../../assets/Companyoverview/ExpYears.jpg";
import overviewImg3 from "../../../assets/Companyoverview/Whatweprovide.jpg";
import overviewImg4 from "../../../assets/Companyoverview/Manufacturig.jpg";
import overviewImg5 from "../../../assets/Companyoverview/Technologycollab.jpg";

export default function App() {
  return (
    <section className="company-overview">
      {/* ================= HERO ================= */}
      <div className="overview-hero">
        <motion.img
          src={heroImage}
          alt="Technoglass Manufacturing Facility"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <div className="hero-overlay">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Company Overview
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Engineering clarity. Manufacturing excellence.
          </motion.p>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="stats-bar">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.05, y: -6 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`overview-card ${section.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            whileHover={{ scale: 1.03, y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* ✅ ADDED zig-zag wrapper */}
            <div className={`overview-row ${index % 2 !== 0 ? "reverse" : ""}`}>
              {/* ✅ ADDED image */}
              <div className="overview-image">
                <img src={section.image} alt={section.title} />
              </div>

              {/* ✅ EXISTING CONTENT (UNCHANGED) */}
              <div className="overview-content">
                <h3>{section.title}</h3>

                {section.text && <p>{section.text}</p>}

                {section.list && (
                  <ul className={section.grid ? "grid-list" : ""}>
                    {section.list.map((item, i) => (
                      <li key={i} className="list-item">
                        <FaCheckCircle className="list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= STATS DATA ================= */
const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "1,300+", label: "Windshields Developed" },
  { value: "140+", label: "Skilled Professionals" },
  { value: "100%", label: "Made in KSA" },
];

/* ================= PAGE CONTENT ================= */
const sections = [
  {
    title: "Who We Are",
    image: overviewImg1,
    text: (
      <>
        <strong> Technical Glass Co.(Technoglass)</strong> is a leading
        automotive glass manufacturer established in <strong>1993</strong>. With
        over <strong>30+ years of experience</strong>, Technoglass is known for
        engineering precision, consistent quality, and dependable delivery.
        Operating entirely from the <strong>Kingdom of Saudi Arabia</strong>, we
        are among the most preferred suppliers in the Gulf region. Over the
        decades, Technoglass has earned the trust of customers through
        consistent quality, dependable delivery timelines, and a strong
        commitment to customer satisfaction. The company's strategic location
        and deep understanding of regional market demands have enabled it to
        serve leading automotive distributors and OEM partners across the Gulf
        region. Today, Technoglass is widely recognized as one of the most
        preferred automotive glass suppliers in the GCC, driven by its
        dedication to innovation, continuous improvement, and long-term
        partnerships built on trust, performance, and excellence.
      </>
    ),
  },
  {
    title: "Years of Experience & Industry Expertise",
    image: overviewImg2,
    list: [
      "Established in 1993",
      "30+ years in the glass industry",
      "10+ years in coated glass",
      "1,300+ windshields developed",
      "Expertise in laminated, tempered & coated glass",
    ],
  },
  {
    title: "What We Provide",
    image: overviewImg3,
    list: [
      "Windshields",
      "Sunroof Glass",
      "Front Door Glass",
      "Rear Door Glass",
      "Rear Fixed Glass",
      "Back Door Glass",
      "Laminated Glass",
      "Tempered Glass",
      "Specialty Glass",
      "High Performance Glass",
      "Safety Glass",
      "Architectural Glass",
    ],
    grid: true,
  },
  {
    title: "Manufacturing Infrastructure",
    image: overviewImg4,
    list: [
      "23,000 Sqm total land area",
      "14,000 Sqm built-up area",
      "Modern in-house facilities",
      "Advanced machinery & tooling",
    ],
  },
  {
    title: "Technology & Collaboration",
    image: overviewImg5,
    list: [
      "Technical collaboration with Tamglass – Finland",
      "Tamglass machinery",
      "In-house validation & testing",
      "Global regulatory compliance",
    ],
    highlight: true,
  },
];