import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  FaStar,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

/* HERO IMAGE */
import heroImg from "../../../assets/TopNavbar/OUR Values/OurvalueHero.jpg";

/* CARD IMAGE */
import qualityImg from "../../../assets/TopNavbar/OUR Values/QualityStandard.jpg";
import innovationImg from "../../../assets/TopNavbar/OUR Values/Innovation.jpg";
import integrityImg from "../../../assets/TopNavbar/OUR Values/Integrity.jpg";
import customerImg from "../../../assets/TopNavbar/OUR Values/Commitment.jpg";
import { image } from "framer-motion/client";

/* VALUES DATA */
const values = [
  {
    title: "Quality",
    icon: <FaStar />,
    image: qualityImg,
    description:
      "QUALITY - is the degree of excellence in a product, service, or process, measured by how effectively it satisfies customer and stakeholder needs. High quality is associated with reliability, durability, safety, usability, and efficiency.",
    points: [
      "Enhanced reputation and customer trust",
      "Reduced risks and operational failures",
      "Higher efficiency and profitability",
      "Stronger stakeholder satisfaction",
    ],
  },
  {
    title: "Integrity",
    icon: <FaShieldAlt />,
    image: integrityImg,
    description:
      "INTEGRITY - is the quality of being honest, ethical, and consistent in one’s actions, decisions, and behavior. It means doing the right thing even when no one is watching, keeping commitments, and upholding moral and professional principles. Integrity builds trust, strengthens relationships, and forms the foundation of credibility in both personal and organizational life.",
    points: [
      "Honesty in communication",
      "Transparency in actions",
      "Accountability for decisions",
      "Consistency between words and behavior",
      "Respect for ethical and legal standards",
    ],
  },
  {
    title: "Innovation",
    icon: <FaLightbulb />,
    image: innovationImg,
    description:
      "INNOVATION - is the process of creating new ideas, improving existing solutions, or applying creative thinking to deliver better products, services, or processes. It involves challenging the status quo, experimenting with new approaches, and turning opportunities into practical, value‑adding outcomes. Innovation drives growth, competitiveness, and long‑term sustainability in any organization. ",
    points: [
      "Think creatively and question assumptions",
      "Embrace change and continuous improvement",
      "Use technology and knowledge to solve problems",
      "Convert ideas into real, usable solutions",
      "Stay ahead of customer needs and market trends",
      "Innovation is not limited to big breakthroughs — even small, incremental improvements can create significant impact over time.",
    ],
  },
  {
    title: "Customer Commitment",
    icon: <FaHandshake />,
    image: customerImg,
    description:
      "CUSTOMER COMMITMENT - is the dedication an organization shows to understanding, meeting, and exceeding customer needs. It reflects a long‑term focus on building trust, delivering consistent value, and creating positive experiences at every interaction. Customer‑committed organizations listen actively, respond promptly, and continuously improve their products and services based on customer feedback.  ",
    points: [
      "Reliability — delivering what is promised, every time",
      "Responsiveness — addressing concerns quickly and professionally",
      "Empathy — understanding customer expectations and challenges",
      "Quality focus — ensuring products and services meet high standards",
      "Continuous improvement — using feedback to enhance performance",
      "Strong customer commitment leads to loyalty, repeat business, and long‑term relationships that strengthen the organization’s reputation and competitiveness.",
    ],
  },
];

const MotionCard = motion(Card);

export default function OurValues() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        ref={heroRef}
        sx={{
          height: "65vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image with parallax */}
        <motion.div
          style={{
            y: heroY,
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(2,6,23,0.7),rgba(2,6,23,0.9))",
          }}
        />

        {/* Floating light orbs */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity }}
            style={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: "50%",
              background: "rgba(56,189,248,0.18)",
              filter: "blur(120px)",
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
          />
        ))}

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background: "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%",
              animation: "textShimmer 4s linear infinite",
              mb: 2,
            }}
          >
            Our Values
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#e5e7eb", maxWidth: 720, mx: "auto" }}
          >
            Principles guiding our engineering, manufacturing, and global
            partnerships.
          </Typography>
        </motion.div>
      </Box>

      {/* ================= VALUES ================= */}
      <Box sx={{ bgcolor: "#ffffff", py: 16 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {values.map((item, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ display: "flex" }}>
                <MotionCard
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 30px 70px rgba(2,6,23,0.18), 0 0 40px rgba(0,255,240,0.35)",
                  }}
                  sx={{
                    flex: 1,
                    borderRadius: 4,
                    overflow: "hidden",
                    background: "#ffffff",
                    position: "relative",
                    border: "2px solid transparent",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -2,
                      borderRadius: 4,
                      background:
                        "linear-gradient(270deg,#FF6F61,#00FFF0,#0B3D91)",
                      backgroundSize: "400% 400%",
                      animation: "gradientMove 10s ease infinite",
                      zIndex: -1,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  {/* Content */}
                  <CardContent sx={{ p: 5 }}>
                    {/* Floating icon */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        fontSize: 28,
                        color: "#2563eb",
                        marginBottom: 12,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      gutterBottom
                      sx={{
                        background:
                          "linear-gradient(90deg,#FF6F61,#0B3D91,#00FFF0)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        backgroundSize: "300% 300%",
                        animation: "textShimmer 4s linear infinite",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography sx={{ color: "#334155", lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{ listStyle: "none", pl: 0, mt: 2 }}
                    >
                      {item.points.map((point, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.2,
                            mb: 1,
                            color: "#334155",
                            lineHeight: 1.6,
                          }}
                        >
                          {/* Bullet Icon */}
                          <FaCheckCircle
                            style={{
                              color: "#22c55e",
                              marginTop: 4,
                              flexShrink: 0,
                            }}
                          />

                          {/* Text */}
                          <Typography sx={{ lineHeight: 1.6 }}>
                            {point}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ================= KEYFRAMES ================= */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes textShimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </>
  );
}
