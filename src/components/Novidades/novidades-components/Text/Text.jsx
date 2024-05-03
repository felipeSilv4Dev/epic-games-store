import React from "react";
import styles from "./Text.module.css";
import { Link } from "react-router-dom";

const Text = ({ p1, p2, id, onNavigate }) => {
  return (
    <div className={styles.container + " flex"}>
      <p className={styles.text}>{p1}</p>
      <p className={styles.paragraph}>{p2}</p>
      <Link onClick={() => onNavigate(id)} className={styles.link}>
        leia mais
      </Link>
    </div>
  );
};

export default Text;
