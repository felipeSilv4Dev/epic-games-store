import React from "react";
import styles from "./CardDetail.module.css";
import Button from "../../../../../Components/Button/Button";
import Image from "../../../../../Components/Image/Image";
import { NavLink } from "react-router-dom";

const CardDetail = ({
  title,
  newPrice,
  subtitle,
  clickGame,
  img,
  game,
  clickCar,
  carrinho,
  profile,
}) => {
  return (
    <div className={styles.container}>
      <div className={" flex"}>
        <div className={styles.image + " flex"}>
          <Image src={"../" + profile.img[4]} alt={title} />
        </div>

        <div className={styles.info + " flex"}>
          <div className="flex">
            <span>{subtitle}</span>
            <h2>{title}</h2>
          </div>

          <p>
            Entre no mundo vibrante e em constante desenvolvimento do {title}{" "}
            Online e experimente a vida na fronteira dos EUA. Vá atrás de
            recompensas, enfrente gangues fora da lei e outros jogadores, cace,
            pesque e negocie, procure tesouros...
          </p>
        </div>
      </div>

      <div className={styles.priceContainer + " flex"}>
        <p className={styles.price}>
          {newPrice ? ` R$ ${newPrice}` : "Gratuito"}
        </p>

        <div onClick={carrinho ? null : clickCar} style={{ width: "100%" }}>
          <NavLink to={carrinho ? "/carrinho" : null}>
            <Button btn="secondary">
              {carrinho ? "visualizar carrinho" : " Adicionar ao carrinho"}
            </Button>
          </NavLink>
        </div>
        <div onClick={clickGame} style={{ width: "100%" }}>
          <Button btn="secondary">
            {game ? "na lista de desejo" : "para a lista de desejos"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
