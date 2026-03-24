import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/MainLayout";

// Scroll + UI Enhancements
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingWidgets from "./components/FloatingWidgets";

// Pages
import Home from "./pages/Home";
import AboutI2mset from "./pages/AboutI2mset";
import CallForPaper from "./pages/CallForPaper";
import Committee from "./pages/Committee";
import CommitteeResponsibility from "./pages/CommitteeResponsibility";
import ConferenceAssociation from "./pages/ConferenceAssociation";
import ConferenceTracks from "./pages/ConferenceTracks";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import KeyDates from "./pages/KeyDates";
import News from "./pages/News";
import PreviousConferences from "./pages/PreviousConferences";
import RegistrationFees from "./pages/RegistrationFees";
import Schedule from "./pages/Schedule";
import Speaker from "./pages/Speaker";
import Sponsorship from "./pages/Sponsorship";
import TouristAttractions from "./pages/TouristAttractions";
import Workshop from "./pages/Workshop";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Global CSS
import "./css/Home.css";

function App() {
  return (
    <Router>
      {/* Auto scroll to top on route change */}
      <ScrollToTop />
      <FloatingWidgets />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutI2mset />} />
          <Route path="/call-for-paper" element={<CallForPaper />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/committee-responsibility" element={<CommitteeResponsibility />}/>
          <Route path="/conference-association" element={<ConferenceAssociation />}/>
          <Route path="/conference-tracks" element={<ConferenceTracks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/key-dates" element={<KeyDates />} />
          <Route path="/news" element={<News />} />
          <Route path="/previous-conferences" element={<PreviousConferences />}/>
          <Route path="/registration-fees" element={<RegistrationFees />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/tourist-attractions" element={<TouristAttractions />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </MainLayout>

      {/* Scroll Button */}
      <ScrollToTopButton />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
