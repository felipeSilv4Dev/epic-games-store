import React, { useEffect } from "react";
import styles from "./Novidades.module.css";
import useTop from "../../Hooks/useTop";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import Card from "./novidades-components/Card/Card";
import GameNovidades from "./novidades-components/GameNovidades/GameNovidades";
import { useNavigate } from "react-router";

const Novidades = () => {
  const { data, request } = useFetch();
  const top = useTop();
  const navigate = useNavigate();

  useEffect(() => {
    const controler = new AbortController();
    (async () => await request(API_URL, controler.signal))();

    return () => {
      controler.abort();
    };
  }, [request]);
  useEffect(top, [top]);

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  };

  if (data) {
    const card = data.slice(1, 3);

    return (
      <section className={styles.container + " max"}>
        <h2>Notícias da Epic Games</h2>
        <div className={styles.card + " flex"}>
          {card.map((c) => (
            <Card key={c.id} {...c} onNavigate={handleClick} />
          ))}
        </div>

        <div>
          <ul>
            <li>
              {data.map((c) => (
                <GameNovidades key={c.id} {...c} onNavigate={handleClick} />
              ))}
            </li>
          </ul>
        </div>
      </section>
    );
  }
};

export default Novidades;
