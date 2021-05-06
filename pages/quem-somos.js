import styles from "./quem-somos.module.css";
import Layout from "../components/layout.js";

const QuemSomos = () => {
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
