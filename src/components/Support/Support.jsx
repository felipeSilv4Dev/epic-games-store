import React, { useEffect } from "react";
import styles from "./Support.module.css";
import { Link } from "react-router-dom";
import Categories from "./support-components/Categories/Categories";
import { API_URL } from "../../Api/Api";
import useFetch from "../../Hooks/useFetch";
import useTop from "../../Hooks/useTop";

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

  return (
    <section className={styles.container + " max appMain"}>
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
        {data &&
          data
            .slice(0, 3)
            .map(({ id, img }) => (
              <Categories key={id} img={img.src3} id={id} />
            ))}
      </div>
    </section>
  );
};

export default Suport;
