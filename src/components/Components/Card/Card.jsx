import React, { useCallback, useEffect, useState } from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import useMatch from "../../../Hooks/useMatch";

const CardGame = ({
  width,
  title,
  img,
  subtitle,
  oldPrice,
  newPrice,
  porcentage,
  descriptionText,
  id,
  footerImg,
  icon,
}) => {
  const macth = useMatch("48em");
  const [active, setActive] = useState(true);

  const setLocal = useCallback(({ id }) => {
    const isLocal = localStorage.getItem("game");

    if (isLocal) {
      const gamesArr = JSON.parse(isLocal);
      const index = gamesArr.indexOf(id);

      if (index !== -1) {
        gamesArr.splice(index, 1);
        localStorage.setItem("game", JSON.stringify([...gamesArr]));
      } else {
        localStorage.setItem("game", JSON.stringify([...gamesArr, id]));
      }
    } else {
      localStorage.setItem("game", JSON.stringify([id]));
    }
  }, []);

  const initial = useCallback(() => {
    const game = localStorage.getItem("game");
    if (game) {
      const arrGame = JSON.parse(game);

      if (arrGame.includes(id)) {
        setActive(false);
      }
    }
  }, [id]);

  useEffect(() => {
    initial();
  }, [initial, id]);
  const handleClick = async (e) => {
    e.preventDefault();
    setActive(!active);
    setLocal({ id });
  };

  return (
    <section
      id={id}
      style={{ width: `${macth && width}%` }}
      className={styles.container + " flex"}
    >
      <div id={id} className={styles.image}>
        <div>
          <Image src={img} alt={title} />

          {icon && (
            <div onClick={handleClick} className={styles.iconContainer}>
              <i
                style={{
                  opacity: active ? 1 : 0,
                  transform: !active ? "rotate(0deg)" : "",
                }}
                className={styles.icon + " fa-solid  fa-plus"}
              ></i>

              <i
                style={{
                  opacity: !active ? 1 : 0,
                  transform: active ? "rotate(0deg)" : "",
                }}
                className={styles.icon + " fa-solid  fa-check"}
              ></i>
            </div>
          )}
        </div>

        {footerImg && (
          <p
            style={{
              backgroundColor: newPrice ? "var(--body-bg)" : "var(--btn-3)",
            }}
            className={styles.footer}
          >
            {newPrice ? "Em breve" : "gratuito"}
          </p>
        )}
      </div>

      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {descriptionText && (
        <p className={styles.description}>{descriptionText}</p>
      )}

      {porcentage && (
        <Price
          porcentage={porcentage}
          oldPrice={oldPrice}
          newPrice={newPrice}
        />
      )}
    </section>
  );
};

export default CardGame;
