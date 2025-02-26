import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ZoomOutVideo({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { scale: 1.5 }, // Inicio con un ligero zoom-in
      {
        scale: 1, // Zoom-out al tamaño normal
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top center", // Empieza cuando el video está más visible
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "75vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          willChange: "transform",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </Box>
  );
}
