import React, { useEffect, useMemo, useState, useCallback } from "react";
import "./HomeModal.css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const modalInfo = {
  "Hierro Cortado y Doblado": [
    { title: "A Medida", content: "Dimensiones precisas según necesidades del proyecto.", image: "./images/doblado2.jpg", alt: "Construcción y Arquitectura" },
    { title: "Calidad", content: "Procesos de calidad garantizada.", image: "./images/doblado6.jpg", alt: "Industria Energética" },
    { title: "Cero Desperdicio", content: "Trabajamos con rollos de alambrón que generan cero desperdicio.", image: "./images/doblado4.jpg", alt: "Manufactura Industrial" },
    { title: "Ahorro", content: "Economía de tiempo y mano de obra.", image: "./images/doblado7.jpg", alt: "Ahorro" },
    { title: "Asistencia Técnica", content: "Asesoramiento y seguimiento de obra por técnicos especializados.", image: "./images/doblado5.jpg", alt: "Industria Agropecuaria" },
  ],
  "Mallas Electrosoldadas": [
    { title: "Certificación", content: "Certificadas bajo norma UNIT 845:1995.", image: "./images/certificado1.jpg", alt: "Construcción y Arquitectura" },
    { title: "Garantía de calidad", content: "Producción validada por ensayos en laboratorio.", image: "./images/mallas3.jpg", alt: "Industria Energética" },
    { title: "Medidas estándar", content: "Todos los diámetros encontrados en plaza.", image: "./images/mallas4.jpg", alt: "Manufactura Industrial" },
    { title: "Presentación", content: "Adapatable a las necesidades del proyecto civíl.", image: "./images/mallas2.jpg", alt: "Industria Agropecuaria" },
    { title: "Diseño Especial", content: "Soluciones a medida, personalizadas para proyectos específicos.", image: "./images/mallas6.jpg", alt: "Industria Agropecuaria" },
  ],
  "Barras lisas y Conformadas": [
    { title: "Certificación", content: "Certificadas bajo normas UNIT 34:1995 Y UNIT 845:1995.", image: "./images/barras.jpg", alt: "Construcción y Arquitectura" },
    { title: "Rendimiento y calidad", content: "Procesos de calidad garantizada.", image: "./images/barras1.jpg", alt: "Industria Energética" },
    { title: "Cero desperdicio", content: "Barras cortadas a medida.", image: "./images/barras2.jpg", alt: "Manufactura Industrial" },
    { title: "Maximización de recursos", content: "Optimización de recursos en obra.", image: "./images/barras3.jpg", alt: "Ahorro" },
    { title: "Logística optimizada", content: "Traslado sencillo y seguro.", image: "./images/barras5.jpg", alt: "Industria Agropecuaria" },
  ],
  "Mallas Plegadas": [
    { title: "Estandarización y confiabilidad", content: "Combina las ventajas del cortado y doblado + mallas.", image: "./images/plegada.jpg", alt: "Construcción y Arquitectura" },
    { title: "Alta precisión", content: "Proceso industrializado con plegadora automatizada.", image: "./images/plegada1.jpg", alt: "Industria Energética" },
    { title: "Optimización en obra", content: "Elimina procesos manuales y mejora la productividad.", image: "./images/plegada2.jpg", alt: "Manufactura Industrial" },
    { title: "Soluciones adaptables", content: "Formatos versátiles para distintas necesidades constructivas.", image: "./images/plegada3.jpg", alt: "Industria Agropecuaria" },
    { title: "Diseño optimizado", content: "Adaptamos cada detalle a los requerimientos de la obra.", image: "./images/plegada6.jpg", alt: "Industria Agropecuaria" },
  ],
};

export const HomeModal = ({ info, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  const data = useMemo(() => modalInfo[info] || [], [info]);
  const activeItem = data[activeIndex];

  useEffect(() => setActiveIndex(0), [info]);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const handleActivate = useCallback((idx) => setActiveIndex(idx), []);

  return (
    <Box className="homeModal" role="dialog" aria-modal="true">
      <button type="button" className="homeModalClose" onClick={onClose} aria-label="Cerrar modal">
        ×
      </button>

      {isMobile ? (
        <Box className="homeModalMobile">
          <Typography className="homeModalProductName">{info}</Typography>

          <Box className="homeModalMobileList">
            {data.map((item, idx) => {
              const number = String(idx + 1).padStart(2, "0");
              return (
                <Box key={`${info}-${idx}`} className="mobileBlock">
                  <Box className="mobileImageWrap">
                    <Box
                      component="img"
                      className="mobileImage"
                      src={item.image}
                      alt={item.alt || item.title || `Imagen ${number}`}
                      loading="lazy"
                    />
                  </Box>

                  {/* SOLO número + content */}
                  <Typography className="mobileLine">
                    <span className="mobileNumber">{number}.</span>
                    <span className="mobileContent">{item.content}</span>
                  </Typography>

                  {idx !== data.length - 1 && <div className="mobileDivider" />}
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (
        <Box className="homeModalDesktop">
          <Box className="desktopLeft">
            {data.map((item, idx) => {
              const number = String(idx + 1).padStart(2, "0") + ".";
              const isActive = idx === activeIndex;

              return (
                <button
                  key={`${info}-${idx}`}
                  type="button"
                  className={`desktopEntry ${isActive ? "isActive" : ""}`}
                  onMouseEnter={() => handleActivate(idx)}
                  onFocus={() => handleActivate(idx)}
                >
                  <span className="desktopNumber">{number}</span>
                  <span className="desktopPhrase">{item.content}</span>
                </button>
              );
            })}
          </Box>

          <Box className="desktopRight">
            {activeItem ? (
              <Box className="desktopImageCard">
                <img
                  className="desktopImage"
                  src={activeItem.image}
                  alt={activeItem.alt || activeItem.title}
                  draggable="false"
                />
              </Box>
            ) : null}
          </Box>
        </Box>
      )}
    </Box>
  );
};
