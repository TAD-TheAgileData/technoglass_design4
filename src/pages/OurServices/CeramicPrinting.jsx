import React from "react";
import "./CeramicPrinting.css";
import heroImg from "../../assets/PVBLamination/PVBhero.jpg";
import windshieldImg from "../../assets/PVBLamination/PVBhero.jpg";
import backliteImg from "../../assets/PVBLamination/PVBhero.jpg";
import sideliteImg from "../../assets/PVBLamination/PVBhero.jpg";

const CeramicPrinting = () => {
  return (
    <div className="ceramic-container">
    {/* ===== HERO IMAGE (AFTER INTRO) ===== */}
      <section
        className="hero-image-section"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h2>Advanced Ceramic Printing Technology</h2>
        </div>
      </section>
      {/* ===== INTRO (TEXT ONLY – SAME CONTENT) ===== */}
      <section className="intro-section">
        <h1 className="page-title">Ceramic Printing</h1>
        <p>
          Ceramic printing is a specialized printing process used to apply
          ceramic-based inks onto glass surfaces. These inks contain inorganic
          pigments mixed with glass frit, which allows the design to permanently
          fuse with the glass during high-temperature firing. Ceramic printing
          is widely used in automotive, architectural, and industrial glass
          applications due to its durability, heat resistance, and aesthetic
          appeal.
          <br /><br />
          This technology enables manufacturers to achieve permanent patterns,
          logos, and functional coatings that do not fade, peel, or degrade over
          time. Ceramic printing also plays a crucial role in enhancing safety,
          privacy, and thermal control in glass products.
        </p>
      </section>

  
{/* ===== HERO CONTENT (REWORKED DESIGN – SAME TEXT) ===== */}
<section className="hero-content-section">
  <div className="hero-wrapper">

    {/* IMAGE PANEL */}
    <div className="hero-image-panel">
      <img src={heroImg} alt="Ceramic Printing" />
    </div>

    {/* CONTENT PANEL */}
    <div className="hero-text-panel">
      <div className="text-block">
        <h3>Screen Printing</h3>
        <p>
          Screen printing technology is widely used in ceramic printing to
          apply ceramic inks onto glass surfaces. In this process, ink is
          transferred through a mesh screen that contains the desired design
          pattern. The blocked areas of the screen prevent ink flow, while
          open areas allow ink to pass onto the glass. This method provides
          uniform ink thickness, high precision, and consistent print
          quality. Screen printing is cost-effective and suitable for
          large-scale production.
        </p>
      </div>

      <div className="text-block">
        <h3>Color Accuracy & Opacity Control</h3>
        <p>
          Ceramic printing offers excellent color accuracy due to the use of
          stable inorganic pigments that retain their color even after
          high-temperature firing. Opacity control is achieved by adjusting
          ink formulation, mesh size, and print thickness, allowing
          transparent to fully opaque designs. The technology also provides
          high design flexibility, enabling the creation of complex
          patterns, logos, text, and decorative elements to meet functional
          and aesthetic requirements.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* ===== PROCESS SECTION ===== */}
      <section className="process-section">
        <h2>Frit Types and Firing Process</h2>
        <p>
          Glass frit is a crucial component of ceramic inks that helps bond the
          ink permanently to the glass surface. Different frit types are
          selected based on firing temperature and application needs. During the
          firing process, the printed glass is heated in a furnace at high
          temperatures, causing the frit to melt and fuse the ink with the
          glass. This results in a durable, scratch-resistant, and long-lasting
          printed surface.
        </p>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section className="applications-section">
        <h2>Applications</h2>

        <div className="applications-grid">
          <div className="app-card">
            <img src={windshieldImg} alt="Windshield" />
            <h4>Windshield</h4>
          </div>

          <div className="app-card">
            <img src={backliteImg} alt="Backlite" />
            <h4>Backlite</h4>
          </div>

          <div className="app-card">
            <img src={sideliteImg} alt="Sidelite" />
            <h4>Sidelite</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CeramicPrinting;