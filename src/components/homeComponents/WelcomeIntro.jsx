// components/WelcomeIntro.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WelcomeIntro({
  titleSrc = "/images/titulo.jpg",
  maskHeight = 150,            // alto de la máscara (en px)
  playOncePerSession = false,  // true = solo primera vez por pestaña
}) {
  const [show, setShow] = useState(() => {
    if (!playOncePerSession) return true;
    return !sessionStorage.getItem("introPlayed");
  });

  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const tlRef = useRef(null);

  // Bloquear scroll mientras el overlay esté visible
  useEffect(() => {
    if (show) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [show]);

  useLayoutEffect(() => {
    if (!show) return;
    const ctx = gsap.context(() => {
      // Estado inicial SIEMPRE
      gsap.set(titleRef.current, { yPercent: 100 });
      gsap.set(overlayRef.current, { yPercent: 0, autoAlpha: 1 });

      const run = () => {
        tlRef.current = gsap.timeline({
          onComplete: () => {
            if (playOncePerSession) sessionStorage.setItem("introPlayed", "true");
            setShow(false);          // desmonta el overlay
            ScrollTrigger.refresh(); // recalcula triggers al liberar la pantalla
          }
        })
        .to(titleRef.current, {
          yPercent: 0,
          duration: 1.1,
          ease: "power3.out",
        })
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power3.inOut",
        }, "+=0.1");
      };

      // Aseguramos que la imagen cargó antes de animar
      const img = titleRef.current;
      if (img && !img.complete) {
        img.addEventListener("load", run, { once: true });
      } else {
        run();
      }
    }, overlayRef);

    return () => {
      if (tlRef.current) tlRef.current.kill();
      ctx.revert();
    };
  }, [show, playOncePerSession]);

  if (!show) return null;

  return (
    <div ref={overlayRef} className="welcome-overlay">
      <div className="title-mask" style={{ height: maskHeight }}>
        <img
          ref={titleRef}
          src={titleSrc}
          alt="title"
          className="title-img"
          style={{ height: maskHeight, width: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}
