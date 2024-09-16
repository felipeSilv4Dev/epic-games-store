import React from "react";
import styles from "./LoadingButton.module.css";

const LoadingButton = () => {
  return (
    <div className={styles.container + " flex "}>
      <div className={styles.review}></div>
    </div>
  );
};

export default LoadingButton;
