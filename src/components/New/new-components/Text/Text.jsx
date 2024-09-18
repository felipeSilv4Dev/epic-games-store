import React from "react";
import styles from "./Text.module.css";

const Text = ({ p1, p2 }) => {
  return (
    <div className={styles.container + " flex"}>
      <p className={styles.text}>{p1}</p>
      <p className={styles.paragraph}>{p2}</p>
      <p className={styles.link}>leia mais</p>
    </div>
  );
};

export default Text;
