import React from "react";
import styles from "./Details.module.css";

const Details = ({ game, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{game.title}</h2>
      {children}
    </div>
  );
};

export default Details;
