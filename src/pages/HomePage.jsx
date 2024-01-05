import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import "./HomePage.css";

export default function HomePage() {
   const mainRef = useRef(null); // Create a reference to the main element

   useEffect(() => {
      // After component mounts, calculate and set padding-top
      const handleResize = () => {
         if (mainRef.current) {
            const navbarHeight = document.querySelector("#root > div > nav").offsetHeight;
            mainRef.current.style.paddingTop = `${navbarHeight}px`;
         }
      };

      // Set it initially and also set resize event listener for window
      handleResize();
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the resize listener
      return () => window.removeEventListener("resize", handleResize);
   }, []); // Empty dependency array means this effect runs once on mount

   return (
      <>
         <div className="background-container">
            <div className="background-img"></div>
         </div>
         <div className="content">
            <Navbar />
            <main ref={mainRef}>
               <HeroSection />
            </main>
         </div>
      </>
   );
}