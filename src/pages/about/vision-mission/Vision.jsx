import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BackgroundAnimation from "./BackgroundAnimation";

/* HERO IMAGE */
import heroImg from "../../../assets/About_us/Visionmissionhero/Hero1.jpg";

/* ================= ANIMATIONS ================= */
const cardEntrance = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */
const Vision = () => {
  const particlesInit = async (main) => await loadFull(main);

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          height: "75vh",
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Particles
          init={particlesInit}
          options={{
            particles: {
              number: { value: 50 },
              size: { value: { min: 1, max: 4 } },
              opacity: { value: 0.3 },
              links: { enable: true, opacity: 0.2 },
            },
          }}
          style={{ position: "absolute", inset: 0 }}
        />

        <Box sx={{ zIndex: 2 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              background: "linear-gradient(90deg,#FF6F61,#00FFF0,#0B3D91)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Vision · Mission · Purpose
          </Typography>
        </Box>

        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.55)" }} />
      </Box>

      {/* ================= PURPOSE ================= */}
      <Box sx={{ py: 14, bgcolor: "#f8fafc", position: "relative" }}>
        <BackgroundAnimation />
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
                <Paper sx={{ p: 5, borderRadius: 4 }}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Purpose
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>Supporting Mobility & Home for a Better Life.</strong>
                    <br /><br />

                    Our diverse and multi-lingual <strong>Sales Teams travel the globe constantly</strong>,
                    strengthening customer relationships and keeping us ahead of international trends.
                    <br /><br />

                    <strong>A key to our success is our extensive knowledge of:</strong>
                    <ul>
                      <li>Glass processing</li>
                      <li>World trade</li>
                      <li>Cultures</li>
                      <li>Business customs</li>
                    </ul>

                    By working in collaboration with our business partners, we ensure that our
                    <strong> quality products and services meet or exceed customer expectations.</strong>
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div style={{ y: parallaxY }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= VISION ================= */}
      <Box sx={{ py: 14, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
                <Paper sx={{ p: 5, borderRadius: 4 }}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Vision
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>“Make every glass to deliver a great experience”</strong>
                    <br /><br />

                    Technical Glass Co. success is based on <strong>commitment, dedication, integrity,
                    hard work, and the vision of its founders and employees.</strong>
                    <br /><br />

                    <strong>Leadership:</strong>
                    <br />
                    Mr. Hashim Al Sheikh
                    <br />
                    Eng. Mousa Al-Gedaily
                    <br /><br />

                    As a trusted automotive partner, we create innovative glazing solutions that enhance:
                    <ul>
                      <li>Visibility</li>
                      <li>Safety</li>
                      <li>Sustainability</li>
                    </ul>
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= MISSION ================= */}
      <Box sx={{ py: 14, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" direction="row-reverse">
            <Grid item xs={12} md={6}>
              <motion.div variants={cardEntrance} initial="hidden" whileInView="visible">
                <Paper sx={{ p: 5, borderRadius: 4 }}>
                  <Typography variant="h4" fontWeight={700} color="#176179">
                    Our Mission
                  </Typography>

                  <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
                    <strong>
                      “To build a Customer Centric organization for achieving sustainable leadership
                      position & profitable growth”
                    </strong>
                    <br /><br />

                    Technical Glass Company Ltd. <strong>(Techno Glass)</strong> was established in 1993,
                    specializing in auto glass manufacturing and technically supported by TAMGLASS, Finland.
                    <br /><br />

                    <strong>Certifications & Standards:</strong>
                    <ul>
                      <li>American & Canadian Standard AS-1 (DOT 531)</li>
                      <li>European ECE Regulation R-43 (43R-00154 & 43R-00155)</li>
                      <li>South Africa SABS 1191:1978</li>
                      <li>SAUDI MADE</li>
                      <li>ISO 9001, ISO 14001, ISO 45001</li>
                      <li>D-U-N-S (Data Universal Numbering System)</li>
                    </ul>
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vision;