import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import { NavBar } from "../../components/navbar/NavBar1";
import { Footer } from "../../components/footer/Footer";
import ContactComponent from "../../components/contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {

  return (
    <section id="about" className="contact">
      <NavBar />
      <ContactComponent />
      <Footer />
    </section>
  );
};