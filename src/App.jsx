import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Image from "./components/Components/Image/Image";

function App() {
  return (
    <section className="app">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Image />
      </BrowserRouter>
    </section>
  );
}

export default App;
