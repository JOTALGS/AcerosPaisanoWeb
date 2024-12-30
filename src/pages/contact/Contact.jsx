import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import { NavBar } from "../../components/navbar/NavBar";
import { Footer } from "../../components/footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {

  return (
    <section id="about" className="about">
      <NavBar />
    </section>
  );
};