import React from "react";
import styles from "./Share.module.css";
import Button from "../../../Components/Button/Button";
import UseMatch from "../../../../Hooks/useMatch";

const Share = ({ setClick }) => {
  const match = UseMatch("48em");
  const handleClose = () => {
    document.body.style.overflowY = "initial";
    setClick(false);
  };

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
          <span>{window.location.href}</span>
          <i className="fa-regular fa-clone"></i>
        </div>
        {!match && (
          <span onClick={handleClose} className={styles.close}>
            <i className="fa-solid fa-x"></i>
          </span>
        )}
      </div>
      {match && (
        <span className={styles.boxButton} onClick={handleClose}>
          <Button btn="primary" theme="transparent">
            cancelar
          </Button>
        </span>
      )}
    </section>
  );
};

export default Share;
