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

/* ================= HERO IMAGE ================= */
import heroImg from "../../../assets/TopNavbar/ManufacturingExcellence/Images/manufacturingExcellence.jpg";

/* ================= MACHINE IMAGES ================= */
import img1 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Cut&Grinding.jpg";
import img2 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image2.JPG";
import img3 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image3.JPG";
import img4 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image4.JPG";
import img5 from "../../../assets/TopNavbar/ManufacturingExcellence/Images/Image5.webp";
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

/* ================= FALLBACK LOGO ================= */
const defaultLogo = northGlassLogo;

/* ================= DATA ================= */
const blocks = [
  {
    image: img1,
    logo: bandoLogo,
    make: "Japan",
    process: "Cut & Grinding",
    desc: "High-precision CNC cutting and edge grinding ensure accurate dimensions and smooth finishes.",
  },
  {
    image: img2,
    logo: joisonLogo,
    make: "China",
    process: "Screen Printing",
    desc: "Automated ceramic printing delivers uniform patterns with long-term durability.",
  },
  {
    image: img3,
    logo: joisonLogo,
    make: "China",
    process: "Enamel Drying",
    desc: "Controlled drying stabilizes coatings for color consistency and adhesion strength.",
  },
  {
    image: img4,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Advanced furnaces provide precise curvature control with optical clarity.",
  },
  {
    image: img5,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Thermal forming enables complex geometries with repeatable accuracy.",
  },
  {
    image: img6,
    logo: tamglassLogo,
    make: "Finland",
    process: "Bending",
    desc: "Engineered bending lines ensure uniform curvature and minimal distortion.",
  },
  {
    image: img7,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: "Precision-controlled bending supports architectural glass applications.",
  },
  {
    image: img8,
    logo: northGlassLogo,
    make: "China",
    process: "Bending",
    desc: "High-volume bending with consistent quality and dimensional accuracy.",
  },
  {
    image: img9,
    logo: glastonLogo,
    make: "Finland",
    process: "Deairing",
    desc: "Vacuum deairing eliminates trapped air for flawless lamination.",
  },
  {
    image: img15,
    logo: glastonLogo,
    make: "Finland",
    process: "Autoclave",
    desc: "Autoclave bonding ensures maximum strength and durability.",
  },
  {
    image: img10,
    logo: ChanZhou,
    make: "China",
    process: "Autoclave",
    desc: "Industrial autoclaves ensure uniform lamination quality.",
  },
  {
    image: img11,
    logo: chinalogo,
    make: "China",
    process: "Bending",
    desc: "Optimized bending operations support scalable production.",
  },
  {
    image: img12,
    logo: Jumbo,
    make: "China",
    process: "Cutting",
    desc: "High-speed cutting maintains tight tolerances with minimal waste.",
  },
  {
    image: img13,
    logo: Bystroniclogo,
    make: "USA",
    process: "Cutting",
    desc: "Precision cutting delivers clean edges for demanding applications.",
  },
  {
    image: img14,
    logo: chinalogo,
    make: "China",
    process: "Flat Lamination",
    desc: "Flat lamination produces high-strength safety glass.",
  },
];

/* ================= MOTION ================= */
const MotionCard = motion.create(Card);

/* ================= INFO ROW ================= */
const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      px: 1.5,
      py: 0.6,
      mt: 1,
      borderRadius: "8px",
      background: "#f4f6fb",
      fontSize: "0.75rem",
      fontWeight: 600,
    }}
  >
    <span>{label}</span>
    <span>{value}</span>
  </Box>
);

/* ================= COMPONENT ================= */
const Manufacturing_Excellence = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "60vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <Typography variant="h2" fontWeight={800}>
            Our Capacity & Capabilities
          </Typography>
          <Typography variant="h6">
            Precision-driven glass manufacturing excellence
          </Typography>
        </Box>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="stretch">
            {blocks.map((block, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex" }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                  }}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%", // 🔥 FIXED HEIGHT
                    width: "100%", // 🔥 FIXED WIDTH
                  }}
                >
                  <Box
                    sx={{
                      height: 170, // ✅ FIXED IMAGE HEIGHT
                      width: "100%",
                      flexShrink: 0, 
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={block.image}
                      alt={block.process}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      // 🔥 FIXED CONTENT HEIGHT
                      p: 2,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1, 
                    }}
                  >
                    <Box
                      sx={{
                        height: 40, // ✅ FIXED LOGO AREA
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={block.logo || defaultLogo}
                        sx={{ maxHeight: 32, maxWidth: 120 }}
                      />
                    </Box>

                    <InfoRow label="MAKE" value={block.make} />
                    <InfoRow label="PROCESS" value={block.process} />

                    <Typography
                      sx={{
                        mt: "auto",
                        fontSize: "0.8rem",
                        lineHeight: 1.6,
                        color: "#475569",
                       
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {block.desc}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Manufacturing_Excellence;
