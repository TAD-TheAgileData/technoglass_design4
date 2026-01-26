import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";

//Top Navbar
import Global_Reach from "./components/TopNavbar/Global Reach/Global_Reach.jsx";
import Manufacturing_Excellence from "./components/TopNavbar/ManufacturingExcellence/Manufacturing_Excellence.jsx";
import Our_Values from "./components/TopNavbar/Our Values/Our_Values.jsx";
import Why_choose_us from "./components/TopNavbar/Why Choose Us/Why_choose_us.jsx";

//Aboutus
import Home from "./pages/Home/Home.jsx";
import About from "./pages/about/About_US/About_US.jsx";
import CompanyOverview from "./pages/about/CompanyOverview/CompanyOverview.jsx";
import Vision_mission from "./pages/about/vision-mission/Vision.jsx";
import Leadership from "./pages/about/leadership/Leadership.jsx";

import Sustainability from "./pages/about/Sustainability/Sustainability.jsx";
import Milestones from "./pages/about/Milestone/Milestones.jsx";

//Industries
import Industries from "./pages/Industries/IndustryDetail/IndustriesServed.jsx";
import AutomotiveIndustry from "./pages/Industries/Automotive Industry/Automotive_Industry.jsx";
import Rail_metro from "./pages/Industries/rail_metro/Rail_metro.jsx";

//PortFolio
import Backlites from "./pages/Portfolio/Temperedglass/Backlites.jsx";
import Laminated from "./pages/Portfolio/Automotive Windshields/Laminatedglass.jsx";
import Automotive_Applications_Gallery from "./pages/Portfolio/Automotive Applications Gallery/Automotive_Applications_Gallery.jsx";
import QuarterGlass from "./pages/Portfolio/QuarterGlass/QuarterGlass.jsx";
import Sidelites from "./pages/Portfolio/Sidelites/Sidelites.jsx";
import SpecialityAutomotiveGlass from "./pages/Portfolio/Speciality Automotive Glass/Speciality_Automotive_Glass.jsx";
// Childeren
import Commercial_Vehicles from "./pages/Portfolio/Speciality Automotive Glass/Commercial_vehicles glass/Commercial_Vehicles.jsx";
import Off_highway_Equipment from "./pages/Portfolio/Speciality Automotive Glass/Off_highway Equipment/Off_highway_Equipment.jsx";
import BusandCoach from "./pages/Portfolio/Speciality Automotive Glass/Bus_Coach_glass/Passenger_vehicles.jsx";
import Defense_Armored_Vehicles from "./pages/Portfolio/Speciality Automotive Glass/Defense Armored Vehicles/Sepeciality_Application.jsx";
//
import Sunroofs from "./pages/Portfolio/Sunroofs/Sunroofs.jsx";
import ValueAddedFeatures from "./pages/Portfolio/ValueAddedFeatures/ValueAddedFeatures.jsx";
//OurServices
import LaminatedGlassManufacturing from "./pages/OurServices/LaminatedGlass/LaminatedGlassManufacturing.jsx";
import Autoclave from "./pages/OurServices/LaminatedGlass/Children/AutoClaveCapacity.jsx";
import OpticalQualityControl from "./pages/OurServices/LaminatedGlass/Children/OpticalQualityControl.jsx";
import PVBLamination from "./pages/OurServices/LaminatedGlass/Children/PVBLamination.jsx";

import TemperedglassManufacturing from "./pages/OurServices/TemperedGlass/TemperedglassManufacturing.jsx";
import AdvancedTemperingfurnaces from "./pages/OurServices/TemperedGlass/Children/AdvancedTemperingfurnaces.jsx";
import BendingCapabilities from "./pages/OurServices/TemperedGlass/Children/BendingCapabilities.jsx";
import FragmentationStandards from "./pages/OurServices/TemperedGlass/Children/FragmentationStandards.jsx";

