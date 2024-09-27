import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import { API_URL } from "../../Api/Api";
import useTop from "../../Hooks/useTop";
import useFetch from "../../Hooks/useFetch";
import MenuSelect from "../Components/MenuSelect/MenuSelect";
import Card from "../Components/Card/Card";
import Loading from "../Loading/Loading";
import UseMatch from "../../Hooks/useMatch";
import useLocalStorage from "../../Hooks/useLocalStore";
import Filter from "../Markup/markup-components/Filter/Filter";
import { NavLink } from "react-router-dom";
import FilterMobile from "../Markup/markup-components/FilterMobile/FilterMobile";

const options = [
  "Em promoção",
  "Adicionado recentemente",
  "Ordem Alfabética",
  "Preço: Crescente",
  "Preço: Decrescente",
];

const Browse = () => {
  const { data, request, loading } = useFetch();
  const [selected, setSelected] = useState("Em Promoção");

  const { storage, saveItemLocal } = useLocalStorage({
    key: "games",
  });
  const top = useTop();

  const [open, setOpen] = useState(false);
  const [games, setGames] = useState([]);
  const match = UseMatch("64em");

  useEffect(top, [top]);
  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();
    return () => controler.abort();
  }, [request]);

  const handleGamesInPromotion = (games) => {
    setGames(games.sort((a, b) => b.porcentage - a.porcentage));
  };

  const handleAddRecente = (games) => {
    setGames(games.reverse());
  };

  const handlerOrderAlphabetical = (games) => {
    setGames(
      games.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  };

  const handleCrescentPrice = (games) => {
    setGames(
      games.sort((a, b) => {
        const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
        const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");
        return priceA - priceB;
      })
    );
  };

  const handleDecreasingPrice = (games) => {
    setGames(
      games.sort((a, b) => {
        const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
        const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");
        return priceB - priceA;
      })
    );
  };

  useEffect(() => {
    if (data) {
      const dataCurrent = data.slice();
      switch (selected.toLowerCase()) {
        case "em promoção":
          handleGamesInPromotion(dataCurrent);
          break;

        case "adicionado recentemente":
          handleAddRecente(dataCurrent);
          break;

        case "ordem alfabética":
          handlerOrderAlphabetical(dataCurrent);
          break;

        case "preço: crescente":
          handleCrescentPrice(dataCurrent);
          break;

        case "preço: decrescente":
          handleDecreasingPrice(dataCurrent);
          break;

        default:
          setGames(dataCurrent);
      }
    }
  }, [data, selected]);

  if (loading) return <Loading />;

  return (
    <section className={`${styles.container} max appMain`}>
      <h2 className={styles.title}>Popular games</h2>
      <span className={`${styles.menu} flex`}>
        <div>
          <span className={styles.view}>Mostrar:</span>
          <MenuSelect
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        {match && !!games.length && (
          <div className={styles.view}>
            <FilterMobile
              setOpen={setOpen}
              options={options}
              open={open}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
        )}
      </span>

      <div className={`${styles.content} flex`}>
        <div className={styles.games}>
          {!!games.length &&
            games.map((game) => (
              <NavLink key={game.id} to={`/game/${game.id}`}>
                <Card
                  game={game}
                  img={game.img.src1}
                  subtitle={true}
                  onSaveLocal={saveItemLocal}
                  storage={storage}
                />
              </NavLink>
            ))}
        </div>

        {!match && !!games.length && (
          <div className={styles.filter}>
            <Filter
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Browse;
