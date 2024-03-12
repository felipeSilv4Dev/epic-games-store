import React, { useCallback, useEffect, useState } from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import useMatch from "../../../Hooks/useMatch";
import useLocalStorage from "../../../Hooks/useLocalStore";

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
  theme,
}) => {
  const match = useMatch("48em");
  const [open, setOpen] = useState(false);
  const {
    $any: setItem,
    initial,
    active,
  } = useLocalStorage({ key: "game", id });

  const handleOver = () => {
    setOpen(true);
  };
  const handleOut = () => {
    setOpen(false);
  };

  useEffect(() => {
    initial();
  }, [initial]);

  return (
    <section
      id={id}
      style={{ width: `${match && width}%` }}
      className={styles.container + " flex"}
    >
      <div id={id} className={styles.image}>
        <div>
          <figure>
            <Image src={img} alt={title} />
          </figure>

          {icon && (
            <div
              onMouseOut={handleOut}
              onMouseOver={handleOver}
              onClick={setItem}
              className={styles.iconContainer}
            >
              <i
                style={{
                  opacity: !active ? 1 : 0,
                  transform: active ? "rotate(0deg)" : "",
                }}
                className={styles.icon + " fa-solid  fa-plus"}
              ></i>

              <i
                style={{
                  opacity: active ? 1 : 0,
                  transform: !active ? "rotate(0deg)" : "",
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

        {icon && !match && open && (
          <span className={styles.popUp}>
            {!active
              ? "Para a lista de desejos"
              : "Remover da lista de desejos"}
          </span>
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
          theme={theme}
        />
      )}
    </section>
  );
};

export default CardGame;
