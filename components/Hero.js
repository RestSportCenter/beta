import Image from "next/image";
import { Galleria } from "primereact/galleria";
import heroStyle from "./Hero.module.css";
import { HeroImagesProvider } from "./HeroImagesProvider.js";

const images = new HeroImagesProvider().getImages();
const itemTemplate = (item) => (
  <Image layout="fill" className={heroStyle.hero} src={item.src} />
);
const Hero = () => (
  <div>
    <div className={heroStyle.hero}>
      <img src="/logo.png" className={heroStyle.logo} />
    </div>
    <Galleria
      value={images}
      showItemNavigators={true}
      showThumbnails={false}
      circular={true}
      autoPlay={true}
      item={itemTemplate}
    ></Galleria>
  </div>
);
export default Hero;
