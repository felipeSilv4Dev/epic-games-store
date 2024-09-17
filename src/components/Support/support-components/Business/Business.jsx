import React from "react";
import styles from "./Business.module.css";
import Image from "../../../Components/Image/Image";
import { NavLink } from "react-router-dom";

const Business = ({ game }) => {
  const style = {
    background: `url(${game.profile.img[1]}) no-repeat center center`,
    backgroundSize: "cover",
  };

  return (
    <div className={styles.container}>
      <NavLink to={`/game/${game.id}`}>
        <div style={style} className={styles.bg}>
          <Image src={game.img.logo} alt="Logo" />
        </div>
      </NavLink>
    </div>
  );
};

export default Business;
