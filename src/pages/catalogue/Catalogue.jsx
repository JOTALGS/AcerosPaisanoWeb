import React, { useEffect, useRef, useState } from 'react';
import './Catalogue.css';
import { NavBar } from "../../components/navbar/NavBar";
import ButtonHoverBg from '../../components/CustomButton/ButtonHoverBg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Catalogue() {
  const [viewMode, setViewMode] = useState('list');
  const filtersRef = useRef(null);

  const products = [
    {
      id: 1,
      title: 'Barras Lisas (superficie uniforme y lisa)',
      description: 'Barras de acero de alta calidad con superficie lisa, ideales para proyectos estructurales y de construcción.',
      price: 'Entregas a: Montevideo',
      image: './images/image1.jpg',
    },
    {
      id: 2,
      title: 'Barras Conformadas (superficie rugosa)',
      description: 'Barras de acero con textura rugosa, diseñadas para un mejor agarre en concreto y estructuras reforzadas.',
      price: 'Entregas a: Montevideo',
      image: './images/image2.jpg',
    },
    {
      id: 3,
      title: 'Alambres Galvanizados (rollo ovalado)',
      description: 'Alambres resistentes a la corrosión, perfectos para cercados, amarres y usos industriales.',
      price: 'Entregas a: Montevideo',
      image: './images/image3.jpg',
    },
    {
      id: 4,
      title: 'Malla Electrosoldada (a medida)',
      description: 'Malla metálica robusta, fabricada a medida para refuerzos en concreto y estructuras específicas.',
      price: 'Entregas a: Montevideo',
      image: './images/image4.jpg',
    },
    {
      id: 5,
      title: 'Hierro Cortado y Doblado (a medida)',
      description: 'Servicio personalizado de corte y doblado de hierro para cumplir con requisitos precisos en obra.',
      price: 'Entregas a: Montevideo',
      image: './images/image5.jpg',
    },
    {
      id: 6,
      title: 'Product 6 title (product detail)',
      description: 'This is the description for product 6.',
      price: 'Entregas a: Montevideo',
      image: './images/image2.jpg',
    },
  ];

  useEffect(() => {

    const trigger = ScrollTrigger.create({
      trigger: filtersRef.current,
      start: "top 10%",
      end: "+=150%",
      pin: true,
      scrub: 3,
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
              <label className="filter-title">Filter Title</label>
              <div className="filter-subcontainer">
                <label>
                    Filter 1
                </label>
                <label>
                    Filter 2
                </label>
              </div>
            </div>
            <div className="filters">
              <label className="filter-title">Filter Title</label>
              <div className="filter-subcontainer">
                <label>
                    Filter 1
                </label>
                <label>
                    Filter 2
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Products Section */}
        <div className="catalogue-products">
            <div className="view-toggle">
              <ButtonHoverBg buttonStyles="view-toggle-button" label="Grid View" onClick={() => setViewMode('grid')}/>
              <ButtonHoverBg buttonStyles="view-toggle-button" label="List View" onClick={() => setViewMode('list')}/>
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
                    <div>
                      <span className="product-price">{product.price}</span>
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
