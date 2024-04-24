import React from "react";
import styles from "./Card.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";

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
      <Text p1={home.text} p2="Forje um novo caminho" />
    </div>
  );
};

export default Card;
