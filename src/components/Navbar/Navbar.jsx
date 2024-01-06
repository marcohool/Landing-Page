import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
   const [navActive, setNavActive] = useState(false);

   const toggleNav = () => {
      setNavActive(!navActive);
   };

   const closeMenu = () => {
      setNavActive(false);
   };

   useEffect(() => {
      const handleRezise = () => {
         if (window.innerWidth <= 500) {
            closeMenu();
         }
      };
      window.addEventListener("resize", handleRezise);

      return () => {
         window.removeEventListener("resize", handleRezise);
      };
   }, []);

   useEffect(() => {
      if (window.innerWidth <= 1200) {
         closeMenu();
      }
   }, []);

   return (
      <div className="padding--global">
         <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
               <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">
                  <div className="navbar--img"></div>
               </Link>
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
               <span className="nav__hamburger__line"></span>
               <span className="nav__hamburger__line"></span>
               <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
               <ul>
                  <li>
                     <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">
                        Home
                     </Link>
                  </li>
               </ul>
               <ul>
                  <li>
                     <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="About" className="navbar--content">
                        About Me
                     </Link>
                  </li>
               </ul>
               <ul>
                  <li>
                     <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="MySkills" className="navbar--content">
                        Skills
                     </Link>
                  </li>
               </ul>
               <ul>
                  <li>
                     <Link onClick={closeMenu} activeClass="navbar--active--content" spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="navbar--content">
                        Contact Me
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
