import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./MenuBuy.module.css";
import Card from "../../../Components/Card/Card";
import Button from "../../../Components/Button/Button";
import Info from "./menuBuy-components/Info/Info";
import useMatch from "../../../../Hooks/useMatch";
import { NavLink } from "react-router-dom";
import LoadingButton from "../../../LoadingButton/LoadingButton";
import Box from "../Box/Box";
const MenuBuy = ({
  oldPrice,
  newPrice,
  porcentage,
  subtitle,
  profile,
  img,
  dist,
  clickGame,
  clickCar,
  game,
  carrinho,
  setOpen,
}) => {
  const match = useMatch("48em");
  const container = useRef();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(false);

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

  const handleAddCar = (e) => {
    if (!carrinho) {
      setLoading(true);
      setTimeout(() => {
        clickCar(e);
        setLoading(false);
      }, 300);
    }
  };

  if (match) {
    removeClass();
  }

  useEffect(() => {
    if (match !== null && !match) {
      window.addEventListener("scroll", handleScroll);
    }
  }, [handleScroll, match]);

  return (
    <div ref={container} className={styles.container + " flex"}>
      <div className={styles.logo + " flex"}>
        <Card
          img={`../${img.logo}`}
          newPrice={newPrice}
          oldPrice={oldPrice}
          theme={profile.theme}
          subtitle={subtitle}
          porcentage={porcentage}
        />
      </div>

      <p className={styles.date}>A promoção termina 29/02/2024 às 13:00</p>

      <Button btn="primary" theme={profile.theme}>
        Comprar Agora
      </Button>

      <div style={{ width: "100%" }} onClick={handleAddCar}>
        <NavLink to={carrinho && "/carrinho"}>
          <Button btn="secondary">
            {carrinho ? (
              "visualizar no carrinho"
            ) : loading ? (
              <LoadingButton width={match ? "20.5rem" : "15.1rem"} />
            ) : (
              "adicionar Ao carrinho"
            )}
          </Button>
        </NavLink>
      </div>

      <div
        style={{ width: "100%" }}
        onClick={(e) => {
          setList(true);
          setTimeout(() => {
            clickGame(e);
            setList(false);
          }, 300);
        }}
      >
        <Button btn="secondary">
          {game ? (
            list ? (
              <LoadingButton width={match ? "20.5rem" : "15.1rem"} />
            ) : (
              "na lista de desejos"
            )
          ) : list ? (
            <LoadingButton width={match ? "20.5rem" : "15.1rem"} />
          ) : (
            "para a lista de desejos"
          )}
        </Button>
      </div>

      <Info textPrimary="Recompensas Epic" texteSecondary="ganhe 5% de volta" />
      <Info textPrimary="Desenvolvedor" texteSecondary={profile.company} />
      <Info textPrimary="Editora" texteSecondary={profile.company} />
      <Info textPrimary="Data de lançamento" texteSecondary={profile.date} />
      <Info
        textPrimary="Plataforma"
        texteSecondary={
          <i className={styles.icon + " fa-brands fa-windows"}></i>
        }
      />

      <div
        style={{ width: "100%" }}
        onClick={() => {
          document.body.style.overflowY = "hidden";
          setOpen(true);
        }}
      >
        <Button btn="secondary">
          <i
            style={{ marginRight: ".8rem" }}
            className=" fa-solid fa-share-nodes"
          ></i>
          Compartilhar
        </Button>
      </div>

      <Button btn="secondary">
        <i style={{ marginRight: ".8rem" }} className=" fa-solid fa-flag"></i>
        denunciar
      </Button>
    </div>
  );
};

export default MenuBuy;
