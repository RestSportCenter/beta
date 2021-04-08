import Layout from "./layout.js";
import styles from "./Empresas.module.css";
export default function Empresas() {
  return (
    <Layout hero={false} title="Empresas">
      <div className={styles.emHeader}>Empresas</div>
    </Layout>
  );
}
