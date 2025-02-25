import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function ParallaxVideoBox({ videoSrc, title, titleColor, titleLeft = "2%", titleBottom = "14%" }) {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { y: "0%" },
      {
        y: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      }
    );
  }, []);

  return (
    <Box
    ref={boxRef}
    sx={{
        width: "100vw",
        height: "100vh",
        marginTop: "40px",
        marginBottom: "40px",
        marginLeft: "0px",
        position: "relative",
        overflow: "hidden",
        backgroundAttachment: "fixed",
    }}
    >
      <video
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

      {title && (
        <Box position="absolute" left={titleLeft} bottom={titleBottom} zIndex={1}>
          <Typography variant="h2" fontSize={{ xs: "75px", md: "200px", xl: "200px" }} fontFamily={"Bona Nova SC"} color={titleColor}>
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
