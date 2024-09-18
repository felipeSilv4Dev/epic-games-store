import React, { useEffect } from "react";
import styles from "./New.module.css";
import useTop from "../../Hooks/useTop";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import Card from "./new-components/Card/Card";
import GameNew from "./new-components/GameNew/GameNew";

const New = () => {
  const { data, request } = useFetch();
  const top = useTop();

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);
  useEffect(top, [top]);

  if (data) {
    const games = data.slice(7, 9);

    return (
      <section className={styles.container + " max"}>
        <h2>Notícias da Epic Games</h2>
        <div className={styles.card + " flex"}>
          {games
            .sort((a, b) => {
              const [dayA, monthA, yearA] = a.profile.date.split("/");
              const [dayB, monthB, yearB] = b.profile.date.split("/");

              return +yearA - +yearB;
            })
            .map((game) => (
              <Card key={game.id} game={game} />
            ))}
        </div>

        <ul>
          <li>
            {data
              .sort((a, b) => {
                const [dayA, monthA, yearA] = a.profile.date.split("/");
                const [dayB, monthB, yearB] = b.profile.date.split("/");

                return +monthA - +monthB;
              })
              .sort((a, b) => {
                const [dayA, monthA, yearA] = a.profile.date.split("/");
                const [dayB, monthB, yearB] = b.profile.date.split("/");

                return +yearB - +yearA;
              })
              .map((game) => (
                <GameNew key={game.id} game={game} />
              ))}
          </li>
        </ul>
      </section>
    );
  }
};

export default New;
