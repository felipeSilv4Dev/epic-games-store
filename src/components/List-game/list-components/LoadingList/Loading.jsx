import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container + " flex"}>
      <div className={styles.list}></div>
    </div>
  );
};

export default Loading;
