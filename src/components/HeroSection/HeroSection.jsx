import React from "react";
import "./HeroSection.css";

function HeroSection() {
   return (
      <div className="container-large">
         <div className="hero-section">
            <div className="hero-title-div">
               <h1 className="header-primary">1 long video, 10 viral clips. Create 10x faster.</h1>
               <p className="subtitle-primary">What are you waiting for?</p>
            </div>
            <div className="hero-info-div">
               <img src="./images/Hero-Image-1.png" alt="Hero Image"></img>

               {/* <div className="hero-img"></div> */}
               {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
         </div>
      </div>
   );
}

export default HeroSection;
