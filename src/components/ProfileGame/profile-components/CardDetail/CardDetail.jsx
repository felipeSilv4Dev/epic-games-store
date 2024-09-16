import React, { useEffect, useState } from "react";
import styles from "./CardDetail.module.css";
import Button from "../../../Components/Button/Button";
import Image from "../../../Components/Image/Image";
import { NavLink } from "react-router-dom";
import LoadingButton from "../../../LoadingButton/LoadingButton";

const CardDetail = ({
  game,
  src,
  subtitles,
  onSaveCarLocal,
  storageCar,
  setIsSaveCar,
  isSaveCar,
  isSaveList,
  onSaveListLocal,
  setIsSaveList,
  storageList,
}) => {
  const [loadingCar, setLoadingCar] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    if (storageCar?.car?.includes(game.id)) {
      setLoadingCar(true);
      setTimeout(() => {
        setLoadingCar(false);
        setIsSaveCar(true);
      }, 200);
    } else {
      setIsSaveCar(false);
    }
  }, [storageCar, game, setIsSaveCar]);

  useEffect(() => {
    if (storageList?.games?.includes(game.id)) {
      setLoadingList(true);
      setTimeout(() => {
        setLoadingList(false);
        setIsSaveList(true);
      }, 200);
    } else {
      setLoadingList(true);
      setTimeout(() => {
        setLoadingList(false);
        setIsSaveList(false);
      }, 200);
    }
  }, [storageList, game, setIsSaveList]);

  return (
    <div className={styles.container}>
      <div className={" flex"}>
        <div className={styles.image + " flex"}>
          <Image src={`../${src}`} alt={game.title} />
        </div>

        <div className={styles.info + " flex"}>
          <div className="flex">
            <span>{subtitles}</span>
            <h2>{game.title}</h2>
          </div>

          <p>
            Entre no mundo vibrante e em constante desenvolvimento do{" "}
            {game.title} Online e experimente a vida na fronteira dos EUA. Vá
            atrás de recompensas, enfrente gangues fora da lei e outros
            jogadores, cace, pesque e negocie, procure tesouros...
          </p>
        </div>
      </div>

      <div className={styles.priceContainer + " flex"}>
        <p className={styles.price}>
          {game.newPrice ? ` R$ ${game.newPrice}` : "Gratuito"}
        </p>

        <span>
          <NavLink to={isSaveCar && "/carrinho"}>
            <Button
              btn="secondary"
              onClick={() => onSaveCarLocal("car", game.id)}
            >
              {loadingCar && <LoadingButton />}
              {!loadingCar &&
                (isSaveCar
                  ? "visualizar no carrinho"
                  : "adicionar ao carrinho")}
            </Button>
          </NavLink>
        </span>
        <span>
          <Button
            btn="secondary"
            onClick={() => onSaveListLocal("games", game.id)}
          >
            {loadingList && <LoadingButton />}
            {!loadingList &&
              (isSaveList ? "na lista de desejos" : "para a lista de desejos")}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default CardDetail;
