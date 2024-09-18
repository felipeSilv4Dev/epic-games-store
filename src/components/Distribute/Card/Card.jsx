import React from "react";
import styles from "./Card.module.css";
import Image from "../../Components/Image/Image";

const Card = ({ card }) => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.picture}>
        <Image src={card.icon} alt={card.title} />
      </div>

      <div>
        <h2 className={styles.title}>{card.title}</h2>
        <p className={styles.description}>{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
