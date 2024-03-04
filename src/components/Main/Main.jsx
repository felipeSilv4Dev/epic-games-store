import React from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";
import Ofertas from "../Ofertas/Ofertas";
import Galery from "../Galery/Galery";
import ListGame from "../List-game/ListGame";

const Main = () => {
  return (
    <main className="appMain">
      <Home />
      <Games
        header="Jogos em destaque"
        textButton="ver todas as ofertas"
        keyApi="desconto"
      />
      <Ofertas />
      <Galery />
      <ListGame />

      <Games
        header="Jogos em populares"
        textButton="ver todos os jogos"
        keyApi="popular"
      />
      <ListGame />
    </main>
  );
};

export default Main;
