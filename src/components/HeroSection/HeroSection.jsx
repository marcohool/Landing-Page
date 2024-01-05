import React from "react";
import "./HeroSection.css";

function HeroSection() {
   return (
      <div className="container-large">
         <div className="hero-section text-colour-white">
            <div>
               <h1>ADVENTURE AWAITS</h1>
               <p>What are you waiting for?</p>
            </div>
            <div className="hero-buttons">
               <button>Get Started</button>
            </div>
         </div>
      </div>
   );
}

export default HeroSection;
