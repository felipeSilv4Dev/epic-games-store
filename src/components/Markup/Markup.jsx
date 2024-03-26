import { useCallback, useEffect, useState } from "react";
import styles from "./Markup.module.css";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import useFetch from "../../Hooks/useFetch";
import email from "../../../public/img/assets/email.png";
import MenuSelect from "./markup-components/MenuSelect/MenuSelect";
import Filter from "./markup-components/Filter/Filter";
import useMatch from "../../Hooks/useMatch";
import Image from "../Components/Image/Image";
import { NavLink } from "react-router-dom";
import Head from "../../Helpers/Head";
import useTop from "../../Hooks/useTop";

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
      await request("../../games-api.json");
    }
    fetchGame();
    getGames();
  }, [request, getGames]);

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
      <header className={styles.header + " flex"}>
        <h1>Lista de desejos</h1>
        <div className={styles.money + " flex"}>
          <p>
            Recompensas Epic
            <i
              className={
                styles.icon + " fa-solid fa-arrow-up-right-from-square"
              }
            ></i>
          </p>
          <span>R$ 00,00</span>
        </div>
      </header>
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
            {game && game.map((g) => <CardMarkup key={g.id} {...g} />)}
          </div>

          {!game && (
            <div className={styles.message}>
              <svg
                width="606"
                height="741"
                viewBox="0 0 606 741"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M571 0H35C15.67 0 0 15.67 0 35V592.069C0 606.248 8.55419 619.026 21.6631 624.428L291.097 735.476C299.679 739.013 309.314 738.996 317.884 735.429L584.45 624.47C597.499 619.039 606 606.292 606 592.158V35C606 15.67 590.33 0 571 0Z"
                  fill="#0078F2"
                />
                <path
                  d="M157 263.93L266.089 311.492L195.399 380"
                  stroke="#F5F5F5"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <path
                  d="M440 321.029L322.297 303.46L372.747 218.931"
                  stroke="#F5F5F5"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <path
                  d="M258 426V426C286.51 397.81 324.986 382 365.08 382H373"
                  stroke="#F5F5F5"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </svg>

              <h3>Você ainda não adicionou nada à sua lista de desejos.</h3>
              <NavLink className={styles.linkMessage} to="/">
                Comprar Jogos e Aplicativos
              </NavLink>
            </div>
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
