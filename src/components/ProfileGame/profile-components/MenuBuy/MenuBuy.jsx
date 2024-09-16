import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MenuBuy.module.css";
import Card from "../../../Components/Card/Card";
import Button from "../../../Components/Button/Button";
import Info from "./menuBuy-components/Info/Info";
import useMatch from "../../../../Hooks/useMatch";
import { NavLink } from "react-router-dom";
import LoadingButton from "../../../LoadingButton/LoadingButton";

const MenuBuy = ({
  game,
  dist,
  setOpen,
  setReport,
  onSaveCarLocal,
  storageCar,
  setIsSaveCar,
  isSaveCar,
  isSaveList,
  onSaveListLocal,
  setIsSaveList,
  storageList,
}) => {
  const match = useMatch("48em");
  const container = useRef();
  const [loadingCar, setLoadingCar] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  const handleScroll = useCallback(async () => {
    if (!container.current) return;
    const observer = container.current.classList.contains("active");
    const { current } = container;
    const { offsetTop } = container.current;
    const { height } = await dist;

    if (height) {
      const distTop = offsetTop - height;

      if (!observer && scrollY > distTop) {
        current.classList.add("active");
      } else if (!!observer && scrollY < distTop * 0.8) {
        current.classList.remove("active");
      }
    }
  }, [dist]);

  const removeClass = useCallback(() => {
    container.current.classList.remove("active");
    window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (match) {
    removeClass();
  }

  useEffect(() => {
    if (match !== null && !match) {
      window.addEventListener("scroll", handleScroll);
    }
  }, [handleScroll, match]);

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
    <div ref={container} className={styles.container + " flex"}>
      <div className={styles.logo + " flex"}>
        <Card
          game={game}
          src={"logo"}
          path={"../"}
          price={true}
          priceNow={true}
          subtitle={true}
          icon={false}
          theme={true}
        />
      </div>

      <p className={styles.date}>A promoção termina 29/02/2024 às 13:00</p>

      <Button btn="primary" theme={game.profile.theme}>
        Comprar Agora
      </Button>

      <div style={{ width: "100%" }}>
        <NavLink to={isSaveCar && "/carrinho"}>
          <Button
            btn="secondary"
            onClick={() => onSaveCarLocal("car", game.id)}
          >
            {loadingCar && <LoadingButton />}
            {!loadingCar &&
              (isSaveCar ? "visualizar no carrinho" : "adicionar ao carrinho")}
          </Button>
        </NavLink>
      </div>

      <div style={{ width: "100%" }}>
        <Button
          btn="secondary"
          onClick={() => onSaveListLocal("games", game.id)}
        >
          {loadingList && <LoadingButton />}
          {!loadingList &&
            (isSaveList ? "na lista de desejos" : "para a lista de desejos")}
        </Button>
      </div>

      <Info textPrimary="Recompensas Epic" textSecondary="ganhe 5% de volta" />
      <Info textPrimary="Desenvolvedor" textSecondary={game.profile.company} />
      <Info textPrimary="Editora" textSecondary={game.profile.company} />
      <Info
        textPrimary="Data de lançamento"
        textSecondary={game.profile.date}
      />
      <Info
        textPrimary="Plataforma"
        textSecondary={
          <i className={styles.icon + " fa-brands fa-windows"}></i>
        }
      />

      <div style={{ width: "100%" }}>
        <Button
          btn="secondary"
          onClick={() => {
            document.body.style.overflowY = "hidden";
            setOpen(true);
          }}
        >
          <i
            style={{ marginRight: ".8rem" }}
            className=" fa-solid fa-share-nodes"
          ></i>
          Compartilhar
        </Button>
      </div>

      <div style={{ width: "100%" }}>
        <Button
          btn="secondary"
          onClick={() => {
            document.body.style.overflowY = "hidden";
            setReport(true);
          }}
        >
          <i style={{ marginRight: ".8rem" }} className=" fa-solid fa-flag"></i>
          denunciar
        </Button>
      </div>
    </div>
  );
};

export default MenuBuy;
