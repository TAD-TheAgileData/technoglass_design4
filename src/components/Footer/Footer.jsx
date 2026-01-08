import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo1 from "../../assets/icon/Vision2030.png";
import logo2 from "../../assets/icon/saudimadelogo3.webp";
const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <section className="footer-main">
        {/* BRAND */}
        <article className="footer-brand">
          <h3 className="footer-brand-text">TechnoGlass</h3>
          <p>
            Technoglass delivers innovative architectural glass and automotive
            solutions focused on quality, sustainability, and global excellence.
          </p>
        </article>

        {/* CONTACT */}
        <address className="footer-contact">
          <h4>Contact</h4>

          <p>
            <a
              href="https://www.google.com/maps/place/Techno+Glass/@21.421903,39.2367531,17z/data=!4m7!3m6!1s0x15c3cbdfa9a53019:0x6db0bf035532e934!4b1!8m2!3d21.4217433!4d39.2392959!16s%2Fg%2F11b6c57bwn?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              <FaMapMarkerAlt />
              <span>
                Saudi Arabia – Jeddah
                <br />
                Industry Area Phase 5 – St. 74
              </span>
            </a>
          </p>

          <p>
            <FaPhoneAlt />
            <span>+966 12 637 99 09</span>
          </p>

          <p>
            <FaPhoneAlt />
            <span>+966 12 637 20 41</span>
          </p>

          <p>
            <FaEnvelope />
            <a href="mailto:info@technoglass.com.sa">info@technoglass.com.sa</a>
          </p>

          <p>
            <FaGlobe />
            <a
              href="https://www.technoglass.com.sa"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.technoglass.com.sa
            </a>
          </p>
        </address>

        {/* QUICK LINKS */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/products">Product Portfolio</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/trust">Trust</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* SOCIAL */}
        <section className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </section>
      </section>
      {/* FOOTER BOTTOM */}
      <section className="footer-bottom">
        <p>© {new Date().getFullYear()} Technoglass. All rights reserved.</p>

        <div className="footer-bottom-logos">
          {/* 1st: Saudi Made */}
          <img
            src={logo2}
            alt="Saudi Made Logo"
            className="footer-bottom-logo"
          />

          {/* 2nd: Vision 2030 */}
          <img
            src={logo1}
            alt="Vision 2030 Logo"
            className="footer-bottom-logo"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
