import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Container, Typography, Grid, Dialog } from "@mui/material";

/* IMAGES */
import heroImg from "../../../assets/About_us/LeaderShip/White.jpg";
import iso9001 from "../../../assets/Certificate/Iso9001.jpg";
// import iso45001 from "../../../assets/About_us/LeaderShip/White.jpg";
// import iso14001 from "../../../assets/About_us/LeaderShip/White.jpg";
import fssc from "../../../assets/About_us/LeaderShip/White.jpg";
import encon from "../../../assets/About_us/LeaderShip/White.jpg";
import Copcertificate from "../../../assets/Certificate/Copcertificate.jpeg";
import iso14001 from "../../../assets/Certificate/ISO14001Certificate.jpeg";
import iso45001 from "../../../assets/Certificate/ISO45001.jpeg";
/* DATA */
const certCards = [
  {
    title: "IATF 16949:2016– Automotive Quality Management System",
    subtitle: (
      <strong>
        Ensures consistent quality, defect prevention, 
        and reduction of variation and waste.
      </strong>
    ),
    image:iso9001,
    desc: `➤ Harmonizes global automotive quality requirements  
➤ Ensures suppliers meet OEM expectations  
➤ Focuses on customer satisfaction and continuous improvement`,
  },
  {
    title: "ISO 9001:2015– Quality Management System",
    subtitle: (
      <strong>
        Delivers a structured framework for consistent product and service
        quality.
      </strong>
    ),
    image: iso9001,
    desc: `➤ Improves operational efficiency  
➤ Enhances customer satisfaction  
➤ Encourages continual improvement`,
  },
  {
    title: "ISO 14001:2015– Environmental Management System",
    subtitle: (
      <strong>Supports environmental responsibility and sustainability.</strong>
    ),
    image: iso14001,
    desc: `➤ Reduces environmental impact  
➤ Ensures regulatory compliance  
➤ Promotes pollution prevention`,
  },
  {
    title: "ISO 45001:2018– Occupational Health & Safety",
    subtitle: (
      <strong>Improves workplace safety and employee well-being.</strong>
    ),
    image: iso45001,
    desc: `➤ Identifies hazards and risks  
➤ Reduces work-related incidents  
➤ Demonstrates OH&S compliance`,
  },
  {
    title: "ECE R-43– Automotive Safety Glazing",
    subtitle: <strong>UN regulation for automotive glazing materials.</strong>,
    image: fssc,
    desc: `➤ Prevents dangerous glass fragmentation  
➤ Ensures optical clarity  
➤ Withstands mechanical stress`,
  },
  {
    title: "CoP Certification– Conformity of Production",
    subtitle: <strong>Ensures mass production consistency.</strong>,
    image: Copcertificate,
    desc: `➤ Maintains approved specifications  
➤ Reduces recall risks  
➤ Builds regulatory confidence`,
  },
  {
    title: "NM 22.0.010– Morocco Automotive Standard",
    subtitle: <strong>Mandatory Moroccan automotive compliance.</strong>,
    image: encon,
    desc: `➤ Meets national safety laws  
➤ Required for exporters  
➤ Confirms product conformity`,
  },
  {
    title: "Global Tier-1 Partnership for Strategic Materials",
    subtitle: <strong>Strategic partnerships with global suppliers.</strong>,
    image: encon,
    desc: `Raw Glass:
➤ Guardian – Thailand  
➤ Asahi – China  
➤ Pilkington – China  

PVB:
➤ Eastman Saflex – Belgium  
➤ Trosifol – Germany  
➤ Sekisui – Japan  

Black Ceramic:
➤ Ferro – Germany  
➤ Torrecid – Spain`,
  },
];

