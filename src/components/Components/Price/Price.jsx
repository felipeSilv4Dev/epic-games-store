import React from "react";
import styles from "./Price.module.css";

const Price = ({ porcentage, oldPrice, newPrice, theme = "var(--btn-3)" }) => {
  const style = {
    backgroundColor: theme,
  };

  return (
    <div className={styles.price + " flex"}>
      <span style={style} className={styles.porcentage}>
        -{porcentage}%
      </span>
      <div className={styles.priceCurrent + " flex"}>
        <p className={styles.oldPrice}>R$ {oldPrice}</p>
        <p className={styles.newPrice}>
          {newPrice ? `R$ ${newPrice}` : "gratuito"}
        </p>
      </div>
    </div>
  );
};

export default Price;
