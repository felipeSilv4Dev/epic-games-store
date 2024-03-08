import React from "react";
import styles from "./Genre.module.css";
const Genre = ({ genre, title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.gnereContainer + " flex"}>
        {genre &&
          genre.map((link, index) => (
            <a key={index} className={styles.genre} href="#g">
              {link}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Genre;
