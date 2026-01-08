import React from "react";
import { motion } from "framer-motion";

/* ====== IMAGES ====== */
import heroImg from "../../../assets/About_us/LeaderShip/leadership.jpg";
import chairmanImg from "../../../assets/About_us/LeaderShip/White.jpg";
import mdImg from "../../../assets/About_us/LeaderShip/White.jpg";
import gmImg from "../../../assets/About_us/LeaderShip/White.jpg";
import headEngImg from "../../../assets/About_us/LeaderShip/White.jpg";
import engLeadImg from "../../../assets/About_us/LeaderShip/White.jpg";
import rndImg from "../../../assets/About_us/LeaderShip/White.jpg";

/* ====== COLORS ====== */
const COLORS = {
  white: "#FFFFFF",
  frost: "#6B7280",
  ice: "#E5E7EB",
  primary: "#176179",
  navy: "#0F172A",
  steel: "#CBD5E1",
};

/* ====== ANIMATION VARIANTS ====== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 40px 90px rgba(0,0,0,0.15)",
    transition: { duration: 0.35 },
  },
};

/* ====== COMPONENT ====== */
export default function LeadershipMessage() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={pageBg()}>
      {/* ===== HERO ===== */}
      <div style={heroSection(heroImg)}>
        <div style={heroOverlay()}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={heroTitle(isMobile)}
          >
            Leadership Message
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={heroSubtitle(isMobile)}
          >
            Vision • Integrity • Commitment to Excellence
          </motion.p>
        </div>
      </div>

      <div style={container(isMobile)}>
        {/* ===== CHAIRMAN ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={leaderCard(isMobile)}
          {...hoverLift}
        >
          <motion.img
            src={chairmanImg}
            alt="Chairman"
            style={leaderImg(isMobile)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div style={leaderContent(isMobile)}>
            <h2 style={leaderName(isMobile)}>Mr. Hashim Al Sheikh</h2>
            <span style={leaderRole()}>Chairman</span>

            <p style={text()}>
              <strong>Leadership</strong> begins with vision and responsibility.
              At <strong>Technoglass</strong>, our journey has always been guided
              by integrity, trust, and long-term partnerships.
            </p>

            <p style={text()}>
              We believe sustainable growth is achieved through ethical
              leadership, continuous innovation, and an unwavering commitment
              to quality.
            </p>
          </div>
        </motion.div>

        {/* ===== MANAGING DIRECTOR ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            ...leaderCard(isMobile),
            flexDirection: isMobile ? "column" : "row-reverse",
          }}
          {...hoverLift}
        >
          <motion.img
            src={mdImg}
            alt="Managing Director"
            style={leaderImg(isMobile)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <div style={leaderContent(isMobile)}>
            <h2 style={leaderName(isMobile)}>Mr. Mousa El Gedaily</h2>
            <span style={leaderRole()}>Managing Director</span>

            <p style={text()}>
              Our focus remains on operational excellence, technological
              advancement, and customer-centric solutions. By empowering our
              teams and investing in innovation, we continue to deliver
              world-class glass solutions.
            </p>
          </div>
        </motion.div>

        {/* ===== MANAGEMENT TEAM ===== */}
        <motion.div variants={stagger} initial="hidden" whileInView="show">
          <h2 style={sectionTitle(isMobile)}>
            Management & Engineering Leadership
          </h2>
          <p style={sectionSubtitle()}>
            Driving precision, innovation, and operational strength.
          </p>

          <div style={teamGrid()}>
            <TeamCard
              img={gmImg}
              name="General Manager"
              role="General Manager"
              desc="Responsible for overall business operations, strategic execution, and organizational performance."
            />
            <TeamCard
              img={headEngImg}
              name="Head of Engineering"
              role="Head of Engineering"
              desc="Leads engineering governance, manufacturing systems, and technical compliance."
            />
            <TeamCard
              img={rndImg}
              name="Head of R&D"
              role="Research & Development"
              desc="Drives innovation, advanced material research, and next-generation glass solutions."
            />
            <TeamCard
              img={engLeadImg}
              name="Engineering Lead"
              role="Engineering Lead"
              desc="Manages complex engineering projects, design validation, and execution excellence."
            />
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}

