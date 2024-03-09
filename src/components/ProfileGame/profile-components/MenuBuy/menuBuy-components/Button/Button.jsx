import React from "react";
import styles from "./Button.module.css";

const Button = ({ btn, children, theme }) => {
  const style = {
    backgroundColor: theme ? theme : "var(--btn-4)",
  };

  return (
    <button
      style={btn === "primary" ? style : {}}
      className={`${styles[btn]} ${styles.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;
