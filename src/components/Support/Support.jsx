import React, { useEffect } from "react";
import styles from "./Support.module.css";
import { Link } from "react-router-dom";
import Categories from "./support-components/Categories/Categories";
import { API_URL } from "../../Api/Api";
import useFetch from "../../Hooks/useFetch";
import useTop from "../../Hooks/useTop";
import Head from "../../Helpers/Head";
import Game from "./support-components/Game/Game";
import Account from "./support-components/Account/Account";
import Business from "./support-components/Business/Business";
import Loading from "../Loading/Loading";

const Suport = () => {
  const { data, request, loading } = useFetch();
  const top = useTop();

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);

  useEffect(top, [top]);

  if (loading) return <Loading />;
  if (data) {
    return (
      <section className={styles.container + " max appMain"}>
        <Head
          title={"Epic Games store | Suporte"}
          description="compre os jogos mais em conta do mercado"
        />
        <h2 className={styles.title}>
          Bem-vindo ao Suporte ao Jogador da Epic Games
        </h2>
        <Link className={styles.status}>
          STATUS DO SERVIDOR: <span>PARTIALLY DEGRADED SERVICE</span>
        </Link>

        <div className={styles.camp + " flex"}>
          <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisa na central de Ajuda..."
          />
        </div>

        <div className={styles.categories + " flex"}>
          {data.slice(3, 6).map((game, index) => (
            <Categories key={game.id} src={game.img.src3} index={index + 1} />
          ))}
        </div>

        <section className={styles.game} id="jogos">
          <h2 className={styles.subtitle}>Jogos</h2>

          <div className={styles.gameContent}>
            {data.map((game) => (
              <Game key={game.id} game={game} />
            ))}
          </div>
        </section>

        <section className={styles.account} id="contas">
          <h2 className={styles.subtitle}>Contas</h2>
          <div className={styles.accountContent + " flex"}>
            {data.slice(6, 10).map((game) => (
              <Account key={game.id} game={game} />
            ))}
          </div>
        </section>

        <section className={styles.business} id="negócios">
          <h2 className={styles.subtitle}>Negócios</h2>
          <div className={styles.accountContent + " flex"}>
            {data.slice(2, 9).map((game) => (
              <Business key={game.id} game={game} />
            ))}
          </div>
        </section>
      </section>
    );
  }
};
export default Suport;
