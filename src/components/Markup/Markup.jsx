import { useEffect, useState } from "react";
import styles from "./Markup.module.css";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import useFetch from "../../Hooks/useFetch";
import MenuSelect from "../Components/MenuSelect/MenuSelect";
import Filter from "./markup-components/Filter/Filter";
import useMatch from "../../Hooks/useMatch";
import Head from "../../Helpers/Head";
import useTop from "../../Hooks/useTop";
import { API_URL } from "../../Api/Api";
import HeaderMarkup from "../Components/HeaderMarkup/HeaderMarkup";
import Message from "../Components/Message/Message";
import EmailNotification from "./markup-components/EmailNotification/EmailNotification";
import useLocalStorage from "../../Hooks/useLocalStore";
import FilterMobile from "./markup-components/FilterMobile/FilterMobile";
import Loading from "../Loading/Loading";

const options = [
  "Em promoção",
  "Adicionado recentemente",
  "Ordem Alfabética",
  "Preço: Crescente",
  "Preço: Decrescente",
];

const Markup = () => {
  const { request, data, loading } = useFetch();
  const top = useTop();
  const { storage: storageList, removeItemLocal } = useLocalStorage({
    key: "games",
  });

  const { storage: storageCar, saveItemLocal } = useLocalStorage({
    key: "car",
  });

  const [games, setGames] = useState([]);
  const [open, setOpen] = useState(false);
  const match = useMatch("64em");
  const [selected, setSelected] = useState("Em Promoção");

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
    if (data && storageList.games) {
      const filterGames = storageList.games.flatMap((item) =>
        data.filter((data) => data.id === item)
      );

      switch (selected.toLowerCase()) {
        case "em promoção":
          handleGamesInPromotion(filterGames);
          break;

        case "adicionado recentemente":
          handleAddRecente(filterGames);
          break;
        case "ordem alfabética":
          handlerOrderAlphabetical(filterGames);
          break;

        case "preço: crescente":
          handleCrescentPrice(filterGames);
          break;

        case "preço: decrescente":
          handleDecreasingPrice(filterGames);
          break;

        default:
          setGames(filterGames);
      }
    }
  }, [storageList, data, selected]);

  if (loading) return <Loading />;
  return (
    <main className={`${styles.container}  max appMain`}>
      <Head
        title="Lista dos desejos"
        description="compre os jogos mais em conta do mercado"
      />
      <HeaderMarkup title="Lista dos desejos" />
      <EmailNotification />

      <section className={`${styles.content} flex`}>
        <div className={styles.cardContainer}>
          <h2 className={`${styles.option} flex`}>
            {!!games.length && (
              <div>
                <span>Classsificar por : </span>

                <MenuSelect
                  setSelected={setSelected}
                  selected={selected}
                  options={options}
                />
              </div>
            )}

            {match && !!games.length && (
              <div className={styles.filter}>
                <FilterMobile
                  setOpen={setOpen}
                  options={options}
                  open={open}
                  setSelected={setSelected}
                  selected={selected}
                />
              </div>
            )}
          </h2>

          <div className={styles.card + " flex"}>
            {!!games.length &&
              games.map((game) => (
                <CardMarkup
                  key={game.id}
                  game={game}
                  list={true}
                  KEY={"car"}
                  storage={storageCar}
                  onSaveLocal={saveItemLocal}
                  onRemove={removeItemLocal}
                />
              ))}
          </div>

          {!games.length && (
            <Message
              message="Você ainda não adicionou nada à sua lista de desejos."
              fill="var(--btn-3)"
            />
          )}
        </div>

        {!match && !!games.length && (
          <div>
            <Filter
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default Markup;
