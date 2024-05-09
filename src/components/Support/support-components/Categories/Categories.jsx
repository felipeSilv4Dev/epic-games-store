import React from "react";
import styles from "./Categories.module.css";
import Image from "../../../Components/Image/Image";

const links = [
  {
    title: "jogos",
    icon: "fa-solid fa-gamepad",
  },
  {
    title: "Contas",
    icon: "fa-solid fa-user",
  },
  {
    title: "Negócios",
    icon: "fa-solid fa-building",
  },
];

const Cartegories = ({ img, id }) => {
  const { title, icon } = links[id - 1];

  return (
    <div className={styles.container + " flex"}>
      <div className={styles.image + " flex"}>
        <i className={`${styles.icon} ${icon}`}></i>
        <Image src={img} alt="img background" />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Cartegories;