/* ====== TEAM CARD ====== */
const TeamCard = ({ img, name, role, desc }) => (
  <motion.div variants={fadeUp} style={teamCard()} whileHover={{ y: -10 }}>
    <motion.img src={img} alt={name} style={teamImg()} />
    <div style={teamContent()}>
      <h3 style={teamName()}>{name}</h3>
      <span style={teamRole()}>{role}</span>
      <p style={teamDesc()}>{desc}</p>
    </div>
  </motion.div>
);

/* ====== STYLES ====== */
const pageBg = () => ({ background: COLORS.white });

const container = (isMobile) => ({
  maxWidth: 1100,
  margin: "auto",
  padding: isMobile ? "48px 16px" : "80px 16px",
});

const heroSection = (img) => ({
  height: 360,
  background: `url(${img}) center/cover no-repeat`,
});

const heroOverlay = () => ({
  height: "100%",
  background: "rgba(15,23,42,0.6)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const heroTitle = (isMobile) => ({
  color: COLORS.white,
  fontSize: isMobile ? "1.9rem" : "3rem",
  fontWeight: 800,
});

const heroSubtitle = (isMobile) => ({
  color: COLORS.ice,
  fontSize: isMobile ? "0.95rem" : "1rem",
  marginTop: 10,
  padding: isMobile ? "0 14px" : 0,
});

const leaderCard = (isMobile) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: isMobile ? "center" : "flex-start",
  gap: isMobile ? 22 : 40,
  padding: isMobile ? 22 : 42,
  marginBottom: isMobile ? 40 : 60,
  borderRadius: 26,
  background: "#fff",
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
  textAlign: isMobile ? "center" : "left",
});

const leaderImg = (isMobile) => ({
  width: isMobile ? "100%" : 220,
  maxWidth: isMobile ? 260 : "none",
  height: isMobile ? 300 : 260,
  borderRadius: 18,
  objectFit: "cover",
});

const leaderContent = (isMobile) => ({ flex: 1 });
const leaderName = (isMobile) => ({
  fontSize: isMobile ? "1.3rem" : "1.6rem",
  fontWeight: 700,
  color: COLORS.navy,
});
const leaderRole = () => ({ color: COLORS.primary, fontWeight: 600 });
const text = () => ({ color: COLORS.frost, lineHeight: 1.75, fontSize: "0.95rem" });

const sectionTitle = (isMobile) => ({
  fontSize: isMobile ? "1.6rem" : "2rem",
  fontWeight: 800,
  textAlign: "center",
  marginBottom: 12,
});

const sectionSubtitle = () => ({
  textAlign: "center",
  color: COLORS.frost,
  marginBottom: 40,
});

const teamGrid = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 26,
});

const teamCard = () => ({
  background: "#fff",
  borderRadius: 24,
  overflow: "hidden",
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 20px 55px rgba(0,0,0,0.1)",
});

const teamImg = () => ({ width: "100%", height: 240, objectFit: "cover" });
const teamContent = () => ({ padding: 26 });
const teamName = () => ({ fontWeight: 700, color: COLORS.navy });
const teamRole = () => ({ color: COLORS.primary, fontWeight: 600 });
const teamDesc = () => ({ color: COLORS.frost, lineHeight: 1.6 });

const messageGrid = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 28,
  marginTop: 60,
});

const messageCard = () => ({
  padding: 32,
  borderRadius: 22,
  border: `1px solid ${COLORS.steel}`,
  boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
});

const messageTitle = () => ({ fontWeight: 700, color: COLORS.navy });
const messageText = () => ({ color: COLORS.frost, lineHeight: 1.7 });
