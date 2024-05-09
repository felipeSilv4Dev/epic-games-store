import React from "react";
import styles from "./Game.module.css";
import Image from "../../../Components/Image/Image";

const Game = ({ id, profile, img, title }) => {
  return (
    <div className={styles.container}>
      <Image src={id === 1 ? profile.img[0] : img.src1} alt={title} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Game;
