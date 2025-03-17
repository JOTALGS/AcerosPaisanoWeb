import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonHoverBg from "../../components/CustomButton/ButtonHoverBg";
import { NavBar } from "../../components/navbar/Navbar1";
import SlidingContainers from "../../components/carousel/SlidingContainers";
import { HomeModal } from "../../components/homeComponents/HomeModal";
import { Footer } from "../../components/footer/Footer";
import ParallaxBox from "../../components/parallaxBox/ParallaxBox";
import ParallaxVideoBox from "../../components/parallaxBox/ParallaxVideoBox";
import { Box, Typography } from "@mui/material";



gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const descubrirRef = useRef()
  const imageRef = useRef()
  const lineWrapperRef = useRef([])
  const imageTitleRef = useRef()
  const welcomeRef = useRef()
  
  useLayoutEffect(() => {
    lineWrapperRef.current = lineWrapperRef.current.slice(0, textParts.length);
    
    lineWrapperRef.current.forEach((wrapper) => {
      if (wrapper) {
        const overlay = wrapper.querySelector(".line-overlay");
        
        gsap.to(overlay, {
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "bottom center",
            scrub: 5,
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
        });
      }
    });


    gsap.fromTo(
      descubrirRef.current,
      { opacity: 1 },
      { 
        opacity: 0,
        scrollTrigger: {
          trigger: descubrirRef.current,
          start: "bottom bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 1 },
      { 
        opacity: 0,
        scrollTrigger: {
          trigger: descubrirRef.current,
          start: "bottom bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  const homeText = `Le damos forma al acero: Soluciones eficientes para el hormigón armado`;
    const splitText = (text, parts) => {
    const partLength = Math.ceil(text.length / parts);
    const result = [];
    let start = 0;
  
    for (let i = 0; i < parts; i++) {
      let end = start + partLength;
  
      if (end < text.length) {
        while (end > start && text[end] !== " ") {
          end--;
        }
      }
      result.push(text.substring(start, end).trim());
      start = end + 1;
    }
  
    if (start < text.length) {
      result[result.length - 1] += " " + text.substring(start).trim();
    }
  
    return result;
  };
  
  const textParts = splitText(homeText, 3);

  useEffect(() => {
    // Create a GSAP timeline for better sequencing and performance
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set(welcomeRef.current, {
      y: '0%',
      opacity: 1,
    });
    
    gsap.set(imageTitleRef.current, {
      y: '200px',
      opacity: 1,
    });
    
    tl
    .to(imageTitleRef.current, {
      y: "0%",
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    }, "+=0.2")
    .to(welcomeRef.current, {
      y: "-100vh",
      duration: 1,
      ease: 'power3.out',
      delay: 0.8,
    }, "+=0.2");
    
    return () => {
      tl.kill();
    };
  }, []);


  return (
    <section id="home" className="home">
      <NavBar />
      <Box
        ref={welcomeRef}
        sx={{
          display: { xs: "none", md: "block" },
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 100,
        }}
      >
        <Box
          ref={imageTitleRef}
          component="img"
          src="./images/titulo.jpg"
          alt="title"
          sx={{
            height: "150px",
            width: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 101, // Lower z-index than red box
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgb(0, 0, 0)", // Fixed typo
            width: "90%",
            height: "45%",
            bottom: "0%",
            left: "5%", // Center it by offsetting 5% from left
            zIndex: 9999, // Extremely high z-index to be on top of everything
          }} 
        />
      </Box>

      <div className="home-container" style={{ zIndex: 1 }}>
        <div className="top">
          <div className="home-top-row">
            <div className="home-top-grid">
              <Box className="image-column image-left">
                <Box
                  component="img"
                  src="./images/paisanologowhite.png"
                  alt="Left Image"
                  sx={{ width: "auto", height: { xs: "10vh", xl: "20vh"}, marginTop: "60px" }}
                />
              </Box>
            </div>
          </div>
          <div className="Portada-video">
            <video autoPlay loop muted playsInline>
              <source src="/videos/14.mp4" type="video/mp4" />
              Tu navegador no admite videos.
            </video>
          </div>
        </div>

        <div className="home-middle-row">
          <Box sx={{ paddingBottom: {xs: "60px", sm: "0px", md: "0px", lg: "0px"}, width: {xs: "70%", sm: "50%", md: "30%", lg: "20%"} }} className="catalogue-section">
            <Typography sx={{ lineHeight: "1.3", marginBottom: "20px" }} className="catalogue-description">
              Desde 2011 apoyando a la industria nacional
            </Typography>
            <Box className="catalogue-button-wrapper" sx={{ paddingRight: "20px" }}>
              <Link to={"/productos-y-servicios"}>
                <ButtonHoverBg label="Explorar Productos" buttonStyles={"catalogue-button"} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ paddingBottom: {xs: "60px", sm: "0px", md: "0px", lg: "0px"}}} ref={descubrirRef} className={`scroll-indicator`}>Desliza para descubrir</Box>
        </div>

      
        <div className="home-bottom-row">
          <div className="about-intro">
            {textParts.map((part, index) => (
              <div ref={el => lineWrapperRef.current[index] = el} className="line-wrapper">
                <Typography variant="p" fontSize={{xs: "20px", sm: "30px", md: "40px", lg: "50px"}} className="line" style={{ color: "#3a3a3a"}}>
                  {part}
                </Typography>
                <Typography variant="p" fontSize={{xs: "20px", sm: "30px", md: "40px", lg: "50px"}} className="line-overlay">
                  {part}
                </Typography>
              </div>
            ))}
            <Link to={"/sobre-nosotros"} style={{ textDecoration: "none" }}>
              <ButtonHoverBg label="Sobre Nosotros" buttonStyles={"about-link-button"} />
            </Link>
          </div>
        </div>
        

        <div className="home-products-slider">
          <SlidingContainers />
        </div>

        <Box 
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ParallaxBox
            image="/images/about1.jpg" 
          />
        </Box>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row", md: "row" }} width={"100%"}>
          <Link to={'/hierro-cortado-y-doblado'} style={{ width: '100%', height: '100%', textDecoration: 'none' }}>
            <Box className="interact" sx={{ height: { xs: '40vh', sm: '70vh', md: '100vh', lg: '100vh', xl: '100vh'}, zIndex: 0 }}>
              <div className="interact-item" style={{ zIndex: 0 }}onClick={() => {handleOpenModal("industrias");}}>
                <p  style={{ paddingLeft: "5px"}} >Hierro Cortado y Doblado</p>
              </div>
            </Box>
          </Link>

          <Link to={'/mallas-electrosoldadas'} style={{ width: '100%', height: '100%', textDecoration: 'none' }}>
            <Box className="interact" sx={{ height: { xs: '40vh', sm: '70vh', md: '100vh', lg: '100vh', xl: '100vh'}, zIndex: 0 }}>
              <div className="interact-item" style={{ zIndex: 0 }}onClick={() => {handleOpenModal("industrias");}}>
                <p  style={{ paddingLeft: "5px"}} >Mallas Electrosoldadas</p>
              </div>
            </Box>
          </Link>
        </Box>
      </div>
      <div className="Home">
        <ParallaxVideoBox
          videoSrc="/videos/Electro.mp4"
        />

      </div>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row", md: "row" }} width={"100%"}>
          <Link to={'/barras-lisas-y-conformadas'} style={{ width: '100%', height: '100%', textDecoration: 'none' }}>
            <Box className="interact" sx={{ height: { xs: '40vh', sm: '70vh', md: '100vh', lg: '100vh', xl: '100vh'}, zIndex: 0 }}>
              <div className="interact-item" style={{ zIndex: 0 }} onClick={() => {handleOpenModal("industrias");}}>
                <p  style={{ paddingLeft: "5px"}} >Barras Lisas y Conformadas</p>
              </div>
            </Box>
          </Link>

          <Link to={'/mallas-plegadas'} style={{ width: '100%', height: '100%', textDecoration: 'none' }}>
            <Box className="interact" sx={{ height: { xs: '40vh', sm: '70vh', md: '100vh', lg: '100vh', xl: '100vh'}, zIndex: 0 }}>
              <div className="interact-item" style={{ zIndex: 0 }} onClick={() => {handleOpenModal("industrias");}}>
                <p  style={{ paddingLeft: "5px"}} >Mallas Plegadas</p>
              </div>
            </Box>
          </Link>
        </Box>

        <ParallaxVideoBox
          videoSrc="/videos/2.mp4"/>  
      <Footer />
    </section>
  );
};
