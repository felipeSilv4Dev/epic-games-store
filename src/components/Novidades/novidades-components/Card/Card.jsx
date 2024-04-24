import React from "react";
import styles from "./Card.module.css";
import Image from "../../../Components/Image/Image";
import { Link } from "react-router-dom";

const Card = ({ id, home, profile }) => {
  const handleClick = () => {
    window.location.pathname = `game/${id}`;
  };

  return (
    <div className={styles.container + " flex"}>
      <div className={styles.picture} onClick={handleClick}>
        <Image src={profile.img[0]} alt="image game" />
      </div>

      <span>11h atrás</span>
      <p className={styles.text}>{home.text}</p>
      <p>Forje um novo caminho</p>

      <Link className={styles.link}>leia mais</Link>
    </div>
  );
};

export default Card;
