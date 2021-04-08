import Layout from "../components/layout.js";
import Hero from "../components/Hero.js";
import styles from "./condominios.module.css";
import CardCondominios from "../components/cardCondominios.js";

export default function Empresas() {
  const hero = (
    <Hero heroImg="/condominios/hero.jpeg">
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
          Restaurantes para Condomínios
        </div>
      </div>
    </Hero>
  );
  return (
    <Layout hero={hero} title="Empresas">
      <div className={styles.emHeader}>Facilidade e Praticidade</div>
      <div className={styles.containerStory}>
        <img src="condominios/apre1.jpeg" className={styles.imgMobil} />
        <img src="condominios/apre1-wide.jpeg" className={styles.imgWide} />
        <p>
          Ter um restaurante dentro de condomínio é uma nova tendência no Brasil
          e muitas são as razões para isso. Seja pela praticidade de você não
          precisar sair de seu lar para comprar alimentos básicos, seja pela
          segurança ou ainda evitar contato com pessoas em época de pandemia, a
          busca dos condôminos por este tipo de serviço vem aumentando no Brasil
          nos últimos anos. E hoje esse sonho pode se tornar realidade.
        </p>
      </div>
      <br />
      <div className={styles.containerStory}>
        <p>
          Desde 2017, o Restaurante Sport Center presta um serviço de confiança
          e fidelidade para os condôminos e síndicos de condomínio e o segredo
          para este sucesso é o compromisso com a responsabilidade que temos
          para com nossos clientes. Fazemos a montagem completa do restaurante,
          indo desde itens como talheres e guardanapos, até televisores,
          geladeiras e cadeiras. Não deixamos nada de fora. Nosso empenho com a
          higiene começa desde a reforma do local até a entrega do alimento ao
          condômino. Nosso objetivo é facilitar a vida do síndico e trazer
          benefícios para todos. Confira nossos diferenciais.
        </p>
        <img src="condominios/apre2.jpeg" className={styles.imgMobil} />
        <img src="condominios/apre2-wide.jpeg" className={styles.imgWide} />
      </div>
      <div className={styles.container}>
        <CardCondominios />
      </div>
    </Layout>
  );
}
