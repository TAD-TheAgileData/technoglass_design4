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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./ManufacturingExcellence.css";
/* ================= HERO IMAGE ================= */
import heroImg from "../../../assets/TopNavbar/ManufacturingExcellence/Images/manufacturingExcellence.jpg";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

/* ================= MACHINE IMAGES ================= */
import img1 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image1.1.jpg";
import img2 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image2.1.png";
import img3 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image3.1.png";
import img4 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/image4.png";
import img5 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image5.1.png";
import img6 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image6.1.png";
import img7 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image7.1.webp";
import img8 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/image8.png";
import img9 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image9.1.jpg";
import img10 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/image10.png";
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
import { linearGradient } from "framer-motion/client";

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
    desc: ["IR Dryer,", "Controlled Process,", "Proper Querying"],
  },
  {
    image: img4,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending(Windshield)",
    desc: [" Receipe Controlled Programme", "Precise Bending Profile", "Achieve CpK > 1.33"],
  },
  {
    image: img5,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending(Windshield)",
    desc: [" Receipe Controlled Programme", "Precise Bending Profile", "Achieve CpK > 1.33"],
  },
  {
    image: img6,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending - Bus WindShield",
    desc: [
      "Receipe Controlled Programme",
      "Achieve Complex profile curvature",
      "Fully Automatic",
    ],
  },
  {
    image: img7,
    logo: northGlassLogo,
    make: "China",
    process: "Bending -Toughned Glass",
    desc: ["roller bending Process", "Receipe Controlled Programme", "High repetablity and dimensional accuracy"],
  },
  {
    image: img8,
    logo: northGlassLogo,
    make: "China",
    process: "Bending -Toughned Glass",
    desc: ["roller bending Process", "Receipe Controlled Programme", "High repetablity and dimensional accuracy"],
  },
  {
    image: img9,
    logo: glastonLogo,
    make: "Finland",
    process: "Lamination and Deairing",
    desc: ["Vacuum deairing", "Pokayoke Process", "Controlled Environment"],
  },
  {
    image: img10,
    logo: glastonLogo,
    make: "Finland",
    process: "Autoclave",
    desc: ["Digitally Program-Controlled Process (Temperature & Pressure)", "Uniform Heat Penetration", "Continuous Monitoring and Ensured Safety"],
  },
  
];

/* ANIMATION */
const cardVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -120 : 120,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionCard = motion.create(Card);

/* COMPONENT */
export default function Manufacturing_Excellence() {
  return (
    <>
      {/* HERO */}
      <Box className="mc-hero">
        <img src={heroImg} className="mc-hero-img" alt="" />
        <Box className="mc-hero-overlay">
          <Box>
            <h1 className="mc-hero-title">Manufacturing Excellence</h1>
            <p className="mc-hero-subtitle">
              Precision • Automation • Global Standards
            </p>
          </Box>
        </Box>
      </Box>

      {/* CARDS */}
      <Container maxWidth="lg" className="mc-container">
        <Grid container direction="column" spacing={5}>
          {cardData.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <Grid item xs={12} md={12} lg={12} key={index}>
                <MotionCard
                  className="mc-card"
                  sx={{
                    background: "linear-gradient(135deg, #f1f4f6, #979899)", // 👈 CARD COLOR HERE
                  }}
                  custom={reverse ? "right" : "left"}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Box
                    className="mc-zigzag"
                    sx={{
                      flexDirection: {
                        xs: "column",
                        md: reverse ? "row-reverse" : "row",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box className="mc-image-wrap">
                      <CardMedia
                        component="img"
                        image={item.image}
                        className="mc-image"
                      />
                      <div className="mc-image-badge">{item.process}</div>
                    </Box>

                    {/* CONTENT */}
                    <CardContent className="mc-content">
                      <img src={item.logo} className="mc-logo" alt="" />
                      <Typography className="mc-make">
                        MAKE: {item.make}
                      </Typography>
                      <Typography className="mc-process">
                        PROCESS: {item.process}
                      </Typography>

                      <ul className="mc-desc">
                        {item.desc.map((p, i) => (
                          <li key={i}>
                            <CheckCircleIcon className="mc-bullet-icon" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Box>
                </MotionCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
