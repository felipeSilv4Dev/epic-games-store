import React from "react";
import styles from "./Value.module.css";

const Value = ({ txt1, tx2 }) => {
  return (
    <div className={styles.value + " flex"}>
      <p>{txt1}</p>
      <p>{tx2}</p>
    </div>
  );
};

export default Value;
