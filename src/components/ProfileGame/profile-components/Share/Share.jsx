import React from "react";
import styles from "./Share.module.css";

const Share = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content + " flex"}>
        <h1>Compartilhar jogo</h1>
        <p>Escolha em qual rede social compartilhar.</p>
        <div className={styles.icon + " flex"}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className={styles.url + " flex"}>
          <span>{window.location.href}...</span>
          <i className="fa-regular fa-clone"></i>
        </div>
        <span className={styles.close}>
          <i className="fa-solid fa-x"></i>
        </span>
      </div>
    </section>
  );
};

export default Share;
