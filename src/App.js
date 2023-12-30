import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         <Router>
            <Navbar />
            <HeroSection />
            <Routes>
               {/* <Route path="/" element={<Home />}></Route>
               <Route path="*" element={<div>404 Not Found</div>}></Route> */}
            </Routes>
         </Router>
      </>
   );
}

export default App;
