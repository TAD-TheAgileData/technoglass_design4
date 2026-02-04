import React from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./IndustriesServed.css";

/* ================= IMAGES ================= */
import heroImg from "../../../assets/Industriescard/Heroimage01.png";
import passengerImg from "../../../assets/Industriescard/Passengervehicle.avif";
import commercialImg from "../../../assets/Industriescard/commercialglass.jpg";
import BusCoach from "../../../assets/Industriescard/BUSHeroimage.png";
import railImg from "../../../assets/Industriescard/Rail.jpg";
import MarineheroImg from "../../../assets/Industriescard/Marinehero.png";
/* ================= DATA ================= */
const industries = [
  {
    path: "/industries/carmarket",
    title: "Passenger Car Market",
    desc: "Advanced automotive glazing solutions engineered for safety and comfort.",
    image: passengerImg,
  },
  {
    path: "/industries/bus-coach",
    title: "BUS & COACH",
    desc: "Safety-engineered glass offering exceptional strength, clarity, and long-lasting performance.",
    image: BusCoach,
  },
  {
    path: "/industries/commercial-vehicles",
    title: "TRUCKS",
    desc: "High-strength glass solutions for trucks, engineered for safety, durability, and reliable performance in demanding conditions.",
    image: commercialImg,
  },
  {
    path: "/industries/metrorail",
    title: "METRO RAIL",
    desc: "Certified glazing systems for rail and urban transit.",
    image: railImg,
  },
  {
    path: "/industries/marine",
    title: "MARINE",
    desc: "Marine-grade safety glass designed to withstand impact, pressure, and harsh sea conditions while maintaining clarity.",
    image: MarineheroImg,
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
