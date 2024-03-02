import React from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";
import Ofertas from "../Ofertas/Ofertas";
import Galery from "../Galery/Galery";

const Main = () => {
  return (
    <main className="appMain">
      <Home />
      <Games
        header="Jogos em destaque"
        textButton="ver mais"
        keyApi="desconto"
      />
      <Ofertas />
      <Galery />
    </main>
  );
};

export default Main;
