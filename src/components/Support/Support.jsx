import React from "react";
import styles from "./Support.module.css";
import { Link } from "react-router-dom";
import Cartegories from "./support-components/Categories/Cartegories";

const Suport = () => {
  return (
    <section className={styles.container + " max appMain"}>
      <h2 className={styles.title}>
        Bem-vindo ao Suporte ao Jogador da Epic Games
      </h2>
      <Link className={styles.status}>
        STATUS DO SERVIDOR: <span>PARTIALLY DEGRADED SERVICE</span>
      </Link>

      <div className={styles.camp + " flex"}>
        <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
        <input
          className={styles.input}
          type="text"
          placeholder="Pesquisa na central de Ajuda..."
        />
      </div>

      <div className={styles.categories + " flex"}>
        <Cartegories title={"Jogos"} icon={"fa-solid fa-gamepad"} />
        <Cartegories title={"contas"} icon={"fa-solid fa-user"} />
        <Cartegories title={"Negócios"} icon={"fa-solid fa-building"} />
      </div>
    </section>
  );
};

export default Suport;
