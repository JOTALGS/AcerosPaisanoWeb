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
          <Box key={index} className="sliderItem">
            <div>
              <Box component="h3" sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" }, fontWeight: 600 }}>{item.title}</Box>
              <p>{item.description}</p>
              <Box sx={{ color: "transparent", position: 'absolute', zIndex: -1, pointerEvents: 'none', height: 0, overflow: 'hidden' }}>
                Aceros Paisano. Lideres en acero en Uruguay. Acero para la construccion.
                Cortes en acero. Aceros a medida. Todo lo que nececites en aceros. Fabrica de Acerosa
                Barras de acero. Vigas de acero. Planchas de acero. Tubos de acero.
                Barras de acero corrugado. Vigas de acero laminado. Planchas de acero inoxidable.
                Tubos de acero al carbono. Barras de acero para cemento.
                Aceros Paisano. Lideres en acero en Uruguay. Acero para la construccion.
                Cortes en acero. Aceros a medida. Todo lo que nececites en aceros. Fabrica de Acerosa
                Barras de acero. Vigas de acero. Planchas de acero. Tubos de acero.
                Barras de acero corrugado. Vigas de acero laminado. Planchas de acero inoxidable.
                Tubos de acero al carbono. Barras de acero para cemento.
                Aceros Paisano. Lideres en acero en Uruguay. Acero para la construccion.
                Cortes en acero. Aceros a medida. Todo lo que nececites en aceros. Fabrica de Acerosa
                Barras de acero. Vigas de acero. Planchas de acero. Tubos de acero.
                Barras de acero corrugado. Vigas de acero laminado. Planchas de acero inoxidable.
                Tubos de acero al carbono. Barras de acero para cemento.                 Aceros Paisano. Lideres en acero en Uruguay. Acero para la construccion.
                Cortes en acero. Aceros a medida. Todo lo que nececites en aceros. Fabrica de Acerosa
                Barras de acero. Vigas de acero. Planchas de acero. Tubos de acero.
                Barras de acero corrugado. Vigas de acero laminado. Planchas de acero inoxidable.
                Tubos de acero al carbono. Barras de acero para cemento.
              </Box>
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