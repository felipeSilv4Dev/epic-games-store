import React from "react";
import styles from "./Card.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";
import { NavLink } from "react-router-dom";

const Card = ({ game }) => {
  const [day, month, year] = game.profile.date.split("/");
  const date = new Date(`20${year}-${month}-${day}`);
  const dateGame = date.toLocaleDateString("pt-BR", { month: "long" });

  return (
    <div className={styles.container + " flex"}>
      <NavLink className={styles.picture} to={`/game/${game.id}`}>
        <Image src={game.profile.img[0]} alt="image game" />
      </NavLink>

      <span>{dateGame}</span>
      <NavLink to={`/game/${game.id}`}>
        <Text
          p1={`${game.title} Lorem ipsum dolor, sit amet consectetur adipisicing elit.`}
          p2={`Dedicada a company e artistas da ${game.profile.company}`}
        />
      </NavLink>
    </div>
  );
};

export default Card;
