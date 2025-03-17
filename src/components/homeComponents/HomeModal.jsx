import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './HomeModal.css'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const modalInfo = {
  "Hierro Cortado y Doblado": [
    { "title": "A Medida", "content": "Dimensiones precisas según necesidades del proyecto.", "image": "./images/doblado2.jpg", "alt": "Construcción y Arquitectura" },
    { "title": "Calidad", "content": "Procesos de calidad garantizada.", "image": "./images/doblado6.jpg", "alt": "Industria Energética" },
    { "title": "Cero Desperdicio", "content": "Trabajamos con rollos de alambrón que generan cero desperdicio.", "image": "./images/doblado4.jpg", "alt": "Manufactura Industrial" },
    { "title": "Ahorro", "content": "Economía de tiempo y mano de obra.", "image": "./images/doblado7.jpg", "alt": "Ahorro" },
    { "title": "Asistencia Técnica", "content": "Asesoramiento y seguimiento de obra por técnicos especializados.", "image": "./images/doblado5.jpg", "alt": "Industria Agropecuaria" }
  ],
  "Mallas Electrosoldadas": [
    { "title": "Certificación", "content": " Certificadas bajo norma UNIT 845:1995.", "image": "./images/certificado1.jpg", "alt": "Construcción y Arquitectura" },
    { "title": "Garantía de calidad", "content": "Producción validada por ensayos en laboratorio.", "image": "./images/mallas3.jpg", "alt": "Industria Energética" },
    { "title": "Medidas estándar", "content": "Todos los diámetros encontrados en plaza.", "image": "./images/mallas4.jpg", "alt": "Manufactura Industrial" },
    { "title": "Presentación", "content": "Adapatable a las necesidades del proyecto civíl.", "image": "./images/mallas2.jpg", "alt": "Industria Agropecuaria" },
    { "title": "Diseño Especial", "content": "Soluciones a medida, personalizadas para proyectos específicos.", "image": "./images/mallas6.jpg", "alt": "Industria Agropecuaria" }
  ],
  "Barras lisas y Conformadas": [
    { "title": "Certificación", "content": "Certificadas bajo normas UNIT 34:1995 Y UNIT 845:1995.", "image": "./images/barras.jpg", "alt": "Construcción y Arquitectura" },
    { "title": "Rendimiento y calidad", "content": "Procesos de calidad garantizada.", "image": "./images/barras1.jpg", "alt": "Industria Energética" },
    { "title": "Cero desperdicio", "content": "Barras cortadas a medida.", "image": "./images/barras2.jpg", "alt": "Manufactura Industrial" },
    { "title": "Maximización de recursos", "content": "Optimización de recursos en obra.", "image": "./images/barras3.jpg", "alt": "Ahorro" },
    { "title": "Logística optimizada", "content": "Traslado sencillo y seguro.", "image": "./images/barras5.jpg", "alt": "Industria Agropecuaria" }
  ],
  "Mallas Plegadas": [
    { "title": "Estandarización y confiabilidad", "content": "Combina las ventajas del cortado y doblado + mallas.", "image": "./images/plegada.jpg", "alt": "Construcción y Arquitectura" },
    { "title": "Alta precisión", "content": "Proceso industrializado con plegadora automatizada.", "image": "./images/plegada1.jpg", "alt": "Industria Energética" },
    { "title": "Optimización en obra", "content": "Elimina procesos manuales y mejora la productividad.", "image": "./images/plegada2.jpg", "alt": "Manufactura Industrial" },
    { "title": "Soluciones adaptables", "content": "Formatos versátiles para distintas necesidades constructivas.", "image": "./images/plegada3.jpg", "alt": "Industria Agropecuaria" },
    { "title": "Diseño optimizado", "content": "Adaptamos cada detalle a los requerimientos de la obra.", "image": "./images/plegada6.jpg", "alt": "Industria Agropecuaria" }
  ]
}

