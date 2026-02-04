import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid } from "@mui/material";
import "./ProductPortfolio.css";

/* ===== HERO IMAGE ===== */
import heroImg from "../../assets/Product/HeroProduct.jpg";

/* ===== PRODUCT IMAGES ===== */
import windshieldImg from "../../assets/Product/Windshield.png";
import backliteImg from "../../assets/Product/Backlites.png";
import sideliteImg from "../../assets/Product/Sidelite.png";
import sunroofImg from "../../assets/Product/Sunroof.png";
import quarterImg from "../../assets/Product/Quarterglassavif.avif";
import media from "../../assets/Product/Media&Gallery.png";
import Bus_Coach from "../../assets/Product/Bus_Coach.png";
import Truck from "../../assets/Product/Truck.png";
import OFFHighway from "../../assets/Product/OFF_Highway.png";
import Defence from "../../assets/Product/Defence.png";
import ValueAddedFeature from "../../assets/Product/ValueAddedFeature.png";
import AutomotiveApplicationGallery from "../../assets/Product/AutomotiveApplicationGallery.png";

/* ===== DATA ===== */
const glassSolutions = [
  {
    title: "AUTOMOTIVE WINDSHIELDS",
    desc: "Discover advanced laminated windshield solutions designed for superior safety and performance.",
    image: windshieldImg,
    link: "/products/windshields",
  },
  {
    title: "SIDELITES",
    desc: "Precision-engineered sidelites delivering clarity, strength, and aesthetics.",
    image: sideliteImg,
    link: "/products/sidelites",
  },
  {
    title: "BACKLITES",
    desc: "Upgrade your vehicle glazing with durable tempered backlite solutions.",
    image: backliteImg,
    link: "/products/backlites",
  },
  {
    title: "Quarter Glasses",
    desc: "Custom-shaped quarter glass solutions for seamless vehicle integration.",
    image: quarterImg,
    link: "/products/quarter-glasses",
  },
  {
    title: "Sunroofs",
    desc: "Panoramic and standard sunroof glass for enhanced driving comfort.",
    image: sunroofImg,
    link: "/products/sunroofs",
  },
  {
    title: "BUS & COACH",
    desc: "Advanced laminated and tempered glass for buses and coaches, compliant with international safety standards.",
    image: Bus_Coach,
    link: "/products/specialty-glass/bus-coach",
  },
  {
    title: "COMMERCIAL VEHICLE GLASS",
    desc: "Advanced laminated and tempered glass for commercial vehicles, meeting global safety standards.",
    image: Truck,
    link: "/products/specialty-glass/commercial-vehicles",
  },
  {
    title: "OFF-HIGHWAY & INDUSTRIAL VEHICLES",
    desc: "High-strength laminated and tempered glass designed for off-highway and industrial vehicle environments.",
    image: OFFHighway,
    link: "/products/specialty-glass/off-highway-industrial",
  },
  {
    title: "Defense & Armored Vehicles",
    desc: "Ballistic-resistant glass solutions developed to meet defense and armored vehicle standards.",
    image: Defence,
    link: "/products/specialty-glass/defense-armored",
  },
  {
    title: "VALUE ADDED FEATURES",
    desc: "Enhanced glass features delivering superior safety, comfort, and long-term performance.",
    image: ValueAddedFeature,
    link: "/products/ValueAddedFeatures",
  },
  {
    title: "MEDIA AND GALLERY",
    desc: "Discover Technoglass through images and videos highlighting innovation and quality.",
    image: media,
    link: "/products/mediagallery",
  },
  {
    title: "AUTOMOTIVE APPLICATION GALLERY",
    desc: "A visual journey of automotive glass applications highlighting quality and performance.",
    image: AutomotiveApplicationGallery,
    link: "/products/automotiveapplicationgallery",
  },
];

/* ===== FRAMER ===== */
const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ProductPortfolio() {
  const navigate = useNavigate();

  return (
    <Box className="PPproduct-root">
      {/* ===== HERO ===== */}
      <Box
        className="PPproduct-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="PPhero-overlay" />
        <Container className="PPhero-content">
          <Typography variant="h2" className="PPhero-title">
            Products
          </Typography>
          <Typography className="PPhero-subtitle">
            Elevate Your Everyday: Best for lifestyle or premium goods.
          </Typography>
        </Container>
      </Box>

      {/* ===== INTRO ===== */}
      <Container maxWidth="md" className="PPproduct-intro">
        <Typography variant="h4" className="PPintro-title">
          Our Products and Services
        </Typography>
        <Typography className="PPintro-text">
          Discover our automotive glass designed to enhance safety, performance,
          and efficiency.
        </Typography>
      </Container>

      {/* ===== CARDS ===== */}
      <Container maxWidth="lg" className="PPproduct-cards">
        <Grid container spacing={4}>
          {glassSolutions.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                className="PPproduct-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => navigate(item.link)}
              >
                <div className="PPcard-overlay" />

                <div className="PPcard-content">
                  <Typography variant="h5" className="PPcard-title">
                    {item.title}
                  </Typography>

                  <Typography className="PPcard-desc">
                    {item.desc}
                  </Typography>

                  <Typography className="PPcard-link">
                    Read More <span className="PParrow">→</span>
                  </Typography>
                </div>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
