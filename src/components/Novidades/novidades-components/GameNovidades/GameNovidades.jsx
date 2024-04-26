import React from "react";
import styles from "./GameNovidades.module.css";
import Image from "../../../Components/Image/Image";
import Text from "../Text/Text";

const Game = ({ id, profile, title, oldPrice, onNavigate }) => {
  return (
    <article className={styles.container + " flex"}>
      <figure onClick={() => onNavigate(id)} className={styles.picture}>
        <Image src={profile.img[1]} alt={title} />
      </figure>
      <div className={styles.info}>
        <span>
          <i className="fa-solid fa-star"></i>
          {oldPrice[0]} MÊS ATRÁS
        </span>
        <Text
          onNavigate={onNavigate}
          id={id}
          p1={`
            ${title} 
             adipisicing elit. Labore corrupti iure, hic ea ab illo dolorem. Libero`}
          p2={`adipisicing elit. Labore corrupti iure, ${profile.company}. consectetur totam perferendis dolorum cum earum.`}
        />
      </div>
    </article>
  );
};

export default Game;
