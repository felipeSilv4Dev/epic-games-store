import React from "react";
import styles from "./Button.module.css";
import { func } from "prop-types";

const Button = ({ btn, children, theme, onClick = func }) => {
  const style = {
    backgroundColor: theme ? theme : "var(--btn-3)",
  };

  return (
    <button
      onClick={onClick}
      style={btn === "primary" ? style : {}}
      className={`${styles[btn]} ${styles.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;
