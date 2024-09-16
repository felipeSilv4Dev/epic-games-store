import React, { useRef } from "react";
import styles from "./Ofertas.module.css";

import Card from "../Components/Card/Card";
import useMatch from "../../Hooks/useMatch";
import { Carousel } from "../Components/Carousel/Carousel";
import { NavLink } from "react-router-dom";
import LoadingOfertas from "./ofertas-components/LoadingOfertas/LoadingOfertas";

const Ofertas = ({ data, loading }) => {
  const match = useMatch("48em");
  const refOfertas = useRef();

  if (loading) return <LoadingOfertas />;

  if (data) {
    const ofertas = data.filter((item) => item.oferta);

    return (
      <section className={styles.container + " flex max"}>
        {!match &&
          ofertas.map((game) => {
            return (
              <NavLink key={game.id} to={`game/${game.id}`}>
                <Card
                  key={game.id}
                  price={true}
                  icon={false}
                  game={game}
                  src={"src2"}
                />
              </NavLink>
            );
          })}

        {match && (
          <Carousel ref={refOfertas} control={true}>
            {ofertas.map((game) => (
              <Card
                key={game.id}
                price={true}
                icon={false}
                game={game}
                src={"src2"}
              />
            ))}
          </Carousel>
        )}
      </section>
    );
  }
};

export default Ofertas;
