import React, { useState } from 'react'
import Modal from '../modal/Modal'
import './HomeModal.css'

export const HomeModal = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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
    <div className="interact">
      <div className="interact-item" onClick={() => {handleOpenModal("industrias"); window.scrollTo(0, 2000);}}>
        <p>Industrias</p>
      </div>
      <div className="interact-item" onClick={() => {handleOpenModal("mallas"); window.scrollTo(0, 2000);}}>
        <p>Mallas electrosoldadas</p>
      </div>

      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent === "industrias" && (
          <div className='industrias-container'>
            <div className="cyaind-container">
              <h2>Construcción y Arquitectura</h2>
              <p className="modal-description">Soluciones innovadoras para el desarrollo de infraestructuras seguras y eficientes.</p>
              <div className="images cya">
                <img src='./images/constru.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
            <div className="eind-container">
              <h2>Industria Energética</h2>
              <p className="modal-description">Materiales de alta resistencia para garantizar la seguridad y eficiencia energética.</p>
              <div className="images eind">
                <img src='./images/energia.png' alt="Industria Energética" />
              </div>
            </div>
            <div className="mfind-container">
              <h2>Manufactura Industrial</h2>
              <p className="modal-description">Componentes diseñados para optimizar procesos productivos.</p>
              <div className="images mfi">
                <img src='./images/industria.png' alt="Manufactura Industrial" />
              </div>
            </div>
            <div className="aind-container">
              <h2>Industria Agropecuaria</h2>
              <p className="modal-description">Soluciones estructurales adaptadas a las necesidades del sector agropecuario.</p>
              <div className="images aind">
                <img src='./images/agro.png' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>
        )}

        {modalContent === "mallas" && (
          <div className='mallas-container'>
            <div className="malla-certificada-container">
              <h2>Certificación</h2>
              <p className="modal-description">Garantía de calidad y cumplimiento con normativas internacionales.</p>
              <div className="images malla-certificada">
                <img src='./images/certificacion.png' alt="Certificación" />
              </div>
            </div>
            <div className="malla-medidas-container">
              <h2>Medidas Estándar</h2>
              <p className="modal-description">Diferentes opciones para adaptarse a múltiples aplicaciones.</p>
              <div className="images malla-medidas">
                <img src='./images/medidas.png' alt="Medidas Estándar" />
              </div>
            </div>
            <div className="malla-diametros-container">
              <h2>Diámetros</h2>
              <p className="modal-description">Variedad de grosores para proyectos de alta exigencia.</p>
              <div className="images malla-diametros">
                <img src='./images/diametros.png' alt="Diámetros" />
              </div>
            </div>
            <div className="malla-presentacion-container">
              <h2>Presentación</h2>
              <p className="modal-description">Formatos versátiles para distintas necesidades constructivas.</p>
              <div className="images malla-presentacion">
                <img src='./images/presentacion.png' alt="Presentación" />
              </div>
            </div>
            <div className="malla-diseno-container">
              <h2>Diseño Especial</h2>
              <p className="modal-description">Soluciones personalizadas para proyectos específicos.</p>
              <div className="images malla-diseno">
                <img src='./images/diseno.png' alt="Diseño Especial" />
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
      </Modal>
    </div>
  )
}
