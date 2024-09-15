import React from "react";
import styles from "./Info.module.css";

const Info = ({ textPrimary, textSecondary }) => {
  return (
    <div className={styles.info + " flex"}>
      <span>{textPrimary}</span>
      <span>{textSecondary}</span>
    </div>
  );
};

export default Info;
