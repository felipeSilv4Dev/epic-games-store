import React, { useEffect, useRef } from "react";
import styles from "./Games.module.css";
import Card from "../Components/Card/Card";
import useFetch from "../../Hooks/useFetch";
import useMatch from "../../Hooks/useMatch";
import Carousel from "../Components/Carousel/Carousel";
import { NavLink } from "react-router-dom";
import LoadingGame from "./Loading/LoadingGame";
import { API_URL } from "../../Api/Api";

const Games = ({ header, textButton, keyApi }) => {
  const { loading, data, request } = useFetch();
  const match = useMatch("64em");
  const mobile = useMatch("48em");
  const refGame = useRef();

  useEffect(() => {
    (async () => await request(API_URL))();
  }, [request]);

  if (loading) return <LoadingGame />;

  if (data) {
    const card = data.filter((item) => item[keyApi]).slice(0, match ? 4 : 6);
    const mob = data.filter((item) => item[keyApi]).slice(0, 6);

    return (
      <section className={styles.container + " max"}>
        <div className={styles.header + " flex"}>
          <h2>{header}</h2>
          <h3>{textButton}</h3>
        </div>

        <div className={styles.card + " flex"}>
          {!mobile &&
            card.map((item) => (
              <NavLink key={item.id} to={`game/${item.id}`}>
                <Card
                  {...item}
                  subtitleOpen={true}
                  descriptionText={""}
                  radius={0.4}
                  img={item.img.src1}
                  icon={true}
                />
              </NavLink>
            ))}

          {mobile && (
            <Carousel ref={refGame} control={false}>
              {mob.map((item) => (
                <Card
                  key={item.id}
                  {...item}
                  radius={0.4}
                  width={70}
                  subtitleOpen={true}
                  descriptionText={""}
                  img={item.img.src1}
                  icon={true}
                />
              ))}
            </Carousel>
          )}
        </div>
      </section>
    );
  }
};

export default Games;
