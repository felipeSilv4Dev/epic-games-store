import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProfileGame from "./components/ProfileGame/Profile.Game";
import { useState } from "react";

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </section>
  );
}

export default App;
