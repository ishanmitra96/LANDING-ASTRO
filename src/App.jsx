import LoginPage from "./componantes/LoginPage";
import RegisterPage from "./componantes/RegisterPage";
import "./App.css";
import Navbar from "./componantes/Navbar";
import Hero from "./componantes/Hero";
import ConsultAstrologer from "./componantes/ConsultAstrologer";
import KundliMatching from "./componantes/KundliMatching";
import Review from "./componantes/Review";
import Conastro from "./componantes/Conastro";
import Profile from "./componantes/Profile";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HoroscopeGrid from "./componantes/HoroscopeGrid";
import HoroscopeDetails from "./componantes/HoroscopeDetails";
// import ProductGrid from "./pages/ProductGrid";
// import CartPage from "./pages/CartPage";
import TopNavber from "./pages/TopNavber";
import LoveProblemSection from "./componantes/LoveProblemSection";
import Childcare from "./pages/Childcare";
import Education from "./pages/Education";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Hero />
        <ConsultAstrologer />
        <KundliMatching />
        <Review />
        <Conastro />
        <Profile />
        <LoginPage />
        <RegisterPage />
        {/* < ProductGrid/> */}
        {/* < CartPage/> */}
        <TopNavber />
        <LoveProblemSection />
        <Childcare />
        <Education />

        <Routes>
          {/* Home page showing the zodiac signs */}
          <Route path="/" element={<HoroscopeGrid />} />

          {/* Detail page for a specific zodiac sign */}
          <Route path="/horoscope/:sign" element={<HoroscopeDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
