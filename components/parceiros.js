import styles from "./parceiros.module.css";
import Image from "next/image";

function Clientes() {
  return (
    <div className={styles.parceiros}>
      <Image
        src="/leroy-merlin-logo-2.png"
        width="175px"
        height="131.66px"
        alt="Logo do Cliente Leroy Merlin"
      />
      <Image
        src="/gmc-logo.png"
        width="202.16px"
        height="60px"
        alt="Logo da cliente GM&C"
      />
    </div>
  );
}
export default Clientes;
