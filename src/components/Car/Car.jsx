import React, { useCallback, useEffect, useState } from "react";
import useTop from "../../Hooks/useTop";
import Head from "../../Helpers/Head";
import styles from "./Car.module.css";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import { v4 as uuidv4 } from "uuid";
import Button from "../Components/Button/Button";

const Car = () => {
  const { request, data: json } = useFetch();
  const [data, setData] = useState([]);
  const top = useTop();
  let games;

  useEffect(top, [top]);

  const getGames = useCallback(() => {
    const item = localStorage.getItem("carrinho");

    if (!item) return;
    const jsonData = JSON.parse(item);
    setData(jsonData);
  }, []);
  useEffect(getGames, [getGames]);

  useEffect(() => {
    async function fetchGame() {
      await request(API_URL);
    }
    fetchGame();
  }, [request]);

  const handleClick = ({ currentTarget }) => {
    const id = +currentTarget.closest("section").id;
    const game = JSON.parse(localStorage.getItem("carrinho"));
    const filterGame = game.filter((g) => g !== id);

    localStorage.setItem("carrinho", JSON.stringify(filterGame));
    setData(filterGame);
  };

  if (json) {
    games = data.flatMap((d) => json.filter((j) => j.id === d));
  }

  return (
    <main className={styles.container + " max appMain"}>
      <Head
        title="Carrinho"
        description="compre os jogos mais em conta do mercado"
      />
      <header className={styles.header + " flex"}>
        <h1 className={styles.title}>Meu Carrinho</h1>
        <div className={styles.money + " flex"}>
          <p>
            Recompensas Epic
            <i
              className={
                styles.icon + " fa-solid fa-arrow-up-right-from-square"
              }
            ></i>
          </p>
          <span>R$ 00,00</span>
        </div>
      </header>

      <div className={styles.content + " flex"}>
        <div className={styles.card + " flex"}>
          {games &&
            games.map((g) => (
              <CardMarkup key={uuidv4()} {...g} onDelete={handleClick} />
            ))}
        </div>

        <div className={styles.menu}>
          <h2>Resumo de jogos e aplicativos</h2>
          <div className={styles.value + " flex"}>
            <p>preço</p>
            <p>R$ 288,94</p>
          </div>
          <div className={styles.value + " flex"}>
            <p>Desconto</p>
            <p>-R$ 3,90</p>
          </div>
          <div className={styles.value + " flex"}>
            <p>Imposto</p>
            <p className={styles.imposto}>calculado ao finaliza</p>
          </div>

          <div className={styles.total}>
            <div className={styles.value + " flex"}>
              <p>Subtotal</p>
              <p>R$ 285,04</p>
            </div>

            <Button btn="primary">Finalizar compra</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Car;
