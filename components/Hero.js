import dynamic from "next/dynamic";
import heroStyle from "./Hero.module.css";
const Button = dynamic(() => {
  import("primeicons/primeicons.css");
  import("primereact/resources/themes/saga-blue/theme.css");
  import("primereact/resources/primereact.min.css");
  return import("primereact/button").then((mod) => mod.Button);
});

const Hero = (props) => {
  return (
    <>
      <div className={heroStyle.hero}>
        <img className={heroStyle.logo} src="/logor-min.png" />
        <h1>
          Restaurante
          <br /> Sport Center
        </h1>
        {props.children}
      </div>
      <div id="fader" className={heroStyle.fader}>
        <img className={heroStyle.heroFade} src={props.heroImg} />
      </div>
      <div className={heroStyle.saibaMais}>
        <Button
          onClick={() => {
            window.scrollBy({
              left: 0,
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          icon="pi pi-angle-double-down"
          className={`${heroStyle.saibaMaisIcon} `}
        />
      </div>
    </>
  );
};
export default Hero;
