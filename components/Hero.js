import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroStyle from "./Hero.module.css";
import { HeroImagesProvider } from "./HeroImagesProvider.js";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const images = new HeroImagesProvider().getImages();
const Hero = () => {
  const [opacities, setOpacities] = useState([]);
  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    slides: images.length,
    loop: true,
    duration: 3000,
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion);
      setOpacities(new_opacities);
    },
  });
  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return (
    <>
      <div className={heroStyle.hero}>
        <img className={heroStyle.logo} src="/logo.png" />
      </div>
      <div ref={sliderRef} className={heroStyle.fader}>
        {images.map((item, idx) => (
          <div
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
            <img className={heroStyle.hero} src={item.src} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Hero;
