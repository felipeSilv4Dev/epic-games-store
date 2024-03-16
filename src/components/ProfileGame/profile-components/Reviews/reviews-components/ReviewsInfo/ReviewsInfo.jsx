import React from "react";
import styles from "./ReviewsInfo.module.css";

const ReviewsInfo = ({ id, title, company, author, score }) => {
  return (
    <div id={id} className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.subtitle}>{author}</span>
      </div>

      <div className={styles.content}>
        <h2 className={styles.media}>{score}</h2>
        <p>
          {company} has once again created a game that redefines the open-world
          experience.{title} is a triumph that every gamer should experience for
          themselves
        </p>
        <a className={styles.link} href="#Ele">
          Ler avaliação completa
          <i
            className={styles.icon + " fa-solid fa-arrow-up-right-from-square"}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default ReviewsInfo;
