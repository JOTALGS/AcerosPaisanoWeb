import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxVideoBox({ videoSrc, title, titleColor, titleLeft = "2%", titleBottom = "14%" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { y: "-10%" }, // Comienza un poco más arriba
      {
        y: "10%", // Se desplaza ligeramente hacia abajo
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "75vh",
        marginTop: "40px",
        marginBottom: "40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Box>
  );
}
