import React from "react";
import styles from "./Game.module.css";
import Image from "../../../Components/Image/Image";
import { NavLink, useNavigate } from "react-router-dom";

const Game = ({ id, profile, img, title }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(`/game/${id}`)}>
      <Image src={id === 1 ? profile.img[0] : img.src1} alt={title} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Game;
