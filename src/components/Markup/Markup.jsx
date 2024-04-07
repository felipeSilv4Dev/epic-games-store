import { useCallback, useEffect, useState } from "react";
import styles from "./Markup.module.css";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import useFetch from "../../Hooks/useFetch";
import email from "../../../public/img/assets/email.png";
import MenuSelect from "./markup-components/MenuSelect/MenuSelect";
import Filter from "./markup-components/Filter/Filter";
import useMatch from "../../Hooks/useMatch";
import Image from "../Components/Image/Image";
import Head from "../../Helpers/Head";
import useTop from "../../Hooks/useTop";
import { API_URL } from "../../Api/Api";
import HeaderMarkup from "../Components/HeaderMarkup/HeaderMarkup";
import Message from "../Components/Message/Message";

const Markup = () => {
  const { request, data } = useFetch();
  const [json, setJson] = useState([]);
  const [idOptions, setIdOptions] = useState(1);
  const [open, setOpen] = useState(false);
  const match = useMatch("64em");
  const top = useTop();

  useEffect(top, [top]);
  const getGames = useCallback(() => {
    const item = localStorage.getItem("game");

    if (!item) return;
    const jsonData = JSON.parse(item);
    setJson(jsonData);
  }, []);

  useEffect(() => {
    async function fetchGame() {
      await request(API_URL);
    }
    fetchGame();
    getGames();
  }, [request, getGames]);

  const handleClick = ({ currentTarget }) => {
    setTimeout(() => {
      const id = +currentTarget.closest("section").id;
      const game = JSON.parse(localStorage.getItem("game"));
      const filterGame = game.filter((g) => g !== id);

      localStorage.setItem("game", JSON.stringify(filterGame));
      setJson(filterGame);
    }, 300);
  };

  let game;
  if (data && json.length) {
    if (idOptions === 2)
      game = json.flatMap((j) => data.filter((d) => d.id === j)).reverse();

    if (idOptions === 1)
      game = json
        .flatMap((j) => data.filter((d) => d.id === j))
        .sort((a, b) => b.porcentage - a.porcentage);

    if (idOptions === 3) {
      game = json
        .flatMap((j) => data.filter((d) => d.id === j))
        .sort((a, b) => {
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          } else {
            return 0;
          }
        });
    }
    if (idOptions === 4) {
      game = json
        .flatMap((j) => data.filter((d) => d.id === j))
        .sort((a, b) => {
          const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
          const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");

          return priceA - priceB;
        });
    }

    if (idOptions === 5) {
      game = json
        .flatMap((j) => data.filter((d) => d.id === j))
        .sort((a, b) => {
          const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
          const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");

          return priceB - priceA;
        });
    }
  }

  return (
    <main className={styles.container + " max appMain"}>
      <Head
        title="Lista dos desejos"
        description="compre os jogos mais em conta do mercado"
      />
      <HeaderMarkup title="Lista dos desejos" />

      <div className={styles.email + " flex"}>
        <div className={styles.emailInfo + " flex"}>
          <Image src={email} alt="email" />
          <p className="flex">
            Receber notificações da minha lista de desejos por e-mail.
          </p>
        </div>
      </div>

      <section className={styles.content + " flex"}>
        <div className={styles.cardContainer}>
          <h2 className={styles.option + " flex"}>
            <div>
              <span>Classsificar por : </span>

              <MenuSelect setIdOptions={setIdOptions} />
            </div>

            {match && game && (
              <div className={styles.filter}>
                <p
                  id="filter"
                  className={styles.filterButton + " flex"}
                  onClick={({ target }) =>
                    target.id === "filter" && setOpen(true)
                  }
                >
                  filtro
                  <i className="fa-solid fa-sort-down"></i>
                </p>
                {open && <Filter setOpen={setOpen} />}
              </div>
            )}
          </h2>
          <div className={styles.card + " flex"}>
            {game &&
              game.map((g) => (
                <CardMarkup
                  key={g.id}
                  {...g}
                  onDelete={handleClick}
                  markup={true}
                />
              ))}
          </div>

          {!game && (
            <Message
              message="Você ainda não adicionou nada à sua lista de desejos."
              fill="var(--btn-3)"
            />
          )}
        </div>

        {!match && game && (
          <div>
            <Filter option={setIdOptions} />
          </div>
        )}
      </section>
    </main>
  );
};

export default Markup;
