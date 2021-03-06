import styles from "./quem-somos.module.css";
import Image from "next/image";
import Layout from "../components/layout.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require("react-responsive-carousel").Carousel;

export default function QuemSomos() {
  var CarouselFiles = [
    { nome: "1.webp", width: 1280, height: 720 },
    { nome: "2.webp", width: 1008, height: 756 },
    { nome: "3.webp", width: 1008, height: 756 },
    { nome: "4.webp", width: 1008, height: 756 },
    { nome: "5.webp", width: 378, height: 504 },
    { nome: "6.webp", width: 756, height: 1008 },
    { nome: "7.webp", width: 756, height: 1008 },
    { nome: "8.webp", width: 720, height: 1280 },
    { nome: "9.webp", width: 756, height: 1008 },
    { nome: "10.webp", width: 1008, height: 756 },
    { nome: "11.webp", width: 1280, height: 960 },
    { nome: "12.webp", width: 1280, height: 960 },
    { nome: "13.webp", width: 1280, height: 960 },
    { nome: "14.webp", width: 1280, height: 960 },
    { nome: "15.webp", width: 960, height: 1280 },
    { nome: "16.webp", width: 1280, height: 720 },
    { nome: "17.webp", width: 1280, height: 720 },
    { nome: "18.webp", width: 1008, height: 756 },
    { nome: "19.webp", width: 560, height: 1152 },
    { nome: "20.webp", width: 560, height: 1152 },
    { nome: "21.webp", width: 560, height: 1152 },
    { nome: "22.webp", width: 560, height: 1152 },
    { nome: "23.webp", width: 560, height: 1152 },
    { nome: "24.webp", width: 560, height: 1152 },
    { nome: "25.webp", width: 560, height: 1152 },
    { nome: "26.webp", width: 1280, height: 720 },
    { nome: "27.webp", width: 560, height: 1152 },
    { nome: "28.webp", width: 648, height: 1152 },
    { nome: "29.webp", width: 1152, height: 560 },
    { nome: "30.webp", width: 560, height: 1152 },
  ];
  const CarouselImages = CarouselFiles.map((f) => {
    return { src: "galeria/" + f.nome, width: f.width, height: f.height };
  });
  const seoImages = [
    {
      url: "/quem-somos/cozinha-01.jpg",
      width: 420,
      height: 315,
      alt:
        "Vista de uma g??ndola preparada na pra??a de alimenta????o de uma das unidades do restaurante Sport Center",
    },
  ];
  return (
    <>
      <Layout
        pageName="Quem Somos"
        description="Conhe??a o Restaurante Sport Center"
        canonical="quem-somos/"
        images={seoImages}
      >
        <div className={styles.qsHeader}>
          <span>Quem Somos</span>
        </div>
        <div className={styles.container}>
          <div>
            <span>Nossa Hist??ria</span>
            <p className={styles.paragrafo}>
              Desde 2017 o Restaurante Sport Center atende ??s necessidades de
              cada cliente com profissionalismo e pontualidade. Todos os nossos
              colaboradores, cozinheiros e nutricionistas s??o treinados
              especificamente para atender com qualidade as exig??ncias do
              cliente.
            </p>
            <br />
          </div>
          <div>
            <Image
              width={520}
              height={390}
              src="/quem-somos/cozinha-01.jpg"
              alt="Vista de uma g??ndola preparada na pra??a de alimenta????o de uma das unidades do restaurante Sport Center"
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.img2}>
            <Image
              width={280}
              height={456}
              layout="responsive"
              objectFit="cover"
              src="/quem-somos/quem-somos1.jpeg"
              alt="Colaboradora preparando a refei????o em nossa Cozinha Industrial"
              className={styles.img}
            />
          </div>
          <div>
            <span>P??blico-alvo</span>
            <p className={styles.paragrafo}>
              Cada cliente ?? ??nico. Seja sua empresa de pequeno ou grande porte,
              a Sport Center est?? preparada para lhe atender. Servimos mais de
              500 refei????es diariamente e formamos boas rela????es em nosso
              caminho. Estamos prontos para atender os mais variados tipos de
              cliente, tais como Constru????o Civil, atacadistas, com??rcio,
              ind??stria e prestadores de servi??o.
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
              {CarouselImages.map((f, i) => {
                return (
                  <div key={i}>
                    <Image
                      src={f.src}
                      width="520px"
                      height={(520 / f.width) * f.height}
                      layout="intrinsic"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div>
            <span>Unidades</span>
            <p className={styles.paragrafo2}>
              Temos unidades em S??o Jos?? dos Campos e Taubat??, com
              infraestrutura para atender a todo o Vale do Para??ba, Grande S??o
              Paulo e Regi??o.
              <br />
              Entre em contato e fa??a uma visita.
            </p>
          </div>
        </div>
        <div className={styles.containerMap}>
          <div>
            <Image
              layout="intrinsic"
              width={781}
              height={440}
              objectFit="contain"
              src="/quem-somos/onde-estamos.jpg"
              alt="Mapa apontando os locais de nossas unidades em S??o Jos?? dos Campos e Taubat??"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
