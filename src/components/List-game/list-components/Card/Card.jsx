import React from "react";
import styles from "./Card.module.css";
import Image from "../../../Components/Image/Image";

const Card = ({ img, title, newPrice, subtitle, id }) => {
  return (
    <section id={id} className={styles.container + " flex"}>
      <div className={styles.image}>
        <Image src={img} alt={title} />
      </div>
      <div className={styles.info + " flex"}>
        <div>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
        <h3>{newPrice ? `R$ ${newPrice}` : "gratuito"}</h3>
      </div>
    </section>
  );
};

export default Card;
