import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Catalogue } from "./pages/catalogue/Catalogue";
import { Contact } from "./pages/contact/Contact";
import Lenis from "@studio-freight/lenis";
import { HomeModal } from "./components/homeComponents/HomeModal";

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

    return () => {
      window.removeEventListener("scroll", lenis.raf);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/productos-y-servicios" element={<Catalogue />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/hierro-cortado-y-doblado" element={<HomeModal info={"Hierro Cortado y Doblado"} />} />
        <Route path="/mallas-electrosoldadas" element={<HomeModal info={"Mallas Electrosoldadas"} />} />
        <Route path="/barras-lisas-y-conformadas" element={<HomeModal info={"Barras lisas y Conformadas"} />} />
        <Route path="/mallas-plegadas" element={<HomeModal info={"Mallas Plegadas"} />} />
      </Routes>
    </div>
  );
}

export default App;
