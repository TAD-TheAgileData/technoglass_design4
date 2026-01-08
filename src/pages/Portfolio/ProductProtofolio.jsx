import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Container, Typography, Grid } from "@mui/material";

/* ===== HERO IMAGE ===== */
import heroImg from "../../assets/Product/HeroProduct.jpg";

/* ===== PRODUCT IMAGES ===== */
import windshieldImg from "../../assets/Product/windshields.jpg";
import backliteImg from "../../assets/Product/Backlite.jpg";
import sideliteImg from "../../assets/Product/Sidelites.jpg";
import sunroofImg from "../../assets/Product/Sunroof.avif";
import quarterImg from "../../assets/Product/Quarterglassavif.avif";
import specialtyImg from "../../assets/Product/Specilityglass.jpg";

/* ===== DATA ===== */
const glassSolutions = [
  {
    title: "Windshields (Laminated)",
    desc:
      "Discover advanced laminated windshield solutions designed for superior safety and performance.",
    image: windshieldImg,
    link: "/products/windshields",
  },
  {
    title: "Backlites (Tempered)",
    desc:
      "Upgrade your vehicle glazing with durable tempered backlite solutions.",
    image: backliteImg,
    link: "/products/backlites",
  },
  {
    title: "Sidelites",
    desc:
      "Precision-engineered sidelites delivering clarity, strength, and aesthetics.",
    image: sideliteImg,
    link: "/products/sidelites",
  },
  {
    title: "Sunroofs",
    desc:
      "Panoramic and standard sunroof glass for enhanced driving comfort.",
    image: sunroofImg,
    link: "/products/sunroofs",
  },
  {
    title: "Quarter Glasses",
    desc:
      "Custom-shaped quarter glass solutions for seamless vehicle integration.",
    image: quarterImg,
    link: "/products/quarter-glasses",
  },
  {
    title: "Specialty Glass",
    desc:
      "High-performance automotive glass solutions for demanding applications.",
    image: specialtyImg,
    link: "/products/specialty-glass",
  },
];

/* ===== FRAMER OPTIMIZED ===== */
const MotionBox = motion(Box);

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function ProductProtofolio() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: { xs: "55vh", md: "70vh" },
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h2" fontWeight={700} sx={{ color: "#fff", mb: 2 }}>
            Products
          </Typography>
          <Typography sx={{ color: "#E5E7EB", maxWidth: 650 }}>
            Elevate Your Everyday: Best for lifestyle or premium goods.
          </Typography>
        </Container>
      </Box>

      {/* ================= INTRO ================= */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
          Our Products and Services
        </Typography>
        <Typography sx={{ color: "#475569", lineHeight: 1.8 }}>
          Discover our automotive glass designed to enhance safety,
          performance, and efficiency.
        </Typography>
      </Container>

      {/* ================= CARDS ================= */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Grid container spacing={3}>
          {glassSolutions.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionBox
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                onClick={() => navigate(item.link)}
                sx={{
                  position: "relative",
                  height: 340,
                  cursor: "pointer",
                  overflow: "hidden",

                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",

                  willChange: "transform, opacity",
                  transform: "translateZ(0)",

                  "&:hover .overlay": {
                    backgroundColor: "rgba(0,0,0,0.55)",
                  },

                  "&:hover .arrow": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    transition: "background-color 0.25s ease",
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 4,
                    color: "#fff",
                  }}
                >
                  <Typography variant="h5" fontWeight={400} sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      maxWidth: 280,
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    {item.desc}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    Read More
                    <span
                      className="arrow"
                      style={{
                        transition: "transform 0.25s ease",
                      }}
                    >
                      →
                    </span>
                  </Typography>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
