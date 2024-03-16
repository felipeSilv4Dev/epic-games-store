import React from "react";
import styles from "./System.module.css";

const System = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h5 className={styles.title}>{title}</h5>
    </div>
  );
};

export default System;
