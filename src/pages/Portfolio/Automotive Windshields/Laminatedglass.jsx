
import React from "react";
import "./Laminatedglass.css";

import heroImg from "../../../assets/PVBLamination/PVBhero.jpg";
import laminatedImg from "../../../assets/PVBLamination/PVBhero.jpg";
import tintImg from "../../../assets/PVBLamination/PVBhero.jpg";
import acousticImg from "../../../assets/PVBLamination/PVBhero.jpg";
import adasImg from "../../../assets/PVBLamination/PVBhero.jpg";
import heatingImg from "../../../assets/PVBLamination/PVBhero.jpg";
import uvImg from "../../../assets/PVBLamination/PVBhero.jpg";

const Laminatedglass = () => {
  return (
    <main className="windshield">

      {/* HERO */}
      <section className="hero">
        <img src={heroImg} alt="Automotive Windshields" />
        <div className="hero-overlay">
          <h1>Automotive Windshields</h1>
          <p>Safety • Comfort • Advanced Technology</p>
        </div>
      </section>

      {/* LAMINATED SAFETY GLASS */}
      <section className="split">
        <img src={laminatedImg} alt="Laminated safety glass" />
        <div className="content">
          <h2>Laminated Safety Glass</h2>
          <p>
            Our automotive windshields are manufactured using laminated safety
            glass technology, designed to remain intact during impact. This
            construction enhances passenger safety while maintaining structural
            stability of the vehicle.
          </p>
        </div>
      </section>

      {/* TINT & SOLAR CONTROL */}
      <section className="full-image">
        <img src={tintImg} alt="Solar control windshield options" />
        <div className="overlay">
          <h2>Glass Variants & Solar Control</h2>
          <p>
            Available in clear, green, and blue-tinted options, including
            solar-control glass to reduce glare and heat penetration while
            improving cabin comfort.
          </p>
        </div>
      </section>

      {/* ACOUSTIC PVB */}
      <section className="split reverse">
        <img src={acousticImg} alt="Acoustic PVB windshield" />
        <div className="content">
          <h2>Acoustic PVB</h2>
          <p>
            Integrated acoustic PVB interlayers help reduce external noise,
            delivering a quieter and more comfortable driving experience,
            especially for premium and modern vehicles.
          </p>
        </div>
      </section>

      {/* ADAS READY */}
      <section className="split">
        <img src={adasImg} alt="ADAS ready windshield" />
        <div className="content">
          <h2>ADAS-Ready Zones</h2>
          <p>
            Designed with precise ADAS-ready zones, our windshields support
            camera brackets and sensor cutouts required for advanced
            driver-assistance systems, ensuring accurate sensor performance.
          </p>
        </div>
      </section>

      {/* HEATING ELEMENTS */}
      <section className="full-image">
        <img src={heatingImg} alt="Heated windshield technology" />
        <div className="overlay">
          <h2>Integrated Heating Elements</h2>
          <p>
            Windshields are compatible with defogger systems, AG3 glass, and FCC
            connectors, improving visibility and safety in cold or humid driving
            conditions.
          </p>
        </div>
      </section>

      {/* UV & OPTICAL CLARITY */}
      <section className="split reverse">
        <img src={uvImg} alt="UV protection and optical clarity" />
        <div className="content">
          <h2>UV Protection & Optical Clarity</h2>
          <p>
            Engineered to block harmful UV radiation, our windshields protect
            vehicle interiors while delivering superior optical clarity that
            meets strict automotive quality standards.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="applications">
        <h2>Applications</h2>
        <p>
          Passenger Vehicles • Commercial Vehicles • Premium & ADAS-Enabled
          Vehicles • Off-Highway Equipment
        </p>
        {/* <ul> */}
          {/* <li>Passenger Vehicles</li> */}
          {/* <li>Commercial Vehicles</li> */}
          {/* <li>Premium & ADAS-Enabled Vehicles </li> */}
        {/* </ul> */}
      </section>

    </main>
  );
};


export default Laminatedglass