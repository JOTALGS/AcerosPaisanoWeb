import React, { useRef, useEffect } from 'react';
import './SlidingContainers.css';

const SlidingContainers = () => {
  const items = [
    { title: "Alambres Galvanizados", description: "Uso agropecuario, cercos y vallado. Duradero y resistente a la corrosión.", buttonText: "Catálogo" },
    { title: "Estribos a medida", description: "Enderezado, Cortado y doblado. Sin desperdicio metálico. Material etiquetado para identificación en obra", buttonText: "Catálogo" },
    { title: "Barras Lisas", description: "Barras de superficie uniforme y lisa. Cortado a medida. Paquetes por cantidad de varillas", buttonText: "Catálogo" },
    { title: "Barras Conformadas", description: "Barras de superfice en espiral para mejorar su adherencia al concreto. Cortado a medida. Paquetes por cantidad de varillas", buttonText: "Catálogo" },
    { title: "Mallas Electrosoldadas", description: "Mallas estándar y especiales a medida. Empalmes a medida. Diámetros variados. Asesoramiento Personalizado", buttonText: "Catálogo" },
    { title: "Servicio 6", description: "Descripción del servicio 6", buttonText: "Catálogo" }
  ];

  const containerRef = useRef(null);
  const positionRef = useRef(0);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= 1;
        
        // Reset position when containers have moved one full width
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

  // Duplicate items to create seamless infinite scroll effect
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
            <button>
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingContainers;