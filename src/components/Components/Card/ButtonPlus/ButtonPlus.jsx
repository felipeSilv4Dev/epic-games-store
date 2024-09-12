import React from "react";
import styles from "./ButtonPlus.module.css";

const ButtonPlus = ({ onAddGame, open }) => {
  const isOpen = open ? "active" : "";

  return (
    <span onClick={onAddGame} className={`${styles.icon} ${isOpen}`}>
      <svg
        className={`${styles.checked} ${isOpen} svg css-uwwqev`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 -10 468.8 468.8"
      >
        <path
          fill="currentColor"
          strokeWidth="10"
          stroke="currentColor"
          d="M142.8 323.85L35.7 216.75 0 252.45l142.8 142.8 306-306-35.7-35.7z"
        ></path>
      </svg>
    </span>
  );
};

export default ButtonPlus;
