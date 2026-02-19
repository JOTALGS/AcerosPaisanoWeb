import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import CatalogueNew from "./pages/catalogue/CatalogueNew";
import { Contact } from "./pages/contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Lenis from "@studio-freight/lenis";
// import { initBarba, initPageAnimations, setupBarbaExclusions } from "./utils/barbaConfig";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener("scroll", lenis.raf);

    // Barba.js temporarily disabled - will be implemented progressively
    // if (typeof document !== 'undefined') {
    //   if (document.readyState === 'loading') {
    //     document.addEventListener('DOMContentLoaded', () => {
    //       initBarba();
    //       setupBarbaExclusions();
    //       initPageAnimations();
    //     });
    //   } else {
    //     initBarba();
    //     setupBarbaExclusions();
    //     initPageAnimations();
    //   }
    // }

    return () => {
      window.removeEventListener("scroll", lenis.raf);
    };
  }, []);

  useEffect(() => {
    // Handle hash navigation for sections
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos" element={<CatalogueNew />} />
        <Route path="/productos-y-servicios" element={<CatalogueNew />} />
        <Route path="/contacto" element={<Contact />} />

        {/* Product Detail Pages - Clean URLs */}
        <Route path="/productos/:slug" element={<ProductDetail />} />

        {/* Legacy redirects for compatibility */}
        <Route path="/mallas-electrosoldadas" element={<ProductDetail />} />
        <Route path="/mallas-plegadas" element={<ProductDetail />} />
        <Route path="/hierro-cortado-y-doblado" element={<ProductDetail />} />
        <Route path="/barras-lisas-y-conformadas" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
