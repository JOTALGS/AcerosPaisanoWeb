import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './HomeModal.css'
import { use } from 'react';
import { useEffect } from 'react';

export const HomeModal = () => {
  
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
    <div className="interact" style={{ zIndex: 1000 }}>
      <div className="interact-item" onClick={() => {handleOpenModal("industrias");}}>
        <p>Hierro cortado y doblado</p>
      </div>
      <div className="interact-item" onClick={() => {handleOpenModal("mallas");}}>
        <p>Mallas electrosoldadas</p>
      </div>

      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div  style={{ zIndex: 1000 }}>
        {modalContent === "industrias" && (
          <div>
            <div className='industrias-container'>
              <div className="cyaind-container">
                <h2>Construcción y Arquitectura</h2>
                <p className="modal-description">Soluciones innovadoras para el desarrollo de infraestructuras seguras y eficientes.</p>
              </div>
              <div className="eind-container">
                <h2>Industria Energética</h2>
                <p className="modal-description">Materiales de alta resistencia para garantizar la seguridad y eficiencia energética.</p>
              </div>
              <div className="mfind-container">
                <h2>Manufactura Industrial</h2>
                <p className="modal-description">Componentes diseñados para optimizar procesos productivos.</p>

              </div>
              <div className="aind-container">
                <h2>Industria Agropecuaria</h2>
                <p className="modal-description">Soluciones estructurales adaptadas a las necesidades del sector agropecuario.</p>
              </div>
            </div>
            <div className='images-container'>
              <div className="images cyaind">
                <img src='./images/constru.png' alt="Construcción y Arquitectura" />
              </div>
              <div className="images eind">
                <img src='./images/energia.png' alt="Industria Energética" />
              </div>
              <div className="images mfind">
                  <img src='./images/industria.png' alt="Manufactura Industrial" />
              </div>
              <div className="images aind">
                <img src='./images/agro.png' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>
        )}

        {modalContent === "mallas" && (
          <div>
            <div className='industrias-container'>
              <div className="certificada-container">
                <h2>Certificación</h2>
                <p className="modal-description">Garantía de calidad y cumplimiento con normativas internacionales.</p>
              </div>
              <div className="medidas-container">
                <h2>Medidas Estándar</h2>
                <p className="modal-description">Diferentes opciones para adaptarse a múltiples aplicaciones.</p>
              </div>
              <div className="diametros-container">
                <h2>Diámetros</h2>
                <p className="modal-description">Variedad de grosores para proyectos de alta exigencia.</p>
              </div>
              <div className="presentacion-container">
                <h2>Presentación</h2>
                <p className="modal-description">Formatos versátiles para distintas necesidades constructivas.</p>
              </div>
              <div className="diseno-container">
                <h2>Diseño Especial</h2>
                <p className="modal-description">Soluciones personalizadas para proyectos específicos.</p>
              </div>
            </div>
            <div className='images-container'>
              <div className="images certificada">
                <img src='./images/constru.png' alt="Construcción y Arquitectura" />
              </div>
              <div className="images medidas">
                <img src='./images/energia.png' alt="Industria Energética" />
              </div>
              <div className="images diametros">
                  <img src='./images/industria.png' alt="Manufactura Industrial" />
              </div>
              <div className="images presentacion">
                <img src='./images/agro.png' alt="Industria Agropecuaria" />
              </div>
              <div className="images diseno">
                <img src='./images/agro.png' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>
        )}

        <svg 
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="#000000" 
          onClick={handleCloseModal}
          width="50px"
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
