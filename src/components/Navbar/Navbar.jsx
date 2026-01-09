import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/glasslogo.png";
import { useEffect, useRef } from "react";

/* ================= MENU DATA ================= */

const menuData = [
  {
    title: "About Us",
    links: [
      { label: "Company Overview", path: "/about/company-overview" },
      {
        label: "Vision, Mission & Values",
        path: "/about/vision_mission",
      },
      { label: "Leadership Message", path: "/about/leadership" },
      {label:" code of ethics" , path: "/about/codeofethics" },
      {label:"Startegic Drivers" , path:"/about/StartegicDrivers"},
      {label:"Value and Proposition" , path:"/about/valueproposition"},
      { label: "Sustainability & ESG", path: "/about/sustainability" },
      { label: "Corporate Milestones", path: "/about/milestones" },
    ],
  },
  {
    title: "Manufacturing Capabilities",
    links: [
      {
        label: "Laminated Glass Manufacturing",
        path: "/services/laminated-glass",
        children: [
          {
            label: "PVB Lamination",
            path: "/services/laminated-glass/pvb-lamination",
          },
          {
            label: "Autoclave Capacity",
            path: "/services/laminated-glass/autoclave-capacity",
          },
          {
            label: "Optical Quality Control",
            path: "/services/laminated-glass/optical-quality-control",
          },
        ],
      },
      {
        label: "Tempered Glass Manufacturing",
        path: "/services/tempered-glass",
        children: [
          {
            label: "Advanced tempering furnaces",
            path: "/services/tempered-glass/furnaces",
          },
          {
            label: "Bending capabilities",
            path: "/services/tempered-glass/bending",
          },
          {
            label: "Fragmentation standards",
            path: "/services/tempered-glass/fragmentation",
          },
        ],
      },
      { label: "Ceramic Printing", path: "/services/ceramic-printing" },
      { label: "CNC Shaping", path: "/services/cnc-shaping" },
      { label: "Coating Technologies", path: "/services/coating-technologies" },
      { label: "Edge Finishing", path: "/services/edge-finishing" },
      { label: "Technical Resources", path: "/services/technical-resources" },
    ],
  },

  {
    title: "Industries",
    links: [
      { label: "Passenger Vehicles", path: "/industries/passenger_vehicles" },
      { label: "Commercial Vehicles", path: "/industries/commercial_vehicles" },
      {
        label: "Off-Highway Equipment",
        path: "/industries/off_highway_equipment",
      },
      { label: "Rail & Metro", path: "/industries/rail_metro" },
      {
        label: "Specialty Applications",
        path: "/industries/sepeciality_application",
      },
    ],
  },
  {
    title: "Product Portfolio",
    links: [
      {
        label: "Windshields (Laminated)",
        path: "/products/windshields-laminated",
      },
      { label: "Backlites (Tempered)", path: "/products/backlites-tempered" },
      { label: "Sidelites", path: "/products/sidelites" },
      { label: "Sunroofs", path: "/products/sunroofs" },
      { label: "Quarter Glasses", path: "/products/quarter-glasses" },
      { label: "Specialty Glass", path: "/products/specialty-glass" },
      {
        label: "High-Performance Glass",
        path: "/products/high-performance-glass",
      },
    ],
  },
  {
    title: "Trust",
    links: [
      {
        label: "Certifications & Compliance",
        path: "/trust/certifications-compliance",
      },
      { label: "Quality Assurance", path: "/trust/quality-assurance" },
      {
        label: "Environmental Compliance",
        path: "/trust/environmental-compliance",
      },
      { label: "Partnerships & Clients", path: "/trust/partnerships-clients" },
      { label: "Media & Gallery", path: "/trust/media-gallery" },
      { label: "Case Studies", path: "/trust/case-studies" },
    ],
  },
  {
    title: "News",
    links: [
      { label: "Press Releases", path: "/news/press" },
      { label: "Events", path: "/news/events" },
    ],
  },
  {
    title: "Contacts",
    links: [
      { label: "Contact Form", path: "/contact" },
      { label: "Locations", path: "/contact/locations" },
    ],
  },
];

