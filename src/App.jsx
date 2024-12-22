import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About"
import { Catalogue } from "./pages/catalogue/Catalogue"
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <div className="App" id="model-canvas">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
