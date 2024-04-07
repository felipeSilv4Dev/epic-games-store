import React, { useCallback, useEffect, useState } from "react";
import useTop from "../../Hooks/useTop";
import Head from "../../Helpers/Head";
import styles from "./Car.module.css";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import { v4 as uuidv4 } from "uuid";
import Menu from "./car-components/Menu/Menu";
import HeaderMarkup from "../Components/HeaderMarkup/HeaderMarkup";
import Message from "../Components/Message/Message";

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
    setTimeout(() => {
      const id = +currentTarget.closest("section").id;
      const game = JSON.parse(localStorage.getItem("carrinho"));
      const filterGame = game.filter((g) => g !== id);

      localStorage.setItem("carrinho", JSON.stringify(filterGame));
      setData(filterGame);
    }, 300);
  };

  if (json && data.length) {
    games = data.flatMap((d) => json.filter((j) => j.id === d));
  }

  const handleMoveList = ({ currentTarget }) => {
    setTimeout(() => {
      const id = +currentTarget.closest("section").id;
      const game = JSON.parse(localStorage.getItem("game"));
      const gameFilter = game.filter((g) => g !== id);
      localStorage.setItem("game", JSON.stringify([...gameFilter, id]));
      handleClick({ currentTarget });
    }, 300);
  };

  return (
    <main className={styles.container + " max appMain"}>
      <Head
        title="Carrinho"
        description="compre os jogos mais em conta do mercado"
      />

      <HeaderMarkup title="Meu carrinho" />
      <div className={styles.content + " flex"}>
        <div className={styles.card + " flex"}>
          {games &&
            games.map((g) => (
              <CardMarkup
                key={uuidv4()}
                {...g}
                onDelete={handleClick}
                test={<p>sdsd</p>}
                onMoveList={handleMoveList}
                car={true}
              />
            ))}
        </div>

        {games && <Menu data={games} />}
      </div>
      {!games && (
        <Message message="Seu carrinho está vazio" fill="var(--type-6-dark)" />
      )}
    </main>
  );
};

export default Car;