import AutomationDigital from "./pages/OurServices/AutomationDigitalManufacturing.jsx";
import CeramicPrinting from "./pages/OurServices/CeramicPrinting.jsx";
import CNCShaping from "./pages/OurServices/CNCShaping.jsx";
import CoatingTechnoglass from "./pages/OurServices/CoatingTechnologies.jsx";
import Edge_Finishing from "./pages/OurServices/Edge_Finishing.jsx";
import TechnicalResources from "./pages/OurServices/TechnicalResources.jsx";
import QualityAssurance from "./pages/OurServices/QualityAssurance/QualityAssurance.jsx";
import Enviromental from "./pages/OurServices/EnivornmentalCompliance/EnvironmentalCompliance.jsx";

//Trust

import QualityCommitment from "./pages/Trust/Our Commitment to Quality/QualityCommitment.jsx";
import Certifications_Compilance from "./pages/Trust/Certifications Globally Compliant/Certifications_Compilance.jsx";

import ProvenManufacturingExcellence from "./pages/Trust/Proven Manufacturing Excellence/ProvenManufacturingExcellence.jsx";
import Customer_First_Approach from "./pages/Trust/Customer_First_Approach/Customer_First_Approach.jsx";

import DeliveryReliability_LogisticsExcellence from "./pages/Trust/DeliveryReliability&SupplyChainExcellence/DeliveryReliability_LogisticsExcellence.jsx";
import Safety from "./pages/Trust/Safety as a Core Value/SafetyCoreValueMaterial.jsx";
import Ethics_Integrity from "./pages/Trust/Ethics_Integrity/EthicsIntegrity.jsx";
import Sustainability_Responsibility from "./pages/Trust/Sustainability_Responsibility/Sustainability_Responsibility.jsx";

import Trusted_industries from "./pages/Trust/Trusted_by_Leading_Brands/Trusted_Partners.jsx";
import Continuous_Improvement from "./pages/Trust/Continuous Improvement/Continuous_Improvement.jsx";
//News
import Press from "./pages/News/Press/Press.jsx";
import Events from "./pages/News/OurEvents/Events.jsx";

