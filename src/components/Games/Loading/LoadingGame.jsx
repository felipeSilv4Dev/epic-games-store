import React from "react";
import styles from "./LoadingGame.module.css";
import useMatch from "../../../Hooks/useMatch";

const LoadingGame = () => {
  const game = [0, 1, 2, 3, 4];
  const match = useMatch("64em");

  return (
    <div className={styles.container + " max flex"}>
      {game.slice(0, match ? 4 : 5).map((item) => (
        <div className={styles.game} key={item}></div>
      ))}
    </div>
  );
};

export default LoadingGame;
