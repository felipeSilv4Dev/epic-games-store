import React from "react";
import styles from "./Details.module.css";
import CardDetail from "./details-components/CardDetail/CardDetail";

const Details = ({ dates, game, clickGame, clickCar, carrinho, title }) => {
  const titles = ["edição", "jogo base", "complemento"];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {titles.map((item) => (
        <CardDetail
          key={item}
          {...dates}
          subtitle={item}
          clickGame={clickGame}
          game={game}
          clickCar={clickCar}
          carrinho={carrinho}
        />
      ))}
    </div>
  );
};

export default Details;
