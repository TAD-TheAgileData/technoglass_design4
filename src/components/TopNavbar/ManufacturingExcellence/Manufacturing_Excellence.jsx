import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import "./ManufacturingExcellence.css";
/* ================= HERO IMAGE ================= */
import heroImg from "../../../assets/TopNavbar/ManufacturingExcellence/Images/manufacturingExcellence.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ================= MACHINE IMAGES ================= */
import img1 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image1.png";
import img2 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image2.png";
import img3 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image3.png";
import img4 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image4.JPG";
import img5 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image5.JPG";
import img6 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image6.JPG";
import img7 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image7.JPG";
import img8 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image8.JPG";
import img9 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image9.JPG";
import img10 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image10.jpeg";
import img11 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image11.png";
import img12 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image12.png";
import img13 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image13.png";
import img14 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image14.png";
import img15 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image15.png";

/* ================= LOGOS ================= */
import northGlassLogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/Northglasslogopng.png";
import glastonLogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/glasstonlogo.png";
import tamglassLogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/Tamglasslogo.png";
import bandoLogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/BandKiko.png";
import joisonLogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/JoisonLogo.JPG";
import chinalogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/China.png";
import ChanZhou from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/ChanZhou.jpeg";
import Bystroniclogo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/Bystroniclogo.png";
import Jumbo from "../../../assets/TopNavbar/ManufacturingExcellence/Logo/Jumbologo.png";

/* ===== CARD DATA ===== */
const cardData = [
  {
    image: img1,
    logo: bandoLogo,
    make: "Japan",
    process: "Cut & Grinding",
    desc: [
      "High-precision CNC cutting",
      "Smooth edge grinding",
      "Accurate dimensions",
    ],
  },
  {
    image: img2,
    logo: joisonLogo,
    make: "China",
    process: "Screen Printing",
    desc: ["Automated ceramic printing", "Uniform patterns", "Long durability"],
  },
  {
    image: img3,
    logo: joisonLogo,
    make: "China",
    process: "Enamel Drying",
    desc: ["Controlled drying", "Color consistency", "Strong adhesion"],
  },
  {
    image: img4,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: ["Advanced furnaces", "Optical clarity", "Precise curvature"],
  },
  {
    image: img5,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: ["Thermal forming", "Complex geometry", "Repeatable accuracy"],
  },
  {
    image: img6,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: [
      "Engineered bending lines",
      "Uniform curvature",
      "Minimal distortion",
    ],
  },
  {
    image: img7,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: ["Precision control", "Architectural glass", "High reliability"],
  },
  {
    image: img8,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: ["High-volume output", "Consistent quality", "Dimensional accuracy"],
  },
  {
    image: img9,
    logo: glastonLogo,
    make: "Finland",
    process: "Deairing",
    desc: ["Vacuum deairing", "No air bubbles", "Perfect lamination"],
  },
  {
    image: img10,
    logo: glastonLogo,
    make: "Finland",
    process: "Autoclave",
    desc: ["High-pressure bonding", "Maximum strength", "Durable lamination"],
  },
  {
    image: img11,
    logo: northGlassLogo,
    make: "China",
    process: "Autoclave",
    desc: ["Uniform bonding", "Industrial scale", "Quality consistency"],
  },
  {
    image: img12,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: ["Optimized workflow", "Scalable production", "High efficiency"],
  },
  {
    image: img13,
    logo: northGlassLogo,
    make: "China",
    process: "Cutting",
    desc: ["High-speed cutting", "Low material waste", "Tight tolerances"],
  },
  {
    image: img14,
    logo: northGlassLogo,
    make: "USA",
    process: "Cutting",
    desc: ["Precision edges", "Clean finish", "Demanding applications"],
  },
  {
    image: img15,
    logo: northGlassLogo,
    make: "China",
    process: "Flat Lamination",
    desc: ["Safety glass", "High strength", "Uniform bonding"],
  },
];

/* ===== ANIMATION VARIANTS ===== */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const MotionCard = motion.create(Card);

/* ===== COMPONENT ===== */
const Manufacturing_Excellence = () => {
  return (
    <>
      {/* HERO */}
      <Box className="mc-hero">
        <img src={heroImg} alt="Manufacturing" className="mc-hero-img" />

        <Box className="mc-hero-overlay">
          <Box className="mc-hero-text">
            <h1 className="mc-hero-title">Manufacturing Excellence</h1>

            <p className="mc-hero-subtitle">
              Precision. Automation. Global Standards.
            </p>
          </Box>
        </Box>
      </Box>
      {/* FEATURE SECTION: Advanced Manufacturing */}
      <motion.div
        className="mc-feature-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <Container maxWidth="md" className="mc-feature-content">
          <Typography className="mc-feature-title">
            Advanced Manufacturing Infrastructure
          </Typography>
          <Typography className="mc-feature-text">
            Our manufacturing facility integrates precision CNC cutting,
            automatic ceramic printing, high-accuracy bending, and controlled
            lamination processes. Each operation is optimized to ensure
            dimensional accuracy, surface quality, and consistent performance.
          </Typography>
        </Container>
      </motion.div>

      {/* CARDS */}
      <Container maxWidth="lg" className="mc-container">
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cardData.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <MotionCard
                className="mc-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 60px rgba(0,123,255,0.25)",
                }}
              >
                {/* IMAGE */}
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.process}
                  className="mc-image"
                />

                {/* CONTENT */}
                <CardContent className="mc-content">
                  {/* LOGO */}
                  <img src={item.logo} alt="Logo" className="mc-logo" />

                  <Typography className="mc-make">MAKE: {item.make}</Typography>

                  <Typography className="mc-process">
                    PROCESS: {item.process}
                  </Typography>

                  {/* BULLET DESCRIPTION */}
                  <ul className="mc-desc">
                    {item.desc.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={bulletVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <CheckCircleIcon className="mc-bullet-icon" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Manufacturing_Excellence;
