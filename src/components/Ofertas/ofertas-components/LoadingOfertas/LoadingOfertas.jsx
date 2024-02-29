import React from "react";
import styles from "./LoadingOfertas.module.css";

const LoadingOfertas = () => {
  const divs = [0, 1, 2];

  return (
    <div className={styles.container + " max flex"}>
      {divs.map((item) => (
        <div key={item} className={styles.skeleton}></div>
      ))}
    </div>
  );
};

export default LoadingOfertas;
