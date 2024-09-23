import React, { useCallback, useEffect, useState } from "react";
import useTop from "../../Hooks/useTop";
import Head from "../../Helpers/Head";
import styles from "./Car.module.css";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import Menu from "./car-components/Menu/Menu";
import HeaderMarkup from "../Components/HeaderMarkup/HeaderMarkup";
import Message from "../Components/Message/Message";
import useLocalStorage from "./../../Hooks/useLocalStore";
import Loading from "../Loading/Loading";

const Car = () => {
  const { data, request, loading } = useFetch();
  const { storage, removeItemLocal, saveItemLocal } = useLocalStorage({
    key: "car",
  });
  const { storage: storageList } = useLocalStorage({ key: "games" });
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
  if (loading) return <Loading />;

  return (
    <main className={`${styles.container} max appMain`}>
      <Head
        title="Carrinho"
        description="compre os jogos mais em conta do mercado"
      />
      <HeaderMarkup title="Meu carrinho" />
      {!!games.length && (
        <div className={`${styles.content}  flex`}>
          <div className={`${styles.card}  flex`}>
            {games.map((game) => (
              <CardMarkup
                key={game.id}
                game={game}
                onRemove={handleRemoveGameLocalStorage}
                onSaveLocal={saveItemLocal}
                car={true}
                KEY={"games"}
                storage={storageList}
              />
            ))}
          </div>

          {!!games.length && <Menu games={games} />}
        </div>
      )}

      {!games.length && (
        <Message message="Seu carrinho está vazio" fill="var(--type-6-dark)" />
      )}
    </main>
  );
};

export default Car;
