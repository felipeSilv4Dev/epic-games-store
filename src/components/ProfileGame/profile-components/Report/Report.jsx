import React from "react";
import styles from "./Report.module.css";
import UseMatch from "../../../../Hooks/useMatch";
import Button from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const Report = ({ setClick, theme }) => {
  const match = UseMatch("48em");
  const handleClose = () => {
    document.body.style.overflowY = "initial";
    setClick(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.content + " flex"}>
        <h1>Denunciar Produto</h1>

        <p>
          Se você acredita que esse jogo viola seus direitos de propriedade
          intelectual, envie um relatório de violação de propriedade
          intelectual. <Link style={{ color: theme }}>Saiba mais</Link>
        </p>

        {!match && (
          <Button btn="primary" theme={theme}>
            Denunciar
          </Button>
        )}

        {!match && (
          <span onClick={handleClose} className={styles.close}>
            <i className="fa-solid fa-x"></i>
          </span>
        )}
      </div>
      {match && (
        <span className={styles.boxButton + " flex"}>
          <span style={{ width: "100%" }} onClick={handleClose}>
            <Button btn="primary" theme="transparent">
              cancelar
            </Button>
          </span>

          <Button btn="primary" theme={theme}>
            Denunciar
          </Button>
        </span>
      )}
    </section>
  );
};

export default Report;
