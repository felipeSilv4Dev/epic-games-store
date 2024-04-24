import React from "react";
import styles from "./Text.module.css";
import { Link } from "react-router-dom";

const Text = ({ p1, p2 }) => {
  return (
    <div className={styles.container + " flex"}>
      <p className={styles.text}>{p1}</p>
      <p>{p2}</p>
      <Link className={styles.link}>leia mais</Link>
    </div>
  );
};

export default Text;
