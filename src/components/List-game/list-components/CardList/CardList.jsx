import React from "react";
import styles from "./CardList.module.css";
import Image from "../../../Components/Image/Image";

const CardList = ({ game, src }) => {
  return (
    <section id={game.id} className={styles.container + " flex"}>
      <div className={styles.image}>
        <Image src={game.img[src]} alt={game.title} />
      </div>
      <div className={styles.info + " flex"}>
        <div>
          <h2>{game.title}</h2>
          <span>{game.subtitle}</span>
        </div>
        <h3>{game.newPrice ? `R$ ${game.newPrice}` : "gratuito"}</h3>
      </div>
    </section>
  );
};

export default CardList;