/* IMAGE ZOOM */
const CertificationImageZoom = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          height: 210,
          width: 240,
          mx: "auto",
          borderRadius: 5,
          bgcolor: "#fff",
          backgroundImage: `url(${item.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          boxShadow: "0 40px 90px rgba(0,0,0,0.28)",
          cursor: "pointer",
          transition: "all 0.4s ease",
          "&:hover": {
            transform: "scale(1.08)",
          },
        }}
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: { xs: "90vw", md: "70vw" },
            maxHeight: "90vh",
            borderRadius: 2,
          }}
        />
      </Dialog>
    </>
  );
};

/* MAIN COMPONENT */
export default function Certifications() {
  const { scrollYProgress } = useScroll();

  /* SCROLL COLOR CHANGE */
  const accentGradient = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      "linear-gradient(180deg, #0ea5e9, #6366f1)",
      "linear-gradient(180deg, #22c55e, #16a34a)",
      "linear-gradient(180deg, #f97316, #dc2626)",
      "linear-gradient(180deg, #9333ea, #6366f1)",
    ]
  );

  return (
    <Box sx={{ bgcolor: "#f8fafc", overflow: "hidden" }}>
      {/* HERO */}
      <Box sx={{ position: "relative", minHeight: "70vh" }}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
          }}
        />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.75)" }} />

        <Container sx={{ position: "relative", zIndex: 1, pt: 18 }}>
          <Typography variant="h2" fontWeight={900} color="#fff">
            Certifications & Compliance
          </Typography>
          <Typography variant="h6" color="#cbd5f5" maxWidth={640}>
            International standards ensuring quality, safety, and sustainability.
          </Typography>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ py: 16 }}>
        {certCards.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <Grid
              container
              spacing={8}
              key={index}
              direction={reverse ? "row-reverse" : "row"}
              alignItems="center"
              sx={{ mb: 14 }}
            >
              <Grid item xs={12} md={4}>
                <CertificationImageZoom item={item} />
              </Grid>

              <Grid item xs={12} md={8}>
                <motion.div whileHover={{ y: -6 }}>
                  <Box
  sx={{
    position: "relative",
    bgcolor: "#fff",
    p: 5,
    borderRadius: 4,
    boxShadow: "0 30px 100px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "0.3s ease",
  }}
>
{/* BACKGROUND DESIGN UI/UX */}
<motion.div
  animate={{ rotate: [0, 360] }}
  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: 16,
    background: `
      radial-gradient(circle at 20% 20%, rgba(14,165,233,0.05), transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(99,102,241,0.05), transparent 50%),
      repeating-conic-gradient(from 0deg, rgba(14,165,233,0.03) 0deg 45deg, transparent 45deg 90deg)
    `,
    zIndex: 0,
    pointerEvents: "none",
  }}
/>

{/* OPTIONAL — subtle animated pulse circles */}
<motion.div
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  style={{
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "rgba(14,165,233,0.05)",
    zIndex: 0,
  }}
/>
<motion.div
  animate={{ scale: [1, 1.12, 1] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
  style={{
    position: "absolute",
    top: "50%",
    left: "55%",
    width: 120,
    height: 120,
    borderRadius: "50%",
    background: "rgba(99,102,241,0.05)",
    zIndex: 0,
  }}
/>


{/* GLOW BORDER */}
<motion.div
  animate={{ opacity: [0.4, 0.8, 0.4] }}
  transition={{ duration: 4, repeat: Infinity }}
  style={{
    position: "absolute",
    inset: -2,
    borderRadius: 20,
    background: accentGradient,
    filter: "blur(18px)",
    zIndex: -1,
  }}
/>
{/* LEFT TECH SCAN LINE */}
<motion.div
  animate={{ backgroundPositionY: ["0%", "300%"] }}
  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
  style={{
    position: "absolute",
    top: 26,
    bottom: 26,
    left: 8,
    width: 6,
    borderRadius: 12,
    background: `
      linear-gradient(
        180deg,
        transparent 0%,
        rgba(255,255,255,0.6) 20%,
        transparent 45%,
        rgba(255,255,255,0.9) 60%,
        transparent 80%
      ),
      ${accentGradient}
    `,
    backgroundSize: "100% 300%",
    boxShadow: "0 0 24px rgba(99,102,241,0.55)",
  }}
/>

{/* RIGHT TECH SCAN LINE */}
<motion.div
  animate={{ backgroundPositionY: ["300%", "0%"] }}
  transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
  style={{
    position: "absolute",
    top: 26,
    bottom: 26,
    right: 8,
    width: 6,
    borderRadius: 12,
    background: `
      linear-gradient(
        180deg,
        transparent 0%,
        rgba(255,255,255,0.6) 20%,
        transparent 45%,
        rgba(255,255,255,0.9) 60%,
        transparent 80%
      ),
      ${accentGradient}
    `,
    backgroundSize: "100% 300%",
    boxShadow: "0 0 24px rgba(99,102,241,0.55)",
  }}
/>

                    {/* ACCENT BAR */}
                    {/* LEFT ACCENT BAR */}
<motion.div
  whileHover={{ scaleY: 1.15 }}
  style={{
    position: "absolute",
    top: 30,
    bottom: 30,
    left: 0,
    width: 6,
    borderRadius: 12,
    background: accentGradient,
    boxShadow: "0 0 22px rgba(99,102,241,0.45)",
  }}
/>

{/* RIGHT ACCENT BAR */}
<motion.div
  whileHover={{ scaleY: 1.15 }}
  style={{
    position: "absolute",
    top: 30,
    bottom: 30,
    right: 0,
    width: 6,
    borderRadius: 12,
    background: accentGradient,
    boxShadow: "0 0 22px rgba(99,102,241,0.45)",
  }}
/>
{/* LEFT PREMIUM GLOW LINE */}
<div
  style={{
    position: "absolute",
    top: 28,
    bottom: 28,
    left: 10,
    width: 8,
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      borderRadius: 10,
      background: accentGradient,
      filter: "blur(8px)",
      opacity: 0.6,
    }}
  />
  <div
    style={{
      position: "absolute",
      inset: 2,
      borderRadius: 8,
      background: accentGradient,
    }}
  />
</div>

{/* RIGHT PREMIUM GLOW LINE */}
<div
  style={{
    position: "absolute",
    top: 28,
    bottom: 28,
    right: 10,
    width: 8,
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      borderRadius: 10,
      background: accentGradient,
      filter: "blur(8px)",
      opacity: 0.6,
    }}
  />
  <div
    style={{
      position: "absolute",
      inset: 2,
      borderRadius: 8,
      background: accentGradient,
    }}
  />
</div>

{/* LEFT CUT LINE */}
<div
  style={{
    position: "absolute",
    top: 34,
    bottom: 34,
    left: 6,
    width: 5,
    background: accentGradient,
    borderRadius: 10,
  }}
>
  <div
    style={{
      position: "absolute",
      top: -10,
      left: -4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: accentGradient,
      boxShadow: "0 0 16px rgba(99,102,241,0.7)",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: -10,
      left: -4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: accentGradient,
      boxShadow: "0 0 16px rgba(99,102,241,0.7)",
    }}
  />
</div>

{/* RIGHT CUT LINE */}
<div
  style={{
    position: "absolute",
    top: 34,
    bottom: 34,
    right: 6,
    width: 5,
    background: accentGradient,
    borderRadius: 10,
  }}
>
  <div
    style={{
      position: "absolute",
      top: -10,
      right: -4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: accentGradient,
      boxShadow: "0 0 16px rgba(99,102,241,0.7)",
    }}
  />
  <div
    style={{
      position: "absolute",
      bottom: -10,
      right: -4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: accentGradient,
      boxShadow: "0 0 16px rgba(99,102,241,0.7)",
    }}
  />
</div>

  <Box
  sx={{
    position: "relative",
    bgcolor: "#fff",
    p: 5,
    borderRadius: 4,
    boxShadow: "0 30px 100px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "0.3s ease",
  }}
>
  {/* BACKGROUND ANIMATION */}
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    style={{
      position: "absolute",
      inset: 0,
      borderRadius: 16,
      background: `
        radial-gradient(circle at 20% 20%, rgba(14,165,233,0.05), transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(99,102,241,0.05), transparent 50%),
        repeating-conic-gradient(from 0deg, rgba(14,165,233,0.03) 0deg 45deg, transparent 45deg 90deg)
      `,
      zIndex: 0,
      pointerEvents: "none",
    }}
  />

  {/* TITLE */}
  <Typography
    variant="h5"
    fontWeight={900}
    color="#111827"
    sx={{ position: "relative", zIndex: 1, mb: 2 }}
  >
    {item.title}
  </Typography>

  {/* SUBTITLE */}
  <Typography
    variant="h7"
    fontWeight={600}
    color="#4b5563"
    sx={{ position: "relative", zIndex: 1, mb: 2 ,pl:1}}
  >
    {item.subtitle}
  </Typography>

  {/* DASH SEPARATOR */}
  <Box
    sx={{
      width: "60px",
      height: 2,
      bgcolor: "#e5e7eb",
      mb: 2,
      
      position: "relative",
      zIndex: 1,
      borderRadius: 1,
    }}
  />

  {/* DESCRIPTION */}
  <Typography
    variant="body1"
    color="#6b7280"
    lineHeight={1.8}
    whiteSpace="pre-line"
    sx={{ position: "relative", zIndex: 1, pl: 4 }}
  >
    {item.desc}
  </Typography>
</Box>


</Box>
                </motion.div>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
}