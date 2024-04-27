import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProfileGame from "./components/ProfileGame/Profile.Game";
import { useState } from "react";
import Markup from "./components/Markup/Markup";
import Car from "./components/Car/Car";
import Navegar from "./components/Navegar/Navegar";
import Novidades from "./components/Novidades/Novidades";
import Distribte from "./components/Distribute/Distribte";

function App() {
  const [dist, setDist] = useState({ height: "" });
  return (
    <section className="app">
      <BrowserRouter>
        <Header />
        <Nav setDist={setDist} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="game/:id" element={<ProfileGame dist={dist} />} />
          <Route path="markup" element={<Markup />} />
          <Route path="carrinho" element={<Car />} />
          <Route path="navegar" element={<Navegar />} />
          <Route path="novidades" element={<Novidades />} />
          <Route path="distribuir" element={<Distribte />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </section>
  );
}

export default App;
