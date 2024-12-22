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
    <header className="site__header">
      <div className="container_header">
        <div className="logo-container">
          <img src="./faviconBlack.ico" alt="red logo" />
        </div>
        <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`navlink ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about-us">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/catalogue">Catálogo</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
