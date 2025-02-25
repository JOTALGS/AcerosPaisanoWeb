import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParallaxVideoBox from "../../components/parallaxBox/ParallaxVideoBox";

const MallasElectrosoldadas = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 ref={titleRef} className="text-4xl font-bold text-gray-800">
        Mallas Electrosoldadas
      </h1>
      <div className="Home mt-6">
        <ParallaxVideoBox
          videoSrc="/videos/14.mp4"
          title=""
          titleColor="text.primary"
          titleLeft="2%"
          titleBottom="10%"
        />
      </div>
    </section>
  );
};

