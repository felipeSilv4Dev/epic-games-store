import { useCallback, useEffect, useState } from "react";
import styles from "./Markup.module.css";
import CardMarkup from "../Components/CardMarkup/CardMarkup";
import useFetch from "../../Hooks/useFetch";
import email from "../../../public/img/assets/email.png";
import MenuSelect from "./markup-components/MenuSelect/MenuSelect";
import Filter from "./markup-components/Filter/Filter";
import useMatch from "../../Hooks/useMatch";
import Image from "../Components/Image/Image";

const Markup = () => {
  const { request, data } = useFetch();
  const [json, setJson] = useState([]);
  const [idOptions, setIdOptions] = useState(1);
  const [open, setOpen] = useState(false);
  const match = useMatch("64em");

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (data && json.length) {
    let game;
    if (idOptions === 2) {
      game = json.flatMap((j) => data.filter((d) => d.id === j)).reverse();
    } else {
      game = json
        .flatMap((j) => data.filter((d) => d.id === j))
        .sort((a, b) => {
          if (idOptions === 1) {
            return b.porcentage - a.porcentage;
          } else if (idOptions === 3) {
            if (a.title > b.title) {
              return 1;
            } else if (a.title < b.title) {
              return -1;
            } else {
              return 0;
            }
          } else if (idOptions === 4) {
            const priceA = +a.newPrice.replace(",", ".");
            const priceB = +b.newPrice.replace(",", ".");
            return priceA - priceB;
          } else if (idOptions === 5) {
            const priceA = +a.newPrice.replace(",", ".");
            const priceB = +b.newPrice.replace(",", ".");
            return priceB - priceA;
          }
        });
    }

    return (
      <main className={styles.container + " max appMain"}>
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

              {match && (
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
              {game.map((g) => (
                <CardMarkup key={g.id} {...g} />
              ))}
            </div>
          </div>

          {!match && (
            <div className={styles.filter}>
              <Filter />
            </div>
          )}
        </section>
      </main>
    );
  }
};

export default Markup;
