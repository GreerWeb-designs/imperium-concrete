import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FastQuoteModal from "./components/FastQuoteModal";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import DrivewaysPage from "./pages/services/DrivewaysPage";
import MonolithicSlabsPage from "./pages/services/MonolithicSlabsPage";
import PatiosPage from "./pages/services/PatiosPage";
import SidewalksPage from "./pages/services/SidewalksPage";
import RetainingWallsPage from "./pages/services/RetainingWallsPage";
import GreenvilleServiceAreaPage from "./citypages/GreenvilleServiceAreaPage";
import SimpsonvilleServiceAreaPage from "./citypages/SimpsonvilleServiceAreaPage";
import TaylorsServiceAreaPage from "./citypages/TaylorsServiceAreaPage";
import EasleyServiceAreaPage from "./citypages/EasleyServiceAreaPage";
import SenecaServiceAreaPage from "./citypages/SenecaServiceAreaPage";
import FountainInnServiceAreaPage from "./citypages/FountainInnServiceAreaPage";
import PelzerServiceAreaPage from "./citypages/PelzerServiceAreaPage";
import WilliamstonServiceAreaPage from "./citypages/WilliamstonServiceAreaPage";
import MauldinServiceAreaPage from "./citypages/MauldinServiceAreaPage";
import AndersonServiceAreaPage from "./citypages/AndersonServiceAreaPage";
import PiedmontServiceAreaPage from "./citypages/PiedmontServiceAreaPage";
import InmanServiceAreaPage from "./citypages/InmanServiceAreaPage";
import BoilingSpringsServiceAreaPage from "./citypages/BoilingSpringsServiceAreaPage";
import ClemsonServiceAreaPage from "./citypages/ClemsonServiceAreaPage";
import CentralServiceAreaPage from "./citypages/CentralServiceAreaPage";
import GreerServiceAreaPage from "./citypages/GreerServiceAreaPage";

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
        <Route path="/service-area" element={<ServiceAreaPage />} />
        <Route path="/service-area/greenville" element={<GreenvilleServiceAreaPage />} />
        <Route path="/service-area/simpsonville" element={<SimpsonvilleServiceAreaPage />} />
        <Route path="/service-area/taylors" element={<TaylorsServiceAreaPage />} />
        <Route path="/service-area/easley" element={<EasleyServiceAreaPage />} />
        <Route path="/service-area/seneca" element={<SenecaServiceAreaPage />} />
        <Route path="/service-area/fountaininn" element={<FountainInnServiceAreaPage />} />
        <Route path="/service-area/pelzer" element={<PelzerServiceAreaPage />} />
        <Route path="/service-area/williamston" element={<WilliamstonServiceAreaPage />} />
        <Route path="/service-area/mauldin" element={<MauldinServiceAreaPage />} />
        <Route path="/service-area/anderson" element={<AndersonServiceAreaPage />} />
        <Route path="/service-area/piedmont" element={<PiedmontServiceAreaPage />} />
        <Route path="/service-area/inman" element={<InmanServiceAreaPage />} />
        <Route path="/service-area/boilingsprings" element={<BoilingSpringsServiceAreaPage />} />
        <Route path="/service-area/clemson" element={<ClemsonServiceAreaPage />} />
        <Route path="/service-area/central" element={<CentralServiceAreaPage />} />
        <Route path="/service-area/greer" element={<GreerServiceAreaPage />} />
        <Route path="/services/driveways" element={<DrivewaysPage />} />
        <Route path="/services/monolithic-slabs" element={<MonolithicSlabsPage />} />
        <Route path="/services/patios" element={<PatiosPage />} />
        <Route path="/services/sidewalks" element={<SidewalksPage />} />
        <Route path="/services/retaining-walls" element={<RetainingWallsPage />} />


        <Route path="/service-area/:citySlug"
  element={<ServiceAreaPage onFastQuote={openFastQuote} />}
/>

        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      <FastQuoteModal open={fastQuoteOpen} onClose={closeFastQuote} />
    </div>
  );
}
