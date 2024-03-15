import React from "react";
import styles from "./Social.module.css";

const Social = () => {
  return (
    <>
      <h2 className={styles.title}>Siga-nos</h2>
      <div className={styles.container + " flex"}>
        <div className={styles.icon + " flex"}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-vk"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </>
  );
};

export default Social;
