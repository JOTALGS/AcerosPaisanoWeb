import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About"
import { Catalogue } from "./pages/catalogue/Catalogue"
import { Footer } from "./components/footer/Footer";
import { Contact } from "./pages/contact/Contact";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2, // Adjust this for more smoothness (higher = slower)
      easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Sync with the scroll event
    window.addEventListener("scroll", lenis.raf);
    
    return () => {
      window.removeEventListener("scroll", lenis.raf);
    };
  }, []);

  return (
    <div className="App" id="model-canvas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
