import React from "react";
import styles from "./Card.module.css";
import Price from "../Price/Price";
import Image from "../Image/Image";
import useMatch from "../../../Hooks/useMatch";

const CardGame = ({
  width,
  price,
  description,
  title,
  img,
  subtitle,
  oldPrice,
  newPrice,
  porcentage,
  subtitleOpen,
  descriptionText,
  id,
  footerImg,
  icon,
}) => {
  const macth = useMatch("48em");

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
            <i className={styles.circle + " fa-solid fa-circle-plus"}></i>
          )}
        </div>

        {footerImg && (
          <p
            style={{
              backgroundColor: newPrice ? "var(--body-bg)" : "var(--btn-4)",
            }}
            className={styles.footer}
          >
            {newPrice ? "Em breve" : "gratuito"}
          </p>
        )}
      </div>

      {subtitleOpen && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{descriptionText}</p>}

      {price && (
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
