import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import "./HomePage.css";

export default function HomePage() {
   const mainRef = useRef(null); // Create a reference to the main element
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      // After component mounts, calculate and set padding-top
      const handleResize = () => {
         if (mainRef.current) {
            const navbarHeight = document.querySelector("#root > div > div > div > div >nav").offsetHeight;
            mainRef.current.style.paddingTop = `${navbarHeight}px`;
         }
      };

      // Set it initially and also set resize event listener for window
      handleResize();
      window.addEventListener("resize", handleResize);

      // Cleanup function to remove the resize listener
      return () => window.removeEventListener("resize", handleResize);
   }, []); // Empty dependency array means this effect runs once on mount

   useEffect(() => {
      const handleScroll = () => {
         const isScrolled = window.scrollY > 0;
         setScrolled(isScrolled);
      };

      // Add event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up function
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <>
         <div className="content">
            <div className="padding--global">
               <div className={`navbar-fixed-wrapper  ${scrolled ? "scrolled" : ""}`}>
                  <div className="navbar-container">
                     <Navbar />
                  </div>
               </div>
               <main ref={mainRef}>
                  <HeroSection />
               </main>
            </div>
         </div>
      </>
   );
}
