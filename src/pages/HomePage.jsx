import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import "./HomePage.css";

export default function HomePage() {
   return (
      <div>
         <Navbar />
         <HeroSection />
         <div className="background--img"></div>
      </div>
   );
}
