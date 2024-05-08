import React from "react";
import cyber from "../../../../../public/img/banner/cyber-banner.jpg";
import styles from "./Categories.module.css";
import Image from "../../../Components/Image/Image";

const Cartegories = ({ title, icon }) => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.image + " flex"}>
        <i className={`${styles.icon} ${icon}`}></i>
        <Image src={cyber} alt="cyber" />
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Cartegories;
