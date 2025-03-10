import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import { NavBar } from "../../components/navbar/Navbar1";
import { Footer } from "../../components/footer/Footer";
import { Box, Typography } from "@mui/material";
import ParallaxBox from "../../components/parallaxBox/ParallaxBox";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: "Misión",
    paragraphs: [
      "Nuestra misión es desarrollar una empresa sustentable, brindando productos metálicos de calidad certificada destinados a los sectores de la construcción, el agro y la industria.",
      "La sustentabilidad se obtiene a través de mejorar en forma continua el Sistema de Gestión, el Sistema de Seguridad y el Sistema Ambiental.",
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
      "- La obtención y el mantenimiento de la certificación de calidad de producto.",
      "- La venta de productos metálicos que cumplan los requisitos de las normas vigentes aplicables y las necesidades de nuestros clientes.",
    ],
  },
  {
    title: "Política de Seguridad",
    paragraphs: [
      "Nuestro Sistema de Seguridad se controla con la obtención y el mantenimiento de la certificación de la norma ISO 45001",
      "Nuestra principal política es que el operador debe detener el proceso si no se encuentra dentro de las condiciones estándares de seguridad, hasta asegurarse de la ERRADICACIÓN de la condición insegura.",
    ],
  },
  {
    title: "Política Ambiental",
    paragraphs: [
      "Nuestro Sistema de Protección del Medio Ambiente se controla con la obtención y el mantenimiento de la certificación de la norma ISO 14001.",
      "Nuestra política es realizar inversiones y orientar nuestras operaciones de acuerdo AL concepto de tecnología limpia, de forma de prevenir y minimizar la generación de elementos contaminantes.",
    ],
  },
];

const sections = [
  { content: content[0], video: "/videos/13.mp4", reverse: false },
  { content: content[1], video: "/videos/home3.mp4", reverse: true },
  { content: content[2], video: "/videos/9.mp4", reverse: false },
  { content: content[3], video: "/videos/22.mp4", reverse: true },
  { content: content[4], video: "/videos/1.mp4", reverse: false },
];


export const About = () => {
  const sectionsRef = useRef([]);
  const titleRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  
  // Función para calcular el tamaño de fuente del título según el dispositivo
  const getHeadingFontSize = () => {
    if (isMobile) return "50px";
    if (isTablet) return "70px";
    return "100px";
  };

  // Animación para el título
  useEffect(() => {
    // Aplicar animación al título
    const tl = gsap.timeline({ delay: 0.5 });
    if (titleRef.current) {
      tl.fromTo(titleRef.current, 
        { y: 0, opacity: 0 }, 
        { y: isMobile ? "50px" : isTablet ? "150px" : "180px", opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    }
  }, [isMobile, isTablet]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const tween = gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: () => `top bottom-=100`,
          end: () => `top top+=40`,
          scrub: true,
          invalidateOnRefresh: true
        },
        ease: "none",
      });
  
      ScrollTrigger.create({
        trigger: section,
        start: "top 0%",
        pin: true,
        pinSpacing: false,
        id: 'pin',
        end: 'max',
        //end: '.cardStacking',
        invalidateOnRefresh: true,
      });
      
    });
  }, []);

  useEffect(() => {
    const lineWrappers = document.querySelectorAll(".line-wrapper");

    lineWrappers.forEach((wrapper) => {
      const overlay = wrapper.querySelector(".line-overlay");

      gsap.to(overlay, {
        scrollTrigger: {
          trigger: wrapper,
          start: "top 100%",
          end: "bottom 80%",
          scrub: 5,
        },
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  let globalIndex = 0;

  return (
    <section id="about" className="about">
      <NavBar />
      <div className="intro-about"></div>

      {/* Contenedor para ParallaxBox con título superpuesto */}
      <Box 
        sx={{
          position: "relative",
          height: "550px",
          width: "100%"
        }}
      >
        {/* ParallaxBox de fondo */}
        <ParallaxBox 
          image="/images/malla10.jpg"
          title="" 
          titleColor="text.primary" 
          titleLeft="2%" 
          titleBottom="10%" 
        />
        
        {/* Título Sobre Nosotros superpuesto */}
        <Box 
          position="absolute" 
          zIndex={10}
          ref={titleRef}
          sx={{
            top: 0,
            left: 0,
            width: "100%",
            textAlign: isMobile ? "center" : "left",
            paddingLeft: isMobile ? 0 : "20px",
            paddingTop: isMobile ? "20px" : "40px"
          }}
        >
          <Typography 
            variant="h2" 
            fontSize={getHeadingFontSize()} 
            fontFamily="'Archivo', sans-serif" 
            fontWeight={400} 
            color="#fff"
            sx={{
              textShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
          >
            Sobre Nosotros
          </Typography>
        </Box>
      </Box>

      <div className="about-sub-section">

      {sections.map((section, index) => (
        <Box
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          display="flex"
          flexDirection={{xs: "column", md: "row"}}
          sx={{ backgroundColor: "black" }}
        >
          {!section.reverse && (
            <Box width={{xs: "100%", md: "50%"}} fontSize={"25px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                height={{ sm:"60%", md:"70%", xl:"80%"}}
                padding={{ xs: "40px", sm: "50px", md: "60px", xl: "80px"}}
              >
                <Typography className="subtitle" variant="h3">{section.content.title}</Typography>
                <Box>
                  {section.content.paragraphs.map((item, i) => (
                    <div key={i} className="line-wrapper">
                      <p className="line" style={{ color: "#3a3a3a" }}>{item}</p>
                      <p className="line-overlay">{item}</p>
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          )}

          <Box width={{ xs: "100%", md: "50%"}} height={{ xs: "350px", md: "760px"}} sx={{ overflow: "hidden" }}>
            <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
              <source src={section.video} type="video/mp4" />
              Tu navegador no admite videos.
            </video>
          </Box>

          {section.reverse && (
            <Box width={{xs: "100%", md: "50%"}} fontSize={"25px"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                height={{ md:"70%", xl:"80%"}}
                padding={{ xs: "40px", sm: "50px", md: "60px", xl: "80px"}}
              >
                <h2 className="subtitle">{section.content.title}</h2>
                <Box>
                  {section.content.paragraphs.map((item, i) => (
                    <div key={i} className="line-wrapper">
                      <p className="line" style={{ color: "#3a3a3a" }}>{item}</p>
                      <p className="line-overlay">{item}</p>
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      ))}

      </div>
      <Footer />
    </section>
  );
};