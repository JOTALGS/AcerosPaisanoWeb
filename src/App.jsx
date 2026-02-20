import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import CatalogueNew from "./pages/catalogue/CatalogueNew";
import { Contact } from "./pages/contact/Contact";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Lenis from "@studio-freight/lenis";
import { HomeModal } from "./components/homeComponents/HomeModal";
import ProductServicePage from "./pages/ProductServicePage/ProductServicePage";
// import { initBarba, initPageAnimations, setupBarbaExclusions } from "./utils/barbaConfig";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    let rafId;

    function raf(time) {
      if (lenis) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
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

        {/* Redirects for legacy routes to keep them working with the same design */}
        {/* <Route path="/mallas-electrosoldadas" element={<ProductServicePage serviceSlug="mallas-electrosoldadas" />} />
        <Route path="/mallas-plegadas" element={<ProductServicePage serviceSlug="mallas-plegadas" />} />
        <Route path="/hierro-cortado-y-doblado" element={<ProductServicePage serviceSlug="hierro-cortado-y-doblado" />} />
        <Route path="/barras-lisas-y-conformadas" element={<ProductServicePage serviceSlug="barras-lisas-y-conformadas" />} /> */}

        {/* Product Service Pages (with modal design) */}
        <Route path="/mallas-electrosoldadas" element={<ProductDetail serviceSlug="mallas-electrosoldadas" />} />
        <Route path="/mallas-plegadas" element={<ProductDetail serviceSlug="mallas-plegadas" />} />
        <Route path="/hierro-cortado-y-doblado" element={<ProductDetail serviceSlug="hierro-cortado-y-doblado" />} />
        <Route path="/barras-conformadas" element={<ProductDetail serviceSlug="barras-conformadas" />} />
        <Route path="/barras-lisas" element={<ProductDetail serviceSlug="barras-lisas" />} />

        {/* Generic Product Detail Pages */}
        <Route path="/productos/:slug" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
