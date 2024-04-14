import React from "react";
import styles from "./Box.module.css";

const Box = ({ setClick, children }) => {
  return (
    <div
      onClick={() => {
        document.body.style.overflowY = "initial";

        setClick(false);
      }}
      className={styles.container}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Box;
