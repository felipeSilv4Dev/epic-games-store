import React from "react";
import styles from "./Account.module.css";
import Image from "../../../Components/Image/Image";
import { useNavigate } from "react-router";

const Account = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      className={styles.container + " flex"}
    >
      <div className={styles.picture}>
        <Image src={game.profile.img[2]} alt={game.title} />
      </div>

      <div className={styles.text + " flex"}>
        <Image src={game.img.logo} alt="Logo" />
        <h2>{game.title}</h2>
      </div>
    </div>
  );
};

export default Account;
