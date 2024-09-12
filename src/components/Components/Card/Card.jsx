import React, { useCallback, useEffect, useState } from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import useMatch from "../../../Hooks/useMatch";
import useLocalStorage from "../../../Hooks/useLocalStore";
import ButtonPlus from "./ButtonPlus/ButtonPlus";

const CardGame = ({
  game,
  footer = false,
  description = false,
  price = true,
  subtitle = false,
  src = "src1",
  icon = true,
}) => {
  const match = useMatch("48em");
  const [open, setOpen] = useState(false);

  const handleAddGame = (e) => {
    e.preventDefault();

    setOpen(!open);
  };

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
            <Image src={game.img[src]} alt={game.title} />
          </figure>

          {icon && <ButtonPlus onAddGame={handleAddGame} open={open} />}
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

      {subtitle && <span className={styles.subtitle}>{game.subtitle}</span>}

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
