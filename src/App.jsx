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

import Commercial_Vehicles from "./pages/Industries/Commercial_vehicles/Commercial_Vehicles.jsx";
import Off_highway_Equipment from "./pages/Industries/Off_highway Equipment/Off_highway_Equipment.jsx";
import Passenger_Vehicle from "./pages/Industries/Passenger_vehicles/Passenger_vehicles.jsx";
import Rail_metro from "./pages/Industries/rail_metro/Rail_metro.jsx";
import Sepeciality_Application from "./pages/Industries/Sepeciality_applications/Sepeciality_Application.jsx";

//PortFolio
import Tempered from "./pages/Portfolio/Temperedglass/Temperedglass.jsx";
import Laminated from "./pages/Portfolio/Laminatedglass/Laminatedglass.jsx";
import HighPerformanceglass from "./pages/Portfolio/High_PerformanceGlass/HighPerformanceglass.jsx";
import QuarterGlass from "./pages/Portfolio/QuarterGlass/QuarterGlass.jsx";
import Sidelites from "./pages/Portfolio/Sidelites/Sidelites.jsx";
import SpecialityGlass from "./pages/Portfolio/SpecialityGlass/SpecialityGlass.jsx";
import Sunroofs from "./pages/Portfolio/Sunroofs/Sunroofs.jsx";

//OurServices
import LaminatedGlassManufacturing from "./pages/OurServices/LaminatedGlass/LaminatedGlassManufacturing.jsx";
import Autoclave from "./pages/OurServices/LaminatedGlass/Children/AutoClaveCapacity.jsx";
import OpticalQualityControl from "./pages/OurServices/LaminatedGlass/Children/OpticalQualityControl.jsx";
import PVBLamination from "./pages/OurServices/LaminatedGlass/Children/PVBLamination.jsx";

import TemperedglassManufacturing from "./pages/OurServices/TemperedGlass/TemperedglassManufacturing.jsx";
import AdvancedTemperingfurnaces from "./pages/OurServices/TemperedGlass/Children/AdvancedTemperingfurnaces.jsx";
import BendingCapabilities from "./pages/OurServices/TemperedGlass/Children/BendingCapabilities.jsx";
import FragmentationStandards from "./pages/OurServices/TemperedGlass/Children/FragmentationStandards.jsx";

import CeramicPrinting from "./pages/OurServices/CeramicPrinting.jsx";
import CNCShaping from "./pages/OurServices/CNCShaping.jsx";
import CoatingTechnoglass from "./pages/OurServices/CoatingTechnologies.jsx";
import Edge_Finishing from "./pages/OurServices/Edge_Finishing.jsx";
import TechnicalResources from "./pages/OurServices/TechnicalResources.jsx";

//Trust

import CaseStudies from "./pages/Trust/CaseStudies/CaseStudies.jsx";
import Certifications_Compilance from "./pages/Trust/Certifications&compilance/Certifications_Compilance.jsx";
import Enviromental from "./pages/Trust/EnivornmentalCompliance/EnvironmentalCompliance.jsx";
import Media from "./pages/Trust/Media&Gallery/Media_Gallery.jsx";
import Partnership from "./pages/Trust/Partnerships&Clients/Partnerships_Clients.jsx";
import Quality from "./pages/Trust/QualityAssurance/QualityAssurance.jsx";

//News
import Press from "./pages/News/Press/Press.jsx";
import Events from "./pages/News/OurEvents/Events.jsx";

//Contact
import Contact from "./pages/Contact/Contact/Contact.jsx";
import Location from "./pages/Contact/Location/Location.jsx";
import Services from "./pages/OurServices/Servicescard/Services.jsx";
import Trust from "./pages/Trust/Trust.jsx";
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
          <Route path="/about/codeofethics" element={<Codeofethics/>}/>
          <Route path="/about/StartegicDrivers" element={<StartegicDrivers/>}/>
          <Route path="/about/sustainability" element={<Sustainability />} />
          <Route path="/about/milestones" element={<Milestones />} />
          <Route path="/about/valueproposition" element={<ValueProposition/>}/>

          <Route path="/industries" element={<Industries />} />

          <Route
            path="/industries/commercial_vehicles"
            element={<Commercial_Vehicles />}
          />
          <Route
            path="/industries/off_highway_equipment"
            element={<Off_highway_Equipment />}
          />
          <Route
            path="/industries/passenger_vehicles"
            element={<Passenger_Vehicle />}
          />
          <Route path="/industries/rail_metro" element={<Rail_metro />} />
          <Route
            path="/industries/sepeciality_application"
            element={<Sepeciality_Application />}
          />

          <Route path="/products/backlites-tempered" element={<Tempered />} />
          <Route
            path="/products/windshields-laminated"
            element={<Laminated />}
          />
          <Route
            path="/products/high-performance-glass"
            element={<HighPerformanceglass />}
          />
          <Route path="/products/quarter-glasses" element={<QuarterGlass />} />
          <Route path="/products/sidelites" element={<Sidelites />} />
          <Route
            path="/products/specialty-glass"
            element={<SpecialityGlass />}
          />
          <Route path="/products/sunroofs" element={<Sunroofs />} />

          <Route path="/services" element={<Services />} />
          <Route
            path="/services/laminated-glass"
            element={<LaminatedGlassManufacturing />}
          />
          <Route
            path="/services/laminated-glass/pvb-lamination"
            element={<Autoclave />}
          />
          <Route
            path="/services/laminated-glass/autoclave-capacity"
            element={<OpticalQualityControl />}
          />
          <Route
            path="/services/laminated-glass/optical-quality-control"
            element={<PVBLamination />}
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
            path="/services/tempered-glass/fragmentatio"
            element={<FragmentationStandards />}
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

          <Route path="/trust/casestudies" element={<CaseStudies />} />
          <Route
            path="/trust/certification"
            element={<Certifications_Compilance />}
          />
          <Route
            path="/trust/enivornmentalcompilance"
            element={<Enviromental />}
          />
          <Route path="/trust/mediagallery" element={<Media />} />
          <Route path="/trust/partnership" element={<Partnership />} />
          <Route path="/trust/quality" element={<Quality />} />

          <Route path="/news/press" element={<Press />} />
          <Route path="/news/events" element={<Events />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Location />} />
          <Route />
          <Route path="/trust" element={<Trust/>}/>
          <Route path="/products" element={<ProductProtofolio/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
