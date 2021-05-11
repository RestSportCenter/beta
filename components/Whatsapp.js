import whatsappStyle from "./Whatsapp.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511961913001&text=Ol%C3%A1%2C%20acessei%20o%20site%20do%20restaurante%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const Whatsapp = () => {
  return (
    <>
      <Link href={whatsappLink} target="_blank">
        <div className={whatsappStyle.mainIcon}>
          <FontAwesomeIcon
            className={whatsappStyle.faWhatsapp}
            icon={faWhatsapp}
          />
        </div>
      </Link>
    </>
  );
};
export default Whatsapp;
