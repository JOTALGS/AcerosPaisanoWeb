import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonHoverBg from "../CustomButton/ButtonHoverBg";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef()
  const bottomSecRef = useRef()


  return (
    <section>
      <footer ref={footerRef} className="site-footer">
        <div className="footer-top-container">
          {/* Left side image */}
          <div className="footer-logo">
            <img src="./images/paisanologoblack.jpg" alt="Paisano logo" />
          </div>

          {/* Right side contact information */}
          <div className="footer-content">
            <div className="suscribe-sec">
              <p>Recibe las ultimas noticias</p>
              <div>
                <input type="text" placeholder="email@example.com" />
                <button>OK</button>
              </div>
            </div>
          </div>

          <div className="page-links">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/catalogue"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Catálogo
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="footer-middle-container" style={{ zIndex: 0 }}>
          <h3>Ponte en contacto con a nuestro equipo</h3>
          <h3>de administracion y ventas</h3>
          <Link to='/contact'>
            <ButtonHoverBg label={'Contacto'}  buttonStyles={"footer-contact-button"}/>
          </Link>
        </div>

        <div ref={bottomSecRef} className="footer-bottom-container">
          <div className="footer-ubi">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1779293687855!2d-56.241938923516535!3d-34.70069187291958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1cd0dee1b74d7%3A0x9d3355e7c66adcd2!2sAcerospaisano%20S.A.!5e0!3m2!1sen!2suy!4v1734893201753!5m2!1sen!2suy" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="footer-content">
            <div className="contact-info">
              <p><strong>Teléfono:</strong></p>
              <a href="https://wa.me/59823650000"><p>+598 2365 0000</p></a>
              <a href="https://wa.me/59823657189"><p>+598 2365 7189</p></a>
            </div>
            <div className="contact-info">
              <h4><strong>E-mail:</strong></h4>
              <p><a href="mailto:ventas@acerospaisano.com.uy">ventas@acerospaisano.com.uy</a></p>
            </div>
            <div className="contact-info">
              <p><strong>Dirección:</strong> Ruta 5 KM 25.500</p>
              <p>Canelones, Las Piedras, Uruguay</p>
            </div>
          {/* Left side image */}

          {/* Right side contact information */}
          </div>
        </div>
      </footer>
    </section>
  );
};
