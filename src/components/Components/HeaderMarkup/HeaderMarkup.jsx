import React from "react";
import styles from "./HeaderMarkup.module.css";

const HeaderMarkup = ({ title }) => {
  return (
    <header className={styles.header + " flex"}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.money + " flex"}>
        <p>
          Recompensas Epic
          <i
            className={styles.icon + " fa-solid fa-arrow-up-right-from-square"}
          ></i>
        </p>
        <span>R$ 00,00</span>
      </div>
    </header>
  );
};

export default HeaderMarkup;
