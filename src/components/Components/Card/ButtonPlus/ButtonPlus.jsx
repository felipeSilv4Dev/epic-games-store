import React from "react";
import styles from "./ButtonPlus.module.css";
import useMatch from "../../../../Hooks/useMatch";

const ButtonPlus = ({ onAddGame, isOpen }) => {
  const isActive = isOpen ? "active" : "";
  const match = useMatch("48em");

  return (
    <>
      <span onClick={onAddGame} className={`${styles.icon} ${isActive}`}>
        <svg
          className={`${styles.checked} ${isActive} svg css-uwwqev`}
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

      {!match && (
        <span className={styles.popUp}>
          {isOpen ? "Remover da lista de desejos" : "Para a lista de desejos"}
        </span>
      )}
    </>
  );
};

export default ButtonPlus;
