import React from "react";
import styles from "./Card.module.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
