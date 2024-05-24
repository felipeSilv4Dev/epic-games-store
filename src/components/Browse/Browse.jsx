import React, { useEffect, useState } from "react";
import styles from "./Browse.module.css";
import { API_URL } from "../../Api/Api";
import useTop from "../../Hooks/useTop";
import useFetch from "../../Hooks/useFetch";
import MenuSelect from "../Components/MenuSelect/MenuSelect";
import Card from "../Components/Card/Card";

const Browse = () => {
  const [option, setOption] = useState(1);

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
  if (!data) return;
  let games;
  if (option === 1) {
    games = data.sort((a, b) => b.porcentage - a.porcentage);
  }

  if (option === 2) games = data.reverse();

  if (option === 3) {
    games = data.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (option === 4) {
    games = data.sort((a, b) => {
      const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
      const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");

      return priceA - priceB;
    });
  }
  if (option === 5) {
    games = data.sort((a, b) => {
      const priceA = +a.newPrice.replaceAll(".", "").replace(",", ".");
      const priceB = +b.newPrice.replaceAll(".", "").replace(",", ".");

      return priceB - priceA;
    });
  }

  return (
    <section className={styles.container + " max appMain"}>
      <h2>Popular games</h2>
      <span>
        <span className={styles.menu}>Mostrar:</span>
        <MenuSelect setValue={setOption} />
      </span>

      <div className={styles.games}>
        {games.map((game) => (
          <Card
            key={game.id}
            {...game}
            subtitleOpen={true}
            descriptionText={""}
            radius={0.4}
            img={game.img.src1}
            icon={true}
          />
        ))}
      </div>
    </section>
  );
};

export default Browse;
