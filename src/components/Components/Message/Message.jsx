import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";

const Message = ({ message, fill }) => {
  return (
    <div className={styles.message}>
      <svg
        width="606"
        height="741"
        viewBox="0 0 606 741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M571 0H35C15.67 0 0 15.67 0 35V592.069C0 606.248 8.55419 619.026 21.6631 624.428L291.097 735.476C299.679 739.013 309.314 738.996 317.884 735.429L584.45 624.47C597.499 619.039 606 606.292 606 592.158V35C606 15.67 590.33 0 571 0Z"
          fill={fill}
        />
        <path
          d="M157 263.93L266.089 311.492L195.399 380"
          stroke="#F5F5F5"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M440 321.029L322.297 303.46L372.747 218.931"
          stroke="#F5F5F5"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M258 426V426C286.51 397.81 324.986 382 365.08 382H373"
          stroke="#F5F5F5"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>

      <h3>{message}</h3>
      <NavLink className={styles.linkMessage} to="/">
        Comprar Jogos e Aplicativos
      </NavLink>
    </div>
  );
};

export default Message;