export const HomeModal = ({ info }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    // Get all containers
    const containers = document.querySelectorAll('.industrias-container > div');
    
    // Show the first image by default when the component mounts
    if (containers.length > 0) {
      const firstContainer = containers[0];
      const indName = firstContainer.classList[0].split('-')[0];
      const firstImage = document.querySelector(`.images.${indName}`);
      
      if (firstImage) {
        firstImage.style.opacity = "1";
        firstImage.style.transform = "translateX(30px)";
      }
    }
    
    // Set up event listeners for each container
    containers.forEach(container => {
      container.addEventListener('mouseenter', () => {
        // Hide all images first
        document.querySelectorAll('.images').forEach(img => {
          img.style.opacity = "0";
          img.style.transform = "translateX(0)";
        });
        
        // Show the current image
        const indName = container.classList[0].split('-')[0];
        const image = document.querySelector(`.images.${indName}`);
        
        if (image) {
          image.style.opacity = "1";
          image.style.transform = "translateX(30px)";
          image.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
        }
      });
      
      // Remove mouseleave event - we don't want to hide images on mouse leave anymore
    });
    
    // Clean up event listeners on component unmount
    return () => {
      containers.forEach(container => {
        container.removeEventListener('mouseenter', () => {});
      });
    };
  }, []);
  

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
      <Box width={"100%"} height={"100vh"} sx={{ overflow: 'hidden', }} isOpen={isModalOpen} onClose={handleCloseModal} >
        <div style={{ zIndex: 1000 }}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              className='industrias-container'
              sx={{
                height: '100%',
                width: { xs: '90%', md: '40%', xl: '40%'},
                marginTop: '10vh',
                paddingRight: { xs: '15px', md: '1px', xl: '1px' },
                display: 'flex',
                alignSelf: 'flex-end',
                justifySelf: 'flex-end',
                textAlign: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 0,
                color: '#666',
                fontSize: '1.3rem',
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: '-1px',
                position: 'relative',
                zIndex: 1000,
                '& div:hover h2': {
                  color: { xs: 'white', md: 'white', xl: 'white'},
                },
                '& div:hover .modal-description': {
                  color: { xs: 'white', md: 'white', xl: 'white'},
                  transition: 'color 0.3s ease-in-out',
                }
              }}
            >
              <Box
                className="cyaind-container modal-entry"
                sx={{
                  borderRadius: "10px",
                  paddingInline: { xs: "15px", md: "0px", xl: "0px" },
                  paddingBlock: { xs: "25px", md: "10px", xl: "20px" },
                  marginBottom: { xs: "10px", md: "0px", xl: "0px" },
                  width: "fit-content",
                  minWidth: "1000px",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&:hover": {
                    backgroundColor: {xs: "rgba(53, 53, 53, 0.76)", md: "transparent", lg: "transparent"}, // Translucent gray
                  },
                }}
              >
                <Box width={{ xs: "350px", md: "100%", xl: "100%" }}>
                  <span className="number" style={{ fontWeight: 'bold'}}>01.</span>
                  <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' } }fontWeight={600}>{ modalInfo[info][0].title}</Typography>
                  <Typography paddingBlock={{ xs: '0px', md: '0px', xl: '15px' }} fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.25rem' }} className="modal-description">{modalInfo[info][0].content}</Typography>
                </Box>
              </Box>
              <Box
                className="eind-container modal-entry"
                sx={{
                  borderRadius: "10px",
                  paddingInline: { xs: "15px", md: "0px", xl: "0px" },
                  paddingBlock: { xs: "25px", md: "10px", xl: "20px" },
                  marginBottom: { xs: "10px", md: "0px", xl: "0px" },
                  width: "fit-content",
                  minWidth: "1000px",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&:hover": {
                    backgroundColor: {xs: "rgba(53, 53, 53, 0.76)", md: "transparent", lg: "transparent"}, // Translucent gray
                  },
                }}
              >
                <Box width={{ xs: "350px", md: "100%", xl: "100%" }}>
                  <span className="number" style={{ fontWeight: 'bold'}}>02.</span>
                  <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][1].title}</Typography>
                  <Typography paddingBlock={{ xs: '0px', md: '0px', xl: '15px' }} fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.25rem' }} className="modal-description">{modalInfo[info][1].content}</Typography>
                </Box>
              </Box>

              <Box
                className="mfind-container modal-entry"
                sx={{
                  borderRadius: "10px",
                  paddingInline: { xs: "15px", md: "0px", xl: "0px" },
                  paddingBlock: { xs: "25px", md: "10px", xl: "20px" },
                  marginBottom: { xs: "10px", md: "0px", xl: "0px" },
                  width: "fit-content",
                  minWidth: "1000px",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&:hover": {
                    backgroundColor: {xs: "rgba(53, 53, 53, 0.76)", md: "transparent", lg: "transparent"}, // Translucent gray
                  },
                }}
              >
                <Box width={{ xs: "350px", md: "100%", xl: "100%" }}>
                  <span className="number" style={{ fontWeight: 'bold'}}>03.</span>
                  <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][2].title}</Typography>
                  <Typography paddingBlock={{ xs: '0px', md: '0px', xl: '15px' }} fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.25rem' }} className="modal-description">{modalInfo[info][2].content}</Typography>
                </Box>
              </Box>

              <Box
                className="mahorro-container modal-entry"
                sx={{
                  borderRadius: "10px",
                  paddingInline: { xs: "15px", md: "0px", xl: "0px" },
                  paddingBlock: { xs: "15px", md: "10px", xl: "20px" },
                  marginBottom: { xs: "10px", md: "0px", xl: "0px" },
                  width: "fit-content",
                  minWidth: "1000px",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&:hover": {
                    backgroundColor: {xs: "rgba(53, 53, 53, 0.76)", md: "transparent", lg: "transparent"}, // Translucent gray
                  },
                }}
              >
                <Box width={{ xs: "350px", md: "100%", xl: "100%" }}>
                  <span className="number" style={{ fontWeight: 'bold'}}>04.</span>
                  <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][3].title}</Typography>
                  <Typography paddingBlock={{ xs: '0px', md: '0px', xl: '15px' }} fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.25rem' }} className="modal-description">{modalInfo[info][3].content}</Typography>
                </Box>
              </Box>

              <Box
                className="aind-container modal-entry"
                sx={{
                  borderRadius: "10px",
                  paddingInline: { xs: "15px", md: "0px", xl: "0px" },
                  paddingBlock: { xs: "15px", md: "10px", xl: "20px" },
                  marginBottom: { xs: "10px", md: "0px", xl: "0px" },
                  width: "fit-content",
                  minWidth: "1000px",
                  transition: "background-color 0.3s ease-in-out", // Smooth effect
                  "&:hover": {
                    backgroundColor: {xs: "rgba(53, 53, 53, 0.76)", md: "transparent", lg: "transparent"}, // Translucent gray
                  },
                }}
              >
                <Box width={{ xs: "350px", md: "100%", xl: "100%" }}>
                  <span className="number" style={{ fontWeight: 'bold'}}>05.</span>
                  <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][4].title}</Typography>
                  <Typography paddingBlock={{ xs: '0px', md: '0px', xl: '15px' }} fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.25rem' }} className="modal-description">{modalInfo[info][4].content}</Typography>
                </Box>
              </Box>
            </Box>
            <Box width={{ xs: "100%", md: "fit-content"}} sx={{ position: "absolute", top: "20%", left: "10%" }} className='images-container'>
              <Box className="images cyaind" >
                <Box
                  component="img"
                  src={modalInfo[info][0].image}
                  alt={modalInfo[info][0].alt}
                  sx={{
                    position: "fixed",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-50%, -20%)",
                    width: { xs: "120vw", md: "75vw", xl: "75vw" },
                    height: "100vh",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>
              <Box className="images eind">
                <Box
                  component="img"
                  src={modalInfo[info][1].image}
                  alt={modalInfo[info][1].alt}
                  sx={{
                    position: "fixed",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-50%, -20%)",
                    width: { xs: "120vw", md: "75vw", xl: "75vw" },
                    height: "100vh",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>

              <Box className="images mfind">
                <Box
                  component="img"
                  src={modalInfo[info][2].image}
                  alt={modalInfo[info][2].alt}
                  sx={{
                    position: "fixed",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-50%, -20%)",
                    width: { xs: "120vw", md: "75vw", xl: "75vw" },
                    height: "100vh",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>

              <Box className="images mahorro">
                <Box
                  component="img"
                  src={modalInfo[info][3].image}
                  alt={modalInfo[info][3].alt}
                  sx={{
                    position: "fixed",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-50%, -20%)",
                    width: { xs: "120vw", md: "75vw", xl: "75vw" },
                    height: "100vh",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>

              <Box className="images aind">
                <Box
                  component="img"
                  src={modalInfo[info][4].image}
                  alt={modalInfo[info][4].alt}
                  sx={{
                    position: "fixed",
                    top: "50%",
                    left: "40%",
                    transform: "translate(-50%, -20%)",
                    width: { xs: "120vw", md: "75vw", xl: "75vw" },
                    height: "100vh",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Link to='/'>
            <svg 
              viewBox="0 0 1024 1024" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="#000000"
              width="5vh"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
                transition: "fill 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => e.currentTarget.querySelector("path").setAttribute("fill", "#ffffff")}
              onMouseLeave={(e) => e.currentTarget.querySelector("path").setAttribute("fill", "#9e9e9e")}
            >
              <g id="SVGRepo_iconCarrier">
                <path fill="#9e9e9e" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
              </g>
            </svg>
          </Link>
        </div>
      </Box>
  )
}
