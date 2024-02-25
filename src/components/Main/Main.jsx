import React from "react";
import Home from "../Home/Home";
import Games from "../Games/Games";

const Main = () => {
  return (
    <main className="appMain">
      <Home />
      <Games
        header="Jogos em destaque"
        textButton="ver mais"
        keyApi="desconto"
      />
    </main>
  );
};

export default Main;
