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
import useLocalStorage from "./../../Hooks/useLocalStore";

const Car = () => {
  const { data, request } = useFetch();
  const { storage, removeItemLocal, saveItemLocal } = useLocalStorage({
    key: "car",
  });
  const [games, setGames] = useState([]);

  const top = useTop();
  useEffect(top, [top]);

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();
    return () => controler.abort();
  }, [request]);

  useEffect(() => {
    if (data && storage.car) {
      const filterGames = storage.car.flatMap((item) =>
        data.filter((data) => data.id === item)
      );
      setGames(filterGames);
    }
  }, [storage, data]);

  const handleRemoveGameLocalStorage = (id) => {
    removeItemLocal(id);
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
          {!!games.length &&
            games.map((game) => (
              <CardMarkup
                key={game.id}
                game={game}
                onRemove={handleRemoveGameLocalStorage}
                onSaveLocal={saveItemLocal}
                car={true}
              />
            ))}
        </div>

        {!!games.length && <Menu games={games} />}
      </div>

      {!games.length && (
        <Message message="Seu carrinho está vazio" fill="var(--type-6-dark)" />
      )}
    </main>
  );
};

export default Car;
