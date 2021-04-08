import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout.js";
import Hero from "../components/Hero.js";
import CardEmpresas from "../components/cardEmpresas.js";
import Parceiros from "../components/parceiros.js";
import { Button } from "primereact/button";

const Home = () => {
  const hero = (
    <Hero heroImg="/hero/2r-min.jpg">
      <h4>
        Refeições Coletivas <br /> Refeições Transportadas
      </h4>
      <div>
        <Link key={1} href="/condominios">
          <Button
            className={`${styles.pHeroButton} p-button-outlined p-button-rounded `}
            label="Restaurantes para Condomínios"
          />
        </Link>
        <Link key={2} href="/empresas">
          <Button
            className={`${styles.pHeroButton} p-button-outlined p-button-rounded `}
            label="Cozinha Industrial para Empresas"
          />
        </Link>
      </div>
    </Hero>
  );
  return (
    <Layout hero={hero} pageName="Início">
      <div className={styles.container}>
        <div>
          <img
            className={styles.img}
            width="520px"
            height="520px"
            src="/quem-somos/imagem-about-min.jpg"
          />
        </div>
        <div>
          <span>Quem Somos</span>
          <p className={styles.paragrafo}>
            Desde 2017 o Restaurante Sport Center atende às necessidades de cada
            cliente com profissionalismo e pontualidade. Todos os nossos
            colaboradores, cozinheiros e nutricionistas são treinados
            especificamente para atender com qualidade as exigências do cliente.
            <br />
            Cada cliente é único.
          </p>
          <br />
          <Link href="/quem-somos">
            <Button label="Saiba Mais" className="p-button-primary" />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <span>Nossos Serviços</span>
        </div>
      </div>
      <div className={styles.container}>
        <CardEmpresas />
      </div>
      <div className={`${styles.container} ${styles.center}`}>
        <span className={styles.destaque}>
          Atendemos a Todo o Vale do Paraíba e Região
        </span>
        <br />
        <span className={styles.destaque}>
          Unidades em São José dos Campos e Taubaté
        </span>
      </div>
      <div className={`${styles.container}`}>
        <div>
          <span>Parceiro Oficial</span>
        </div>
      </div>
      <Parceiros />
    </Layout>
  );
};
export default Home;