import styles from "./cardHolder.module.css";
import { Card } from "primereact/card";

function CardHolder(props) {
  const cardHeader = (
    <img
      alt={props.alt}
      src={props.src}
      width={props.width}
      height={props.height}
      className={styles.pImageContainer}
    />
  );
  return (
    <div className={styles.pCardBorder}>
      <Card
        header={cardHeader}
        className={styles.pCard}
        title={props.title}
        subTitle={props.subTitle}
      >
        {props.children}
      </Card>
    </div>
  );
}
export default CardHolder;
