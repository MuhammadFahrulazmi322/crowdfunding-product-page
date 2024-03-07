import { useEffect, useState } from "react";
import { heroMobile, heroDesktop } from "../assets/images";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  //check mobile or not
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
  
    return () => {
        window.removeEventListener("resize", checkMobile);
    }
  }, [])
  
  return (
    <section className={`md:w-full relative`}>
      <img 
      src={isMobile ? heroMobile : heroDesktop} 
      alt={isMobile ? "hero mobile" : "hero desktop"} 
      className="object-cover w-full contrast-[85%]" />
    </section>
  );
}

export default Hero;
