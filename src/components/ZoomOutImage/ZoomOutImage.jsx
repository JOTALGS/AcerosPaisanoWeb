import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutImage({ imageSrc }) {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1.2 }, // La imagen empieza con un zoom
      {
        scale: 1, // Hace zoom-out hasta el tamaño normal
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2, // Suaviza la animación con el scroll
        },
      }
    );
  }, []);

  return (
    <Box
      ref={imageRef}
      sx={{
        width: "100vw",
        height: "100vh", // Ocupa toda la pantalla
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
