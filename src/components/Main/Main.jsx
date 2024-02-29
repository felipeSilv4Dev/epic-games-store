import React from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";
import Ofertas from "../Ofertas/Ofertas";

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
    </main>
  );
};

export default Main;
