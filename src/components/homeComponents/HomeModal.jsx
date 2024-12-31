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
              <div className="images cya">
                <img src='./images/constru.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
            <div className="aytind-container">
              <h2>Automotriz y Transporte</h2>
              <div className="images ayt">
                <img src='./images/automotriz.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
            <div className="eind-container">
              <h2>Industria Energetica</h2>
              <div className="images eind">
                <img src='./images/energia.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
            <div className="mfind-container">
              <h2>Manufactura Industrial</h2>
              <div className="images mfi">
                <img src='./images/industria.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
            <div className="aind-container">
              <h2>Industria Agropecuaria</h2>
              <div className="images aind">
                <img src='./images/agro.png' alt="Construcción y Arquitectura" />
              </div>
            </div>
          </div>
        )}

        {modalContent === "mallas" && (
          <div>
            <h2>Mallas</h2>
            <p>mallas</p>
          </div>
        )}
        <svg 
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="#000000" 
          onClick={handleCloseModal}
          width={"50px"}
          style={{cursor: "pointer", position: "absolute", top: "10px", right: "10px"}}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill="#9e9e9e" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
          </g>
        </svg>
      </Modal>
    </div>
  )
}