import styles from "./quem-somos.module.css";
import Image from "next/image";
import Layout from "../components/layout.js";
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require("react-responsive-carousel").Carousel;

const QuemSomos = () => {
  var CarouselFiles = [
    "20210122_115709.jpeg",
    "20210122_115723.jpeg",
    "20210122_115732.jpeg",
    "20210122_120119.jpeg",
    "20210203_115627.jpeg",
    "20210203_115820.jpeg",
    "20210203_120112.jpeg",
    "hero.jpeg",
    "IMG-20210118-WA0005.jpg",
    "taubateWhatsApp Image 2021-02-08 at 18.09.13.jpeg",
    "taubateWhatsApp Image 2021-02-08 at 18.09.51.jpeg",
    "transporte.jpeg",
    "WhatsApp Image 2021-02-08 at 18.17.36.jpeg",
    "WhatsApp Image 2021-02-08 at 18.17.55.jpeg",
    "WhatsApp Image 2021-02-12 at 18.15.05.jpeg",
    "WhatsApp Image 2021-02-12 at 18.15.59.jpeg",
    "WhatsApp Image 2021-02-12 at 18.16.33.jpeg",
    "WhatsApp Image 2021-02-12 at 18.17.03.jpeg",
    "WhatsApp Image 2021-02-12 at 18.17.37.jpeg",
    "WhatsApp Image 2021-04-13 at 10.49.11.jpeg",
    "WhatsApp Image 2021-04-13 at 10.49.12 (1).jpeg",
    "WhatsApp Image 2021-04-13 at 10.49.12.jpeg",
    "WhatsApp Image 2021-04-13 at 10.51.01.jpeg",
    "WhatsApp Image 2021-04-13 at 10.51.16.jpeg",
    "WhatsApp Image 2021-04-13 at 10.53.24.jpeg",
    "WhatsApp Image 2021-04-13 at 10.55.10.jpeg",
    "WhatsApp Image 2021-04-27 at 18.36.24.jpeg",
    "WhatsApp Image 2021-04-27 at 18.39.11.jpeg",
    "WhatsApp Image 2021-04-27 at 18.41.53.jpeg",
  ];
  const CarouselImages = CarouselFiles.map((f) => {
    return { src: "galeria/" + f, legend: f };
  });
  return (
    <Layout pageName="Quem Somos">
      <div className={styles.qsHeader}>
        <span>Quem Somos</span>
      </div>
      <div className={styles.container}>
        <div>
          <span>Nossa História</span>
          <p className={styles.paragrafo}>
            Desde 2017 o Restaurante Sport Center atende às necessidades de cada
            cliente com profissionalismo e pontualidade. Todos os nossos
            colaboradores, cozinheiros e nutricionistas são treinados
            especificamente para atender com qualidade as exigências do cliente.
          </p>
          <br />
        </div>
        <div>
          <img src="/quem-somos/cozinha-01.jpg" className={styles.img} />
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <img src="/quem-somos/quem-somos1.jpeg" className={styles.img2} />
        </div>
        <div>
          <span>Público-alvo</span>
          <p className={styles.paragrafo}>
            Cada cliente é único. Seja sua empresa de pequeno ou grande porte, a
            Sport Center está preparada para lhe atender. Servimos mais de 500
            refeições diariamente e formamos boas relações em nosso caminho.
            Estamos prontos para atender os mais variados tipos de cliente, tais
            como Construção Civil, atacadistas, comércio, indústria e
            prestadores de serviço.
          </p>
        </div>
        <div>
          <span>Galeria</span>
          <Carousel showThumbs={false} showArrows={true}>
            {CarouselImages.map((f) => {
              return (
                <div>
                  <img src={f.src} width="520px" height="390px" />
                  <p className="legend">{f.legend}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div>
          <span>Unidades</span>
          <p className={styles.paragrafo2}>
            Temos unidades em São José dos Campos e Taubaté, com infraestrutura
            para atender a todo o Vale do Paraíba, Grande São Paulo e Região.
            <br />
            Entre em contato e faça uma visita.
          </p>
        </div>
      </div>
      <div className={` ${styles.container} ${styles.containerMap}`}>
        <img src="/quem-somos/onde-estamos.jpg" className={styles.map} />
      </div>
    </Layout>
  );
};

export default QuemSomos;
