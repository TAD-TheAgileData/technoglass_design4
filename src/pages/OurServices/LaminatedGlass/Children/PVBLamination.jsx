import React from "react";
import "./PVBLamination.css";
import heroimg from "../../../../assets/PVBLamination/PVBhero.jpg";
import { Link } from "react-router-dom";
import normalImg from "../../../../assets/PVBLamination/Windshield.png";
// import acousticImg from "../../../../assets/PVBLamination/acoustic-pvb.jpg";

const PVBLamination = () => {
  return (
    <main>
      {/* ================= HERO ================= */}
      <header className="PVBhero">
        <img
          src={heroimg}
          alt="PVB Lamination process"
          className="PVBheaderimg"
        />

        <div className="PVBhero-content">
          <h1 className="PVBheaderhead">PVB Lamination</h1>
          <p>Advanced laminated glass solutions for automotive safety</p>
        </div>
      </header>

      {/* ================= OVERVIEW ================= */}
      <section className="PVBdescription">
        <div className="PVBdescription-container">
          <h2>PVB Lamination Overview</h2>

          <p>
            Polyvinyl Butyral (PVB) lamination is a critical process in
            automotive safety glass manufacturing, designed to enhance occupant
            protection, acoustic comfort, and structural integrity. Our PVB
            lamination capabilities are engineered to meet global automotive
            standards while delivering superior optical clarity and durability.
          </p>

          {/* ================= TYPES ================= */}

          <section className="pvb-types">
            <h3>PVB Lamination Types</h3>

            <ul className="PVBgrid two">
              {/* Normal PVB */}
              <li
                className="PVBimage-card normal-pvb"
                style={{ backgroundImage: `url(${normalImg})` }}
              >
                <Link to="/pvb/normal" className="PVBimage-link">
                  <div className="PVBimage-overlay">
                    <h4>Normal PVB</h4>
                    <p>Standard laminated glass solution...</p>
                  </div>
                </Link>
              </li>

              <li
                className="PVBimage-card acoustic-pvb"
                style={{ backgroundImage: `url(${heroimg})` }}
              >
                <Link to="/pvb/acoustic" className="PVBimage-link">
                  <div className="PVBimage-overlay">
                    <h4>Acoustic PVB</h4>
                    <p>Noise-reducing laminated glass...</p>
                  </div>
                </Link>
              </li>
            </ul>
          </section>

          {/* ================= APPLICATIONS ================= */}
          <section className="pvb-applications">
            <h3 id="pvb-applications">PVB Applications</h3>

            <ul className="PVBgrid three">
              <li className="PVBimage-card car">
                <h4>Car Windshields</h4>
              </li>

              <li className="PVBimage-card truck">
                <h4>Truck Windshields</h4>
              </li>

              <li className="PVBimage-card bus">
                <h4>Bus Windshields</h4>
              </li>
            </ul>
          </section>

          {/* ================= CAPABILITIES ================= */}
          <section className="PVBcapabilities">
            <h3 id="pvb-capabilities">Capabilities</h3>

            <ul>
              <li>Thickness range: 2.1 mm – 4.0 mm</li>
              <li>Multi-layer lamination</li>
              <li>Large-format glass support</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default PVBLamination;
