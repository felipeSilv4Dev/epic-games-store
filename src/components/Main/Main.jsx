import { useEffect, useState } from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";
import Ofertas from "../Ofertas/Ofertas";
import Galery from "../Galery/Galery";
import ListGame from "../List-game/ListGame";
import { API_URL } from "../../Api/Api";
import useFetch from "../../Hooks/useFetch";
import useTop from "../../Hooks/useTop";
import useLocalStorage from "../../Hooks/useLocalStore";

const Main = () => {
  const { data, request, loading, error } = useFetch();
  const { saveItemLocal, storage } = useLocalStorage({ key: "games" });

  const top = useTop();
  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);

  useEffect(top, [top]);

  const handleAddGame = (key, id, e) => {
    e.preventDefault();
    saveItemLocal(key, id);
  };

  return (
    <main className="appMain">
      <Home data={data} loading={loading} error={error} />
      <Games
        data={data}
        loading={loading}
        header="Jogos em destaque"
        textButton="ver todas as ofertas"
        keyApi="desconto"
        onSaveLocal={handleAddGame}
        storage={storage}
      />
      <Ofertas data={data} loading={loading} />
      <Galery data={data} loading={loading} />
      <ListGame data={data} loading={loading} />

      <Games
        data={data}
        loading={loading}
        header="Jogos em populares"
        keyApi="popular"
        onSaveLocal={handleAddGame}
        storage={storage}
      />

      <ListGame data={data} loading={loading} />
    </main>
  );
};

export default Main;
