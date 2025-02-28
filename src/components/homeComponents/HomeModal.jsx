import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './HomeModal.css'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react';


const modalInfo = {
  "Hierro Cortado y Doblado": [
    {
      "title": "A Medida",
      "content": "Dimensiones precisas según necesidades del proyecto.",
      "image": "./images/doblado2.jpg",
      "alt": "Construcción y Arquitectura"
    },
    {
      "title": "Calidad",
      "content": "Procesos de calidad garantizada.",
      "image": "./images/doblado6.jpg",
      "alt": "Industria Energética"
    },
    {
      "title": "Cero Desperdicio",
      "content": "Componentes diseñados para optimizar procesos productivos.",
      "image": "./images/doblado4.jpg",
      "alt": "Manufactura Industrial"
    },
    {
      "title": "Ahorro",
      "content": "Economía de tiempo y mano de obra.",
      "image": "./images/doblado7.jpg",
      "alt": "Ahorro"
    },
    {
      "title": "Asistencia Técnica",
      "content": "Asesoramiento y seguimiento de obra por técnicos especializados.",
      "image": "./images/doblado5.jpg",
      "alt": "Industria Agropecuaria"
    }
  ],
  "Mallas Electrosoldadas": [
    {
      "title": "Certificación",
      "content": "Garantía de calidad y cumplimiento con normativas internacionales.",
      "image": "./images/certificado1.jpg",
      "alt": "Construcción y Arquitectura"
    },
    {
      "title": "Medidas Estándar",
      "content": "Diferentes opciones para adaptarse a múltiples aplicaciones.",
      "image": "./images/mallas3.jpg",
      "alt": "Industria Energética"
    },
    {
      "title": "Diámetros",
      "content": "Variedad de grosores para proyectos de alta exigencia.",
      "image": "./images/mallas4.jpg",
      "alt": "Manufactura Industrial"
    },
    {
      "title": "Presentación",
      "content": "Formatos versátiles para distintas necesidades constructivas.",
      "image": "./images/mallas2.jpg",
      "alt": "Industria Agropecuaria"
    },
    {
      "title": "Diseño Especial",
      "content": "Soluciones personalizadas para proyectos específicos.",
      "image": "./images/mallas6.jpg",
      "alt": "Industria Agropecuaria"
    }
  ],
  "clientes": [
    {
      "title": "A Medida",
      "content": "Dimensiones precisas según necesidades del proyecto.",
      "image": "./images/doblado2.jpg",
      "alt": "Construcción y Arquitectura"
    },
    {
      "title": "Calidad",
      "content": "Procesos de calidad garantizada.",
      "image": "./images/doblado6.jpg",
      "alt": "Industria Energética"
    },
    {
      "title": "Cero Desperdicio",
      "content": "Componentes diseñados para optimizar procesos productivos.",
      "image": "./images/doblado4.jpg",
      "alt": "Manufactura Industrial"
    },
    {
      "title": "Ahorro",
      "content": "Economía de tiempo y mano de obra.",
      "image": "./images/doblado7.jpg",
      "alt": "Ahorro"
    },
    {
      "title": "Asistencia Técnica",
      "content": "Asesoramiento y seguimiento de obra por técnicos especializados.",
      "image": "./images/doblado5.jpg",
      "alt": "Industria Agropecuaria"
    }
  ]
}

export const HomeModal = ({ info }) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    document.querySelectorAll('.industrias-container > div').forEach(container => {
      container.addEventListener('mouseenter', () => {
        const indName = container.classList[0].split('-')[0]; // Extract industry name
        const image = document.querySelector(`.images.${indName}`);
        
        image.style.opacity = "1";
        image.style.transform = "translateX(30px)";
        image.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      });
    
      container.addEventListener('mouseleave', () => {
        const indName = container.classList[0].split('-')[0];
        const image = document.querySelector(`.images.${indName}`);
        
        image.style.opacity = "0";
        image.style.transform = "translateX(0)";
      });
    });
  })
  

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
    <div className="interact" style={{ zIndex: 0 }}>
      <div className="interact-item" style={{ zIndex: 0 }}onClick={() => {handleOpenModal("industrias");}}>
        <p>{info}</p>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div style={{ zIndex: 1000 }}>
          <div>
            <div className='industrias-container'>
              <Box paddingBlock={{ xs: '5px', md: '10px', xl: '15px' }} className="cyaind-container modal-entry">
                <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{ modalInfo[info][0].title}</Typography>
                <p className="modal-description">{modalInfo[info][0].content}</p>
              </Box>
              <Box paddingBlock={{ xs: '5px', md: '10px', xl: '15px' }} className="eind-container">
                <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][1].title}</Typography>
                <p className="modal-description">{modalInfo[info][1].content}</p>
              </Box>
              <Box paddingBlock={{ xs: '5px', md: '10px', xl: '15px' }} className="mfind-container">
                <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][2].title}</Typography>
                <p className="modal-description">{modalInfo[info][2].content}</p>
              </Box>
              <Box paddingBlock={{ xs: '5px', md: '10px', xl: '15px' }} className="mahorro-container">
                <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][3].title}</Typography>
                <p className="modal-description">{modalInfo[info][3].content}</p>
              </Box>
              <Box paddingBlock={{ xs: '5px', md: '10px', xl: '15px' }} className="aind-container">
                <Typography variant="h2" fontSize={{ xs: '1.25rem', sm: '1.5rem', md: '2rem' }} fontWeight={600}>{modalInfo[info][4].title}</Typography>
                <p className="modal-description">{modalInfo[info][4].content}</p>
              </Box>
            </div>
            <div className='images-container'>
              <div className="images cyaind">
                <img src='./images/doblado2.jpg' alt="Construcción y Arquitectura" />
              </div>
              <div className="images eind">
                <img src='./images/doblado6.jpg' alt="Industria Energética" />
              </div>
              <div className="images mfind">
                  <img src='./images/doblado4.jpg' alt="Manufactura Industrial" />
              </div>
              <div className="images mahorro">
                <img src='./images/doblado7.jpg' alt="Ahorro" />
              </div>
              <div className="images aind">
                <img src='./images/doblado5.jpg' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>

          <svg 
            viewBox="0 0 1024 1024" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="#000000" 
            onClick={handleCloseModal}
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
        </div>
      </Modal>
    </div>
  )
}
