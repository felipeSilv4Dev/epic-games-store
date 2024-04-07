import React from "react";
import styles from "./LoadingButton.module.css";

const LoadingButton = ({ width }) => {
  return (
    <div style={{ width: width }} className={styles.container + " flex "}>
      <div className={styles.review}></div>
    </div>
  );
};

export default LoadingButton;
