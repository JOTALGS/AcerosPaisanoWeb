import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonHoverBg from "../../components/CustomButton/ButtonHoverBg";
import { NavBar } from "../../components/navbar/NavBar";
import SlidingContainers from "../../components/carousel/SlidingContainers";
import { HomeModal } from "../../components/homeComponents/HomeModal";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const descubrirRef = useRef()
  const imageRef = useRef()
  const lineWrapperRef = useRef([])
  
  useLayoutEffect(() => {
    lineWrapperRef.current = lineWrapperRef.current.slice(0, textParts.length);
    
    // Animate each line wrapper using its ref
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
          start: "bottom bottom", // When the bottom of the element hits the bottom of the viewport
          end: "top top",         // When the top of the element hits the top of the viewport
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
          start: "bottom bottom", // When the bottom of the element hits the bottom of the viewport
          end: "top top",         // When the top of the element hits the top of the viewport
          scrub: true,
        },
      }
    );
  }, []);

  const homeText = `Donde la calidad y la innovación se unen para redefinir la industria metalúrgica. Ofrecemos una amplia gama de productos con una pasión por la excelencia y un compromiso con la perfección.`;
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
  
  const textParts = splitText(homeText, 6);

  return (
    <section id="home" className="home">
      <NavBar />
      {/* Initial webpage mask animation */}
      <div className="init-baseline">
        <div className="init-title">
          <img src="./images/titulo.jpg" alt="title" className="img-title" />
        </div>
        <div className="baseline-start"></div>
      </div>

      {/* Container for the home section */}
      <div className="home-container">
        <div className="top">
          <div className="home-top-row">
            <div className="home-top-grid">
              <div className="image-column image-left">
                <img src="./images/paisanologoblack.jpg" alt="Left Image" />
              </div>
            </div>
          </div>
          <img ref={imageRef} src="./images/heroImage.png" alt="Hero Image" className="hero-image" />
        </div>

        <div className="home-middle-row">
          <div className="catalogue-section">
            <p className="catalogue-description">
              Hablamos de la mejor calidad y precisión. La calidad no es negociable.
            </p>
            <div className="catalogue-button-wrapper">
              <Link to={"/catalogue"}>
                <ButtonHoverBg label="Explorar Productos" buttonStyles={"catalogue-button"} />
              </Link>
            </div>
          </div>
          <div ref={descubrirRef} className={`scroll-indicator`}>Desliza para descubrir</div>
        </div>


        <div className="home-bottom-row">
          <div className="about-intro">
            {textParts.map((part, index) => (
              <div ref={el => lineWrapperRef.current[index] = el} className="line-wrapper">
                <p className="line">
                  {part}
                </p>
                <p className="line-overlay">
                  {part}
                </p>
              </div>
            ))}
            <Link to={"/about-us"}>
              <ButtonHoverBg label="Sobre Nosotros" buttonStyles={"about-link-button"} />
            </Link>
          </div>
        </div>
        
        <div className="home-products-slider">
          <SlidingContainers />
        </div>

        <HomeModal />
      </div>
    </section>
  );
};
