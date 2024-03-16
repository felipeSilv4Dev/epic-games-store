import React from "react";
import styles from "./Score.module.css";

const Score = ({ porcentage, theme, text }) => {
  return (
    <div className={styles.container + " flex"}>
      <div
        style={{
          background: `conic-gradient(${theme} calc(${porcentage} * 3.6deg), var(--type-1-dark) 0)`,
        }}
        className={styles.review}
      >
        <p className={styles.porcentage}>{porcentage}%</p>
      </div>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};

export default Score;
