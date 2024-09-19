import React from "react";
import styles from "./Value.module.css";

const Value = ({ name, value }) => {
  return (
    <div className={styles.value + " flex"}>
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
};

export default Value;
