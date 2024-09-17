import React from "react";
import styles from "./Game.module.css";
import Image from "../../../Components/Image/Image";
import { NavLink } from "react-router-dom";

const Game = ({ game }) => {
  return (
    <div className={styles.container}>
      <NavLink to={`/game/${game.id}`}>
        <Image
          src={game.title === "Fortnite" ? game.profile.img[1] : game.img.src1}
          alt={game.title}
        />
        <h3 className={styles.title}>{game.title}</h3>
      </NavLink>
    </div>
  );
};

export default Game;
