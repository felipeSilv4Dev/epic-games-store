import React from "react";
import styles from "./Game.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";

const Game = ({ profile, title, oldPrice }) => {
  return (
    <article className={styles.container + " flex"}>
      <figure>
        <Image src={profile.img[4]} alt={title} />
      </figure>
      <div className={styles.info}>
        <span>
          <i className="fa-solid fa-star"></i>
          {oldPrice[0]} MÊS ATRÁS
        </span>
        <Text
          p1={
            title +
            " adipisicing elit. Labore corrupti iure, hic ea ab illo dolorem. Libero"
          }
          p2="adipisicing elit. Labore corrupti iure, hic ea ab illo dolorem. consectetur totam perferendis dolorum cum earum."
        />
      </div>
    </article>
  );
};

export default Game;
