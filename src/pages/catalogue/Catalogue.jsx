import React, { useEffect, useRef, useState } from 'react';
import './Catalogue.css';
import { NavBar } from "../../components/navbar/NavBar";
import ButtonHoverBg from '../../components/CustomButton/ButtonHoverBg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function Catalogue() {
  const [viewMode, setViewMode] = useState('list');
  const filtersRef = useRef(null);

  const products = [
    {
      id: 1,
      title: 'Malla Electrosoldada (a medida)',
      description: 'Malla metálica robusta, fabricada a medida para refuerzos en concreto y estructuras específicas.',
      price: 'Entregas a: Montevideo',
      image: './images/image4.png',
    },
    {
      id: 2,
      title: 'Barras Lisas (superficie uniforme y lisa)',
      description: 'Barras de acero de alta calidad con superficie lisa, ideales para proyectos estructurales y de construcción.',
      price: 'Entregas a: Montevideo',
      image: './images/image1.png',
    },
    {
      id: 3,
      title: 'Barras Conformadas (superficie rugosa)',
      description: 'Barras de acero con textura rugosa, diseñadas para un mejor agarre en concreto y estructuras reforzadas.',
      price: 'Entregas a: Montevideo',
      image: './images/image2.png',
    },
    {
      id: 4,
      title: 'Hierro Cortado y Doblado (a medida)',
      description: 'Servicio personalizado de corte y doblado de hierro para cumplir con requisitos precisos en obra.',
      price: 'Entregas a: Montevideo',
      image: './images/image5.png',
    },
  ];

  useEffect(() => {

    const trigger = ScrollTrigger.create({
      trigger: filtersRef.current,
      start: "top 10%",
      end: "+=138%",
      pin: true,
      scrub: 5,
      pinSpacing: true,
      markers: false,
      onEnter: () => {
        console.log("Element pinned");
      },
      onLeave: () => {
        console.log("Element unpinned");
      }
    });

    // Cleanup
    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <section className='catalogue'>
        <NavBar />
        <div className="catalogue-container">
        {/* Fixed Filters Section */}
        <div className="catalogue-filters">
          <h2>Catálogo</h2>
          <div ref={filtersRef} className={`filters-container`}>
            <div className="filters">
              <label className="filter-title">Nuestros servicios y productos son manufacturados a medida para cada cliente.</label>
              <div className="filter-subcontainer">
                <label>
                    No tardes en contactarnos:
                </label>
                <Link to={"/contact"}>
                  <ButtonHoverBg label="Contáctanos" buttonStyles={"filters-button"} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Products Section */}
        <div className="catalogue-products">
            <div className="view-toggle">
              <button className='view-toggle-button' onClick={() => setViewMode('grid')}><svg viewBox="0 0 16 16" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1H1V7H7V1ZM7 9H1V15H7V9ZM9 1H15V7H9V1ZM15 9H9V15H15V9Z" fill="#000000"></path> </g></svg>Grid View</button>
              <button className='view-toggle-button' onClick={() => setViewMode('list')}><svg fill="#000000" viewBox="-4 0 32 32" width="30" height="30" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>list</title> <path d="M4.031 8.844c0-1.125-0.875-2-2-2s-2.031 0.875-2.031 2 0.906 2.031 2.031 2.031 2-0.906 2-2.031zM6.375 10.5h17.625v-3.25h-17.625v3.25zM4.031 16c0-1.125-0.875-2.031-2-2.031s-2.031 0.906-2.031 2.031 0.906 2 2.031 2 2-0.875 2-2zM6.375 17.625h17.625v-3.25h-17.625v3.25zM4.031 23.125c0-1.125-0.875-2-2-2s-2.031 0.875-2.031 2 0.906 2.031 2.031 2.031 2-0.906 2-2.031zM6.375 24.719h17.625v-3.219h-17.625v3.219z"></path> </g></svg>List View</button>
            </div>
            <div className={`products-list ${viewMode}`}>
            {products.map((product) => (
                <div className={`product-item ${viewMode}`} key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div className="product-info" style={{ maxWidth: viewMode === 'grid' ? '100%' : undefined }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <img style={{ backgroundColor: '#e40000', padding: '5px', border: 'none', width: '150px', margin: '0px', marginRight: '15px' }} src='./images/paisanologo.png' />
                        <h3 className="product-title">{product.title}</h3>
                      </div>
                      <p className="product-description">{product.description}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="product-price">{product.price}</span>
                      {product.id === 1 && (
                        <button style={{ backgroundColor: 'transparent', border: 'none', padding: '10px', cursor: 'pointer' }} onClick={() => {handleOpenModal("industrias"); window.scrollTo(0, 2000);}}>Ver mas</button>
                      )}
                    </div>
                  </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
}
