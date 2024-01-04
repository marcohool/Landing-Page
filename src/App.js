import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path="/" element={<HomePage />}></Route>
               <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
