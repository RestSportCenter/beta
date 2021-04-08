import Layout from "../components/layout.js";
import Hero from "../components/Hero.js";
import styles from "./empresas.module.css";
import CardEmpresas from "../components/cardEmpresas.js";

export default function Empresas() {
  const hero = (
    <Hero heroImg="/empresas/cozinha-industrial.jpeg">
      <div>
        <div
          className={styles.chips}
          onClick={() => {
            window.scrollBy({
              left: 0,
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          Serviço Completo de Cozinha Industrial
        </div>
      </div>
    </Hero>
  );
  return (
    <Layout hero={hero} title="Empresas">
      <div className={styles.emHeader}>Serviços Empresariais</div>
      <div className={styles.containerStory}>
        <img
          src="empresas/estrutura-completa.jpeg"
          className={styles.imgMobil}
        />
        <img
          src="empresas/estrutura-completa-wide.jpeg"
          className={styles.imgWide}
        />
        <p>
          O Restaurante Sport Center oferece opções de serviço completo para
          empresas de pequeno, médio e grande porte. Nossos nutricionistas,
          cozinheiros, motoristas e toda a equipe de apoio estão preparados para
          desempenhar diariamente o trabalho com satisfação, segurança e
          higiene. Seja na cozinha de sua empresa ou no transporte adequado dos
          alimentos até ela. Confira nossos serviços.
        </p>
      </div>
      <div className={styles.container}>
        <CardEmpresas />
      </div>
    </Layout>
  );
}
