import React from "react";
import styles from "./Card.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";

const Card = ({ id, home, profile, onNavigate, oldPrice }) => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.picture} onClick={() => onNavigate(id)}>
        <Image src={profile.img[0]} alt="image game" />
      </div>

      <span>{oldPrice[0]}h atrás</span>
      <Text
        onNavigate={onNavigate}
        id={id}
        p1={home.text}
        p2={`Dedicada a company e artistas da ${profile.company}`}
      />
    </div>
  );
};

export default Card;
