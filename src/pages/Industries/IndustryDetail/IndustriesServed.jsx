import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./IndustriesServed.css";

/* ================= IMAGES ================= */
import heroImg from "../../../assets/Industriescard/Hero.jpg";
import passengerImg from "../../../assets/Industriescard/Passengervehicle.avif";
import commercialImg from "../../../assets/Industriescard/commercialglass.jpg";
import offhighwayImg from "../../../assets/Industriescard/OffhighwayEquipment.jpg";
import railImg from "../../../assets/Industriescard/Rail.jpg";
import specialtyImg from "../../../assets/Industriescard/Specialityglass.jpg";

/* ================= DATA ================= */
const industries = [
  {
    path: "/industries/passenger-vehicles",
    title: "Passenger Vehicles",
    desc: "Advanced automotive glazing solutions engineered for safety and comfort.",
    image: passengerImg,
  },
  {
    path: "/industries/commercial-vehicles",
    title: "Commercial Vehicles",
    desc: "Robust and compliant glass systems for heavy-duty transport.",
    image: commercialImg,
  },
  {
    path: "/industries/off-highway-equipment",
    title: "Off-Highway Equipment",
    desc: "High-impact glazing for construction and industrial machinery.",
    image: offhighwayImg,
  },
  {
    path: "/industries/rail-metro",
    title: "Rail & Metro",
    desc: "Certified glazing systems for rail and urban transit.",
    image: railImg,
  },
  {
    path: "/industries/specialty-applications",
    title: "Specialty Applications",
    desc: "Custom-engineered solutions for demanding environments.",
    image: specialtyImg,
  },
];

export default function IndustriesServed() {
  return (
    <main className="industries-main">
      {/* ================= HERO ================= */}
      <section
        className="industries-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="industries-hero-overlay" />
        <Container className="industries-hero-content">
          <Typography variant="h2" className="industries-title">
            Industries Served
          </Typography>
          <Typography className="industries-subtitle">
            Precision-engineered glass solutions trusted by global OEMs across
            automotive, rail, and industrial sectors.
          </Typography>
        </Container>
      </section>

      {/* ================= CARDS ================= */}
      <section className="industries-section">
        <Container maxWidth="lg">
          <div className="industries-grid">
            {industries.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="industries-card-link"
              >
                <article className="industries-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="industries-card-image"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="220"
                  />
                  <div className="industries-card-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span>READ MORE →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
