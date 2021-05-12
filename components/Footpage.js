import Link from "next/link";
import Image from "next/image";
import styles from "./Footpage.module.css";
import { whatsappLink } from "./Whatsapp.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footpage = () => {
  const googleMapsLink = "https://goo.gl/maps/Jk9SZWhj6C8wzUKx7";
  return (
    <div className={styles.footPage}>
      <div className={styles.mainIcon}>
        <Image src="/footLogor-min.png" height={118} width={280} />
      </div>
      <div className={styles.contact}>
        <div className={styles.footR}>
          <div className={` ${styles.foot3C} ${styles.pointer}`}>
            <div className={styles.footR}>
              <Link href={googleMapsLink}>
                <div>
                  <FontAwesomeIcon
                    className={styles.faIcon}
                    icon={faMapMarkerAlt}
                  />
                  <br />
                </div>
              </Link>
              <div className={styles.onlyDesktop}>
                <div>
                  <span>
                    Unidade SJCampos: Rua Antares, 165. Jardim Satélite.
                  </span>
                  <br />
                  <span>
                    Unidade Taubaté: Av. Manoel José de Siqueira Mattos, 54.
                    R.S. Santo Antônio.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.footR}>
              <Link href={whatsappLink}>
                <div>
                  <FontAwesomeIcon
                    className={styles.faIcon}
                    icon={faWhatsapp}
                  />
                </div>
              </Link>
              <div className={styles.onlyDesktop}>
                Shunji Abe <br />
                (11) 96191-3001
                <br />
                <br />
                Simone Silva
                <br />
                (12) 98809-4181
              </div>
            </div>
            <div className={styles.footR}>
              <Link href="mailto:contato@restaurantesportcenter.com.br">
                <div>
                  <FontAwesomeIcon
                    className={styles.faIcon}
                    icon={faEnvelopeOpen}
                  />
                </div>
              </Link>
              <div className={styles.onlyDesktop}>
                contato@restaurantesportcenter.com.br
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footR}>
          <div className={styles.foot3C}>
            <div className={styles.onlyMobile}>
              <span>Unidade SJCampos: Rua Antares, 165. Jardim Satélite.</span>
              <br />
              <span>
                Unidade Taubaté: Av. Manoel José de Siqueira Mattos, 54. R.S.
                Santo Antônio.
              </span>
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
