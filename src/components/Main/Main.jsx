import { useEffect } from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";
import Ofertas from "../Ofertas/Ofertas";
import Galery from "../Galery/Galery";
import ListGame from "../List-game/ListGame";
import { API_URL } from "../../Api/Api";
import useFetch from "../../Hooks/useFetch";
import useTop from "../../Hooks/useTop";

const Main = () => {
  const { data, request, loading, error } = useFetch();
  const top = useTop();

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);

  useEffect(top, [top]);

  return (
    <main className="appMain">
      <Home data={data} loading={loading} error={error} />
      <Games
        data={data}
        loading={loading}
        header="Jogos em destaque"
        textButton="ver todas as ofertas"
        keyApi="desconto"
      />
      {/* <Ofertas data={data} loading={loading} /> */}
      {/* <Galery data={data} loading={loading} /> */}
      <ListGame data={data} loading={loading} />

      {/* <Games
        data={data}
        loading={loading}
        header="Jogos em populares"
        keyApi="popular"
      /> */}
      <ListGame data={data} loading={loading} />
    </main>
  );
};

export default Main;
