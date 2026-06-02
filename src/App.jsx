import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FastQuoteModal from "./components/FastQuoteModal";
import Footer from "./components/Footer";

import Privacy from "./pages/privacy-policy";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import CityServiceAreaPage from "./pages/CityServiceAreaPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import DrivewaysPage from "./pages/services/DrivewaysPage";
import MonolithicSlabsPage from "./pages/services/MonolithicSlabsPage";
import PatiosPage from "./pages/services/PatiosPage";
import SidewalksPage from "./pages/services/SidewalksPage";
import RetainingWallsPage from "./pages/services/RetainingWallsPage";

export default function App() {
  const [fastQuoteOpen, setFastQuoteOpen] = useState(false);

  const openFastQuote = () => setFastQuoteOpen(true);
  const closeFastQuote = () => setFastQuoteOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onFastQuoteOpen={openFastQuote} />

      <Routes>
        <Route path="/" element={<HomePage onFastQuoteOpen={openFastQuote} />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Service-area hub + one data-driven page per city */}
        <Route path="/service-area" element={<ServiceAreaPage onFastQuoteOpen={openFastQuote} />} />
        <Route path="/service-area/:citySlug" element={<CityServiceAreaPage />} />

        {/* Services */}
        <Route path="/services/driveways" element={<DrivewaysPage />} />
        <Route path="/services/monolithic-slabs" element={<MonolithicSlabsPage />} />
        <Route path="/services/patios" element={<PatiosPage />} />
        <Route path="/services/sidewalks" element={<SidewalksPage />} />
        <Route path="/services/retaining-walls" element={<RetainingWallsPage />} />

        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>

      <Footer />

      <FastQuoteModal open={fastQuoteOpen} onClose={closeFastQuote} />
    </div>
  );
}
