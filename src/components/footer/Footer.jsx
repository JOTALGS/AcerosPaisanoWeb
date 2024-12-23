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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1779293687855!2d-56.241938923516535!3d-34.70069187291958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1cd0dee1b74d7%3A0x9d3355e7c66adcd2!2sAcerospaisano%20S.A.!5e0!3m2!1sen!2suy!4v1734893201753!5m2!1sen!2suy" width="250" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-details">
              <p><strong>Teléfono:</strong></p>
              <p>+598 2365 0000</p>
              <p>+598 2365 7189</p>
              <h4><strong>E-mail:</strong></h4>
              <p><a href="mailto:ventas@acerospaisano.com.uy">ventas@acerospaisano.com.uy</a></p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
