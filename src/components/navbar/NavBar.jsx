import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="site__header" style={{ zIndex: 0 }}>
      <div className="container_header">
        <div className="navbar-logo">
          <video autoPlay loop muted playsInline className="w-full h-auto">
              <source src="/videos/Liquidlogo.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
          </video>
        </div>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`navlink ${menuOpen ? "open" : ""}`} style={{ marginLeft: "auto", marginRight: "300px" }}>
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about-us">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/catalogue">Productos</Link>
            </li>
          </ul>
        </div>
        <div className={`navlink ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
