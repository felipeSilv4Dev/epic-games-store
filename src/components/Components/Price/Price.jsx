import React from "react";
import styles from "./Price.module.css";

const Price = ({ porcentage, oldPrice, newPrice }) => {
  return (
    <div className={styles.price + " flex"}>
      <span className={styles.porcentage}>-{porcentage}%</span>
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
