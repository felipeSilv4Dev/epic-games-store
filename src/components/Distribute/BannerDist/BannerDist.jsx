import React from "react";
import styles from "./BannerDist.module.css";
import gif from "../../../../public/img/assets/distribute.gif";
import logo from "../../../../public/img/header/header-logo.png";
import Image from "../../Components/Image/Image";
import Button from "../../Components/Button/Button";

const BannerDist = () => {
  return (
    <section className={styles.container + " flex"}>
      <div className={styles.picture}>
        <Image src={gif} alt="image Gif" />
      </div>

      <div className={styles.content + " flex"}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h2>Já disponível para todos os desenvolvedores e editoras</h2>
        <span className={styles.btn}>
          <Button btn="primary" theme="var(--type-2-light)" onClick={() => {}}>
            CADASTRE-SE HOJE
          </Button>
        </span>
        <p>
          Comece a distribuir jogos para PC na Epic Games Store com nossas novas
          ferramentas de autopublicação.
        </p>
      </div>
    </section>
  );
};

export default BannerDist;
