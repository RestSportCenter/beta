import styles from "./parceiros.module.css";

function Parceiros() {
  return (
    <div className={styles.parceiros}>
      <img
        src="/leroy-merlin-logo-2.png"
        width="250px"
        height="188.09px"
        alt="Logo da Parceira Leroy Merlin"
        className={styles.parceiroImg}
      />
    </div>
  );
}
export default Parceiros;
