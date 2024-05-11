import React from "react";
import styles from "./Categories.module.css";
import Image from "../../../Components/Image/Image";
import { Link } from "react-scroll";
const links = [
  {
    title: "jogos",
    icon: "fa-solid fa-gamepad",
    offset: -120,
    duration: 500,
  },
  {
    title: "Contas",
    icon: "fa-solid fa-user",
    offset: -120,
    duration: 1000,
  },
  {
    title: "Negócios",
    icon: "fa-solid fa-building",
  },
];

const Cartegories = ({ img, id }) => {
  const { title, icon, offset, duration } = links[id - 1];

  return (
    <Link
      to={title.toLocaleLowerCase()}
      className={styles.link}
      spy={true}
      smooth={true}
      offset={offset}
      duration={duration}
    >
      <div className={styles.container + " flex"}>
        <div className={styles.image + " flex"}>
          <i className={`${styles.icon} ${icon}`}></i>
          <Image src={img} alt="img background" />
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
};

export default Cartegories;
