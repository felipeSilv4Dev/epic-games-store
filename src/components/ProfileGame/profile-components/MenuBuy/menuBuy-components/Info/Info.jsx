import React from "react";
import styles from "./Info.module.css";

const Info = ({ textPrimary, texteSecondary }) => {
  return (
    <div className={styles.info + " flex"}>
      <span>{textPrimary}</span>
      <span>{texteSecondary}</span>
    </div>
  );
};

export default Info;
