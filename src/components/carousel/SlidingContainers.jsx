import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import './SlidingContainers.css';

const SlidingContainers = () => {
  const items = [
    {
      title: "Encuéntranos",
      description: "Garantizamos confianza en la entrega de nuestros productos cuando los necesites.",
      buttonText: "Encontrar Ahora",
      link: "https://www.google.com/maps?sca_esv=3d212cfe0cf3ba87&output=search&q=acero+paisano&source=lnms&fbs=ABzOT_BnMAgCWdhr5zilP5f1cnRvK9uZj3HA_MTJAA6lXR8yQOHuLLuvP9rOMou0fHm-Hy8eSubFbEldMsmAoEshXtP9tt6cBdTTkPoqUH2rp7zjSYFjeSGG4BlhQb6b48zLlYMqI6vZ4gzYBcaBejO-PTi4064AEXb_JBXmn7ualiXn97sfSS8bk6CCNpPXDUWiaaRBX5RLrgGRUMjLAZqV8zzpi3aJKg&entry=mc&ved=1t:200715&ictx=111",
      external: true
    },
    {
      title: "Productos y Servicios",
      description: "Productos de acero de alta calidad diseñados para cumplir con los más altos estándares de la industria.",
      buttonText: "Explorar Productos",
      link: "/productos-y-servicios",
      external: false
    },
    {
      title: "Conócenos",
      description: "Conoce quiénes somos, nuestra visión y nuestro compromiso con la excelencia.",
      buttonText: "Sobre Nosotros",
      link: "/sobre-nosotros",
      external: false
    },
    {
      title: "Contáctanos",
      description: "Equipo de expertos disponible para asesorarte en tu próximo proyecto.",
      buttonText: "Contactar",
      link: "/contacto",
      external: false
    }
  ];

  const allItems = [...items, ...items];

  return (
    <div className="fatherContainer">
      <div className="sliderContainer">
        {allItems.map((item, index) => (
          <Box key={index} sx={{ width: { xs: '60%', md: '33%' } }} className="sliderItem">
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {item.external ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>{item.buttonText}</button>
              </a>
            ) : (
              <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                <button>{item.buttonText}</button>
              </Link>
            )}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default SlidingContainers;