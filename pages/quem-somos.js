import styles from "./quem-somos.module.css";
import Layout from "../components/layout.js";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require("react-responsive-carousel").Carousel;

const QuemSomos = () => {
  var CarouselFiles = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
    "23.jpeg",
    "24.jpeg",
    "25.jpeg",
    "26.jpeg",
    "27.jpeg",
    "28.jpeg",
    "29.jpeg",
    "30.jpeg",
  ];
  const CarouselImages = CarouselFiles.map((f) => {
    return { src: "galeria/" + f, legend: f };
  });
  return (
    <>
      <Seo
        title="Quem Somos - Restaurante Sport Center"
        description="A história e consolidação do Restaurante Sport Center"
        canonical="quem-somos/"
        images={[
          {
            url: "/quem-somos/cozinha-01.jpg",
            width: 420,
            height: 315,
            alt:
              "Vista de uma gôndola preparada na praça de alimentação de uma das unidades do restaurante Sport Center",
          },
        ]}
      />
      <Layout pageName="Quem Somos">
        <div className={styles.qsHeader}>
          <span>Quem Somos</span>
        </div>
        <div className={styles.container}>
          <div>
            <span>Nossa História</span>
            <p className={styles.paragrafo}>
              Desde 2017 o Restaurante Sport Center atende às necessidades de
              cada cliente com profissionalismo e pontualidade. Todos os nossos
              colaboradores, cozinheiros e nutricionistas são treinados
              especificamente para atender com qualidade as exigências do
              cliente.
            </p>
            <br />
          </div>
          <div>
            <img
              src="/quem-somos/cozinha-01.jpg"
              alt="Vista de uma gôndola preparada na praça de alimentação de uma das unidades do restaurante Sport Center"
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div>
            <img
              src="/quem-somos/quem-somos1.jpeg"
              alt="Colaboradora preparando a refeição em nossa Cozinha Industrial"
              className={styles.img2}
            />
          </div>
          <div>
            <span>Público-alvo</span>
            <p className={styles.paragrafo}>
              Cada cliente é único. Seja sua empresa de pequeno ou grande porte,
              a Sport Center está preparada para lhe atender. Servimos mais de
              500 refeições diariamente e formamos boas relações em nosso
              caminho. Estamos prontos para atender os mais variados tipos de
              cliente, tais como Construção Civil, atacadistas, comércio,
              indústria e prestadores de serviço.
            </p>
          </div>
          <div>
            <span>Galeria</span>
            <Carousel
              showThumbs={false}
              showArrows={true}
              dynamicHeight={true}
              showIndicators={false}
            >
              {CarouselImages.map((f) => {
                return (
                  <div>
                    <img src={f.src} width="520px" />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <span>Unidades</span>
            <p className={styles.paragrafo2}>
              Temos unidades em São José dos Campos e Taubaté, com
              infraestrutura para atender a todo o Vale do Paraíba, Grande São
              Paulo e Região.
              <br />
              Entre em contato e faça uma visita.
            </p>
          </div>
        </div>
        <div className={` ${styles.container} ${styles.containerMap}`}>
          <img
            src="/quem-somos/onde-estamos.jpg"
            alt="Mapa apontando os locais de nossas unidades em São José dos Campos e Taubaté"
            className={styles.map}
          />
        </div>
      </Layout>
    </>
  );
};

export default QuemSomos;
