import React from "react";
import styles from "./Box.module.css";

const Box = ({ setClick, children }) => {
  const handleClick = ({ target }) => {
    if (target.id === "box") {
      document.body.style.overflowY = "initial";
      setClick(false);
    }
  };

  return (
    <div id="box" onClick={handleClick} className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Box;
