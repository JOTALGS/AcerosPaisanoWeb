import React, { useState } from 'react'
import Modal from '../modal/Modal'
import { use } from 'react';
import { useEffect } from 'react';

export const HomeModal2 = () => {
  
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
        <p>Barras lisas y Conformadas</p>
      </div>
      <div className="interact-item" onClick={() => {handleOpenModal("mallas");}}>
        <p>Mallas Plegadas</p>
      </div>

      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div  style={{ zIndex: 1000 }}>
        {modalContent === "industrias" && (
          <div>
            <div className='industrias-container'>
            <div className="cyaind-container">
              <span className="number">01.</span>
              <h2>Certificación</h2>
              <p className="modal-description">Certificadas bajo normas UNIT 34:1995 Y UNIT 845:1995.</p>
            </div>

            <div className="eind-container">
              <span className="number">02.</span>
              <h2>Rendimiento y calidad</h2>
              <p className="modal-description">Procesos de calidad garantizada.</p>
            </div>

            <div className="mfind-container">
              <span className="number">03.</span>
              <h2>Cero desperdicio</h2>
              <p className="modal-description">Barras cortadas a medida.</p>
            </div>

            <div className="mahorro-container">
              <span className="number">04.</span>
              <h2>Maximización de recursos</h2>
              <p className="modal-description">Optimización de recursos en obra.</p>
            </div>

            <div className="aind-container">
              <span className="number">05.</span>
              <h2>Logística optimizada</h2>
              <p className="modal-description">Traslado sencillo y seguro.</p>
            </div>

            </div>
            <div className='images-container'>
              <div className="images cyaind">
                <img src='./images/barras.jpg' alt="Construcción y Arquitectura" />
              </div>
              <div className="images eind">
                <img src='./images/barras1.jpg' alt="Industria Energética" />
              </div>
              <div className="images mfind">
                  <img src='./images/barras2.jpg' alt="Manufactura Industrial" />
              </div>
              <div className="images mahorro">
                <img src='./images/barras3.jpg' alt="Ahorro" />
              </div>
              <div className="images aind">
                <img src='./images/barras5.jpg' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>
        )}


        {modalContent === "mallas" && (
          <div>
            <div className='industrias-container'>
            <div className="certificada-container">
              <span className="number">01.</span>
              <h2>Estandarización y confiabilidad</h2>
              <p className="modal-description">Combina las ventajas del cortado y doblado + mallas.</p>
            </div>

            <div className="medidas-container">
              <span className="number">02.</span>
              <h2>Alta precisión</h2>
              <p className="modal-description">Proceso industrializado con plegadora automatizada.</p>
            </div>

            <div className="diametros-container">
              <span className="number">03.</span>
              <h2>Optimización en obra</h2>
              <p className="modal-description">Elimina procesos manuales y mejora la productividad.</p>
            </div>

            <div className="presentacion-container">
              <span className="number">04.</span>
              <h2>Soluciones adaptables</h2>
              <p className="modal-description">Formatos versátiles para distintas necesidades constructivas.</p>
            </div>

            <div className="diseno-container">
              <span className="number">05.</span>
              <h2>Diseño optimizado</h2>
              <p className="modal-description">Adaptamos cada detalle a los requerimientos de la obra.</p>
            </div>
            </div>
            <div className='images-container'>
              <div className="images certificada">
                <img src='./images/plegada.jpg' alt="Construcción y Arquitectura" />
              </div>
              <div className="images medidas">
                <img src='./images/plegada1.jpg' alt="Industria Energética" />
              </div>
              <div className="images diametros">
                  <img src='./images/plegada2.jpg' alt="Manufactura Industrial" />
              </div>
              <div className="images presentacion">
                <img src='./images/plegada3.jpg' alt="Industria Agropecuaria" />
              </div>
              <div className="images diseno">
                <img src='./images/plegada6.jpg' alt="Industria Agropecuaria" />
              </div>
            </div>
          </div>
        )}

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
            zIndex: "1000",
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