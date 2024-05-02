import React from "react";
import styles from "./Card.module.css";
import Image from "../../Components/Image/Image";

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.picture}>
        <Image src={icon} alt={title} />
      </div>

      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
