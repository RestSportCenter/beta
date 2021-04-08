import Link from "next/link";
import styles from "./Footpage.module.css";
import { whatsappLink } from "./Whatsapp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footpage = () => {
  const googleMapsLink = "https://maps.google.com/";
  return (
    <div className={styles.footPage}>
      <div className={styles.mainIcon}>
        <img src="/footLogor-min.png" height="118px" width="280px" />
      </div>
      <div className={styles.contact}>
        <div className={styles.footR}>
          <div className={` ${styles.foot3C} ${styles.pointer}`}>
            <Link href={googleMapsLink}>
              <div>
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faMapMarkerAlt}
                />
                <br />
              </div>
            </Link>

            <Link href={whatsappLink}>
              <div>
                <FontAwesomeIcon className={styles.faIcon} icon={faWhatsapp} />
              </div>
            </Link>
            <Link href="mailto:contato@restaurantesportcenter.com.br">
              <div>
                <FontAwesomeIcon
                  className={styles.faIcon}
                  icon={faEnvelopeOpen}
                />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.footR}>
          <div className={styles.foot3C}>
            <div>
              <span> Matriz: Rua XXXX, Taubaté</span>
              <br />
              <span>Filial: Avenida Andrômeda, 33, SJC</span>
            </div>
            <div className={styles.onlyDesktop}>
              (12) 9999-9999
              <br />
              (12) 3939-9999
            </div>
            <div className={styles.onlyDesktop}>
              contato@restaurantesportcenter.com.br
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>
          Todos os direitos reservados. CNPJ: 32.570.497/0001-70. <br />
          Desde 2017 atendendo com excelência.
        </span>
      </div>
    </div>
  );
};

export default Footpage;
