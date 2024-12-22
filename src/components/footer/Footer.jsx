import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <section>
      <footer className="site-footer">
        <div className="footer-container">
          {/* Left side image */}
          <div className="footer-logo">
            <img src="./images/paisanologoblack.jpg" alt="Paisano logo" />
          </div>

          {/* Right side contact information */}
          <div className="footer-content">
            <div className="contact-info">
              <p><strong>Dirección:</strong> Ruta 5 KM 25.500</p>
              <p>Canelones, Las Piedras, Uruguay</p>
            </div>
            <div className="contact-details">
              <p><strong>Teléfono:</strong></p>
              <p>+598 2365 0000</p>
              <p>+598 2365 7189</p>
              <p><strong>E-mail:</strong> <a href="mailto:ventas@acerospaisano.com.uy">ventas@acerospaisano.com.uy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
