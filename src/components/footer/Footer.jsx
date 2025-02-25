import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>Descubri</h3>
          <nav className="footer-nav">
            <Link to="/Home">Inicio</Link>
            <Link to="/catalogue">Productos</Link>
            <Link to="/distribution">Encuéntranos</Link>
            <Link to="/about-us">Sobre nosotros</Link>
            <Link to="/contact">Contáctanos</Link>
          </nav>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <nav className="footer-nav">
            <a href="tel:2365 0000">2365 0000</a>
            <a href="mailto:ventas@acerospaisano.com.uy">ventas@acerospaisano.com.uy</a>
          </nav>
        </div>

        <div className="footer-column company-info">
          <h3>Encuéntranos</h3>
          <div className="company-details">
            <p>Aceros Paisano S.A.</p>
            <div className="address-tooltip-container">
              <div className="address-text">
                <p>Ruta 5 KM 25.500</p>
                <p>Canelones, Las Piedras</p>
                <p>Uruguay</p>
              </div>
              <div className="map-tooltip">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.9391391583386!2d-56.2419389!3d-34.7006919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1cd0dee1b74d7%3A0x9d3355e7c66adcd2!2sAcerospaisano%20S.A.!5e0!3m2!1sen!2s!4v1708473443787!5m2!1sen!2s"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a 
                  href="https://www.google.com/maps/place/Acerospaisano+S.A./@-34.7006919,-56.2419389,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
          </div>

          

        <div className="footer-column socials">
          <h3>Redes</h3>
          <nav className="footer-nav">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </nav>
        </div>
      </div>

      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src="/videos/Liquidlogo.mp4" type="video/mp4" />
          Tu navegador no admite videos.
        </video>
      </div>

      <div className="footer-legal-top">
        <div className="footer-legal-top-left">
          <select defaultValue="es">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-copyright-container">
        <div className="footer-copyright-left">©2025 Aceros Paisano S.A.</div>
        <div className="footer-copyright-right">Todos los Derechos Reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