//Contact
import Contact from "./pages/Contact/Contact/Contact.jsx";
import Location from "./pages/Contact/Location/Location.jsx";
import Services from "./pages/OurServices/Servicescard/Services.jsx";
import Trusted_Partners from "./pages/Trust/Trust.jsx";
import ProductProtofolio from "./pages/Portfolio/ProductProtofolio.jsx";
import Codeofethics from "./pages/about/CodeEthics/Codeofethics.jsx";
import StartegicDrivers from "./pages/about/StartegicDrivers/StartegicDrivers.jsx";
import ValueProposition from "./pages/about/ValueProposition/ValueProposition.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/GlobalReach" element={<Global_Reach />} />
          <Route
            path="/ManufacturingExcellence"
            element={<Manufacturing_Excellence />}
          />
          <Route path="/OurValues" element={<Our_Values />} />
          <Route path="/WhyChooseUs" element={<Why_choose_us />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/company-overview" element={<CompanyOverview />} />
          <Route path="/about/vision_mission" element={<Vision_mission />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/codeofethics" element={<Codeofethics />} />
          <Route
            path="/about/StartegicDrivers"
            element={<StartegicDrivers />}
          />
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/milestones" element={<Milestones />} />
          <Route
            path="/about/valueproposition"
            element={<ValueProposition />}
          />
          {/* Industries */}
          <Route
            path="/industries/automotive_industry"
            element={<AutomotiveIndustry />}
          />

          <Route path="/industries" element={<Industries />} />

          {/* Portfolio */}
          <Route
            path="/products/specialty-glass"
            element={<SpecialityAutomotiveGlass />}
          />
          {/* Children */}
          <Route
            path="/products/specialty-glass/commercial-vehicles"
            element={<Commercial_Vehicles />}
          />
          <Route
            path="/products/specialty-glass/off-highway-industrial"
            element={<Off_highway_Equipment />}
          />
          <Route
            path="/products/specialty-glass/bus-coach"
            element={<BusandCoach />}
          />
          {/* <Route path="/industries/rail_metro" element={<Rail_metro />} /> */}
          <Route
            path="/products/specialty-glass/defense-armored"
            element={<Defense_Armored_Vehicles />}
          />
          {/*  */}
          <Route path="/products/backlites-tempered" element={<Backlites />} />
          <Route
            path="/products/windshields-laminated"
            element={<Laminated />}
          />
          <Route
            path="/products/automotive_applications_gallery"
            element={<Automotive_Applications_Gallery />}
          />
          <Route path="/products/quarter-glasses" element={<QuarterGlass />} />
          <Route path="/products/sidelites" element={<Sidelites />} />

          <Route path="/products/sunroofs" element={<Sunroofs />} />
          <Route
            path="/products/ValueAddedFeatures"
            element={<ValueAddedFeatures />}
          />
          {/* Manufacturing Capablities */}
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/laminated-glass"
            element={<LaminatedGlassManufacturing />}
          />
          <Route
            path="/services/laminated-glass/pvb-lamination"
            element={<PVBLamination />}
          />
          <Route
            path="/services/laminated-glass/autoclave-capacity"
            element={<Autoclave />}
          />
          <Route
            path="/services/laminated-glass/optical-quality-control"
            element={<OpticalQualityControl />}
          />

          <Route
            path="/services/tempered-glass"
            element={<TemperedglassManufacturing />}
          />
          <Route
            path="/services/tempered-glass/furnaces"
            element={<AdvancedTemperingfurnaces />}
          />
          <Route
            path="/services/tempered-glass/bending"
            element={<BendingCapabilities />}
          />
          <Route
            path="/services/tempered-glass/fragmentation"
            element={<FragmentationStandards />}
          />
          <Route
            path="/services/automationdigital"
            element={<AutomationDigital />}
          />
          <Route
            path="/services/ceramic-printing"
            element={<CeramicPrinting />}
          />
          <Route path="/services/cnc-shaping" element={<CNCShaping />} />
          <Route
            path="/services/coating-technologies"
            element={<CoatingTechnoglass />}
          />
          <Route
            path="/services/edge-finishing"
            element={<TechnicalResources />}
          />
          <Route
            path="/services/technical-resources"
            element={<Edge_Finishing />}
          />
          <Route
            path="/services/enivornmentalcompilance"
            element={<Enviromental />}
          />
          <Route
            path="/services/quality-assurance"
            element={<QualityAssurance />}
          />

          {/* Trust */}

          <Route
            path="/trust/qualitycommitment"
            element={<QualityCommitment />}
          />
          <Route
            path="/trust/certifications-Globally-Compliant"
            element={<Certifications_Compilance />}
          />

          <Route
            path="/trust/proven-manufacturing-excellence"
            element={<ProvenManufacturingExcellence />}
          />
          <Route
            path="/trust/customer_first_approach"
            element={<Customer_First_Approach />}
          />

          <Route
            path="/trust/DeliveryReliability_LogisticsExcellence"
            element={<DeliveryReliability_LogisticsExcellence />}
          />
          <Route path="/trust/safety" element={<Safety />} />
          <Route
            path="/trust/ethics_integrity"
            element={<Ethics_Integrity />}
          />
          <Route
            path="/trust/sustainability_responsibility"
            element={<Sustainability_Responsibility />}
          />
          <Route
            path="/trust/continuousimprovement"
            element={<Continuous_Improvement />}
          />
          <Route path="/trust/trusted_by_leading_companies" element={<Trusted_industries/>}/>
          <Route path="/news/press" element={<Press />} />
          <Route path="/news/events" element={<Events />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Location />} />
          <Route />
          <Route
            path="/trust/trusted_partners"
            element={<Trusted_Partners />}
          />
          <Route path="/products" element={<ProductProtofolio />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
