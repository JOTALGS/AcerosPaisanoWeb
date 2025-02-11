import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import { NavBar } from "../../components/navbar/NavBar";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    const lineWrappers = document.querySelectorAll(".line-wrapper");

    lineWrappers.forEach((wrapper) => {
      const overlay = wrapper.querySelector(".line-overlay");

      gsap.to(overlay, {
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
          end: "bottom center",
          scrub: 5,
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
      });
    });

    // Cleanup function to remove ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const content = [
    {
      title: "Misión",
      paragraphs: [
        "Nuestra misión es desarrollar una empresa sustentable, brindando productos metálicos de calidad certificada destinados a los sectores de la construcción, el agro y la industria.",
        "La sustentabilidad se obtiene a través de mejorar en forma continua el Sistema de Gestión, el Sistema de Seguridad, y el Sistema Ambiental.",
      ],
    },
    {
      title: "Política de Gestión",
      paragraphs: [
        "Nuestro Sistema de Gestión se controla con la obtención y el mantenimiento de la certificación ISO 9001.",
        "Para mejorar continuamente se aplican los conceptos del Modelo de Mejora Continua del Instituto Nacional de Calidad.",
      ],
    },
    {
      title: "Política de Calidad",
      paragraphs: [
        "Nuestro Sistema de Calidad tiene como prioridades:",
        "- La obtención y el mantenimiento de la certificación de Calidad de Producto.",
        "- La venta de productos metálicos que cumplan los requisitos de las normas vigentes aplicables y las necesidades de nuestros clientes.",
      ],
    },
    {
      title: "Política de Seguridad",
      paragraphs: [
        "Nuestro Sistema de Seguridad se controla con la obtención y el mantenimiento de la certificación de la norma OHSAS 18001.",
        "Nuestra principal política es que cualquier operador debe detener el proceso que no se encuentre dentro de las condiciones estándares de seguridad, hasta no asegurarse de la remoción de la condición insegura.",
      ],
    },
    {
      title: "Política Ambiental",
      paragraphs: [
        "Nuestro Sistema de Protección del Medio Ambiente se controla con la obtención y el mantenimiento de la certificación de la norma ISO 14001.",
        "Nuestra principal política es realizar inversiones y orientar nuestra operación de acuerdo a los conceptos de Tecnología Limpia.",
      ],
    },
  ];

  let globalIndex = 0;

  return (
    <section id="about" className="about">
      <NavBar />
      <div className="intro-about"></div>

      <div className="about-sub-section">
        {content.map((section, index) => (
            <div className={`text-content ${index % 2 === 0 ? "left" : "right"}`}>
              <div>
                <h2 className="subtitle">{section.title}</h2>
                {section.paragraphs.map((item) => (
                  <div key={globalIndex} className="line-wrapper">
                    <p className="line">
                      {item}
                    </p>
                    <p className="line-overlay">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
        ))}

      </div>

      {/* Footer at the bottom of the page */}
      <footer className="footer">
      </footer>
    </section>
  );
};