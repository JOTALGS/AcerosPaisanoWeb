import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SlidingContainers.css';

const SlidingContainers = () => {
  const items = [
    {
      title: "Encuentra tu Sucursal",
      description: "Red de 8 almacenes regionales y distribuidores de confianza para entregar nuestros productos cuando los necesites.",
      buttonText: "Encontrar Ahora"
    },
    {
      title: "Gama Premium",
      description: "Productos de acero de alta calidad diseñados para cumplir con los más altos estándares de la industria.",
      buttonText: "Explorar Productos"
    },
    {
      title: "Centro de Recursos",
      description: "Accede a documentación técnica, certificaciones y las últimas novedades del sector.",
      buttonText: "Acceder"
    },
    {
      title: "Contáctanos",
      description: "Equipo de expertos disponible para asesorarte en tu próximo proyecto.",
      buttonText: "Contactar"
    }
  ];

  const containerRef = useRef(null);
  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= 2; // Aumentada la velocidad de 1 a 2

        if (positionRef.current <= -(container.scrollWidth / 2)) {
          positionRef.current = 0;
        }

        container.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const allItems = [...items, ...items];

  return (
    <div className="fatherContainer">
      <div
        ref={containerRef}
        className="sliderContainer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {allItems.map((item, index) => (
          <div
            key={index}
            className="sliderItem"
          >
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <Link
              to="/catalogue"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <button>
                {item.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingContainers;