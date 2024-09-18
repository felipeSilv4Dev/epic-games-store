import React from "react";
import styles from "./GameNew.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";
import { NavLink } from "react-router-dom";

const GameNew = ({ game }) => {
  const [day, month, year] = game.profile.date.split("/");
  const date = new Date(`20${year}-${month}-${day}`);
  const dateGame = date.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <article className={styles.container + " flex"}>
      <NavLink className={styles.picture} to={`/game/${game.id}`}>
        <Image src={game.profile.img[1]} alt={game.title} />
      </NavLink>

      <div className={styles.info}>
        <span>
          <i className="fa-solid fa-star"></i>
          lançado em {dateGame}
        </span>

        <NavLink className={styles.picture} to={`/game/${game.id}`}>
          <Text
            p1={`
            ${game.title} 
						adipisicing elit. Labore corrupti iure, hic ea ab illo dolorem. Libero`}
            p2={`adipisicing elit. Labore corrupti iure, ${game.profile.company}. consectetur totam perferendis dolorum cum earum.`}
          />
        </NavLink>
      </div>
    </article>
  );
};

export default GameNew;
