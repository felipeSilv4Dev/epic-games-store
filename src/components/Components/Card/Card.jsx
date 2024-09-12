import React, { useCallback, useEffect, useState } from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import useMatch from "../../../Hooks/useMatch";
import useLocalStorage from "../../../Hooks/useLocalStore";

const CardGame = ({
  game,
  footer = false,
  description = false,
  price = true,
}) => {
  const match = useMatch("48em");
  const [open, setOpen] = useState(false);
  const isOpen = open ? "active" : "";
  //   // const {
  //   //   $any: setItem,
  //   //   initial,
  //   //   active,
  //   // } = useLocalStorage({ key: "game", id: game.id });

  //   const handleOver = () => {
  //     setOpen(true);
  //   };
  const handleAddGame = (e) => {
    e.preventDefault();

    setOpen(!open);
  };

  //   // useEffect(() => {
  //   //   initial();
  //   // }, [initial]);

  const footerBg = {
    backgroundColor: game.newPrice ? "var(--body-bg)" : "var(--btn-3)",
  };

  return (
    <section
      id={game.id}
      // style={{ width: `${match && width}%` }}
      className={styles.container + " flex"}
    >
      <div id={game.id} className={styles.image}>
        <div>
          <figure>
            <Image src={game.img.src1} alt={game.title} />
          </figure>

          <span onClick={handleAddGame} className={`${styles.icon} ${isOpen}`}>
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
        </div>

        {footer && (
          <p style={footerBg} className={styles.footer}>
            {game.newPrice ? "Em breve" : "gratuito"}
          </p>
        )}

        {!match && open && (
          <span className={styles.popUp}>
            {open ? "Para a lista de desejos" : "Remover da lista de desejos"}
          </span>
        )}
      </div>

      {<span className={styles.subtitle}>{game.subtitle}</span>}

      <h2 className={styles.title}>{game.title}</h2>
      {description && (
        <p className={styles.description}>{game.descriptionText}</p>
      )}

      {price && (
        <Price
          porcentage={game.porcentage}
          oldPrice={game.oldPrice}
          newPrice={game.newPrice}
          theme={game.theme}
        />
      )}
    </section>
  );
};

export default CardGame;
