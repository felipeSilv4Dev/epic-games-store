import React from "react";
import styles from "./Game.module.css";
import { useNavigate } from "react-router-dom";
import Image from "../../Components/Image/Image";

const Game = ({ id, title, img }) => {
  const deep = window.location.href.includes("game");

  const navigate = useNavigate();
  return (
    <div
      onPointerDown={() => navigate(`game/${id}`)}
      id={id}
      className={styles.container + " flex"}
    >
      <Image src={deep ? "../" + img.src1 : img.src1} alt={title} />

      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Game;
