import React, { useEffect } from "react";
import styles from "./Novidades.module.css";
import useTop from "../../Hooks/useTop";
import useFetch from "../../Hooks/useFetch";
import { API_URL } from "../../Api/Api";
import Card from "./novidades-components/Card/Card";

const Novidades = () => {
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

  if (data) {
    const card = data.slice(1, 3);

    return (
      <section className={styles.container + " max"}>
        <h2>Notícias da Epic Games</h2>
        <div className={styles.card + " flex"}>
          {card.map(({ id, profile, home }) => (
            <Card key={id} id={id} home={home} profile={profile} />
          ))}
        </div>
      </section>
    );
  }
};

export default Novidades;