export default function Navbar() {
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [desktopSubOpen, setDesktopSubOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null);
  const [lang, setLang] = useState("EN");
  const [topBarOpen, setTopBarOpen] = useState(null);

  const topBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (topBarRef.current && !topBarRef.current.contains(e.target)) {
        setTopBarOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const closeAllDropdowns = () => {
    setDesktopOpen(null);
    setDesktopSubOpen(null);
    setMobileDropdown(null);
    setMobileSubDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      {/* ================= TOP BAR ================= */}
      <aside
        className="top-bar"
        ref={topBarRef}
        aria-label="Company highlights"
      >
        {/* OUR VALUES */}
        <div className="top-item">
          <div className="top-link">
            <Link to="/OurValues">Our Values</Link>

            <button
              className="chevron-btn"
              onClick={(e) => {
                e.stopPropagation(); // 🔑 IMPORTANT
                setTopBarOpen(topBarOpen === "values" ? null : "values");
              }}
            >
              <FaChevronDown />
            </button>
          </div>

          {topBarOpen === "values" && (
            <div className="top-dropdown">
              <Link to="/OurValues" onClick={() => setTopBarOpen(null)}>
                Quality
              </Link>
              <Link to="/OurValues" onClick={() => setTopBarOpen(null)}>
                Integrity
              </Link>
              <Link to="/OurValues" onClick={() => setTopBarOpen(null)}>
                Innovation
              </Link>
              <Link to="/OurValues" onClick={() => setTopBarOpen(null)}>
                Customer Commitment
              </Link>
            </div>
          )}
        </div>

        {/* GLOBAL REACH */}
        <div className="top-item">
          <div className="top-link">
            <Link to="/GlobalReach">Global Reach</Link>
            <button
              className="chevron-btn"
              onClick={() =>
                setTopBarOpen(topBarOpen === "global" ? null : "global")
              }
            >
              <FaChevronDown />
            </button>
          </div>
          {topBarOpen === "global" && (
            <div className="top-dropdown">
              <Link to="/GlobalReach" onClick={() => setTopBarOpen(null)}>
                OEM Engineering Alignment
              </Link>
              <Link to="/GlobalReach" onClick={() => setTopBarOpen(null)}>
                Global Certification
              </Link>
              <Link to="/GlobalReach" onClick={() => setTopBarOpen(null)}>
                Advanced Manufacturing
              </Link>
              <Link to="/GlobalReach" onClick={() => setTopBarOpen(null)}>
                Export & Logistics
              </Link>
            </div>
          )}
        </div>

        {/* MANUFACTURING EXCELLENCE */}
        <div className="top-item">
          <div className="top-link">
            <Link to="/ManufacturingExcellence">Manufacturing Excellence</Link>
            <button
              className="chevron-btn"
              onClick={() =>
                setTopBarOpen(
                  topBarOpen === "manufacturing" ? null : "manufacturing"
                )
              }
            >
              <FaChevronDown />
            </button>
          </div>
          {topBarOpen === "manufacturing" && (
            <div className="top-dropdown">
              <Link
                to="/ManufacturingExcellence"
                onClick={() => setTopBarOpen(null)}
              >
                Advanced Manufacturing Infrastructure
              </Link>

              <Link
                to="/ManufacturingExcellence"
                onClick={() => setTopBarOpen(null)}
              >
                Precision Engineering & Process Control
              </Link>

              <Link
                to="/ManufacturingExcellence"
                onClick={() => setTopBarOpen(null)}
              >
                Safety, Clarity & Long-Term Durability
              </Link>

              <Link
                to="/ManufacturingExcellence"
                onClick={() => setTopBarOpen(null)}
              >
                Technology-Driven Continuous Improvement
              </Link>

              <Link
                to="/ManufacturingExcellence"
                onClick={() => setTopBarOpen(null)}
              >
                Quality Embedded at Every Stage
              </Link>
            </div>
          )}
        </div>

        {/* WHY CHOOSE US */}
        <div className="top-item">
          <div className="top-link">
            <Link to="/WhyChooseUs">Why Choose Us</Link>
            <button
              className="chevron-btn"
              onClick={() => setTopBarOpen(topBarOpen === "why" ? null : "why")}
            >
              <FaChevronDown />
            </button>
          </div>
          {topBarOpen === "why" && (
            <div className="top-dropdown">
              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                IATF 16949 Quality Management System
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                ISO 9001 Quality Management System
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                ISO 14001 Environment Management System
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                ISO 45001 Occupational Health & Safety
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                ECE R-43 Standard
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                COP Certification
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                Morocco Standard
              </Link>

              <Link to="/WhyChooseUs" onClick={() => setTopBarOpen(null)}>
                Global Tier-1 Partnership for Strategic Materials
              </Link>
            </div>
          )}
        </div>
      </aside>

      {/* ================= HEADER / NAVBAR ================= */}
      <header className="navbar">
        <h1 className="logo">
          <Link to="/" aria-label="Technoglass Home">
            <img src={logo} alt="Technoglass Logo" />
          </Link>
        </h1>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="nav-links" aria-label="Primary Navigation">
          <ul>
            {menuData.map((item) => (
              <li key={item.title} className="nav-item">
                <button
                  type="button"
                  onClick={() =>
                    setDesktopOpen(
                      desktopOpen === item.title ? null : item.title
                    )
                  }
                  aria-expanded={desktopOpen === item.title}
                >
                  <span>{item.title}</span>
                  <FaChevronDown className="arrow" />
                </button>

                {desktopOpen === item.title && (
                  <ul className="dropdown">
                    {item.links.map((link) => (
                      <li key={link.label} className="dropdown-item">
                        <div className="dropdown-row">
                          <Link
                            to={link.path}
                            className="dropdown-link"
                            onClick={closeAllDropdowns} // ✅ close on click
                          >
                            {link.label}
                          </Link>

                          {link.children && (
                            <button
                              className="sub-toggle"
                              onClick={() =>
                                setDesktopSubOpen(
                                  desktopSubOpen === link.label
                                    ? null
                                    : link.label
                                )
                              }
                              aria-expanded={desktopSubOpen === link.label}
                            >
                              <FaChevronDown
                                className={
                                  desktopSubOpen === link.label ? "rotate" : ""
                                }
                              />
                            </button>
                          )}
                        </div>

                        {link.children && desktopSubOpen === link.label && (
                          <ul className="sub-dropdown">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.path}
                                  onClick={closeAllDropdowns}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="nav-actions">
          <div className="lang-desktop" aria-label="Language switcher">
            <button
              className={lang === "EN" ? "active" : ""}
              onClick={() => setLang("EN")}
            >
              EN
            </button>
            |
            <button
              className={lang === "AR" ? "active" : ""}
              onClick={() => setLang("AR")}
            >
              AR
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ================= MOBILE NAVIGATION ================= */}
      <nav
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-header">
          <img src={logo} alt="Technoglass Logo" />
          <button onClick={closeAllDropdowns} aria-label="Close menu">
            <FaXmark />
          </button>
        </div>

        <div className="mobile-lang">
          <button
            className={lang === "EN" ? "active" : ""}
            onClick={() => setLang("EN")}
          >
            EN
          </button>
          |
          <button
            className={lang === "AR" ? "active" : ""}
            onClick={() => setLang("AR")}
          >
            AR
          </button>
        </div>

        <ul>
          {menuData.map((item) => (
            <li key={item.title} className="mobile-item">
              <button
                className="mobile-title"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === item.title ? null : item.title
                  )
                }
              >
                {item.title}
                <FaChevronDown
                  className={mobileDropdown === item.title ? "rotate" : ""}
                />
              </button>

              {mobileDropdown === item.title && (
                <ul className="mobile-dropdown">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      {!link.children ? (
                        <Link
                          to={link.path}
                          onClick={closeAllDropdowns}
                          className="mobile-sub-title"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <>
                          <button
                            className="mobile-sub-title"
                            onClick={() =>
                              setMobileSubDropdown(
                                mobileSubDropdown === link.label
                                  ? null
                                  : link.label
                              )
                            }
                          >
                            {link.label} <FaChevronDown />
                          </button>

                          {link.children &&
                            mobileSubDropdown === link.label && (
                              <ul className="mobile-sub-dropdown">
                                {link.children.map((child) => (
                                  <li key={child.label}>
                                    <Link
                                      to={child.path}
                                      onClick={closeAllDropdowns}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
