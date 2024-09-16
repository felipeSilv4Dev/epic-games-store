import React from "react";
import styles from "./Button.module.css";
import { func } from "prop-types";

const Button = ({ btn, children, theme = "var(--btn-3)", onClick = func }) => {
  const style = {
    backgroundColor: theme,
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
